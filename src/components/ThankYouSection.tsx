import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, Share2, ChevronUp, Check, ExternalLink } from 'lucide-react';
import { eventData } from '../data/eventData';

interface ThankYouSectionProps {
  isPlaying: boolean;
  setIsPlaying: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export const ThankYouSection: React.FC<ThankYouSectionProps> = ({ isPlaying, setIsPlaying }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: `${eventData.couple.bride} and ${eventData.couple.groom} - Wedding Invitation`,
      text: `You're invited to celebrate the wedding of ${eventData.couple.bride} and ${eventData.couple.groom} on ${eventData.dateTime.dateFormatted}.`,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="thank-you"
      className="pt-10 sm:pt-16 pb-0 px-4 bg-transparent text-center relative overflow-hidden flex flex-col justify-between"
    >
      <div className="max-w-3xl mx-auto relative z-10 space-y-6 sm:space-y-8 flex-1">
        {/* Celebration Header */}
        <motion.div
          initial={{ opacity: 0, y: 22, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-2"
        >
          <h2 className="font-eb-garamond text-xs sm:text-base md:text-lg font-bold tracking-[0.24em] sm:tracking-[0.32em] text-[#1D4E89] uppercase max-w-lg mx-auto leading-relaxed">
            {eventData.closing.header}
          </h2>
          <div className="flex items-center justify-center gap-3 py-1">
            <div className="h-[1px] w-12 sm:w-16 bg-[#C5A059]/50" />
            <span className="text-[#C5A059] text-[9px]">✦</span>
            <div className="h-[1px] w-12 sm:w-16 bg-[#C5A059]/50" />
          </div>
        </motion.div>

        {/* Vinyl Disc Player */}
        <div className="flex flex-col items-center justify-center py-2 sm:py-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 cursor-pointer select-none group"
            onClick={() => setIsPlaying((prev) => !prev)}
          >
            {/* Spinning Disc */}
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{
                duration: 12,
                repeat: isPlaying ? Infinity : 0,
                ease: 'linear',
              }}
              className="w-full h-full relative"
            >
              <img
                src="/images/music-cd.png"
                alt="Celebration Music Vinyl Record"
                className="w-full h-full object-contain filter drop-shadow-[0_12px_30px_rgba(29,78,137,0.35)]"
                draggable={false}
              />
            </motion.div>

            {/* Center Play/Pause Badge */}
            <div className="absolute inset-0 m-auto w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#1D4E89]/85 text-[#F3E5AB] border-2 border-[#C5A059] flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:scale-105 transition-transform">
              {isPlaying ? (
                <Pause className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
              ) : (
                <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
              )}
            </div>
          </motion.div>

          <p className="font-sans-ui text-[10px] sm:text-xs font-semibold tracking-wider text-[#1D4E89]/70 uppercase pt-3">
            {isPlaying ? 'Playing Ceremonial Melody' : 'Click Disc to Play Song'}
          </p>
        </div>

        {/* Jazak Allahu Khairan Calligraphy */}
        <motion.div
          initial={{ opacity: 0, y: 22, filter: 'blur(6px)', scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-1.5 sm:space-y-2"
        >
          <h3 className="font-script text-4xl sm:text-6xl md:text-7xl text-[#1D4E89] font-normal leading-tight select-none">
            {eventData.closing.arabicGreeting}
          </h3>
          <p className="font-eb-garamond text-xs sm:text-sm text-[#1D4E89]/80 italic">
            {eventData.closing.subtext}
          </p>
        </motion.div>

        {/* Action Buttons: Share & Back to Top */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 pt-2 pb-6">
          <motion.button
            id="btn-share-invite"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full bg-white text-[#1D4E89] border border-[#1D4E89]/30 hover:border-[#1D4E89] shadow-sm hover:shadow-md transition-all text-xs font-sans-ui font-semibold uppercase tracking-wider cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Share Invitation</span>
              </>
            )}
          </motion.button>

          <motion.button
            id="btn-back-to-top"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            title="Back to Top"
            className="inline-flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white text-[#1D4E89] border border-[#1D4E89]/30 hover:border-[#1D4E89] shadow-sm hover:shadow-md transition-all text-xs font-sans-ui font-semibold uppercase tracking-wider cursor-pointer"
          >
            <ChevronUp className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Top</span>
          </motion.button>
        </div>
      </div>

      {/* Footer Botanical Border and Credits */}
      <div className="w-full relative pt-12 pb-6 mt-6 sm:mt-10 overflow-hidden">
        {/* Bottom Floral Background Pattern */}
        <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 footer-floral-bg pointer-events-none opacity-85 z-0" />

       
      </div>
    </footer>
  );
};
