import useStorage from "./useStorage";
export default function useSessionStorage<T>(key: string, defaultValue: T) {
  const StorageStateAction = useStorage("sessionStorage", key, defaultValue);
  return StorageStateAction;
}
