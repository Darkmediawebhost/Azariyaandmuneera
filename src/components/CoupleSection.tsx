import React from 'react';
import { motion } from 'motion/react';
import { eventData } from '../data/eventData';

export const CoupleSection: React.FC = () => {
  return (
    <section
      id="couple"
      className="pt-3 sm:pt-4 pb-12 sm:pb-16 px-4 bg-transparent text-center relative overflow-hidden"
    >
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl p-3 sm:p-8 md:p-14 shadow-xl border-2 border-[#1D4E89]/20 text-center overflow-hidden bg-[#FAF8F5]"
        >
          {/* Subtle floral background pattern */}
          <img
            src="/images/name-bg.jpg"
            alt="Name Background Pattern"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0 opacity-90"
          />

          <div className="relative z-10 space-y-4 sm:space-y-7 bg-[#FAF8F5]/85 backdrop-blur-md rounded-2xl p-4 sm:p-8 md:p-10 border-2 border-white/90 shadow-[inset_0_2px_6px_rgba(0,0,0,0.06),0_10px_30px_rgba(29,78,137,0.15)]">
            {/* Family Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-center gap-2 sm:gap-4">
                <p className="font-eb-garamond text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.22em] sm:tracking-[0.3em] text-[#1D4E89] uppercase">
                  {eventData.couple.familyGreeting || 'TOGETHER WITH THEIR FAMILIES'}
                </p>
              </div>
            </motion.div>

            {/* Names & Ampersand */}
            <div className="py-1 sm:py-2 space-y-3 sm:space-y-5">
             


 {/* Groom Name */}
              <motion.div
                initial={{ opacity: 0, y: 25, filter: 'blur(8px)', scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="font-royal text-[clamp(1.15rem,4.5vw,2rem)] sm:text-4xl md:text-5xl font-bold tracking-[0.16em] sm:tracking-[0.2em] text-[#1D4E89] uppercase leading-snug whitespace-nowrap">
                  {eventData.couple.groom}
                </h2>
              </motion.div>
              {/* Ampersand */}
              <div className="flex items-center justify-center gap-4 py-0.5 sm:py-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -20, filter: 'blur(6px)' }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.9, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
                  className="relative inline-flex items-center justify-center"
                >
                  <span className="font-script text-3xl sm:text-5xl md:text-6xl text-[#C5A059] font-normal leading-none drop-shadow-xs">
                    and
                  </span>
                </motion.div>
              </div>

               {/* Bride Name */}
              <motion.div
                initial={{ opacity: 0, y: 25, filter: 'blur(8px)', scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="font-royal text-[clamp(1.15rem,4.5vw,2rem)] sm:text-4xl md:text-5xl font-bold tracking-[0.12em] sm:tracking-[0.16em] text-[#1D4E89] uppercase leading-snug whitespace-nowrap">
                  {eventData.couple.bride}
                </h2>
              </motion.div>
            </div>

            {/* Romantic Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)', scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.1, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
              className="pt-1 pb-1"
            >
              <p className="font-script text-lg sm:text-2xl md:text-3xl text-[#1D4E89] tracking-wide font-normal leading-relaxed">
                "{eventData.couple.romanticQuote || eventData.couple.tagline || 'Our forever starts here.'}"
              </p>
            </motion.div>

            {/* Flower Accent Garland */}
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.88, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="pt-1 sm:pt-2 flex flex-col items-center justify-center"
            >
              <div className="relative flex items-center justify-center w-full max-w-[220px] sm:max-w-xs md:max-w-md">
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent" />
                <img
                  src="/images/flower-5.png"
                  alt="Botanical Flower Garland Accent"
                  className="relative z-10 w-36 sm:w-56 md:w-68 h-auto object-contain filter drop-shadow-[0_4px_14px_rgba(29,78,137,0.18)] select-none pointer-events-none"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
