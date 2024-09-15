import "./VisuallyHidden.sass";

import { Component, JSX } from "solid-js";
import { Dynamic } from "solid-js/web";

interface DefaultProps {
  disabled?: boolean;
}

export interface VisuallyHiddenPropsHTMLInput
  extends JSX.HTMLAttributes<HTMLInputElement>,
    DefaultProps {
  component: "input";
  type?: string;
}

export interface VisuallyHiddenPropsHTMLSpan
  extends JSX.HTMLAttributes<HTMLElement>,
    DefaultProps {
  component: "span";
}

export const VisuallyHidden: Component<
  VisuallyHiddenPropsHTMLInput | VisuallyHiddenPropsHTMLSpan
> = (props): JSX.Element => (
  <Dynamic
    {...props}
    component={props.component || "span"}
    class="visually-hidden"
    classList={{
      [`${props.class}`]: !!props.class,
      ...props.classList,
    }}
  />
);
