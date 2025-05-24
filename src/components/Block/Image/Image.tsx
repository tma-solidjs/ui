import styles from "./Image.module.sass";

import {
  type Component,
  type JSX,
  createSignal,
  splitProps,
  Show,
} from "solid-js";

import { Loader } from "@/components";

export interface ImageProps extends JSX.HTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackIcon?: JSX.Element;
  loaderSize?: "xs" | "s" | "m";
}

const Image: Component<ImageProps> = (props) => {
  const [isLoading, setLoading] = createSignal<boolean>(true);
  const [isError, setError] = createSignal<boolean>(false);
  const [local, attributes] = splitProps(props, [
    "class",
    "classList",
    "src",
    "fallbackIcon",
    "style",
    "loaderSize",
  ]);

  const handleLoad = () => {
    setLoading(false);
    setError(false);
  };

  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  return (
    <div
      class={`${styles.root} ${local.class || ""}`}
      style={Object.assign({}, local.style || {})}
    >
      <Show
        when={isError() && local.fallbackIcon}
        children={local.fallbackIcon}
      />
      <Show
        when={isLoading()}
        children={<Loader size={local.loaderSize || "s"} />}
      />

      <img
        class={`${styles.image} ${(isLoading() || isError()) && styles.hide}`}
        classList={{ ...local.classList }}
        src={local.src}
        alt={""}
        onLoad={handleLoad}
        onError={handleError}
        {...attributes}
      />
    </div>
  );
};

export default Image;
