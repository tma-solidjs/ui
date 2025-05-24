import styles from "./Loader.module.sass";

import { type Component, type JSX, splitProps } from "solid-js";
import { usePlatform } from "@/hooks";

import { IconIOSLoader, IconAndroidLoader } from "@/assets/icons";

interface LoaderProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size: "xs" | "s" | "m" | "l";
}

const Loader: Component<LoaderProps> = (props) => {
  const platform = usePlatform();
  const [local, attributes] = splitProps(props, ["class"]);

  return (
    <div
      class={`${styles.root} ${styles[`size--${props.size || "s"}`]} ${local.class || ""}`}
      {...attributes}
    >
      {platform() === "ios" ? <IconIOSLoader /> : <IconAndroidLoader />}
    </div>
  );
};

export default Loader;
