import { mergeProps, splitProps } from "solid-js";

import { Text, Subheadline, TypographyProps } from "@/components";

import { ComponentExtended } from "@/models";

export interface ButtonTypographyProps extends Omit<TypographyProps, "size"> {
  size: "s" | "m" | "l";
}

const defaultProps: ButtonTypographyProps = {
  size: "m",
};

export const ButtonTypography: ComponentExtended<ButtonTypographyProps> = (
  props
) => {
  const [local, attributes] = splitProps(mergeProps(defaultProps, props), [
    "size",
  ]);

  if (local.size === "l") {
    return <Text weight="2" {...attributes} />;
  }

  return <Subheadline level="2" weight="2" {...attributes} />;
};
