import "./Ripple.sass";

import { For, splitProps } from "solid-js";

import { ComponentExtended, Wave } from "@/models";

export interface RippleProps {
  clicks: Wave[];
}

export const Ripple: ComponentExtended<RippleProps> = (props) => {
  const [local] = splitProps(props, ["clicks"]);

  return (
    <span aria-hidden class="ripple">
      <For each={local.clicks}>
        {(wave) => (
          <span
            class="ripple_wave"
            style={{
              top: `${wave.y}px`,
              left: `${wave.x}px`,
            }}
          />
        )}
      </For>
    </span>
  );
};
