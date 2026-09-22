import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MailOpen } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EnvelopeModalProps {
  onOpen: () => void;
}

const fireRoyalConfetti = () => {
  const colors = ['#C5A059', '#F3E5AB', '#1D4E89', '#3B82F6', '#FFFFFF', '#FFD700'];
  confetti({
    particleCount: 85,
    spread: 110,
    startVelocity: 45,
    origin: { x: 0.5, y: 0.5 },
    colors,
    ticks: 220,
    gravity: 0.95,
    scalar: 1.1,
    zIndex: 99999,
  });

  setTimeout(() => {
    confetti({
      particleCount: 60,
      angle: 60,
      spread: 70,
      origin: { x: 0.05, y: 0.8 },
      startVelocity: 58,
      colors,
      ticks: 240,
      gravity: 0.9,
      scalar: 1,
      zIndex: 99999,
    });
    confetti({
      particleCount: 60,
      angle: 120,
      spread: 70,
      origin: { x: 0.95, y: 0.8 },
      startVelocity: 58,
      colors,
      ticks: 240,
      gravity: 0.9,
      scalar: 1,
      zIndex: 99999,
    });
  }, 150);

  setTimeout(() => {
    confetti({
      particleCount: 50,
      spread: 130,
      origin: { x: 0.5, y: 0.2 },
      startVelocity: 28,
      colors: ['#F3E5AB', '#C5A059', '#FFFFFF', '#FFD700'],
      ticks: 260,
      gravity: 0.75,
      scalar: 0.9,
      zIndex: 99999,
    });
  }, 320);
};

export const EnvelopeModal: React.FC<EnvelopeModalProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    if (isOpening) {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpening]);

  // Preload flower image
  useEffect(() => {
    const img = new Image();
    img.src = '/images/flower-2.webp';
  }, []);

  // Flower pattern grid
  const flowers = useMemo(() => {
    const list: Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      rotate: number;
      targetX: number;
      targetY: number;
      targetRotate: number;
      delay: number;
    }> = [];
    let count = 0;
    const stepX = 16.5;
    const stepY = 13.5;

    for (let y = -14; y <= 114; y += stepY) {
      const rowOffset = Math.round((y + 14) / stepY) % 2 === 1 ? stepX / 2 : 0;
      for (let x = -14; x <= 114; x += stepX) {
        count++;
        const jitterX = (count * 7) % 5 - 2;
        const jitterY = (count * 11) % 5 - 2;
        const posX = x + rowOffset + jitterX;
        const posY = y + jitterY;
        const size = 190 + ((count * 29) % 65);
        const rot = (count * 47) % 360 - 180;
        const deltaX = posX - 50;
        const deltaY = posY - 50;
        const dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY) || 1;
        const angle = Math.atan2(deltaY, deltaX);
        const blastDist = 500 + dist * 5;
        const blastX = Math.cos(angle) * blastDist;
        const blastY = Math.sin(angle) * blastDist;
        const blastRot = rot + (deltaX >= 0 ? 80 + ((count * 11) % 40) : -80 - ((count * 11) % 40));

        list.push({
          id: count,
          x: posX,
          y: posY,
          size,
          rotate: rot,
          targetX: blastX,
          targetY: blastY,
          targetRotate: blastRot,
          delay: Math.min(dist * 0.002, 0.18),
        });
      }
    }
    return list;
  }, []);

  const handleOpen = () => {
    if (isOpening) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    setIsOpening(true);
    fireRoyalConfetti();
    onOpen?.();

    setTimeout(() => {
      setIsDismissed(true);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    }, 1450);
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {!isDismissed && (
        <motion.div
          id="invitation-overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: isOpening ? 0 : 1 }}
          transition={{ duration: 0.75, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleOpen}
          className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer select-none overflow-hidden bg-[#0A1D36]"
        >
          {/* Background overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#08172B] via-[#0D2547] to-[#071324] pointer-events-none z-0" />

          {/* Floral tiles with scatter animation */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
            {flowers.map((fl) => (
              <motion.div
                key={fl.id}
                initial={false}
                animate={
                  isOpening
                    ? {
                        x: fl.targetX,
                        y: fl.targetY,
                        rotate: fl.targetRotate,
                        scale: 0.85,
                        opacity: 0,
                      }
                    : {
                        x: 0,
                        y: 0,
                        rotate: fl.rotate,
                        scale: 1,
                        opacity: 1,
                      }
                }
                transition={{
                  duration: 1.25,
                  delay: isOpening ? fl.delay : 0,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  position: 'absolute',
                  left: `${fl.x}%`,
                  top: `${fl.y}%`,
                  width: `${fl.size}px`,
                  height: `${fl.size}px`,
                  marginLeft: `-${fl.size / 2}px`,
                  marginTop: `-${fl.size / 2}px`,
                  pointerEvents: 'none',
                  willChange: 'transform, opacity',
                }}
              >
                <picture>
                  <source type="image/webp" srcSet="/images/flower-2.webp" />
                  <img
                    src="/images/flower-2.png"
                    alt=""
                    className="w-full h-full object-contain pointer-events-none select-none"
                    loading="eager"
                    decoding="async"
                    draggable={false}
                  />
                </picture>
              </motion.div>
            ))}
          </div>

          {/* Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(5,15,30,0.6)_0%,transparent_60%)] pointer-events-none z-20" />

          {/* Center Button and Ripple */}
          <div className="relative z-30 flex flex-col items-center justify-center p-4">
            {isOpening && (
              <motion.div
                initial={{ scale: 0.85, opacity: 0.9 }}
                animate={{ scale: 3.2, opacity: 0 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-[#F3E5AB] bg-[radial-gradient(circle,rgba(243,229,171,0.35)_0%,transparent_70%)] pointer-events-none"
              />
            )}

            <div className="absolute w-36 h-36 sm:w-44 sm:h-44 bg-[#C5A059]/25 rounded-full blur-2xl pointer-events-none" />

            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={isOpening ? { scale: 0.75, opacity: 0 } : { scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.button
                id="btn-open-invitation"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpen();
                }}
                className="relative w-28 h-28 sm:w-34 sm:h-34 rounded-full bg-gradient-to-b from-[#133763] via-[#0D2547] to-[#08172B] text-[#F3E5AB] border-2 border-[#C5A059] shadow-[0_12px_45px_rgba(0,0,0,0.8),0_0_35px_rgba(197,160,89,0.55)] flex flex-col items-center justify-center gap-1 cursor-pointer group transition-all select-none p-2 aspect-square"
              >
                <div className="absolute inset-1.5 sm:inset-2 rounded-full border border-dashed border-[#C5A059]/60 pointer-events-none" />
                <MailOpen className="w-5 h-5 sm:w-6 sm:h-6 text-[#F3E5AB] transition-transform group-hover:scale-110 drop-shadow-sm" />
                <div className="text-center leading-tight">
                  <span className="block font-sans-ui text-[9.5px] sm:text-[11px] font-bold tracking-[0.25em] text-[#E5C77F] uppercase">
                    TAP TO
                  </span>
                  <span className="block font-sans-ui text-xs sm:text-sm font-extrabold tracking-[0.3em] text-[#FFFFFF] uppercase drop-shadow-xs">
                    OPEN
                  </span>
                </div>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
