import { useCallback, useEffect, useState } from 'react';

/**
 * @description A hook to display error in development environment
 * @param errorText error text
 * @returns dispatchError -> Function
 * @example
 * const dispatchError = useDisplayDevError('error text');
 * dispatchError();
 * const dispatchError = useDisplayDevError();
 * dispatchError('new error text');
 */
const useDisplayDevError: <T>(errorText?: T) => (err?: T) => void = (
  errorText,
) => {
  const [error, setError] = useState(errorText);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && error) {
      console.error(errorText);
    }
  }, [error]);

  const dispatchError = useCallback((err?: any) => {
    return setError(typeof err === 'undefined' ? errorText : err);
  }, []);

  return dispatchError;
};

export default useDisplayDevError;
