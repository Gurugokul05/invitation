import { motion } from 'framer-motion';

/**
 * Floating play/mute control, pinned above the home indicator.
 * Renders nothing at all when no audio source is available.
 */
export default function MusicToggle({ available, isPlaying, onToggle, label = 'நாதஸ்வரம்' }) {
  if (!available) return null;

  return (
    <motion.button
      type="button"
      onClick={onToggle}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      aria-label={isPlaying ? `${label} — இசையை நிறுத்து` : `${label} — இசையை இயக்கு`}
      aria-pressed={isPlaying}
      style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom, 0px))' }}
      className="fixed right-4 z-40 flex h-12 w-12 items-center justify-center
                 rounded-full border border-gold/70 bg-maroon/92 text-turmeric shadow-gold
                 backdrop-blur-sm active:scale-95 sm:h-14 sm:w-14"
    >
      {/* soft pulse while playing */}
      {isPlaying && (
        <span className="absolute inset-0 animate-ping rounded-full bg-turmeric/25" aria-hidden="true" />
      )}

      <svg viewBox="0 0 24 24" className="relative h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true">
        {isPlaying ? (
          <>
            <path
              d="M4 9h3l4-3.5v13L7 15H4z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <path
              d="M15.5 8.5c1.4 1 2.2 2.2 2.2 3.5s-.8 2.5-2.2 3.5M18.5 6c2.2 1.6 3.4 3.6 3.4 6s-1.2 4.4-3.4 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </>
        ) : (
          <>
            <path
              d="M4 9h3l4-3.5v13L7 15H4z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <path
              d="M15.5 9.5l5 5M20.5 9.5l-5 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </>
        )}
      </svg>
    </motion.button>
  );
}
