import { useCallback, useMemo, useState } from "react";
import { isArray } from "@darwish/utils-is";

export type StableActions<T> = {
  add: (addValue: T) => void;
  has: (hasValue: T) => boolean;
  remove: (removeValue: T) => void;
  toggle: (toggleValue: T) => void;
  reset: () => void;
}
export default function useSet<T>(initialValue: Array<T> | Set<T>): [state: Set<T>, actions: StableActions<T>] {
  const init = useCallback(() => {
    if (isArray(initialValue)) {
      return new Set(initialValue);
    }
    return new Set(initialValue);
  }, [initialValue]);
  const [state, setState] = useState(init);

  const has = useCallback(
    (hasValue: T) => {
      return state.has(hasValue);
    },
    [initialValue, state]
  );

  const stableActions = useMemo(() => {
    return {
      add: (addValue: T) => {
        setState((prev) => new Set([...Array.from(prev), addValue]));
      },
      remove: (removeValue: T) => {
        setState(
          (prev) => new Set(Array.from(prev).filter((v) => v !== removeValue))
        );
      },
      toggle: (toggleValue: T) => {
        if (has(toggleValue)) {
          stableActions.remove(toggleValue);
        } else {
          stableActions.add(toggleValue);
        }
      },
      reset: () => {
        setState(init);
      },
    };
  }, [setState, state]);

  const utils = {
    has,
    ...stableActions,
  };
  return [state, utils];
}
