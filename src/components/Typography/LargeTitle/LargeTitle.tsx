import "./LargeTitle.sass";

import { Typography, TypographyProps } from "@/components";

import { ComponentExtended } from "@/models";

interface LargeTitleProps extends TypographyProps {}

export const LargeTitle: ComponentExtended<LargeTitleProps> = (props) => {
  return <Typography class="large-title" component={"h1"} {...props} />;
};
