import "./Text.sass";

import { Typography, TypographyProps } from "@/components";

import { ComponentExtended } from "@/models";

interface TextProps extends Omit<TypographyProps, "plain"> {}

export const Text: ComponentExtended<TextProps> = (props) => {
  return <Typography class="text" component={"p"} {...props} />;
};
