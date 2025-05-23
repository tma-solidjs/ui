import styles from "./Ripple.module.sass";

import { type Component, For, splitProps } from "solid-js";

import { type Wave } from "@/models";

export interface RippleProps {
  clicks: Wave[];
}

const Ripple: Component<RippleProps> = (props) => {
  const [local] = splitProps(props, ["clicks"]);

  return (
    <span aria-hidden class={styles.root}>
      <For each={local.clicks}>
        {(wave) => (
          <span
            class={styles.wave}
            style={{
              top: `${wave.y}px`,
              left: `${wave.x}px`,
            }}
          />
        )}
      </For>
    </span>
  );
};

export default Ripple;
