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
      {...attributes}
      classList={{
        [styles[`root--${local.level}`]]: true,
        [`${local.class}`]: !!local.class,
        ...local.classList,
      }}
      component={local.component || "h6"}
    />
  );
};

export default Subheadline;
