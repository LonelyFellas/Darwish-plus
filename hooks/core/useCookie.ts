import { useCallback, useState } from 'react';
import jsCookie from 'js-cookie';

export type UseCookieOutput = [
    string | null,
  (value: string, option?: jsCookie.CookieAttributes) => void,
  () => void
]
/**
 * @description A hook to get, set and delete cookie
 * @param cookieName cookie name
 * @returns UseCookieOutput A tuple with three elements
 * @property UseCookieOutput[0] cookie value
 * @property UseCookieOutput[1] updateCookie
 * @property UseCookieOutput[2] deleteCookie
 * @example
 * updateCookie('cookieValue');
 * deleteCookie();
 */
export default function useCookie(cookieName: string): UseCookieOutput {
  const [cookieValue, setCookieValue] = useState(
    () => jsCookie.get(cookieName) || null,
  );

  const updateCookie = useCallback(
    (value: string, option?: jsCookie.CookieAttributes) => {
      jsCookie.set(cookieName, value, option);
      setCookieValue(value);
    },
    [cookieName],
  );

  const deleteCookie = useCallback(() => {
    jsCookie.remove(cookieName);
    setCookieValue(null);
  }, [cookieName]);

  return [cookieValue, updateCookie, deleteCookie];
}

