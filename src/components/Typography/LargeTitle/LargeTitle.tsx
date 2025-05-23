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
      class={`${styles.root} ${local.class || ""}`}
      classList={{
        ...local.classList,
      }}
      component={local.component || "h1"}
      {...attributes}
    />
  );
};

export default LargeTitle;
