import { useState, useEffect } from 'react';

export const useTypingEffect = (texts: string[], typingSpeed: number = 100, deletingSpeed: number = 50, pauseDuration: number = 2000) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];
    
    if (!isDeleting && currentIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + currentText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentIndex === currentText.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1));
        setCurrentIndex(prev => prev - 1);
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }
  }, [currentIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return displayedText;
};
