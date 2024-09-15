import "./Button.sass";

import { usePlatform } from "@/hooks";

import { ButtonTypography, Loader, Tappable } from "@/components";

import { ComponentExtended } from "@/models";
import { JSX, mergeProps, splitProps, ValidComponent } from "solid-js";

export interface ButtonProps {
  before?: JSX.Element;
  after?: JSX.Element;
  size?: "s" | "m" | "l";
  stretched?: boolean;
  mode?: "filled" | "bezeled" | "plain" | "gray" | "outline" | "white";
  loading?: boolean;
  disabled?: boolean;
  component?: ValidComponent;
}

const defaultProps: ButtonProps = {
  size: "m",
  mode: "filled",
  stretched: false,
  loading: false,
  component: "button",
};

export const Button: ComponentExtended<ButtonProps, HTMLButtonElement> = (
  props
) => {
  const platform = usePlatform();

  const [local, attributes] = splitProps(mergeProps(defaultProps, props), [
    "component",
    "before",
    "after",
    "size",
    "stretched",
    "mode",
    "loading",
    "disabled",
    "classList",
    "children",
  ]);

  const handleOnClick = (e?: MouseEvent) => {
    if (!e || local.loading || typeof attributes.onClick !== "function") {
      return;
    }

    attributes.onClick(e as any);
  };

  return (
    <Tappable
      component={local.component}
      classList={{
        button: true,
        "button--ios": platform().isIOS,
        "button--stretched": local.stretched,
        "button--loading": local.loading,
        [`button--${local.size}`]: true,
        [`button_${local.mode}`]: true,
        ...local.classList,
      }}
      disabled={local.disabled}
      interactiveAnimation="background"
      onClick={handleOnClick}
    >
      {local.loading && (
        <Loader classList={{ button__spinner: true }} size="s" />
      )}
      {local.before && <div class="button_before">{local.before}</div>}
      <ButtonTypography
        classList={{ button__content: true }}
        size={local.size || "m"}
      >
        {local.children}
      </ButtonTypography>
      {local.after && <div class="button_after">{local.after}</div>}
    </Tappable>
  );
};
