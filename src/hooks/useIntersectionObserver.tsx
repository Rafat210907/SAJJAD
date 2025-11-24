import { useState, useEffect, useRef } from 'react';

export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2,
      ...options,
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { elementRef, isVisible };
};
