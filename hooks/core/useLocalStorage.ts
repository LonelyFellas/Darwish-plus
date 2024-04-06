import useStorage from "./useStorage";
export default function useLocalStorage<T>(key: string, defaultValue: T) {
  const StorageStateAction = useStorage("localStorage", key, defaultValue);
  return StorageStateAction;
}
