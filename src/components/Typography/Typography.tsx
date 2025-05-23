import styles from "./Typography.module.sass";

import {
  type ValidComponent,
  type Component,
  type JSX,
  mergeProps,
  splitProps,
} from "solid-js";
import { Dynamic } from "solid-js/web";

export interface TypographyProps extends JSX.HTMLAttributes<HTMLElement> {
  component?: ValidComponent;
  caps?: boolean;
  plain?: boolean;
  weight?: "1" | "2" | "3";
}

const defaultProps: TypographyProps = {
  caps: false,
  plain: true,
  weight: "3",
  component: "span",
};

const Typography: Component<TypographyProps> = (props) => {
  const [local, attributes] = splitProps(mergeProps(defaultProps, props), [
    "class",
    "classList",
    "component",
    "plain",
    "weight",
    "caps",
  ]);

  return (
    <Dynamic
      {...attributes}
      class={`${styles[`root-${local.weight}`]} ${local.class || ""}`}
      classList={{
        [styles.plain]: local.plain,
        [styles.caps]: local.caps,
        ...local.classList,
      }}
      component={local.component}
    />
  );
};

export default Typography;
