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
    "wrapperClassList",
    "wrapperClass",
    "children",
  ]);

  return (
    <div
      {...attributes}
      class={`${styles.root} ${styles[platform()]} ${local.class || ""}`}
    >
      <div
        class={`${styles.wrapper} ${local.wrapperClass || ""}`}
        classList={{
          ...local.wrapperClassList,
        }}
      >
        {local.children}
      </div>
    </div>
  );
};

export default Panel;
