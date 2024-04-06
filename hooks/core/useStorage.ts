import { useState } from "react";

type Storage = "sessionStorage" | "localStorage";
export type UseStorageOutput = [
  storage: string | null | undefined,
  updateStorage: <T>(value: T) => void,
  removeStorage: () => void
];
export default function useStorage(
  type: Storage,
  key: string
): UseStorageOutput {
  const [storage, setStorage] = useState<string | undefined>(() => {
    if (typeof window === "undefined") return undefined;
    try {
      return window[type].getItem(key) === null
        ? undefined
        : JSON.parse(window[type].getItem(key) as string);
    } catch {
      return window[type as Storage].getItem(key);
    }
  });

  const updateStorage = <T>(value: T) => {
    const stringifyedValue = JSON.stringify(value);
    window[type].setItem(key, stringifyedValue);
    setStorage(stringifyedValue);
  };

  const removeStorage = () => {
    window[type].removeItem(key);
    if (storage) {
      setStorage(undefined);
    }
  };

  return [storage, updateStorage, removeStorage];
}
