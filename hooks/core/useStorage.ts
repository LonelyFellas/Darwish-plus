import { isFunction, isObject, isString } from "@darwish/utils-is";
import { useState } from "react";

type Storage = "sessionStorage" | "localStorage";
export type UseStorageOutput<T> = [
  storage: T,
  updateStorage: (value: T | ((prev: T) => T)) => void,
  removeStorage: () => void
];
export default function useStorage<T>(
  type: Storage,
  key: string,
  defaultValue: T
): UseStorageOutput<T> {
  const [storage, setStorage] = useState(() => {
    if (typeof window === "undefined") return undefined;
    try {
      return window[type].getItem(key) === null
        ? defaultValue
        : JSON.parse(window[type].getItem(key) as string) ?? defaultValue;
    } catch {
      return window[type as Storage].getItem(key) ?? defaultValue;
    }
  });

  const updateStorage = (value: T | ((prev: T) => T)) => {
    value = isFunction(value) ? value(storage) : value;
    window[type].setItem(key, isString(value) ? value : JSON.stringify(value));
    setStorage(value);
  };

  const removeStorage = () => {
    window[type].removeItem(key);
    if (storage) {
      setStorage(undefined);
    }
  };

  return [storage, updateStorage, removeStorage];
}
