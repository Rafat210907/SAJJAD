import { useEffect, useState } from "react";

export const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let rafId: number;
    let lastX = 0;
    let lastY = 0;

    const updatePosition = (e: MouseEvent) => {
      // Skip if mouse hasn't moved enough (reduce unnecessary updates)
      if (Math.abs(e.clientX - lastX) < 2 && Math.abs(e.clientY - lastY) < 2) {
        return;
      }

      lastX = e.clientX;
      lastY = e.clientY;

      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        setPosition({ x: lastX, y: lastY });
        setIsVisible(true);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Use passive listener for better scrolling performance
    window.addEventListener("mousemove", updatePosition, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] w-3 h-3 rounded-full transition-opacity duration-200 hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#19a690',
        boxShadow: '0 0 10px rgba(25, 166, 144, 0.5)',
        opacity: isVisible ? 1 : 0,
        willChange: 'transform',
        contain: 'layout style paint',
      }}
    />
  );
};
