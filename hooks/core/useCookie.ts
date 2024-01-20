import { useCallback, useState } from 'react';
import jsCookie from 'js-cookie';

/**
 * @description A hook to get, set and delete cookie
 * @param cookieName cookie name
 * @returns [cookieValue, updateCookie, deleteCookie] -> Array
 * @example
 * const [cookieValue, updateCookie, deleteCookie] = useCookie('cookieName');
 * updateCookie('cookieValue');
 * deleteCookie();
 */
export default function useCookie(cookieName: string) {
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

  return [cookieValue, updateCookie, deleteCookie] as const;
}
