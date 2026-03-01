import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface TextShuffleProps {
  text: string;
  className?: string;
  charSet?: string;
  baseDelay?: number;
  charDuration?: number;
  staggerDelay?: number;
  triggerOnView?: boolean; // New: trigger when scrolled into view
}

const TextShuffle: React.FC<TextShuffleProps> = ({
  text,
  className = '',
  charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*<>[]{}',
  baseDelay = 0,
  charDuration = 600,
  staggerDelay = 100,
  triggerOnView = false,
}) => {
  const [displayChars, setDisplayChars] = useState<string[]>(
    Array(text.length).fill('')
  );
  const [lockedChars, setLockedChars] = useState<boolean[]>(
    Array(text.length).fill(false)
  );
  const [hasTriggered, setHasTriggered] = useState(false);
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  // Use intersection observer if triggerOnView is true
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const shouldStart = triggerOnView ? (inView && !hasTriggered) : true;

  useEffect(() => {
    if (!shouldStart || hasTriggered) return;

    if (triggerOnView && inView) {
      setHasTriggered(true);
    }

    const startTimeout = setTimeout(() => {
      startTimeRef.current = performance.now();
      
      const animate = (now: number) => {
        const elapsed = now - startTimeRef.current;
        
        setDisplayChars(prev => {
          const next = [...prev];
          
          for (let i = 0; i < text.length; i++) {
            const charStartTime = i * staggerDelay;
            const charEndTime = charStartTime + charDuration;
            
            if (elapsed >= charStartTime && elapsed < charEndTime) {
              next[i] = charSet[Math.floor(Math.random() * charSet.length)];
            } else if (elapsed >= charEndTime && !lockedChars[i]) {
              next[i] = text[i];
              setLockedChars(prev => {
                const locked = [...prev];
                locked[i] = true;
                return locked;
              });
            } else if (lockedChars[i]) {
              next[i] = text[i];
            }
          }
          
          return next;
        });

        const allLocked = lockedChars.every(l => l) || 
          elapsed > (text.length * staggerDelay + charDuration);
        
        if (!allLocked) {
          frameRef.current = requestAnimationFrame(animate);
        }
      };

      frameRef.current = requestAnimationFrame(animate);
    }, baseDelay);

    return () => {
      clearTimeout(startTimeout);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [shouldStart, text, charSet, baseDelay, charDuration, staggerDelay, triggerOnView, inView, hasTriggered, lockedChars]);

  const content = (
    <span className={`inline-flex tracking-tighter ${className}`}>
      {displayChars.map((char, i) => (
        <span 
          key={i} 
          className={`inline-block ${lockedChars[i] ? 'text-white' : 'text-gray-400'}`}
          style={{ minWidth: '0.6em' }}
        >
          {char || '\u00A0'}
        </span>
      ))}
    </span>
  );

  return triggerOnView ? <span ref={ref}>{content}</span> : content;
};

export default TextShuffle;