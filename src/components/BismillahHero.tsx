import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { eventData } from '../data/eventData';

interface BismillahHeroProps {
  isOpened?: boolean;
}

export const BismillahHero: React.FC<BismillahHeroProps> = ({ isOpened = false }) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={sectionRef}
      id="bismillah"
      className="pt-12 sm:pt-16 md:pt-20 pb-2 sm:pb-4 px-4 bg-transparent text-center relative overflow-hidden"
    >
      {/* Top Left Floral Corner */}
      <motion.img
        src="/images/flower-1.png"
        alt="Top Left Floral Corner"
        initial={{ opacity: 0, scale: 0.88, rotate: -4 }}
        animate={isOpened ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.88, rotate: -4 }}
        transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -top-6 -left-6 sm:-top-12 sm:-left-12 md:-top-16 md:-left-16 lg:-top-20 lg:-left-20 w-56 sm:w-88 md:w-[28rem] lg:w-[34rem] h-auto pointer-events-none select-none z-0 opacity-100"
      />

      {/* Top Right Floral Corner */}
      <motion.img
        src="/images/flower-1.png"
        alt="Top Right Floral Corner"
        initial={{ opacity: 0, scale: 0.88, rotate: 4 }}
        animate={isOpened ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.88, rotate: 4 }}
        transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -top-6 -right-6 sm:-top-12 sm:-right-12 md:-top-16 md:-right-16 lg:-top-20 lg:-right-20 w-56 sm:w-88 md:w-[28rem] lg:w-[34rem] h-auto transform scale-x-[-1] pointer-events-none select-none z-0 opacity-100"
      />

      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-4 sm:space-y-6 relative z-10">
        {/* Arabic Bismillah */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: 'blur(8px)', scale: 0.94 }}
          animate={isOpened ? { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 } : { opacity: 0, y: 35, filter: 'blur(8px)', scale: 0.94 }}
          transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="pt-6 sm:pt-10 md:pt-12"
        >
          <h1 className="font-arabic text-3xl sm:text-5xl md:text-7xl text-[#1D4E89] leading-relaxed tracking-wide font-bold drop-shadow-sm">
            {eventData.blessings.bismillahArabic}
          </h1>
        </motion.div>

        {/* Translation */}
        <motion.div
          initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
          animate={isOpened ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 25, filter: 'blur(6px)' }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-eb-garamond text-[11px] sm:text-sm md:text-base font-semibold tracking-[0.2em] sm:tracking-[0.28em] text-[#1D4E89] uppercase leading-relaxed max-w-sm sm:max-w-md mx-auto text-center">
            IN THE NAME OF ALLAH,
            <br />
            THE MOST BENEFICENT AND THE
            <br />
            MOST MERCIFUL
          </p>
        </motion.div>

        {/* Divider with star */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isOpened ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.85, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-3 py-0.5"
        >
          <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent via-[#C5A059] to-[#C5A059]" />
          <span className="text-[#C5A059] text-[10px]">✦</span>
          <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent via-[#C5A059] to-[#C5A059]" />
        </motion.div>

        {/* Announcement */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={isOpened ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 20, filter: 'blur(4px)' }}
          transition={{ duration: 0.9, delay: 0.82, ease: [0.22, 1, 0.36, 1] }}
          className="pt-1 sm:pt-2"
        >
          <p className="font-eb-garamond text-[11px] sm:text-base md:text-lg font-bold tracking-[0.28em] sm:tracking-[0.38em] text-[#1D4E89]/90 uppercase text-center">
            {eventData.couple.announcement || 'WE ARE GETTING'}
          </p>
        </motion.div>

        {/* Event Type / "Engaged" */}
        <div className="relative inline-flex items-center justify-center gap-3 sm:gap-5 pt-1 pb-0">
          <motion.h2
            initial={{ opacity: 0, scale: 0.86, y: 40, filter: 'blur(10px)' }}
            animate={isOpened ? { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, scale: 0.86, y: 40, filter: 'blur(10px)' }}
            transition={{ duration: 1.2, delay: 0.98, ease: [0.16, 1, 0.3, 1] }}
            className="font-script text-6xl sm:text-8xl md:text-[9.5rem] text-[#1D4E89] font-normal tracking-wide drop-shadow-md leading-none select-none text-center"
          >
            {eventData.couple.eventType || 'Engaged'}
          </motion.h2>
        </div>

        {/* Royal Blue Heart icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 22, filter: 'blur(4px)' }}
          animate={isOpened ? { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, scale: 0.6, y: 22, filter: 'blur(4px)' }}
          transition={{ duration: 0.95, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center pt-2 pb-0"
        >
          <img
            src="/images/heart.png"
            alt="Royal Blue Heart"
            className="w-14 sm:w-16 md:w-20 h-auto object-contain select-none pointer-events-none drop-shadow-sm"
          />
        </motion.div>
      </div>
    </section>
  );
};
