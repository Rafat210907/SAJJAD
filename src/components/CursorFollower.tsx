import { useEffect, useState } from "react";

export const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let rafId: number;

    const updatePosition = (e: MouseEvent) => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updatePosition);
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
      className="pointer-events-none fixed z-[9999] w-3 h-3 rounded-full transition-opacity duration-200"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#19a690',
        boxShadow: '0 0 10px rgba(25, 166, 144, 0.5)',
        opacity: isVisible ? 1 : 0,
        willChange: 'transform',
      }}
    />
  );
};
