import { useState } from 'react';

type UseBooleanAction = (settingValue: boolean | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
/**
 *
 * @param defaultValue default value -> boolean
 * @returns [boolean, (settingValue: boolean) => void] -> Array
 */
const useBoolean: (defaultValue: boolean) => [boolean, UseBooleanAction] = (
  defaultValue: boolean,
) => {
  const [state, setState] = useState(defaultValue);

  const toggle = (
    settingValue: boolean | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setState((prev) =>
      typeof settingValue === 'boolean' ? settingValue : !prev,
    );
  };
  return [state, toggle];
};
export default useBoolean;
