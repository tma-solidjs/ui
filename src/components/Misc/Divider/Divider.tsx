import styles from "./Divider.module.sass";

import { type Component, type JSX, splitProps } from "solid-js";

interface DividerProps extends JSX.HTMLAttributes<HTMLHRElement> {}

const Divider: Component<DividerProps> = (props) => {
  const [local, attributes] = splitProps(props, ["class", "classList"]);

  return (
    <hr
      {...attributes}
      class={styles.root}
      classList={{
        [`${local.class}`]: !!local.class,
        ...local.classList,
      }}
    />
  );
};

export default Divider;
