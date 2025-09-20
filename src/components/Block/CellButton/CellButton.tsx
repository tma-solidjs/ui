import styles from "./CellButton.module.sass";

import {
  type Component,
  type JSX,
  mergeProps,
  Show,
  splitProps,
} from "solid-js";
import { usePlatform } from "@/hooks";

import { Text, Subheadline, Tappable } from "@/index";

export interface CellButtonProps
  extends Omit<JSX.HTMLAttributes<HTMLElement>, "title"> {
  mode?: "default" | "destructive";
  before?: JSX.Element;
  after?: JSX.Element;
  children: string;
  titleBadge?: JSX.Element;
}

const defaultProps: Partial<CellButtonProps> = {
  mode: "default",
};

const CellButton: Component<CellButtonProps> = (props) => {
  const platform = usePlatform();
  const [local, attributes] = splitProps(mergeProps(defaultProps, props), [
    "class",
    "classList",
    "after",
    "before",
    "children",
    "titleBadge",
    "mode",
  ]);

  const Typography = platform() === "ios" ? Text : Subheadline;

  return (
    <Tappable
      {...attributes}
      class={styles.root}
      classList={{
        [styles[`root--${local.mode}`]]: true,
        [`${local.class}`]: !!local.class,
        ...local.classList,
      }}
      component={"button"}
    >
      <Show when={local.before}>{(v) => v()}</Show>
      <Show when={local.children}>{(v) => <Typography>{v()}</Typography>}</Show>
      <Show when={local.after}>{(v) => v()}</Show>
    </Tappable>
  );
};

export default CellButton;
