import styles from "./Divider.module.sass";

import { type Component, type JSX, splitProps } from "solid-js";

interface DividerProps extends JSX.HTMLAttributes<HTMLHRElement> {}

const Divider: Component<DividerProps> = (props) => {
  const [local, attributes] = splitProps(props, ["class"]);

  return <hr class={`${styles.root} ${local.class || ""}`} {...attributes} />;
};

export default Divider;
