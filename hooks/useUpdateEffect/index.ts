import { useEffect } from 'react';
import useFirstMountState from '@darwish-hooks/use-first-mount-state';
const useUpdateEffect: typeof useEffect = (effect, deps) => {
  const firstMountState = useFirstMountState();

  useEffect(() => {
    if (!firstMountState) {
      return effect();
    }
  }, deps);
};

export default useUpdateEffect;
