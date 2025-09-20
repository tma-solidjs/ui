import styles from "./Text.module.sass";

import { type Component, splitProps } from "solid-js";

import { Typography, type TypographyProps } from "@/index";

export interface TextProps extends Omit<TypographyProps, "plain"> {}

const Text: Component<TextProps> = (props) => {
  const [local, attrs] = splitProps(props, ["class", "classList"]);

  return (
    <Typography
      {...attrs}
      class={styles.root}
      classList={{
        [`${local.class}`]: !!local.class,
        ...local.classList,
      }}
    />
  );
};

export default Text;
