import { useState } from 'react';

/**
 * For keeping the hash of the url in-sync withe local variable.
 * @param {*} initialValue
 * @returns
 */
export const useHash = (initialValue = null) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.location.hash;
      return item ? item.slice(1) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.history.pushState(null, null, `#${value}`);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};
