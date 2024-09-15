import "./Headline.sass";

import { Typography, TypographyProps } from "@/components";

import { ComponentExtended } from "@/models";

interface HeadlineProps extends TypographyProps {}

export const Headline: ComponentExtended<HeadlineProps> = (props) => {
  return <Typography class="headline" component={"h5"} {...props} />;
};
