import { mergeProps, splitProps } from "solid-js";

import { Typography, TypographyProps } from "@/components";

import { ComponentExtended } from "@/models";

interface CaptionProps extends Omit<TypographyProps, "plain"> {
  level?: "1" | "2";
}

const defaultProps: CaptionProps = {
  level: "1",
};

export const Caption: ComponentExtended<CaptionProps> = (props) => {
  const [local, attributes] = splitProps(mergeProps(defaultProps, props), [
    "level",
  ]);

  return (
    <Typography
      class={`caption--${local.level}`}
      component={"span"}
      {...attributes}
    />
  );
};
