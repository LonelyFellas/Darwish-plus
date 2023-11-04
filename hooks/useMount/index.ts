import { useEffect } from 'react';
import { isFunction, isDev } from '@darwish-utils/is';
export default function useMount(fn: () => void) {
  if (isDev && !isFunction(fn)) {
    console.error(
      `useMount: parameter \`fn\` expected to be a function, but got "${typeof fn}".`
    );
  }

  useEffect(() => {
    fn?.();
  }, []);
}
