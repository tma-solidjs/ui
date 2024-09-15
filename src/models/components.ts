import type { Component, JSX } from "solid-js";

export type ComponentExtended<T = {}, K = HTMLElement> = Component<
  JSX.HTMLAttributes<K> & T
>;

export interface Wave {
  x: number;
  y: number;
  date: number;
  pointerId: number;
}
