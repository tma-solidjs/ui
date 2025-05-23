import styles from "./Loader.module.sass";

import { type Component, type JSX, splitProps } from "solid-js";
import { usePlatform } from "@/hooks";

import AndroidLoading from "./variants/android-loading.svg";
import IosLoading from "./variants/ios-loading.svg";

interface LoaderProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size: "s" | "m" | "l";
}

const Loader: Component<LoaderProps> = (props) => {
  const platform = usePlatform();
  const [local, attributes] = splitProps(props, ["class"]);

  return (
    <div
      class={`${styles.root} ${styles[`size--${props.size || "s"}`]} ${local.class || ""}`}
      {...attributes}
    >
      {platform() === "ios" ? <IosLoading /> : <AndroidLoading />}
    </div>
  );
};

export default Loader;
