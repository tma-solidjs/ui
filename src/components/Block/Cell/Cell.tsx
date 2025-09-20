import styles from "./Cell.module.sass";

import { type Component, type JSX, Show, splitProps } from "solid-js";
import { usePlatform } from "@/hooks";

import {
  Text,
  Subheadline,
  Tappable,
  Caption,
  type TypographyProps,
} from "@/index";

export interface CellProps
  extends Omit<JSX.HTMLAttributes<HTMLElement>, "title"> {
  before?: JSX.Element;
  after?: JSX.Element;
  subhead?: string;
  subtitle?: string;
  description?: string;
  hint?: string;
  children: string;
  hovered?: boolean;
  multiline?: boolean;
  titleBadge?: JSX.Element;
}

const Cell: Component<CellProps> = (props) => {
  const platform = usePlatform();
  const [local, attributes] = splitProps(props, [
    "class",
    "classList",
    "after",
    "before",
    "subhead",
    "children",
    "subtitle",
    "description",
    "titleBadge",
    "hint",
    "hovered",
    "multiline",
  ]);

  const Title = (props: TypographyProps) =>
    platform() === "ios" ? (
      <Text {...props} />
    ) : (
      <Subheadline {...props} level={"1"} />
    );

  const Description = (props: TypographyProps) =>
    platform() === "ios" ? (
      <Caption {...props} />
    ) : (
      <Subheadline {...props} level={"2"} />
    );

  return (
    <Tappable
      {...attributes}
      class={styles.root}
      classList={{
        [styles["root--hovered"]]: local.hovered,
        [styles["root--multiline"]]: local.multiline,
        [`${local.class}`]: !!local.class,
        ...local.classList,
      }}
      component={"div"}
    >
      <Show when={local.before}>
        <div class={styles.before}>{local.before}</div>
      </Show>

      <div class={styles.middle}>
        <Show when={local.subhead}>
          {(v) => (
            <Subheadline class={styles.subhead} level="2" weight="3">
              {v()}
            </Subheadline>
          )}
        </Show>

        <Show when={local.children || local.titleBadge || local.hint}>
          <Title class={styles.head}>
            <Show when={local.children}>
              {(v) => <span class={styles.title}>{v()}</span>}
            </Show>
            <Show when={local.hint}>
              {(v) => <span class={styles.hint}>{v()}</span>}
            </Show>
            <Show when={local.titleBadge}>{(v) => v()}</Show>
          </Title>
        </Show>

        <Show when={local.subtitle}>
          {(v) => (
            <Subheadline class={styles.subtitle} level="2" weight="3">
              {v()}
            </Subheadline>
          )}
        </Show>

        <Show when={local.description}>
          {(v) => <Description class={styles.description}>{v()}</Description>}
        </Show>
      </div>

      <Show when={local.after}>
        <div class={styles.after}>{local.after}</div>
      </Show>
    </Tappable>
  );
};

export default Cell;
