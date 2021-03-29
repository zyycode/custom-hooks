import { useEffect, useRef } from 'react';

/**
 * [doc](https://overreacted.io/zh-hans/making-setinterval-declarative-with-react-hooks/)
 * @param {*} callback
 * @param {*} delay
 */
export const useInterval = (callback, delay) => {
  const saveCallback = useRef();

  // 保存新回调
  useEffect(() => {
    saveCallback.current = callback;
  });

  // 建立 interval
  useEffect(() => {
    const tick = () => {
      saveCallback.current();
    };
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
