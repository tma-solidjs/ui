import "./styles/root.sass";

import { type JSX, type Component, onMount } from "solid-js";

import { usePlatform } from "@/hooks";

export interface ImageProps {
  children: JSX.Element;
  theme: "light" | "dark";
}

const Root: Component<ImageProps> = (props) => {
  const platform = usePlatform();

  onMount(() => {
    document.documentElement.dataset.theme = props.theme;
    document.documentElement.dataset.platform = platform();
  });

  return props.children;
};

export default Root;
