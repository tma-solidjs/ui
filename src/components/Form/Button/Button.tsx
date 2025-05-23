import styles from "./Button.module.sass";

import {
  type Component,
  type JSX,
  type ValidComponent,
  mergeProps,
  splitProps,
} from "solid-js";
import { usePlatform } from "@/hooks";

import { Tappable, Loader, ButtonTypography } from "@/components";

export interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
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

const Button: Component<ButtonProps> = (props) => {
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
    "class",
    "classList",
    "children",
  ]);

  const handleOnClick = (e?: MouseEvent) => {
    if (!e || local.loading || typeof attributes.onClick !== "function") return;
    attributes.onClick(e as any);
  };

  return (
    <Tappable
      class={`${styles.root} ${styles[`root--${local.size}`]} ${styles[`root_${local.mode}`]} ${local.class || ""}`}
      classList={{
        [styles[`root--ios`]]: platform() === "ios",
        [styles.stretched]: local.stretched,
        [styles.loading]: local.loading,
        ...local.classList,
      }}
      component={local.component}
      disabled={local.disabled}
      interactiveAnimation="background"
      onClick={handleOnClick}
    >
      {local.loading && (
        <Loader classList={{ [styles.button__spinner]: true }} size="s" />
      )}

      {local.before && <div class={styles.button_before}>{local.before}</div>}

      <ButtonTypography
        classList={{ [styles.button__content]: true }}
        size={local.size || "m"}
      >
        {local.children}
      </ButtonTypography>

      {local.after && <div class={styles.button_after}>{local.after}</div>}
    </Tappable>
  );
};

export default Button;
