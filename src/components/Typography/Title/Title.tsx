import "./Title.sass";

import { mergeProps, splitProps, ValidComponent } from "solid-js";

import { Typography, TypographyProps } from "@/components";

import { ComponentExtended } from "@/models";

type TitleLevel = "1" | "2" | "3";

interface TitleProps extends TypographyProps {
  level?: TitleLevel;
}

const titleLevelTags: Record<TitleLevel, ValidComponent> = {
  "1": "h2",
  "2": "h3",
  "3": "h4",
};

const defaultProps: TitleProps = { level: "2" };

export const Title: ComponentExtended<TitleProps> = (props) => {
  const [local, attributes] = splitProps(mergeProps(defaultProps, props), [
    "level",
  ]);

  return (
    <Typography
      class="title"
      classList={{
        [`title--${local.level}`]: !!local.level,
      }}
      component={titleLevelTags[local?.level as TitleLevel] || "h2"}
      {...attributes}
    />
  );
};
