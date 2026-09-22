import React from 'react';
import { motion } from 'motion/react';
import { eventData } from '../data/eventData';

export const MonogramCard: React.FC = () => {
  const brideInitial = eventData.couple?.monogram?.bride || 'H';
  const groomInitial = eventData.couple?.monogram?.groom || 'M';

  return (
    <section
      id="card"
      className="w-full py-8 sm:py-16 px-3 sm:px-6 relative overflow-hidden bg-transparent flex justify-center items-center"
    >
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center">
        <div className="w-full relative z-10 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="my-2 sm:my-4 relative w-full max-w-[280px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[620px] aspect-[420/594] flex items-center justify-center mx-auto"
          >
            {/* Floral Frame */}
            <img
              src="/images/hero-flwr.png"
              alt="Royal Blue Floral Frame"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none z-0 filter drop-shadow-md"
            />

            {/* Inner Monogram Typography */}
            <div className="absolute inset-0 m-auto w-[75%] h-[78%] flex flex-col items-center justify-center text-center z-10 pointer-events-none select-none">
              <div className="flex flex-col items-center justify-center space-y-0 sm:space-y-1">
                <motion.span
                  initial={{ opacity: 0, y: 24, filter: 'blur(8px)', scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="font-eb-garamond text-5xl sm:text-8xl md:text-[10rem] lg:text-[11.5rem] font-bold text-[#1D4E89] leading-none select-none tracking-tight drop-shadow-sm inline-block"
                >
                  H
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.55, filter: 'blur(6px)' }}
                  whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.85, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
                  className="font-eb-garamond text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[#1D4E89]/85 leading-none select-none my-0.5 sm:my-1 inline-block"
                >
                  &
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 24, filter: 'blur(8px)', scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.9, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
                  className="font-eb-garamond text-5xl sm:text-8xl md:text-[10rem] lg:text-[11.5rem] font-bold text-[#1D4E89] leading-none select-none tracking-tight drop-shadow-sm inline-block"
                >
                  M
                 
                </motion.span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
