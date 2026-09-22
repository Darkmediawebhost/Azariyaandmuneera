import React, { useState } from 'react';
import { EnvelopeModal } from './components/EnvelopeModal';
import { FallingHearts } from './components/FallingHearts';
import { BismillahHero } from './components/BismillahHero';
import { MonogramCard } from './components/MonogramCard';
import { CoupleSection } from './components/CoupleSection';
import { CountdownSection } from './components/CountdownSection';
import { VenueSection } from './components/VenueSection';
import { EventDetailsCard } from './components/EventDetailsCard';
import { BlessedChapterSection } from './components/BlessedChapterSection';
import { ThankYouSection } from './components/ThankYouSection';
import { MusicPlayer } from './components/MusicPlayer';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpenEnvelope = () => {
    setIsOpened(true);
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-porcelain-pattern relative overflow-x-hidden text-[#1E293B]">
      {/* Decorative Outer Border Frame */}
      <div className="fixed inset-2 sm:inset-3 md:inset-4 border border-[#C5A059]/25 rounded-2xl pointer-events-none z-30 shadow-[inset_0_0_20px_rgba(197,160,89,0.05)]">
        {/* Corner Accents */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#C5A059]/60 pointer-events-none" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#C5A059]/60 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#C5A059]/60 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#C5A059]/60 pointer-events-none" />
      </div>

      {/* Royal Opening Modal */}
      <EnvelopeModal onOpen={handleOpenEnvelope} />

      {/* Floating Interactive Hearts Background */}
      <FallingHearts isOpened={isOpened} />

      {/* Main Content Area */}
      <main className="relative z-10 w-full max-w-5xl mx-auto flex flex-col space-y-6 sm:space-y-12">
        {/* 1. Bismillah & Announcement Hero */}
        <BismillahHero isOpened={isOpened} />

        {/* 2. Royal Monogram Frame */}
        <MonogramCard />

        {/* 3. Couple Introduction */}
        <CoupleSection />

        {/* 4. Countdown to Event */}
        <CountdownSection />

        {/* 5. Venue & Directions */}
        <VenueSection />

        {/* 6. Event Details Card */}
        <EventDetailsCard />

        {/* 7. Blessed Quranic Chapter in Royal Sliding Pocket */}
        <BlessedChapterSection />

        {/* 8. Thank You & Vinyl Music Showcase */}
        <ThankYouSection isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </main>

      {/* Persistent Floating Music Controller */}
      <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  );
}
