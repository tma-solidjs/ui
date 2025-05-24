import { createMemo, createSignal } from "solid-js";

import { default as useTimeout } from "./useTimeout";

import { Wave } from "@/models";

const WAVE_LIVE = 225;

const useRipple = () => {
  const [clicks, setClicks] = createSignal<Wave[]>([]);

  const pointerDelayTimers = createMemo(
    () => new Map<number, ReturnType<typeof setTimeout>>(),
  );

  const clearClicks = useTimeout(() => setClicks([]), WAVE_LIVE);

  function addClick(x: number, y: number, pointerId: number) {
    const dateNow = Date.now();
    const filteredClicks = clicks().filter(
      (click) => click.date + WAVE_LIVE > dateNow,
    );

    setClicks([
      ...filteredClicks,
      {
        x,
        y,
        date: dateNow,
        pointerId,
      },
    ]);

    clearClicks.set();
    pointerDelayTimers().delete(pointerId);
  }

  const onPointerDown = (e: any) => {
    const { top, left } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (left ?? 0);
    const y = e.clientY - (top ?? 0);

    pointerDelayTimers().set(
      e.pointerId,
      setTimeout(() => addClick(x, y, e.pointerId), 70),
    );
  };

  const onPointerCancel = (e: any) => {
    const timer = pointerDelayTimers().get(e.pointerId);
    clearTimeout(timer);
    pointerDelayTimers().delete(e.pointerId);
  };

  return {
    clicks,
    onPointerDown,
    onPointerCancel,
  };
};

export default useRipple;
