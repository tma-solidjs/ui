import styles from "./Title.module.sass";

import {
  type Component,
  type ValidComponent,
  mergeProps,
  splitProps,
} from "solid-js";

import { Typography, type TypographyProps } from "@/components";

type TitleLevel = "1" | "2" | "3";

export interface TitleProps extends TypographyProps {
  level?: TitleLevel;
}

const titleLevelTags: Record<TitleLevel, ValidComponent> = {
  "1": "h2",
  "2": "h3",
  "3": "h4",
};

const defaultProps: TitleProps = { level: "2" };

const Title: Component<TitleProps> = (props) => {
  const [local, attributes] = splitProps(mergeProps(defaultProps, props), [
    "level",
    "class",
    "classList",
    "component",
  ]);

  return (
    <Typography
      class={styles[`root-${local.level}`]}
      classList={{
        [`${local.class}`]: !!local.class,
        ...local.classList,
      }}
      component={local.component || titleLevelTags[local.level || "2"]}
      {...attributes}
    />
  );
};

export default Title;
