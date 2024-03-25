import { useState } from "react";
import { isFunction } from "@darwish/utils-is";

/**
 * @description A hook to set default value
 * @param defaultVal default value
 * @param initialVal initial value
 * @returns [value, updateValueFn] -> Array
 * @example
 * const [state, updateState] = useDefault('default value', 'initial value');
 * updateState('new value'); // state = 'new value'
 * updateState(null); // state = 'default value'
 * updateState(undefined); // state = 'default value'
 */
const useDefault = <T>(defaultVal: T, initialVal: T): [T, (updateValue: T | null | undefined | ((prev: T) => T)) => void] => {
  const [value, setValue] = useState(initialVal);

  const updateValueFn = (
    updateValue: T | null | undefined | ((prev: T) => T)
  ) => {
    if (isFunction(updateValue)) {
      setValue((prev) => updateValue(prev));
    } else if (updateValue === null || updateValue === undefined) {
      setValue(defaultVal);
    } else {
      setValue(updateValue);
    }
  };
  return [value, updateValueFn];
};
export default useDefault;
