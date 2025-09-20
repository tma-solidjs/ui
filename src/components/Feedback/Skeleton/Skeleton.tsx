import styles from "./Skeleton.module.sass";

import { type Component, type JSX, splitProps } from "solid-js";

interface SkeletonProps extends JSX.HTMLAttributes<HTMLElement> {
  height: string;
  width: string;
}

const Skeleton: Component<SkeletonProps> = (props) => {
  const [local, attrs] = splitProps(props, [
    "height",
    "width",
    "class",
    "classList",
    "style",
  ]);

  return (
    <span
      {...attrs}
      class={styles.root}
      classList={{
        [`${local.class}`]: !!local.class,
        ...local.classList,
      }}
      style={Object.assign(
        {
          "--skeleton-width": local.width,
          "--skeleton-height": local.height,
        },
        local.style,
      )}
    />
  );
};

export default Skeleton;
