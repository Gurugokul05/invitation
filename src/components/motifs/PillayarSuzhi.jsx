import { motion, useReducedMotion } from 'framer-motion';
import { useId } from 'react';

/**
 * Pillayar Suzhi — the auspicious "உ" that opens a Tamil invitation.
 *
 * The glyph itself is the real Tamil letter rendered in Noto Serif Tamil (the
 * suzhi is a stylised உ), framed by a kolam ring that draws itself on mount.
 *
 * Sizing: the box is 1em square, so a single font-size class controls the whole
 * motif — e.g. className="text-[5rem] sm:text-[7rem]".
 */
export default function PillayarSuzhi({ className = '', draw = true }) {
  const reduced = useReducedMotion();
  const gradientId = `suzhi-${useId().replace(/:/g, '')}`;
  const shouldDraw = draw && !reduced;

  return (
    <div className={`relative grid h-[1em] w-[1em] place-items-center ${className}`}>
      {/* warm halo so the glyph never sits flat on the background */}
      <span
        className="pointer-events-none absolute inset-[-25%] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(232,185,35,0.28) 0%, rgba(232,185,35,0.05) 55%, transparent 72%)',
        }}
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        role="presentation"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E8B923" />
            <stop offset="50%" stopColor="#C9A227" />
            <stop offset="100%" stopColor="#E4C868" />
          </linearGradient>
        </defs>

        {/* the ring that draws itself */}
        <motion.circle
          cx="50"
          cy="50"
          r="45.5"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="1.4"
          strokeLinecap="round"
          initial={shouldDraw ? { pathLength: 0, opacity: 0.2 } : false}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.2 }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="38.5"
          fill="none"
          stroke="#C9A227"
          strokeOpacity="0.55"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="1.6 6"
          initial={shouldDraw ? { pathLength: 0 } : false}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: 'easeInOut', delay: 0.45 }}
        />

        {/* eight kolam diamonds strung on the ring */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <path
            key={deg}
            d="M50 2.4 L53.2 6 L50 9.6 L46.8 6 Z"
            fill="#E8B923"
            fillOpacity={deg % 90 === 0 ? 0.9 : 0.5}
            transform={`rotate(${deg} 50 50)`}
          />
        ))}
      </svg>

      <motion.span
        className="gold-text relative font-tamil font-semibold leading-none"
        style={{ fontSize: '0.8em' }}
        initial={shouldDraw ? { opacity: 0, scale: 0.7 } : false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        role="img"
        aria-label="பிள்ளையார் சுழி"
      >
        உ
      </motion.span>
    </div>
  );
}
