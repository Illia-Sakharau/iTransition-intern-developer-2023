import { useRef } from "react";

export default function useDebounce<T, V = void>(fn: (arg: T) => V, timeoutMs: number) {
  const lastCallTimerRef = useRef<number | null>(null);
  const lastCallRef = useRef<number | null>(null);

  return function perform(arg: T) {
    const previousCall = lastCallRef.current;
    lastCallRef.current = Date.now();

    if (previousCall && lastCallRef.current - previousCall <= timeoutMs) {
      clearTimeout(lastCallTimerRef.current as number);
    }
    lastCallTimerRef.current = window.setTimeout(() => fn(arg), timeoutMs);
  };
}
