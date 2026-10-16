import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import PillayarSuzhi from './motifs/PillayarSuzhi.jsx';
import Petals from './Petals.jsx';
import MangoLeafToran from './motifs/Toran.jsx';
import { JasmineGarland } from './motifs/Ornaments.jsx';
import { opening, couple } from '../data/wedding.js';

/**
 * The first impression: a closed set of carved temple doors.
 * Tapping "அழைப்பிதழைத் திறக்க" swings them open, releases a shower of jasmine
 * petals and starts the nadaswaram.
 */
export default function OpeningScreen({ onEnter, onUnlockAudio }) {
  const [opened, setOpened] = useState(false);
  const reduced = useReducedMotion();

  const openDuration = reduced ? 0.25 : 1.5;

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
    // Called inside the click handler so the browser treats it as a user
    // gesture and allows audio playback.
    onUnlockAudio?.();
    window.setTimeout(() => onEnter?.(), reduced ? 400 : 1500);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      onClick={handleOpen}
      role="presentation"
    >
      {/* ---------------------------------------------------- temple doors */}
      <DoorPanel side="left" opened={opened} duration={openDuration} />
      <DoorPanel side="right" opened={opened} duration={openDuration} />

      {/* the entrance toran stays put while the doors swing open */}
      <MangoLeafToran className="absolute inset-x-0 top-0 z-40" height={64} />

      {/* ------------------------------------------------- petals on opening */}
      <AnimatePresence>
        {opened && !reduced && <Petals key="petals" count={24} className="z-30" />}
      </AnimatePresence>

      {/* ------------------------------------------------------- centre text */}
      <motion.div
        className="relative z-40 flex h-full flex-col items-center justify-center px-6 text-center"
        animate={opened ? { opacity: 0, scale: 0.94 } : { opacity: 1, scale: 1 }}
        transition={{ duration: reduced ? 0.2 : 0.45, ease: 'easeOut' }}
      >
        {/* warm halo behind the lamp-lit text */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(232,185,35,0.22) 0%, rgba(232,185,35,0.06) 45%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <PillayarSuzhi className="text-[5.5rem] sm:text-[7rem]" />

        <p className="relative mt-4 font-tamil text-lg text-turmeric text-shadow-gold sm:text-2xl">
          {opening.sloka}
        </p>
        <p className="eyebrow relative mt-1 text-cream/60">{opening.slokaMeaning}</p>

        <div className="relative my-7 flex items-center gap-3">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/80 sm:w-20" />
          <span className="font-tamil text-xl text-cream sm:text-2xl">
            {couple.groom.nameTamil} &amp; {couple.bride.nameTamil}
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/80 sm:w-20" />
        </div>

        <button
          type="button"
          onClick={handleOpen}
          className="group relative inline-flex items-center gap-3 rounded-full border border-turmeric/60
                     bg-gradient-to-br from-turmeric via-gold to-[#E4C868] px-7 py-3.5
                     font-tamil text-base font-semibold text-maroon-deep shadow-lamp
                     transition-transform active:scale-[0.97] sm:text-lg"
        >
          {!reduced && (
            <motion.span
              className="pointer-events-none absolute inset-0 rounded-full border border-turmeric/80"
              animate={{ scale: [1, 1.22], opacity: [0.75, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              aria-hidden="true"
            />
          )}
          <svg viewBox="0 0 24 24" className="relative h-5 w-5" aria-hidden="true">
            <path
              d="M12 3 L14.6 8.6 L21 9.4 L16.3 13.7 L17.6 20 L12 17 L6.4 20 L7.7 13.7 L3 9.4 L9.4 8.6 Z"
              fill="#4A0A12"
              fillOpacity="0.85"
            />
          </svg>
          <span className="relative">{opening.cta}</span>
        </button>

        <p className="relative mt-3 font-display text-[0.62rem] uppercase tracking-widest2 text-cream/55 sm:text-xs">
          {opening.ctaEnglish}
        </p>

        {/* musical hint — the guest needs to know sound starts on tap */}
        <p className="relative mt-6 flex items-center justify-center gap-2 text-sm text-turmeric/80">
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <path
              d="M9 18V6l10-2v12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
            <circle cx="6.5" cy="18" r="2.5" fill="currentColor" />
            <circle cx="16.5" cy="16" r="2.5" fill="currentColor" />
          </svg>
          <span className="font-tamil">{opening.hint}</span>
        </p>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ DOORS */
function DoorPanel({ side, opened, duration }) {
  const isLeft = side === 'left';

  return (
    <motion.div
      className={`absolute inset-y-0 w-1/2 overflow-hidden ${isLeft ? 'left-0' : 'right-0'}`}
      initial={false}
      animate={{ x: opened ? (isLeft ? '-101%' : '101%') : '0%' }}
      transition={{ duration, ease: [0.76, 0, 0.24, 1] }}
      style={{ willChange: 'transform' }}
      aria-hidden="true"
    >
      {/* carved, brass-lit timber */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(180deg, #5A0C15 0%, #6B0F1A 35%, #4A0A12 100%)',
        }}
      />

      {/* carved panel outline, like an inlaid door leaf */}
      <div
        className={`absolute inset-y-[7%] w-[58%] rounded-sm border border-gold/25 ${
          isLeft ? 'right-[9%]' : 'left-[9%]'
        }`}
      />
      <div
        className={`absolute inset-y-[7%] w-[58%] rounded-sm border border-gold/12 ${
          isLeft ? 'right-[12%]' : 'left-[12%]'
        }`}
      />

      {/* vertical carved grain */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, rgba(201,162,39,0.22) 0 1px, transparent 1px 16px)',
        }}
      />

      {/* brass studs in a column */}
      <div className={`absolute top-[8%] flex flex-col gap-5 ${isLeft ? 'left-6' : 'right-6'}`}>
        {Array.from({ length: 7 }, (_, i) => (
          <span
            key={i}
            className="h-2.5 w-2.5 rounded-full bg-gold/70 shadow-[0_0_8px_rgba(232,185,35,0.6)]"
          />
        ))}
      </div>

      {/* jasmine garland strung low across each door leaf */}
      <JasmineGarland
        className={`absolute bottom-[9%] w-full opacity-90 ${isLeft ? '' : ''}`}
        flip={!isLeft}
      />

      {/* gilded inner edge + depth shadow */}
      <div
        className={`absolute inset-y-0 w-1 ${isLeft ? 'right-0' : 'left-0'}`}
        style={{
          backgroundImage: 'linear-gradient(180deg, #E4C868, #C9A227 50%, #9A7A17)',
        }}
      />
      <div
        className={`absolute inset-y-0 w-6 ${isLeft ? 'right-0' : 'left-0'}`}
        style={{
          backgroundImage: `linear-gradient(${isLeft ? '270deg' : '90deg'}, transparent, rgba(0,0,0,0.5))`,
        }}
      />
    </motion.div>
  );
}
