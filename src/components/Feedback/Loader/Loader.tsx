import "./Loader.sass";

import { usePlatform } from "@/hooks";

import { ComponentExtended } from "@/models";
import { LoaderProps } from "./Loader.interface";

import AndroidLoading from "@/assets/icons/android-loading.svg";
import IosLoading from "@/assets/icons/ios-loading.svg";

export const Loader: ComponentExtended<LoaderProps> = (props) => {
  const platform = usePlatform();

  return (
    <div
      class="loader"
      classList={{
        "loader--ios": platform().isIOS,
        [`loader_size--${props.size || "s"}`]: true,
        ...props.classList,
      }}
      color="orange"
    >
      {platform().isIOS ? <IosLoading /> : <AndroidLoading />}
    </div>
  );
};
