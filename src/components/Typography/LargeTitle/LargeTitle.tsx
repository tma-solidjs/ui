import styles from "./LargeTitle.module.sass";

import { type Component, splitProps } from "solid-js";

import { Typography, type TypographyProps } from "@/components";

export interface LargeTitleProps extends TypographyProps {}

const LargeTitle: Component<LargeTitleProps> = (props) => {
  const [local, attributes] = splitProps(props, [
    "class",
    "classList",
    "component",
  ]);

  return (
    <Typography
      {...attributes}
      class={styles.root}
      classList={{
        [`${local.class}`]: !!local.class,
        ...local.classList,
      }}
      component={local.component || "h1"}
    />
  );
};

export default LargeTitle;
