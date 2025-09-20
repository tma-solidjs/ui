import styles from "./Placeholder.module.sass";

import { type Component, type JSX, Show, splitProps } from "solid-js";

import { Text, Title } from "@/index";

export interface PlaceholderProps
  extends Omit<JSX.HTMLAttributes<HTMLElement>, "title"> {
  children?: JSX.Element;
  header?: JSX.Element;
  description?: JSX.Element;
  action?: JSX.Element;
}

const Placeholder: Component<PlaceholderProps> = (props) => {
  const [local, attrs] = splitProps(props, [
    "class",
    "classList",
    "children",
    "header",
    "description",
    "action",
  ]);

  return (
    <section
      {...attrs}
      class={styles.root}
      classList={{
        [`${local.class}`]: !!local.class,
        ...local.classList,
      }}
    >
      <Show when={local.children}>{(v) => v()}</Show>

      <Show when={local.header || local.description}>
        <dl class={styles.fields}>
          <Show when={local.header}>
            <Title component={"dt"} level={"3"} weight={"2"}>
              {local.header}
            </Title>
          </Show>

          <Show when={local.description}>
            <Text class={styles.description} component={"dd"}>
              {local.description}
            </Text>
          </Show>
        </dl>
      </Show>

      <Show when={local.action}>{(v) => v()}</Show>
    </section>
  );
};

export default Placeholder;
