import "./Tappable.sass";

import {
  createMemo,
  JSX,
  mergeProps,
  splitProps,
  ValidComponent,
} from "solid-js";
import { useRipple, usePlatform } from "@/hooks";

import { Dynamic } from "solid-js/web";
import { Ripple } from "@/components";

import { ComponentExtended } from "@/models";

export interface TappableProps {
  component?: ValidComponent;
  interactiveAnimation?: "opacity" | "background";
  disabled?: boolean;
}

export const Tappable: ComponentExtended<TappableProps> = (props) => {
  const platform = usePlatform();
  const { clicks, onPointerCancel, onPointerDown } = useRipple();

  const [local, attributes] = splitProps(
    mergeProps({ component: "div", interactiveAnimation: "background" }, props),
    [
      "class",
      "interactiveAnimation",
      "component",
      "aria-readonly",
      "classList",
      "children",
    ]
  );

  const hasRippleEffect = createMemo(
    () =>
      platform().isAndroid &&
      local.interactiveAnimation === "background" &&
      !local["aria-readonly"]
  );

  const handleOnClick = (e: MouseEvent) => {
    if (attributes.disabled || typeof attributes.onClick !== "function") {
      return;
    }

    attributes.onClick(e as any);
  };

  return (
    <Dynamic
      {...attributes}
      component={local.component}
      class="tappable"
      classList={{
        "tappable--ios": platform().isIOS,
        tappable_opacity: local.interactiveAnimation === "opacity",
        ...local.classList,
      }}
      onPointerCancel={onPointerCancel}
      onPointerDown={onPointerDown}
      readOnly={local["aria-readonly"]}
      onClick={handleOnClick}
    >
      {hasRippleEffect() && <Ripple clicks={clicks()} />}
      {local.children}
    </Dynamic>
  );
};
