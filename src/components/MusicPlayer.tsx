import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, setIsPlaying }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.75;
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Playback prevented by browser until user interaction:', err);
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 sm:bottom-5 sm:right-5 z-50">
      <audio ref={audioRef} src="/audio/music1.mp3" loop preload="auto" playsInline />

      <div className="relative flex items-center">
        {/* Pulsing halo when playing */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.08, 0.3] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-1 rounded-[1.4rem] bg-[#C5A059] blur-md pointer-events-none"
            />
          )}
        </AnimatePresence>

        <motion.button
          id="btn-music-toggle"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsPlaying((prev) => !prev)}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
          title={isPlaying ? 'Pause background music' : 'Play background music'}
          className={`relative flex h-12 min-w-12 sm:h-14 sm:min-w-14 items-center justify-center gap-2 rounded-[1.15rem] border px-3 sm:px-4 transition-all duration-300 shadow-[0_10px_26px_rgba(19,42,76,0.18)] backdrop-blur-xl cursor-pointer select-none ${
            isPlaying
              ? 'bg-[#173F73]/95 text-[#FFF8E7] border-[#D7B46A] shadow-[0_8px_24px_rgba(23,63,115,0.35)]'
              : 'bg-[#FFFDF8]/95 text-[#173F73] border-[#173F73]/20 hover:border-[#D7B46A] hover:bg-white'
          }`}
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15">
            {isPlaying ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </span>
          <span className="hidden text-left sm:block">
            <span className="block font-royal text-[10px] uppercase tracking-[0.22em] opacity-75">Our melody</span>
            <span className="block font-serif-classic text-sm leading-4">{isPlaying ? 'Playing' : 'Play music'}</span>
          </span>
          {isPlaying && (
            <span className="hidden h-5 items-end gap-0.5 sm:flex" aria-hidden="true">
              {[0, 1, 2, 3].map((bar) => (
                <motion.span
                  key={bar}
                  animate={{ height: ['35%', '100%', '55%', '80%', '35%'] }}
                  transition={{ duration: 0.9, repeat: Infinity, delay: bar * 0.12, ease: 'easeInOut' }}
                  className="w-0.5 rounded-full bg-[#F3D58A]"
                />
              ))}
            </span>
          )}
        </motion.button>
      </div>
    </div>
  );
};
