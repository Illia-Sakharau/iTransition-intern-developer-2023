import { useRef } from "react";

export default function useDebounce(fn, timeoutMs) {
  const lastCallTimerRef = useRef(null);
  const lastCallRef = useRef(null);

  return function perform(arg) {
    const previousCall = lastCallRef.current;
    lastCallRef.current = Date.now();

    if (previousCall && lastCallRef.current - previousCall <= timeoutMs) {
      clearTimeout(lastCallTimerRef.current);
    }
    lastCallTimerRef.current = window.setTimeout(() => fn(arg), timeoutMs);
  };
}