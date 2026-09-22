import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { eventData } from '../data/eventData';

export const EventDetailsCard: React.FC = () => {
  return (
    <section
      id="event-details"
      className="py-8 sm:py-12 px-3 sm:px-4 bg-transparent text-center relative overflow-hidden"
    >
      <div className="max-w-md mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl sm:rounded-[2rem] p-4 sm:p-7 border border-[#C5A059]/70 overflow-hidden text-left bg-[#0D2547] shadow-xl"
        >
          {/* Background Layer */}
          <div
            className="absolute left-0 right-0 top-0 pointer-events-none select-none z-0 opacity-75"
            style={{
              bottom: '-140px',
              backgroundImage: 'url("/images/bg-3.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center bottom',
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/* Gradient Tint */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#0D2547]/88 via-[#13355F]/82 to-[#0A1D36]/90 backdrop-blur-[1px] pointer-events-none z-10" />

          {/* Floral Cascade Overlay Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 inset-y-0 h-full w-[44%] sm:w-1/2 pointer-events-none select-none z-15 flex justify-end overflow-hidden"
          >
            <img
              src="/images/flower-4.png"
              alt="Royal Blue Floral Cascade"
              className="h-full w-auto min-h-full max-w-none object-cover object-right opacity-80 sm:opacity-90 pointer-events-none filter drop-shadow-[0_4px_14px_rgba(0,0,0,0.45)]"
            />
          </motion.div>

          {/* Content Card */}
          <div className="relative z-20 space-y-4 sm:space-y-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-center space-y-1.5 sm:space-y-2 pb-0.5 sm:pb-1"
            >
              <h2 className="font-eb-garamond text-xl sm:text-3xl font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#FFFFFF] uppercase leading-tight drop-shadow-xs">
                EVENT DETAILS
              </h2>
              <div className="flex items-center justify-center gap-2.5">
                <div className="h-[1px] w-10 sm:w-16 bg-[#C5A059]/60" />
                <span className="text-[#C5A059] text-[8px] sm:text-[10px]">✦</span>
                <div className="h-[1px] w-10 sm:w-16 bg-[#C5A059]/60" />
              </div>
            </motion.div>

            {/* List of Details */}
            <div className="space-y-3 sm:space-y-4">
              {/* Date */}
              <motion.div
                initial={{ opacity: 0, x: -25, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: false }}
                transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-white/10"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#C5A059] bg-[#C5A059]/20 flex items-center justify-center shrink-0 shadow-md shadow-black/20">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#F3E5AB]" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <span className="font-sans-ui text-[9px] sm:text-[10.5px] font-bold tracking-[0.18em] text-[#E5C77F] uppercase block">
                    DATE
                  </span>
                  <h3 className="font-eb-garamond text-base sm:text-2xl font-bold text-[#FFFFFF] leading-tight truncate">
                    {eventData.dateTime?.dateFormatted || 'Sunday, January 3, 2027'}
                  </h3>
                  <p className="font-sans-ui text-[11px] sm:text-xs text-[#E2E8F0]/80 font-medium">
                    {eventData.dateTime?.period || 'Saturday After Noon'}
                  </p>
                </div>
              </motion.div>

              {/* Time */}
              <motion.div
                initial={{ opacity: 0, x: -25, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: false }}
                transition={{ duration: 0.85, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-white/10"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#C5A059] bg-[#C5A059]/20 flex items-center justify-center shrink-0 shadow-md shadow-black/20">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#F3E5AB]" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <span className="font-sans-ui text-[9px] sm:text-[10.5px] font-bold tracking-[0.18em] text-[#C5A059] uppercase block">
                    TIME
                  </span>
                  <h3 className="font-eb-garamond text-base sm:text-2xl font-bold text-[#FFFFFF] leading-tight truncate">
                    {eventData.dateTime?.time ? `At ${eventData.dateTime.time}` : 'At 11:30 AM'}
                  </h3>
                  <p className="font-sans-ui text-[11px] sm:text-xs text-[#E2E8F0]/80 font-medium">
                    {eventData.dateTime?.timeNote || 'Ceremony Begins Promptly'}
                  </p>
                </div>
              </motion.div>

              {/* Venue */}
              <motion.div
                initial={{ opacity: 0, x: -25, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: false }}
                transition={{ duration: 0.85, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 sm:gap-4 pt-0.5 sm:pt-1"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#C5A059] bg-[#C5A059]/20 flex items-center justify-center shrink-0 shadow-md shadow-black/20">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#F3E5AB]" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <span className="font-sans-ui text-[9px] sm:text-[10.5px] font-bold tracking-[0.18em] text-[#E5C77F] uppercase block">
                    VENUE
                  </span>
                  <h3 className="font-eb-garamond text-base sm:text-2xl font-bold text-[#FFFFFF] leading-tight truncate">
                    {eventData.couple.venueName}
                  </h3>
                  <p className="font-sans-ui text-[11px] sm:text-xs text-[#E2E8F0]/80 font-medium truncate">
                    {eventData.couple.venueLocation}, {eventData.venue?.city || 'Mudipu'}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
