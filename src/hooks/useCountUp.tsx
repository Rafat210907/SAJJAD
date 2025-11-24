import { useState, useEffect, useRef } from 'react';

export const useCountUp = (end: number, duration: number = 2000, isVisible: boolean = true) => {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    startTimeRef.current = null;
    
    const animate = (currentTime: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [end, duration, isVisible]);

  return count;
};
