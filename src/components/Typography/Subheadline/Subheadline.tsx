import "./Subheadline.sass";

import { mergeProps, splitProps } from "solid-js";

import { Typography, TypographyProps } from "@/components";

import { ComponentExtended } from "@/models";

interface SubheadlineProps extends TypographyProps {
  level?: "1" | "2";
}

const defaultProps: SubheadlineProps = {
  level: "1",
};

export const Subheadline: ComponentExtended<SubheadlineProps> = (props) => {
  const [local, attributes] = splitProps(mergeProps(defaultProps, props), [
    "level",
  ]);

  return (
    <Typography
      class={`subheadline--${local.level}`}
      component={"h6"}
      {...attributes}
    />
  );
};
