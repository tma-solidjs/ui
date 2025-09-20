import styles from "./Div.module.sass";

import {
  type ValidComponent,
  type JSX,
  mergeProps,
  splitProps,
  Component,
} from "solid-js";

import { Dynamic } from "solid-js/web";

interface DivProps extends JSX.HTMLAttributes<HTMLElement> {
  // recommended: div, section, footer, article, main, other similar ones
  component?: ValidComponent;
}

const defaultProps: Partial<DivProps> = {
  component: "div",
};

const Div: Component<DivProps> = (props) => {
  const [local, attrs] = splitProps(mergeProps(defaultProps, props), [
    "component",
    "classList",
    "class",
  ]);

  return (
    <Dynamic
      {...attrs}
      component={local.component}
      class={styles.Div}
      classList={{
        [`${local.class}`]: !!local.class,
        ...local.classList,
      }}
    />
  );
};

export default Div;
