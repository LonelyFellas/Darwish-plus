import {ChangeEvent, useMemo, useState} from 'react';

export type UseToggleActions<T> = {
  toggle: (settingValue: ChangeEvent<any> | T) => void;
  setLeft: () => void;
  setRight: () => void;
};

function useToggle<T = boolean>(): { value: T } & UseToggleActions<T>;

function useToggle<const T, const U>(defaultValue: T, reverseValue: U): { value: T | U } & UseToggleActions<T>;

function useToggle<T = boolean, U = null>(
  defaultValue: T,
  reverseValue: U,
): { value: T | U } & UseToggleActions<T | U>;

function useToggle<const T, const U>(
  defaultValue: T = false as unknown as T,
  reverseValue?: U,
) {
  const [value, setValue] = useState<T | U>(defaultValue);

  const action = useMemo(() => {
    const reverseValueOrigin = (
      reverseValue === 'undefined' ? !defaultValue : reverseValue
    ) as T | U;

    const toggle = (settingValue: T | U | ChangeEvent<any>) => {
      setValue((prev) => {
        if (typeof settingValue === "boolean") {
          return settingValue;
        }
        return prev === defaultValue ? reverseValueOrigin : defaultValue
      });
    };
    const setLeft = () => {
      setValue(defaultValue);
    };
    const setRight = () => {
      setValue(reverseValueOrigin);
    };

    return {
      toggle,
      setLeft,
      setRight,
    };
  }, []);

  return {value, ...action};
}

export default useToggle;
