import { useEffect } from "react";
import { isDev, isFunction } from "@darwish-utils/is";
import useLatest from "@darwish/use-latest";

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
