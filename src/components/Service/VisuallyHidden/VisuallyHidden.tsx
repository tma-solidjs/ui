import styles from "./VisuallyHidden.module.sass";

import { type Component, type JSX, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

interface BaseProps {
  disabled?: boolean;
}

interface VisuallyHiddenPropsInput
  extends JSX.HTMLAttributes<HTMLInputElement> {
  component: "input";
  type?: string;
}

interface VisuallyHiddenPropsSpan extends JSX.HTMLAttributes<HTMLElement> {
  component: "span";
}

export type VisuallyHiddenProps = (
  | VisuallyHiddenPropsInput
  | VisuallyHiddenPropsSpan
) &
  BaseProps;

const VisuallyHidden: Component<VisuallyHiddenProps> = (props): JSX.Element => {
  const [local, attrs] = splitProps(props, [
    "class",
    "classList",
    "component",
    "disabled",
  ]);

  return (
    <Dynamic
      class={styles.root}
      classList={{
        [`${local.class}`]: !!local.class,
        ...local.classList,
      }}
      disabled={local.disabled}
      component={local.component || "span"}
      {...attrs}
    />
  );
};

export default VisuallyHidden;
