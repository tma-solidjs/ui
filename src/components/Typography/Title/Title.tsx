import styles from "./Title.module.sass";

import {
  type Component,
  type ValidComponent,
  mergeProps,
  splitProps,
} from "solid-js";

import { Typography, type TypographyProps } from "@/index";

type TitleLevel = "1" | "2" | "3";

export interface TitleProps extends TypographyProps {
  level?: TitleLevel;
}

const titleLevelTags: Record<TitleLevel, ValidComponent> = {
  "1": "h2",
  "2": "h3",
  "3": "h4",
};

const defaultProps: Partial<TitleProps> = { level: "2" };

const Title: Component<TitleProps> = (props) => {
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
      component={local.component || titleLevelTags[local.level || "2"]}
    />
  );
};

export default Title;
