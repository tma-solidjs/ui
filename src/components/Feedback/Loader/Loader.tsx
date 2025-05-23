import styles from "./Loader.module.sass";

import type { Component, JSX } from "solid-js";

import { usePlatform } from "@/hooks";

import AndroidLoading from "./variants/android-loading.svg";
import IosLoading from "./variants/ios-loading.svg";

interface LoaderProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size: "s" | "m" | "l";
}

const Loader: Component<LoaderProps> = (props) => {
  const platform = usePlatform();

  return (
    <div
      class={`${styles.root} ${styles[platform()]} ${styles[props.size || "s"]}`}
      classList={{
        [`${props.class}`]: !!props.class,
        ...props.classList,
      }}
    >
      {platform() === "ios" ? <IosLoading /> : <AndroidLoading />}
    </div>
  );
};

export default Loader;
