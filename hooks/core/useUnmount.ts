import { useEffect } from "react";
import { isFunction, isDev } from "@darwish/utils-is";
import useLatest from "./useLatest";

export default function useUnmount(fn: () => void) {
  if (isDev && !isFunction(fn)) {
    console.error(
      `useUnmount expected parameter is a function, got ${typeof fn}`
    );
  }

  const fnRef = useLatest(fn);

  useEffect(
    () => () => {
      fnRef.current();
    },
    []
  );
}
