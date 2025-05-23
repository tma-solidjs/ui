import styles from "./Panel.module.sass";

import type { Component, JSX } from "solid-js";

import { usePlatform } from "@/hooks";

export interface PanelProps extends JSX.HTMLAttributes<HTMLDivElement> {
  wrapperClass?: string;
  wrapperClassList?: Record<string, boolean | undefined>;
}

const Panel: Component<PanelProps> = (props) => {
  const platform = usePlatform();

  return (
    <div
      class={`${styles.root} ${styles[platform()]} ${props.class || ""}`}
      classList={{
        ...props.classList,
      }}
    >
      <div
        class={`${styles.wrapper} ${props.wrapperClass || ""}`}
        classList={{
          ...props.wrapperClassList,
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Panel;
