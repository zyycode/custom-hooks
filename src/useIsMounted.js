import { useEffect, useRef } from 'react';

/**
 * Check if component is still mounted before doning anything like updating its state.
 * @returns {boolean} isMounted
 */
export const useIsMounted = () => {
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  }, []);
  return isMounted;
};
