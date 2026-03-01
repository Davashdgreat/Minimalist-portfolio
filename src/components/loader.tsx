import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [displaySub, setDisplaySub] = useState('');
  const [phase, setPhase] = useState<'loading' | 'holding' | 'unshuffling' | 'exit'>('loading');
  
  const mainText = 'DAVASH';
  const subText = 'Developer & Creator';
  const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';

  // SHUFFLE IN — main text
  useEffect(() => {
    if (phase !== 'loading') return;
    
    let iteration = 0;
    const totalFrames = mainText.length * 4;
    
    const interval = setInterval(() => {
      setDisplayText(
        mainText
          .split('')
          .map((char, index) => {
            if (index < Math.floor(iteration / 4)) return mainText[index];
            return charSet[Math.floor(Math.random() * charSet.length)];
          })
          .join('')
      );

      if (iteration >= totalFrames) {
        clearInterval(interval);
        setDisplayText(mainText);
        setTimeout(() => loadSubtitle(), 150);
      }
      
      iteration++;
    }, 40);

    return () => clearInterval(interval);
  }, [phase]);

  // SHUFFLE IN — subtitle
  const loadSubtitle = () => {
    let iteration = 0;
    const totalFrames = subText.length * 3;
    
    const interval = setInterval(() => {
      setDisplaySub(
        subText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < Math.floor(iteration / 3)) return subText[index];
            return charSet[Math.floor(Math.random() * charSet.length)];
          })
          .join('')
      );

      if (iteration >= totalFrames) {
        clearInterval(interval);
        setDisplaySub(subText);
        setPhase('holding');
        setTimeout(() => setPhase('unshuffling'), 600);
      }
      
      iteration++;
    }, 40);
  };

  // UNSHUFFLE — both texts deconstruct together
  useEffect(() => {
    if (phase !== 'unshuffling') return;

    let iteration = 0;
    const totalIterations = 15;
    
    const interval = setInterval(() => {
      const progress = iteration / totalIterations;
      
      // Unshuffle main text
      setDisplayText(
        mainText
          .split('')
          .map(() => {
            if (Math.random() < progress * 1.2) {
              return charSet[Math.floor(Math.random() * charSet.length)];
            }
            return mainText[Math.floor(Math.random() * mainText.length)];
          })
          .join('')
      );

      // Unshuffle subtitle too!
      setDisplaySub(
        subText
          .split('')
          .map((char) => {
            if (char === ' ') return ' ';
            if (Math.random() < progress * 1.2) {
              return charSet[Math.floor(Math.random() * charSet.length)];
            }
            return char;
          })
          .join('')
      );

      if (iteration >= totalIterations) {
        clearInterval(interval);
        setPhase('exit');
        setTimeout(onComplete, 200);
      }
      
      iteration++;
    }, 50);

    return () => clearInterval(interval);
  }, [phase, onComplete]);

  // Calculate progress
  const mainProgress = Math.min(
    Math.floor((displayText.split('').filter((c, i) => c === mainText[i]).length / mainText.length) * 10),
    10
  );
  
  const subProgress = displaySub ? Math.min(
    Math.floor((displaySub.split('').filter((c, i) => c === subText[i]).length / subText.length) * 6),
    6
  ) : 0;

  const totalBlocks = 16;
  const filledBlocks = mainProgress + subProgress;

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Main text with RGB glitch */}
          <div className="relative">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold tracking-tighter absolute text-red-500 opacity-60"
              animate={phase === 'unshuffling' ? {
                x: [-3, 3, -2, 2, 0],
                opacity: [0.6, 0.3, 0.8, 0.2, 0],
              } : { x: [-2, -1, -3, -2] }}
              transition={{ duration: phase === 'unshuffling' ? 0.6 : 0.1, repeat: phase === 'unshuffling' ? 0 : Infinity }}
            >
              {displayText}
            </motion.h1>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-bold tracking-tighter absolute text-cyan-400 opacity-60"
              animate={phase === 'unshuffling' ? {
                x: [3, -3, 2, -2, 0],
                opacity: [0.6, 0.3, 0.8, 0.2, 0],
              } : { x: [2, 3, 1, 2] }}
              transition={{ duration: phase === 'unshuffling' ? 0.6 : 0.1, repeat: phase === 'unshuffling' ? 0 : Infinity }}
            >
              {displayText}
            </motion.h1>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-white tracking-tighter relative"
              animate={phase === 'unshuffling' ? {
                opacity: [1, 0.7, 0.9, 0.3, 0],
                scale: [1, 1.02, 0.98, 1.01, 0.95],
              } : {}}
              transition={{ duration: 0.6 }}
            >
              {displayText}
            </motion.h1>
          </div>

          {/* Subtitle with unshuffle and RGB glitch */}
          {displaySub && (
            <div className="mt-4 relative">
              {/* Red channel */}
              <motion.span 
                className="text-lg md:text-xl text-red-400 opacity-50 absolute tracking-widest uppercase w-full text-center"
                style={{ left: 0, transform: 'translateX(-2px)' }}
                animate={phase === 'unshuffling' ? {
                  x: [-2, 2, -1, 1, 0],
                  opacity: [0.5, 0.2, 0.6, 0.1, 0],
                } : {}}
                transition={{ duration: 0.6 }}
              >
                {displaySub}
              </motion.span>
              
              {/* Cyan channel */}
              <motion.span 
                className="text-lg md:text-xl text-cyan-400 opacity-50 absolute tracking-widest uppercase w-full text-center"
                style={{ left: 0, transform: 'translateX(2px)' }}
                animate={phase === 'unshuffling' ? {
                  x: [2, -2, 1, -1, 0],
                  opacity: [0.5, 0.2, 0.6, 0.1, 0],
                } : {}}
                transition={{ duration: 0.6 }}
              >
                {displaySub}
              </motion.span>
              
              {/* Main subtitle */}
              <motion.span 
                className="text-lg md:text-xl text-gray-400 tracking-widest uppercase relative block text-center"
                animate={phase === 'unshuffling' ? {
                  opacity: [1, 0.6, 0.8, 0.2, 0],
                } : {}}
                transition={{ duration: 0.6 }}
              >
                {displaySub}
              </motion.span>
            </div>
          )}

          {/* Progress blocks */}
          <motion.div 
            className="absolute bottom-24 flex gap-1"
            animate={phase === 'unshuffling' ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {Array.from({ length: totalBlocks }).map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-6"
                initial={{ opacity: 0.1, scaleY: 0.3 }}
                animate={{ 
                  opacity: i < filledBlocks ? 1 : 0.1,
                  scaleY: i < filledBlocks ? 1 : 0.3,
                }}
                style={{ backgroundColor: i < filledBlocks ? '#ffffff' : '#333333' }}
                transition={{ duration: 0.1 }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;























// import React, { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// interface LoaderProps {
//   onComplete: () => void;
// }

// const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
//   const [displayText, setDisplayText] = useState('');
//   const [displaySub, setDisplaySub] = useState('');
//   const [isExiting, setIsExiting] = useState(false);
//   const [flicker, setFlicker] = useState(false);
//   const [showSub, setShowSub] = useState(false);
  
//   const mainText = 'DAVASH';
//   const subText = 'Developer & Creator';
//   const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';

//   // Screen flicker effect
//   useEffect(() => {
//     const flickerInterval = setInterval(() => {
//       setFlicker(prev => !prev);
//     }, 50);
//     return () => clearInterval(flickerInterval);
//   }, []);

//   // Main text shuffle
//   useEffect(() => {
//     let iteration = 0;
//     const totalFrames = mainText.length * 4;
    
//     const interval = setInterval(() => {
//       setDisplayText(
//         mainText
//           .split('')
//           .map((char, index) => {
//             if (index < Math.floor(iteration / 4)) return mainText[index];
//             return charSet[Math.floor(Math.random() * charSet.length)];
//           })
//           .join('')
//       );

//       if (iteration >= totalFrames) {
//         clearInterval(interval);
//         setDisplayText(mainText);
//         setShowSub(true);
//       }
      
//       iteration++;
//     }, 40);

//     return () => clearInterval(interval);
//   }, []);

//   // Subtitle shuffle (starts after main completes)
//   useEffect(() => {
//     if (!showSub) return;

//     let iteration = 0;
//     const totalFrames = subText.length * 3;
    
//     const interval = setInterval(() => {
//       setDisplaySub(
//         subText
//           .split('')
//           .map((char, index) => {
//             if (char === ' ') return ' ';
//             if (index < Math.floor(iteration / 3)) return subText[index];
//             return charSet[Math.floor(Math.random() * charSet.length)];
//           })
//           .join('')
//       );

//       if (iteration >= totalFrames) {
//         clearInterval(interval);
//         setDisplaySub(subText);
        
//         // Hold then exit
//         setTimeout(() => {
//           setIsExiting(true);
//           setTimeout(onComplete, 600);
//         }, 800);
//       }
      
//       iteration++;
//     }, 40);

//     return () => clearInterval(interval);
//   }, [showSub, onComplete]);

//   // Calculate progress for digital blocks
//   const mainProgress = Math.min(
//     Math.floor((displayText.split('').filter((c, i) => c === mainText[i]).length / mainText.length) * 10),
//     10
//   );
  
//   const subProgress = showSub ? Math.min(
//     Math.floor((displaySub.split('').filter((c, i) => c === subText[i]).length / subText.length) * 6),
//     6
//   ) : 0;

//   const totalBlocks = 16;
//   const filledBlocks = mainProgress + subProgress;

//   return (
//     <AnimatePresence>
//       {!isExiting && (
//         <motion.div
//           className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.6, ease: "easeInOut" }}
//           style={{
//             filter: flicker ? 'brightness(1.2)' : 'brightness(1)',
//           }}
//         >
//           {/* RGB Glitch Text Container */}
//           <div className="relative">
//             {/* Red channel (offset left) */}
//             <motion.h1 
//               className="text-6xl md:text-8xl font-bold tracking-tighter absolute text-red-500 opacity-70"
//               style={{ transform: 'translateX(-3px)' }}
//               animate={{ x: [-3, -2, -4, -3] }}
//               transition={{ duration: 0.1, repeat: Infinity }}
//             >
//               {displayText}
//             </motion.h1>
            
//             {/* Cyan channel (offset right) */}
//             <motion.h1 
//               className="text-6xl md:text-8xl font-bold tracking-tighter absolute text-cyan-400 opacity-70"
//               style={{ transform: 'translateX(3px)' }}
//               animate={{ x: [3, 4, 2, 3] }}
//               transition={{ duration: 0.1, repeat: Infinity }}
//             >
//               {displayText}
//             </motion.h1>
            
//             {/* Main white text */}
//             <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter relative">
//               {displayText}
//             </h1>
//           </div>

//           {/* Subtitle with glitch */}
//           <AnimatePresence>
//             {showSub && (
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="relative mt-4"
//               >
//                 {/* Red channel */}
//                 <span className="text-lg md:text-xl text-red-500 opacity-60 absolute tracking-widest uppercase"
//                   style={{ transform: 'translateX(-2px)' }}>
//                   {displaySub}
//                 </span>
//                 {/* Cyan channel */}
//                 <span className="text-lg md:text-xl text-cyan-400 opacity-60 absolute tracking-widest uppercase"
//                   style={{ transform: 'translateX(2px)' }}>
//                   {displaySub}
//                 </span>
//                 {/* Main */}
//                 <span className="text-lg md:text-xl text-gray-400 tracking-widest uppercase relative">
//                   {displaySub}
//                 </span>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* Digital Blocks Progress Bar */}
//           <div className="absolute bottom-24 flex gap-1">
//             {Array.from({ length: totalBlocks }).map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="w-3 h-6 bg-white"
//                 initial={{ opacity: 0.1, scaleY: 0.3 }}
//                 animate={{ 
//                   opacity: i < filledBlocks ? 1 : 0.1,
//                   scaleY: i < filledBlocks ? 1 : 0.3,
//                   backgroundColor: i < filledBlocks ? '#ffffff' : '#333333'
//                 }}
//                 transition={{ duration: 0.1 }}
//               />
//             ))}
//           </div>

//           {/* Glitch scanlines overlay */}
//           <div 
//             className="absolute inset-0 pointer-events-none opacity-10"
//             style={{
//               backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
//             }}
//           />
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Loader;