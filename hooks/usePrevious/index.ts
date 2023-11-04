import useUpdateEffect from '@darwish-hooks/use-update-effect';
import { useState } from 'react';
export default function usePrevious<T>(state: T) {
  const [previous, setPrevious] = useState<T | undefined>(undefined);
  const [change, setChange] = useState<T>(state);

  useUpdateEffect(() => {
    setPrevious(change);
    setChange(state);
  }, [state]);
  return previous;
}
