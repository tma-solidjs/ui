import { createResource, createSignal, createEffect } from "solid-js";

type Platforms = "ios" | "android";

const usePlatform = () => {
  const [platform, setPlatform] = createSignal<Platforms>("android");

  const [resource] = createResource(async () => {
    const userAgent = (navigator.userAgent ||
      navigator.vendor ||
      (window as any).opera) as string | undefined;

    if (
      userAgent &&
      /iPad|iPhone|iPod|Macintosh|MacIntel/.test(userAgent) &&
      !(window as any).MSStream
    ) {
      return "ios";
    }

    return "android";
  });

  createEffect(() => {
    if (resource()) {
      setPlatform(resource()!);
    }
  });

  return platform;
};

export default usePlatform;
