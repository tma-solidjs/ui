import styles from "./Panel.module.sass";

import { type Component, type JSX, splitProps } from "solid-js";

import { usePlatform } from "@/hooks";

export interface PanelProps extends JSX.HTMLAttributes<HTMLDivElement> {
  wrapperClass?: string;
  wrapperClassList?: Record<string, boolean | undefined>;
}

const Panel: Component<PanelProps> = (props) => {
  const platform = usePlatform();
  const [local, attributes] = splitProps(props, [
    "class",
    "classList",
    "wrapperClassList",
    "wrapperClass",
    "children",
  ]);

  return (
    <div
      {...attributes}
      class={styles.root}
      classList={{
        [styles[`root--ios`]]: platform() === "ios",
        [`${local.class}`]: !!local.class,
        ...local.classList,
      }}
    >
      <div
        class={styles.wrapper}
        classList={{
          [`${local.wrapperClass}`]: !!local.wrapperClass,
          ...local.wrapperClassList,
        }}
      >
        {local.children}
      </div>
    </div>
  );
};

export default Panel;
