import styles from "./Tappable.module.sass";

import {
  type Component,
  type ValidComponent,
  type JSX,
  createMemo,
  mergeProps,
  splitProps,
} from "solid-js";
import { useRipple, usePlatform } from "@/hooks";

import { Dynamic } from "solid-js/web";
import { Ripple } from "@/components";

export interface TappableProps extends JSX.HTMLAttributes<HTMLElement> {
  component?: ValidComponent;
  interactiveAnimation?: "opacity" | "background";
  disabled?: boolean;
}

const defaultProps: TappableProps = {
  component: "div",
  interactiveAnimation: "background",
};

const Tappable: Component<TappableProps> = (props) => {
  const platform = usePlatform();
  const { clicks, onPointerCancel, onPointerDown } = useRipple();

  const [local, attributes] = splitProps(mergeProps(defaultProps, props), [
    "class",
    "interactiveAnimation",
    "component",
    "aria-readonly",
    "classList",
    "children",
  ]);

  const hasRippleEffect = createMemo(
    () =>
      platform() === "android" &&
      local.interactiveAnimation === "background" &&
      !local["aria-readonly"],
  );

  const handleOnClick = (e: MouseEvent) => {
    if (attributes.disabled || typeof attributes.onClick !== "function") {
      return;
    }

    attributes.onClick(e as any);
  };

  return (
    <Dynamic
      class={`${styles.root} ${styles[platform()]} ${local.class || ""}`}
      classList={{
        [styles.opacity]: local.interactiveAnimation === "opacity",
        ...local.classList,
      }}
      component={local.component}
      onPointerCancel={onPointerCancel}
      onPointerDown={onPointerDown}
      readOnly={local["aria-readonly"]}
      onClick={handleOnClick}
      {...attributes}
    >
      {hasRippleEffect() && <Ripple clicks={clicks()} />}
      {local.children}
    </Dynamic>
  );
};

export default Tappable;
