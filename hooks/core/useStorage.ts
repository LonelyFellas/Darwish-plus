import { useState } from 'react';

type Storage = 'sessionStorage' | 'localStorage';
export type UseStorageOutput = [
  storage: string | null | undefined,
  updateStorage: (value: unknown) => void,
  removeStorage: () => void,
]
export default function useStorage(type: Storage, key: string): UseStorageOutput {
  const [storage, setStorage] = useState(() => {
    if (typeof window === 'undefined') return null as any;
    try {
      return JSON.parse(window[type].getItem(key) || '');
    } catch {
      return window[type as Storage].getItem(key) || '';
    }
  });

  const updateStorage = (value: unknown) => {
    window[type].setItem(key, JSON.stringify(value));
    setStorage(value);
  };

  const removeStorage = () => {
    window[type].removeItem(key);
    if (storage) {
      setStorage(null);
    }
  };

  return [storage, updateStorage, removeStorage]
}
