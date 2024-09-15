import { createResource, createSignal, createEffect } from "solid-js";

export const usePlatform = () => {
  const [platform, setPlatform] = createSignal({
    isIOS: false,
    isAndroid: false,
  });

  const [resource] = createResource(async () => {
    const userAgent =
      navigator.userAgent || navigator.vendor || (window as any).opera;

    if (
      /iPad|iPhone|iPod|Macintosh|MacIntel/.test(userAgent) &&
      !(window as any).MSStream
    ) {
      return { isIOS: true, isAndroid: false };
    } else {
      return { isIOS: false, isAndroid: true };
    }
  });

  createEffect(() => {
    if (resource()) {
      setPlatform(resource()!);
    }
  });

  return platform;
};
