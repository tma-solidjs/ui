import styles from "./Switch.module.sass";

import { type Component, type JSX, splitProps } from "solid-js";

import { usePlatform } from "@/hooks";

import { VisuallyHidden } from "@/index";

export interface SwitchProps extends JSX.HTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
}

const Switch: Component<SwitchProps> = (props) => {
  const platform = usePlatform();
  const [local, attrs] = splitProps(props, ["class", "classList", "disabled"]);

  return (
    <label
      class={styles.root}
      classList={{
        [styles[`root--${platform()}`]]: !!platform(),
        [styles.disabled]: local.disabled,
        [`${local.class}`]: !!local.class,
        ...local.classList,
      }}
    >
      <VisuallyHidden
        {...attrs}
        component="input"
        type="checkbox"
        disabled={local.disabled}
        class={styles.input}
      />
      <div aria-hidden class={styles.control} />
      {props.children}
    </label>
  );
};

export default Switch;
