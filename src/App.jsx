import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import OpeningScreen from './components/OpeningScreen.jsx';
import MusicToggle from './components/MusicToggle.jsx';
import Hero from './components/Hero.jsx';
import Invitation from './components/Invitation.jsx';
import Couple from './components/Couple.jsx';
import Countdown from './components/Countdown.jsx';
import Events from './components/Events.jsx';
import Venue from './components/Venue.jsx';
import Gallery from './components/Gallery.jsx';
import Rsvp from './components/Rsvp.jsx';
import Footer from './components/Footer.jsx';
import useBackgroundMusic from './hooks/useBackgroundMusic.js';
import { meta, music } from './data/wedding.js';

export default function App() {
  const [entered, setEntered] = useState(false);
  const { isPlaying, available, play, pause, toggle } = useBackgroundMusic(music.src);

  // The page must not scroll behind the closed temple doors.
  useEffect(() => {
    document.body.style.overflow = entered ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [entered]);

  // Keep the tab title in sync with src/data/wedding.js
  useEffect(() => {
    document.title = meta.title;
  }, []);

  // Don't burn the guest's battery if they switch apps.
  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.hidden) pause();
    };
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => document.removeEventListener('visibilitychange', onVisibilityChange);
  }, [pause]);

  const handleEnter = () => {
    setEntered(true);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <>
      <AnimatePresence>
        {!entered && (
          <motion.div
            key="opening-screen"
            className="relative z-50"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <OpeningScreen onEnter={handleEnter} onUnlockAudio={play} />
          </motion.div>
        )}
      </AnimatePresence>

      <main
        id="main"
        aria-hidden={!entered}
        className={`relative overflow-x-hidden ${entered ? '' : 'pointer-events-none'}`}
      >
        <Hero />
        <Invitation />
        <Couple />
        <Countdown />
        <Events />
        <Venue />
        <Gallery />
        <Rsvp />
        <Footer />
      </main>

      {entered && (
        <MusicToggle available={available} isPlaying={isPlaying} onToggle={toggle} label={music.label} />
      )}
    </>
  );
}
