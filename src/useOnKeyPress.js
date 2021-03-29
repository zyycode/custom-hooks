import { useCallback, useEffect, useState } from 'react';

/**
 * For triggering code when the user presses a specific key.
 * @param {*} targetKey
 * @param {*} onKeyDown
 * @param {*} onKeyUp
 * @param {*} isDebugging
 * @returns
 */
export const useOnKeyPress = (targetKey, onKeyDown, onKeyUp, isDebugging = false) => {
  const [isKeyDown, setIsKeyDown] = useState(false);

  const onKeyDownLocal = useCallback((e) => {
    if (isDebugging)
      console.log('key down', e.key, e.key !== targetKey ? "- isn't triggered" : '- is triggered');
    if (e.key !== targetKey) return;
    setIsKeyDown(true);

    if (typeof onKeyDown !== 'function') return;
    onkeydown(e);
  });

  const onKeyUpLocal = useCallback((e) => {
    if (isDebugging)
      console.log('key up', e.key, e.key !== targetKey ? "- isn't triggered" : '- is triggered');
    if (e.key !== targetKey) return;
    setIsKeyDown(false);
    if (typeof onKeyUp !== 'function') return;
    onKeyUp(e);
  });

  useEffect(() => {
    window.addEventListener('keydown', onKeyDownLocal);
    window.addEventListener('keyup', onKeyUpLocal);
    return () => {
      window.removeEventListener('keydown', onKeyDownLocal);
      window.removeEventListener('keyup', onKeyUpLocal);
    };
  }, []);

  return isKeyDown;
};
