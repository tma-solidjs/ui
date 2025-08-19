import styles from "./Image.module.sass";

import {
  type Component,
  type JSX,
  createSignal,
  splitProps,
  Show,
} from "solid-js";

import { Loader } from "@/index";

export interface ImageProps extends JSX.HTMLAttributes<HTMLDivElement> {
  src: string;
  fallbackIcon?: JSX.Element;
  loaderSize?: "xs" | "s" | "m";
  imageClass?: string;
  imageClassList?: Record<string, boolean>;
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
    "imageClass",
    "imageClassList",
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
      {...attributes}
      class={styles.root}
      classList={{
        [`${local.class}`]: !!local.class,
        ...local.classList,
      }}
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
        class={styles.image}
        classList={{
          [styles.hide]: isLoading() || isError(),
          [`${local.imageClass}`]: !!local.imageClass,
          ...local.imageClassList,
        }}
        src={local.src}
        alt={""}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default Image;
