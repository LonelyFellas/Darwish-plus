import { useEffect, useRef } from "react";

export default function useInterval(callback: () => void, delay: number) {
  const isClosed = useRef(false);
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isClosed.current) {
      clearCondition();
      intervalId.current = setInterval(callback, delay);
    }
    return () => {
      clearCondition();
    };
  }, [delay]);

  const clear = () => {
    isClosed.current = true;
    clearCondition();
  };
  const clearCondition = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
  };
  return clear;
}
