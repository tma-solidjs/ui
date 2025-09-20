import styles from "./Caption.module.sass";

import { type Component, mergeProps, splitProps } from "solid-js";

import { Typography, type TypographyProps } from "@/index";

export interface CaptionProps extends Omit<TypographyProps, "plain"> {
  level?: "1" | "2";
}

const defaultProps: Partial<CaptionProps> = {
  level: "1",
};

const Caption: Component<CaptionProps> = (props) => {
  const [local, attrs] = splitProps(mergeProps(defaultProps, props), [
    "level",
    "class",
    "classList",
    "component",
  ]);

  return (
    <Typography
      {...attrs}
      classList={{
        [styles[`root-${local.level}`]]: true,
        [`${local.class}`]: !!local.class,
        ...local.classList,
      }}
      component={local.component || "span"}
    />
  );
};

export default Caption;
