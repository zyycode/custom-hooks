import { useEffect, useRef, useState } from 'react';

/**
 * Triggering animations that start when user scrolls to an element.
 * @param {string} margin
 * @returns
 */
export const useIsInView = (margin = '0px') => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observe = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { rootMargin: margin }
    );
    if (ref.current) observe.observe(ref.current);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      observe.unobserve(ref.current);
    };
  }, []);

  return [ref, isIntersecting];
};
