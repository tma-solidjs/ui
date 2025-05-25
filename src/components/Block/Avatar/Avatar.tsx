import styles from "./Avatar.module.sass";

import { type Component, type JSX, mergeProps, splitProps } from "solid-js";

import { Image } from "@/components";

import { IconUser } from "@/assets/icons";

export interface AvatarProps extends JSX.HTMLAttributes<HTMLImageElement> {
  src: string;
  size?: 20 | 24 | 28 | 32 | 36 | 40 | 42 | 48 | 56 | 72 | 96;
  mode?: "circle" | "rounded";
  borderRadius?: number;
}

const defaultProps: Omit<AvatarProps, "src"> = {
  size: 40,
  mode: "circle",
};

const Avatar: Component<AvatarProps> = (props) => {
  const [local, attributes] = splitProps(mergeProps(defaultProps, props), [
    "class",
    "classList",
    "src",
    "size",
    "style",
    "mode",
    "borderRadius",
  ]);

  return (
    <Image
      {...attributes}
      class={styles.root}
      classList={{
        [styles[`root_${local.mode}`]]: true,
        [`${local.class}`]: !!local.class,
        ...local.classList,
      }}
      style={Object.assign(
        {
          "--avatar-size": `${local.size}px`,
          ...(local.borderRadius && {
            "--border-radius": `${local.borderRadius}px`,
          }),
        },
        local.style || {},
      )}
      fallbackIcon={<IconUser />}
      src={local.src}
      loaderSize={
        local?.size && local.size >= 56
          ? "m"
          : local?.size && local.size >= 36
            ? "s"
            : "xs"
      }
    />
  );
};

export default Avatar;
