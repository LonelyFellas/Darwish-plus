import { useState } from "react";
import { isFunction } from "@darwish/utils-is";

/**
 * @description A hook to set default value
 * @param defaultVal default value
 * @param initialVal initial value
 * @returns [state, updateState] -> Array
 * @example
 * const [state, updateState] = useDefault('default value', 'initial value');
 * updateState('new value'); // state = 'new value'
 * updateState(null); // state = 'default value'
 * updateState(undefined); // state = 'default value'
 */
const useDefault = <T>(defaultVal: T, initialVal: T) => {
  const [state, setState] = useState(initialVal);

  const updateState = (
    updateValue: T | null | undefined | ((prev: T) => T)
  ) => {
    if (isFunction(updateValue)) {
      setState((prev) => updateValue(prev));
    } else if (updateValue === null || updateValue === undefined) {
      setState(defaultVal);
    } else {
      setState(updateValue);
    }
  };
  return [state, updateState] as const;
};
export default useDefault;
