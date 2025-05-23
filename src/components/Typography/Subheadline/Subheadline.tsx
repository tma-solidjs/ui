import styles from "./Subheadline.module.sass";

import { type Component, mergeProps, splitProps } from "solid-js";

import { Typography, type TypographyProps } from "@/components";

export interface SubheadlineProps extends TypographyProps {
  level?: "1" | "2";
}

const defaultProps: SubheadlineProps = {
  level: "1",
};

const Subheadline: Component<SubheadlineProps> = (props) => {
  const [local, attributes] = splitProps(mergeProps(defaultProps, props), [
    "level",
    "component",
    "class",
    "classList",
  ]);

  return (
    <Typography
      class={styles[`root--${local.level}`]}
      classList={{
        [`${props.class}`]: !!props.class,
        ...local.classList,
      }}
      component={local.component || "h6"}
      {...attributes}
    />
  );
};

export default Subheadline;
