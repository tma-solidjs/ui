import styles from "./Switch.module.sass";

import { type Component, type JSX, splitProps } from "solid-js";

import { usePlatform } from "@/hooks";

import { VisuallyHidden } from "@/components";

export interface SwitchProps extends JSX.HTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
}

const Switch: Component<SwitchProps> = (props) => {
  const platform = usePlatform();
  const [local, attributes] = splitProps(props, [
    "class",
    "classList",
    "disabled",
  ]);

  return (
    <label
      class={`${styles.root} ${styles[`root--${platform()}`]}  ${local.class || ""}`}
      classList={{
        [styles.disabled]: local.disabled,
        ...local.classList,
      }}
    >
      <VisuallyHidden
        {...attributes}
        component="input"
        type="checkbox"
        class={styles.input}
      />
      <div aria-hidden class={styles.control} />
      {props.children}
    </label>
  );
};

export default Switch;
