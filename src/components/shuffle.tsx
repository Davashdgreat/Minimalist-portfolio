import React, { useEffect, useRef, useState } from 'react';

interface TextShuffleProps {
  text: string; // The target text to reveal
  delay?: number; // Initial delay before starting shuffle in ms (default: 0)
  duration?: number; // Total animation duration in ms (default: 1000)
  charSet?: string; // Characters to shuffle with (default: letters + numbers + symbols)
  className?: string; // Optional CSS class for styling
  fadeDuration?: number; // Fade-in duration in ms (default: 300)
}

const TextShuffle: React.FC<TextShuffleProps> = ({
  text,
  delay = 0,
  duration = 1000,
  charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()',
  className,
  fadeDuration = 300,
}) => {
  const [displayText, setDisplayText] = useState(''); // Start blank
  const [opacity, setOpacity] = useState(0); // Start invisible
  const animationRef = useRef<number>(); // For requestAnimationFrame
  const startTimeRef = useRef<number>(); // Track start time

  useEffect(() => {
    const startAnimation = () => {
      setOpacity(1); // Trigger fade-in when shuffle starts

      const animate = (timestamp: number) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp;
        const progress = (timestamp - startTimeRef.current) / duration;

        if (progress < 1) {
          const shuffled = text
            .split('')
            .map((char, index) => {
              // Gradually lock characters based on progress and position
              if (progress > index / text.length) return char;
              return charSet[Math.floor(Math.random() * charSet.length)];
            })
            .join('');
          setDisplayText(shuffled);
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setDisplayText(text); // Ensure final text is set
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    };

    const timeoutId = setTimeout(startAnimation, delay);

    return () => {
      clearTimeout(timeoutId);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [text, delay, duration, charSet]); // Re-run if props change

  return (
    <span
      className={className}
      style={{
        opacity,
        transition: `opacity ${fadeDuration}ms ease-in-out`,
        display: 'inline-block', // Prevents layout jumps
      }}
    >
      {displayText}
    </span>
  );
};

export default TextShuffle;