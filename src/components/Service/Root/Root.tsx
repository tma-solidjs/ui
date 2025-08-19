import "./styles/root.sass";

import { type JSX, type Component } from "solid-js";

export interface ImageProps {
  children: JSX.Element;
}

const Root: Component<ImageProps> = (props) => {
  return props.children;
};

export default Root;
