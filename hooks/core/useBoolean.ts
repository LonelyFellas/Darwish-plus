import React, { ChangeEvent, useMemo } from "react";

export type UseBooleanOutput = {
  value: boolean;
  setTrue: () => void;
  setFalse: () => void;
  toggle: (settingValue: ChangeEvent<any> | boolean) => void;
};
/**
 * @author darwish
 * @param defaultValue a boolean value
 * @description a hook to toggle boolean value
 * @returns `UseBooleanOutput` An object containing the boolean state value and utility functions to manipulate the state.
 * @property {Function} `UseBooleanOutput.value` the current boolean value
 * @property {Function} `UseBooleanOutput.setTrue` sets the value to `true`
 * @property {Function} `UseBooleanOutput.setFalse` sets the value to `false`
 * @property {Function} `UseBooleanOutput.toggle` toggles the value
 * @see [Documentation](https://darwish.vercel.app/hooks/use-boolean)
 * @example
 * const {value, setTrue, setFalse, toggle} = useBoolean(true);
 * <button onClick={toggle}>Toggle</button>
 */
const useBoolean: (defaultValue?: boolean) => UseBooleanOutput = (
  defaultValue
) => {
  const [value, setValue] = React.useState(!!defaultValue);

  const utils = useMemo(() => {
    const setTrue = () => setValue(true);
    const setFalse = () => setValue(false);
    const toggle = (settingValue: boolean | ChangeEvent<any>) => {
      setValue((prev) =>
        typeof settingValue === "boolean" ? settingValue : !prev
      );
    };
    return {
      setTrue,
      setFalse,
      toggle,
    };
  }, [value]);

  return {
    value,
    ...utils,
  };
};
export default useBoolean;
