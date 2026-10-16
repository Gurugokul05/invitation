import { motion, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';

/**
 * Falling jasmine petals / marigold blossoms.
 * Pure Framer Motion — no images, so it costs nothing to download.
 * Returns null entirely when the user prefers reduced motion.
 */
export default function Petals({ count = 16, tone = 'jasmine', className = '' }) {
  const reduced = useReducedMotion();

  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 11 + Math.random() * 9,
        drift: (Math.random() - 0.5) * 140,
        size: 9 + Math.random() * 13,
        spin: (Math.random() > 0.5 ? 1 : -1) * (180 + Math.random() * 360),
        opacity: 0.45 + Math.random() * 0.5,
      })),
    [count]
  );

  if (reduced) return null;

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-10 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {petals.map((p) => (
        <motion.span
          key={p.id}
          className="absolute top-0 block will-change-transform"
          style={{ left: `${p.left}%` }}
          initial={{ y: '-12vh', x: 0, rotate: 0, opacity: 0 }}
          animate={{
            y: '112vh',
            x: p.drift,
            rotate: p.spin,
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
            times: [0, 0.1, 0.85, 1],
          }}
        >
          <Petal tone={tone} size={p.size} />
        </motion.span>
      ))}
    </div>
  );
}

function Petal({ tone, size }) {
  if (tone === 'marigold') {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <ellipse
            key={deg}
            cx="12"
            cy="8"
            rx="2.7"
            ry="4.6"
            fill="#E8B923"
            fillOpacity="0.92"
            transform={`rotate(${deg} 12 12)`}
          />
        ))}
        <circle cx="12" cy="12" r="3" fill="#B3122D" fillOpacity="0.75" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path
        d="M12 2 C 18 8, 20 14, 12 22 C 4 14, 6 8, 12 2 Z"
        fill="#FFF8E7"
        stroke="#E4C868"
        strokeWidth="0.8"
      />
      <path d="M12 5 L12 20" stroke="#EEDFBF" strokeWidth="0.7" />
    </svg>
  );
}
