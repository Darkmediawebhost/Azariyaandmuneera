import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CalendarPlus, MapPin } from 'lucide-react';
import { eventData } from '../data/eventData';

export const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [status, setStatus] = useState<'upcoming' | 'live' | 'completed'>('upcoming');
  const [isAddingCalendar, setIsAddingCalendar] = useState(false);

  useEffect(() => {
    const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
    const forcedStatus = urlParams ? urlParams.get('status') : null;

    const targetTime = new Date(eventData.couple.targetDate || '2027-01-03T11:30:00').getTime();
    const endTime = new Date(eventData.couple.endDate || '2027-01-03T20:00:00').getTime();

    const updateTimer = () => {
      if (forcedStatus && ['upcoming', 'live', 'completed'].includes(forcedStatus)) {
        setStatus(forcedStatus as 'upcoming' | 'live' | 'completed');
        if (forcedStatus !== 'upcoming') return;
      }

      const now = new Date().getTime();
      if (now >= endTime) {
        setStatus('completed');
      } else if (now >= targetTime) {
        setStatus('live');
      } else {
        setStatus('upcoming');
        const diff = targetTime - now;
        if (diff > 0) {
          setTimeLeft({
            days: Math.floor(diff / 864e5),
            hours: Math.floor((diff % 864e5) / 36e5),
            minutes: Math.floor((diff % 36e5) / 6e4),
            seconds: Math.floor((diff % 6e4) / 1e3),
          });
        }
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAddToCalendar = () => {
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      `${eventData.couple.bride} and ${eventData.couple.groom} - Wedding`
    )}&dates=20270103T060000Z/20270103T100000Z&details=${encodeURIComponent(
      `Joyfully celebrating the Nikah of ${eventData.couple.bride} and ${eventData.couple.groom}.\n\nVenue: ${eventData.couple.fullAddress}`
    )}&location=${encodeURIComponent(eventData.couple.fullAddress)}`;

    setIsAddingCalendar(true);
    window.open(gCalUrl, '_blank');
    setTimeout(() => setIsAddingCalendar(false), 4000);
  };

  return (
    <section
      id="date-countdown"
      className="py-6 sm:py-16 px-3 sm:px-6 bg-transparent text-center relative overflow-hidden"
    >
      <div className="max-w-xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl sm:rounded-[2.5rem] p-2.5 sm:p-6 border border-[#C5A059]/50 text-center overflow-hidden bg-[#FAF8F5]"
        >
          {/* Floral Background */}
          <img
            src="/images/bg-flower.jpg"
            alt="Floral Background Pattern"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0 opacity-90"
          />

          <div className="relative z-10 bg-gradient-to-b from-white/93 via-[#FAF8F5]/90 to-white/92 backdrop-blur-md rounded-2xl sm:rounded-[2rem] px-3 py-4 sm:px-8 sm:py-8 border border-[#C5A059]/40 sm:border-2 overflow-hidden">
            {/* Top gold glow bar */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-90" />
            <div className="absolute inset-1 sm:inset-3 border border-[#C5A059]/25 rounded-xl sm:rounded-2xl pointer-events-none z-0" />

            {/* Bottom Floral Accents */}
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.92 }}
              whileInView={{ opacity: 0.85, x: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -left-3 sm:-left-1 -bottom-3 sm:-bottom-4 w-18 sm:w-32 md:w-36 pointer-events-none select-none z-0"
            >
              <img
                src="/images/flower-6.png"
                alt="Floral Accent Bottom Left"
                className="w-full h-auto object-contain transform scale-x-[-1] filter drop-shadow-[0_2px_8px_rgba(29,78,137,0.12)] opacity-85"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.92 }}
              whileInView={{ opacity: 0.85, x: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -right-3 sm:-right-1 -bottom-3 sm:-bottom-4 w-18 sm:w-32 md:w-36 pointer-events-none select-none z-0"
            >
              <img
                src="/images/flower-6.png"
                alt="Floral Accent Bottom Right"
                className="w-full h-auto object-contain filter drop-shadow-[0_2px_8px_rgba(29,78,137,0.12)] opacity-85"
              />
            </motion.div>

            {/* Content Body */}
            <div className="relative z-10 space-y-2.5 sm:space-y-4">
              {/* Save the Date script */}
              <motion.div
                initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: false }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-script text-xl sm:text-3xl md:text-4xl text-[#C5A059] leading-tight select-none">
                  Save the Date
                </p>
              </motion.div>

              {/* Day, Month, Year */}
              <div className="space-y-0.5 sm:space-y-1 py-0">
                <motion.h3
                  initial={{ opacity: 0, scale: 0.82, filter: 'blur(8px)' }}
                  whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.95, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="font-royal text-4xl sm:text-6xl md:text-7xl font-bold text-[#1D4E89] leading-none tracking-tight select-none"
                >
                  {eventData.dateTime?.day || '19'}
                </motion.h3>

                <motion.h4
                  initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.9, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  className="font-royal text-base sm:text-2xl md:text-3xl font-extrabold text-[#1D4E89] tracking-[0.16em] sm:tracking-[0.2em] uppercase leading-tight select-none pt-0.5"
                >
                  {eventData.dateTime?.monthUpper || 'SEPTEMBER'}
                </motion.h4>

                <motion.p
                  initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.46, ease: [0.22, 1, 0.36, 1] }}
                  className="font-royal text-xs sm:text-base md:text-lg font-semibold text-[#C5A059] tracking-[0.28em] sm:tracking-[0.42em] select-none pt-0.5"
                >
                  {eventData.dateTime?.yearSpaced || eventData.dateTime?.year || '2 0 2 6'}
                </motion.p>
              </div>

              {/* Diamond divider */}
              <div className="flex items-center justify-center gap-2 py-0">
                <span className="h-[1px] w-6 sm:w-14 bg-[#C5A059]/40" />
                <span className="text-[#C5A059] text-[7px] sm:text-[9px] select-none">◆</span>
                <span className="h-[1px] w-6 sm:w-14 bg-[#C5A059]/40" />
              </div>

              {/* Countdown Header Badge */}
              <div className="space-y-2 sm:space-y-3 pt-0">
                <motion.div
                  key={`${status}-header`}
                  initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center justify-center"
                >
                  {status === 'live' ? (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      <p className="font-royal text-[9.5px] sm:text-xs font-bold uppercase tracking-[0.16em] sm:tracking-[0.2em] whitespace-nowrap select-none">
                        CELEBRATION IN PROGRESS
                      </p>
                    </div>
                  ) : status === 'completed' ? (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#1D4E89]">
                      <span className="text-[#C5A059] text-[10px]">✦</span>
                      <p className="font-royal text-[9.5px] sm:text-xs font-bold uppercase tracking-[0.16em] sm:tracking-[0.2em] whitespace-nowrap select-none">
                        EVENT CONCLUDED
                      </p>
                      <span className="text-[#C5A059] text-[10px]">✦</span>
                    </div>
                  ) : (
                    <p className="font-royal text-[9px] sm:text-xs font-bold text-[#1D4E89] uppercase tracking-[0.14em] sm:tracking-[0.24em] whitespace-nowrap select-none">
                      COUNTDOWN TO THE WEDDING
                    </p>
                  )}
                </motion.div>

                {/* Upcoming State: Timer Boxes */}
                {status === 'upcoming' && (
                  <motion.div
                    key="upcoming-block"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-2.5 sm:space-y-3"
                  >
                    <div className="flex items-center justify-center gap-1 sm:gap-2.5 max-w-sm sm:max-w-md mx-auto pt-0.5">
                      {[
                        { label: 'Days', val: timeLeft.days },
                        { label: 'Hours', val: timeLeft.hours },
                        { label: 'Minutes', val: timeLeft.minutes },
                        { label: 'Seconds', val: timeLeft.seconds },
                      ].map((item, idx) => (
                        <React.Fragment key={idx}>
                          <div className="group flex-1 min-w-0 max-w-[58px] sm:max-w-[80px] relative">
                            <div className="relative rounded-lg sm:rounded-2xl p-[1px] sm:p-[2px] bg-gradient-to-b from-[#FFE8A3] via-[#C5A059] to-[#785418] shadow-sm sm:shadow-[0_6px_14px_-2px_rgba(10,25,48,0.25)] transition-all duration-300 transform group-hover:-translate-y-0.5">
                              <div className="relative rounded-[calc(0.5rem-1px)] sm:rounded-[calc(1rem-1px)] py-1.5 px-0.5 sm:py-3 sm:px-2 bg-gradient-to-b from-[#1A3D6B] via-[#102747] to-[#071424] shadow-[inset_0_1px_3px_rgba(0,0,0,0.4)] overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-white/16 via-white/[0.03] to-transparent pointer-events-none z-10" />
                                <div className="absolute top-0 inset-x-1 sm:inset-x-2 h-[1px] bg-gradient-to-r from-transparent via-[#FFF1C9] to-transparent z-10 opacity-70" />
                                <span className="relative z-10 text-[6.5px] sm:text-[9px] text-[#E5C77F] font-sans-ui font-bold uppercase tracking-[0.08em] sm:tracking-[0.18em] mb-0.5 sm:mb-1 block truncate select-none">
                                  {item.label}
                                </span>
                                <span className="relative z-10 block text-base sm:text-3xl md:text-4xl font-royal font-bold text-[#FFFBF0] leading-none tracking-tight select-none">
                                  {String(item.val).padStart(2, '0')}
                                </span>
                              </div>
                            </div>
                          </div>

                          {idx < 3 && (
                            <div className="flex flex-col gap-1 select-none self-end pb-2 sm:pb-3.5 shrink-0">
                              <span className="w-0.5 h-0.5 sm:w-1.5 sm:h-1.5 rounded-full bg-[#C5A059] shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
                              <span className="w-0.5 h-0.5 sm:w-1.5 sm:h-1.5 rounded-full bg-[#C5A059] shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
                            </div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Add to Calendar Button */}
                    <div className="pt-1.5 sm:pt-2 flex justify-center relative z-10">
                      <motion.button
                        id="btn-add-calendar"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={handleAddToCalendar}
                        type="button"
                        className="group relative inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-6 sm:py-2.5 rounded-full bg-gradient-to-r from-[#1D4E89] via-[#163E6C] to-[#1D4E89] text-[#FBF3DC] border border-[#C5A059]/80 shadow-sm sm:shadow-md transition-all duration-300 cursor-pointer text-[9.5px] sm:text-xs font-sans-ui font-medium tracking-wider uppercase"
                      >
                        <CalendarPlus className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C5A059] group-hover:scale-110 transition-transform duration-300" />
                        <span>{isAddingCalendar ? 'Opening Calendar...' : 'Add to Calendar'}</span>
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {/* Live State Card */}
                {status === 'live' && (
                  <motion.div
                    key="live-block"
                    initial={{ opacity: 0, scale: 0.96, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-3 max-w-md mx-auto pt-1"
                  >
                    <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-b from-[#FFE8A3] via-[#C5A059] to-[#785418] shadow-md">
                      <div className="rounded-[calc(1rem-1.5px)] p-4 sm:p-5 bg-gradient-to-b from-[#1A3D6B] via-[#102747] to-[#071424] text-white text-center space-y-2">
                        <p className="font-eb-garamond text-xs sm:text-sm text-[#FBF3DC]">
                          The auspicious Nikah ceremony of{' '}
                          <span className="text-white font-bold">{eventData.couple.bride}</span> and{' '}
                          <span className="text-white font-bold">{eventData.couple.groom}</span> is underway!
                        </p>
                        <a
                          href={eventData.couple.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-[#E5C77F] hover:text-white font-medium underline"
                        >
                          <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                          <span>View Venue Location</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Completed State */}
                {status === 'completed' && (
                  <motion.div
                    key="completed-block"
                    initial={{ opacity: 0, scale: 0.96, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-md mx-auto pt-1 text-center"
                  >
                    <p className="font-eb-garamond text-xs sm:text-sm text-[#1D4E89] italic">
                      With heartfelt prayers and gratitude to all who joined us in celebrating this joyous milestone.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
