import { useEffect, useRef } from 'react';

/**
 * 在 Hooks 里获取上一次指定的 props
 * @param {any} value
 */
export const usePrevProps = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
