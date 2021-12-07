import { createEventListener } from "@solid-primitives/event-listener";
import { Fn } from "@solid-primitives/utils";

export const addListener = (
  el: Element | Window | Document,
  ev: string,
  cb: (e: any) => void,
  options: boolean | AddEventListenerOptions = true
): Fn => {
  const [stop] = createEventListener(el, ev, cb, options);
  return stop;
};
