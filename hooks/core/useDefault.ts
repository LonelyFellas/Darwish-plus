import { useState } from "react";
import { isFunction } from "../utils/is/isTypings";
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
