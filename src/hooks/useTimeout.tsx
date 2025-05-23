import { createEffect } from "solid-js";

const useTimeout = (callbackFunction: () => void, duration: number) => {
  const options = { callbackFunction, duration };
  let timeout: ReturnType<typeof setTimeout>;

  createEffect(() => {
    options.callbackFunction = callbackFunction;
    options.duration = duration;
  }, [callbackFunction, duration]);

  const set = () => {
    clear();
    timeout = setTimeout(options.callbackFunction, options.duration);
  };

  const clear = () => clearTimeout(timeout);

  return { set, clear };
};

export default useTimeout;
