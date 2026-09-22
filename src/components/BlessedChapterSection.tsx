import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { eventData } from '../data/eventData';

export const BlessedChapterSection: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const chapterTitle = eventData.blessings?.chapterTitle || 'A BLESSED CHAPTER';
  const quranicArabic = eventData.blessings?.quranicArabic || 'وَخَلَقْنَاكُمْ أَزْوَاجًا';
  const quranicTranslation = eventData.blessings?.quranicTranslation || 'And We created you in pairs';
  const verseCitation = eventData.blessings?.verseCitation || '— Surah An-Naba [78:8] —';
  const warmBlessings = eventData.blessings?.warmBlessings || 'Join us to celebrate with your warm prayers & blessings.';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="beautiful-chapter"
      className="py-8 sm:py-16 px-3 sm:px-4 bg-transparent text-center relative overflow-hidden"
    >
      <div className="max-w-xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative max-w-[500px] mx-auto pt-8 sm:pt-14 pb-2 select-none"
        >
          {/* Back pocket container */}
          <div className="absolute bottom-0 inset-x-0 h-28 sm:h-36 rounded-b-2xl sm:rounded-b-3xl bg-gradient-to-b from-[#0F2A4D] via-[#1D4E89] to-[#0A1E38] border-2 border-[#C5A059]/50 shadow-[0_20px_50px_-15px_rgba(13,37,71,0.25)] overflow-hidden z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(197,160,89,0.22)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute inset-1.5 sm:inset-2 border border-[#C5A059]/30 rounded-xl pointer-events-none" />
          </div>

          {/* Sliding Invitation Card */}
          <div
            className={`relative z-10 w-[94%] sm:w-[88%] mx-auto bg-gradient-to-b from-[#FFFFFF] via-[#FAF8F5] to-[#F8F5EE] rounded-2xl sm:rounded-3xl border sm:border-2 border-[#C5A059]/70 p-4 sm:p-8 md:p-9 pb-12 sm:pb-20 shadow-xl sm:shadow-2xl transition-all duration-1000 cubic-bezier(0.16,1,0.3,1) transform ${
              isInView
                ? '-translate-y-8 sm:-translate-y-12 opacity-100 scale-100 shadow-[0_25px_60px_-15px_rgba(13,37,71,0.28)]'
                : 'translate-y-8 sm:translate-y-12 opacity-40 scale-95 shadow-none'
            }`}
          >
            {/* Top gold bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent pointer-events-none rounded-t-2xl sm:rounded-t-3xl opacity-90" />
            <div className="absolute inset-1.5 sm:inset-2.5 border border-[#C5A059]/35 rounded-xl sm:rounded-2xl pointer-events-none" />

            {/* Title Header */}
            <motion.div
              initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-1 relative z-10"
            >
              <h2 className="font-eb-garamond text-[10px] sm:text-sm font-bold tracking-[0.24em] sm:tracking-[0.3em] text-[#1D4E89] uppercase">
                {chapterTitle}
              </h2>
              <div className="flex items-center justify-center gap-2.5 py-0.5">
                <div className="h-[1px] w-10 sm:w-16 bg-gradient-to-r from-transparent via-[#C5A059] to-[#C5A059]" />
                <span className="text-[#C5A059] text-[9px] sm:text-xs">✦</span>
                <div className="h-[1px] w-10 sm:w-16 bg-gradient-to-l from-transparent via-[#C5A059] to-[#C5A059]" />
              </div>
            </motion.div>

            {/* Arabic Quranic Verse */}
            <motion.div
              initial={{ opacity: 0, y: 25, filter: 'blur(8px)', scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="py-1 sm:py-3 relative z-10"
            >
              <p className="font-arabic text-2xl sm:text-5xl md:text-6xl text-[#1D4E89] leading-relaxed sm:leading-loose font-bold tracking-wide select-none drop-shadow-xs">
                {quranicArabic}
              </p>
            </motion.div>

            {/* English Translation in Script Font */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)', scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
              className="pb-1 sm:pb-2 relative z-10"
            >
              <h3 className="font-script text-2xl sm:text-5xl text-[#C5A059] font-normal leading-tight select-none">
                "{quranicTranslation}"
              </h3>
            </motion.div>

            {/* Verse Citation */}
            <motion.div
              initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <p className="font-sans-ui text-[9.5px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#1D4E89]/80 uppercase">
                {verseCitation}
              </p>
            </motion.div>

            {/* Warm Blessings Note */}
            <motion.div
              initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.68, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 pt-2.5 sm:mt-4 sm:pt-3 border-t border-[#C5A059]/20 relative z-10"
            >
              <p className="font-eb-garamond text-[11px] sm:text-sm font-medium text-[#1E293B]/80 italic">
                {warmBlessings}
              </p>
            </motion.div>

            {/* Heart Accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.78, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center pt-1.5 sm:pt-2 relative z-10"
            >
              <div>
                <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A059] fill-[#C5A059]/20 stroke-[1.5]" />
              </div>
            </motion.div>
          </div>

          {/* SVG Envelope Pocket Flaps */}
          <div className="absolute bottom-0 inset-x-0 h-28 sm:h-36 z-20 pointer-events-none">
            <svg
              viewBox="0 0 500 150"
              className="w-full h-full block overflow-hidden rounded-b-2xl sm:rounded-b-3xl"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="pocketLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#164070" />
                  <stop offset="100%" stopColor="#0D2545" />
                </linearGradient>
                <linearGradient id="pocketRight" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#18467A" />
                  <stop offset="100%" stopColor="#0F2B50" />
                </linearGradient>
                <linearGradient id="pocketBottom" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#123763" />
                  <stop offset="100%" stopColor="#0A1F38" />
                </linearGradient>
                <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C5A059" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#F3E5AB" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#C5A059" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              <polygon points="0,0 250,95 0,150" fill="url(#pocketLeft)" stroke="url(#goldLine)" strokeWidth="1.5" />
              <polygon points="500,0 250,95 500,150" fill="url(#pocketRight)" stroke="url(#goldLine)" strokeWidth="1.5" />
              <polygon points="0,150 250,70 500,150" fill="url(#pocketBottom)" stroke="url(#goldLine)" strokeWidth="2" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
