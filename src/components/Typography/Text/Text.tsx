import styles from "./Text.module.sass";

import { type Component, splitProps } from "solid-js";

import { Typography, type TypographyProps } from "@/components";

export interface TextProps extends Omit<TypographyProps, "plain"> {}

const Text: Component<TextProps> = (props) => {
  const [local, attributes] = splitProps(props, ["class", "classList"]);

  return (
    <Typography
      class={`${styles.root} ${local.class || ""}`}
      classList={{
        ...local.classList,
      }}
      {...attributes}
    />
  );
};

export default Text;
