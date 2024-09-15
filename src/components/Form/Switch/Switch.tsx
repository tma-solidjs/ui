import "./Switch.sass";

import { usePlatform } from "@/hooks";

import { ComponentExtended } from "@/models";
import { VisuallyHidden } from "@/components";

interface SwitchProps {
  disabled?: boolean;
}

export const Switch: ComponentExtended<SwitchProps, HTMLInputElement> = (
  props
) => {
  const platform = usePlatform();

  return (
    <label
      class="switch"
      classList={{
        "switch--ios": platform().isIOS,
        "switch--base": platform().isAndroid,
        "switch--disabled": props.disabled,
        [`${props.class}`]: !!props.class,
        ...props.classList,
      }}
    >
      <VisuallyHidden
        {...props}
        component="input"
        type="checkbox"
        class="switch__input"
      />
      <div aria-hidden class={"switch__control"} />
      {props.children}
    </label>
  );
};
