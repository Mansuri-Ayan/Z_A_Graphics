import { useEffect, useRef, useState } from 'react';

export function useIntersection(options = {}) {
  const {
    threshold = 0,
    rootMargin = '200px',
    triggerOnce = true,
  } = options;
  const targetRef = useRef(null);
  const observerRef = useRef(null);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const element = targetRef.current;

    if (!element || hasIntersected && triggerOnce) {
      return undefined;
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setHasIntersected(true);
      return undefined;
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const nextState = entry.isIntersecting;

        if (nextState) {
          setHasIntersected(true);

          if (triggerOnce && observerRef.current) {
            observerRef.current.disconnect();
            observerRef.current = null;
          }
        } else if (!triggerOnce) {
          setHasIntersected(false);
        }
      },
      { threshold, rootMargin },
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [hasIntersected, rootMargin, threshold, triggerOnce]);

  return { ref: targetRef, hasIntersected };
}
