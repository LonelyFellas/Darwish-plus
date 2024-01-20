import React from "react";
export type UseBooleanFunc = (
  settingValue: boolean | React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;
/**
 * @author darwish
 * @param boolVal a boolean value
 * @description A hook to toggle boolean value
 * @returns [boolean, (settingValue: boolean) => void] -> Array
 * @example
 * const [state, toggle] = useBoolean(true);
 * <button onClick={toggle}>Toggle</button>
 */
const useBoolean: (boolVal: boolean) => [boolean, UseBooleanFunc] = (
  defaultValue: boolean
) => {
  const [state, setState] = React.useState(defaultValue);

  const toggle = (
    settingValue: boolean | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setState((prev) =>
      typeof settingValue === "boolean" ? settingValue : !prev
    );
  };
  return [state, toggle];
};
export default useBoolean;
