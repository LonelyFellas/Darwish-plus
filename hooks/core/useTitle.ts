import { isBrowser } from '@darwish/utils-is';
import { useEffect, useRef } from 'react';
import useUnmount from './useUnmount';

/**
 * This hook is used to set the title of the page.
 * @param title The title of the page.
 * @param restoreOnUnmount Whether to restore the title when the component unmounts.
 */
export default function useTitle(title: string, restoreOnUnmount = false) {
  const titleRef = useRef(isBrowser ? document.title : '');
  useEffect(() => {
    document.title = title;
  }, []);

  useUnmount(() => {
    if (restoreOnUnmount) {
      document.title = titleRef.current;
    }
  });
}
