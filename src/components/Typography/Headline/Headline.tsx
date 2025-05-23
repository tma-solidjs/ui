import styles from "./Headline.module.sass";

import { type Component, splitProps } from "solid-js";

import { Typography, type TypographyProps } from "@/components";

export interface HeadlineProps extends TypographyProps {}

const Headline: Component<HeadlineProps> = (props) => {
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
      component={local.component || "h5"}
      {...attributes}
    />
  );
};

export default Headline;
