import "./styles/root.sass";

import { type JSX, type Component, createEffect } from "solid-js";

import { usePlatform } from "@/hooks";

export interface RootProps {
  children: JSX.Element;
  theme: "light" | "dark";
  platform?: string;
}

const Root: Component<RootProps> = (props) => {
  const platform = usePlatform();

  createEffect(() => {
    document.documentElement.dataset.theme = props.theme;
    document.documentElement.dataset.platform = props.platform || platform();
  });

  return props.children;
};

export default Root;
