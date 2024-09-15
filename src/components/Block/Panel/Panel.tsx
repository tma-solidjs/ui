import "./Panel.sass";

import { usePlatform } from "@/hooks";

import { ComponentExtended } from "@/models/components";

export const Panel: ComponentExtended = (props) => {
  const platform = usePlatform();

  return (
    <div
      class="panel"
      classList={{
        "panel--ios": platform().isIOS,
        ...props.classList,
      }}
    >
      <div class="panel__wrapper">{props.children}</div>
    </div>
  );
};
