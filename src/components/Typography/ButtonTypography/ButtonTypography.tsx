import { type Component, mergeProps, splitProps } from "solid-js";

import { Subheadline, Text, type TypographyProps } from "@/index";

export interface ButtonTypographyProps extends Omit<TypographyProps, "size"> {
  size: "s" | "m" | "l";
}

const defaultProps: Partial<ButtonTypographyProps> = {
  size: "m",
};

const ButtonTypography: Component<ButtonTypographyProps> = (props) => {
  const [local, attrs] = splitProps(mergeProps(defaultProps, props), ["size"]);

  if (local.size === "l") {
    return <Text weight="2" {...attrs} />;
  }

  return <Subheadline level="2" weight="2" {...attrs} />;
};

export default ButtonTypography;
