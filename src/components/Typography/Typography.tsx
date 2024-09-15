import "./Typography.sass";

import { mergeProps, splitProps, ValidComponent } from "solid-js";
import { Dynamic } from "solid-js/web";

import { ComponentExtended } from "@/models";

export interface TypographyProps {
  component?: ValidComponent;
  caps?: boolean;
  plain?: boolean;
  weight?: "1" | "2" | "3";
}

const defaultProps: TypographyProps = {
  caps: false,
  plain: true,
  weight: "3",
  component: "span",
};

export const Typography: ComponentExtended<TypographyProps> = (props) => {
  const [local, attributes] = splitProps(mergeProps(defaultProps, props), [
    "class",
    "classList",
    "component",
    "plain",
    "weight",
    "caps",
  ]);

  return (
    <Dynamic
      {...attributes}
      class="typography"
      classList={{
        [`typography_weight-${local.weight}`]: true,
        [`typography_plain`]: local.plain,
        [`typography_caps`]: local.caps,
        [`${local.class}`]: !!local.class,
        ...local.classList,
      }}
      component={local.component}
    />
  );
};
