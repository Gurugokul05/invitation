import { motion, useReducedMotion } from 'framer-motion';
import { useId } from 'react';

/**
 * Kolam / rangoli motifs.
 * The border tiles forever (SVG <pattern>) so it stretches across any width,
 * and reveals itself left-to-right as it scrolls into view.
 */

/* ------------------------------------------------------------------ BORDER */
export function KolamBorder({ className = '', height = 26, tile = 28, color = '#C9A227' }) {
  const id = useId().replace(/:/g, '');
  const reduced = useReducedMotion();

  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden="true">
      <svg width="100%" height={height} role="presentation">
        <defs>
          <pattern id={`kolam-${id}`} width={tile} height={height} patternUnits="userSpaceOnUse">
            {/* pulli (dots) */}
            <circle cx={tile / 2} cy={height / 2} r="1.6" fill={color} opacity="0.9" />
            <circle cx="2" cy={height / 2} r="1.4" fill={color} opacity="0.55" />
            <circle cx={tile - 2} cy={height / 2} r="1.4" fill={color} opacity="0.55" />
            {/* rangoli diamond */}
            <path
              d={`M2 ${height / 2} L${tile / 2} ${height * 0.12} L${tile - 2} ${height / 2}
                  L${tile / 2} ${height * 0.88} Z`}
              fill="none"
              stroke={color}
              strokeWidth="1.1"
              opacity="0.85"
            />
            {/* inner loop */}
            <path
              d={`M${tile * 0.3} ${height / 2}
                  Q${tile / 2} ${height * 0.28} ${tile * 0.7} ${height / 2}
                  Q${tile / 2} ${height * 0.72} ${tile * 0.3} ${height / 2} Z`}
              fill="none"
              stroke={color}
              strokeWidth="0.9"
              opacity="0.6"
            />
          </pattern>
        </defs>
      </svg>

      {/* the pattern layer — revealed with a clip-path wipe */}
      <motion.svg
        width="100%"
        height={height}
        className="absolute inset-0"
        role="presentation"
        initial={reduced ? false : { clipPath: 'inset(0% 100% 0% 0%)' }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <rect width="100%" height={height} fill={`url(#kolam-${id})`} />
      </motion.svg>
    </div>
  );
}

/* ----------------------------------------------------------------- DIVIDER */
/**
 * The kolam divider that sits between every section: a kolam line, a lotus
 * rosette in the centre, then a mirrored kolam line.
 */
export function KolamDivider({ className = '' }) {
  const reduced = useReducedMotion();

  return (
    <div className={`relative w-full py-8 ${className}`} aria-hidden="true">
      <div className="mx-auto flex w-full max-w-3xl items-center gap-3 px-4">
        <KolamBorder className="flex-1" height={24} tile={26} />

        <motion.svg
          viewBox="0 0 60 60"
          className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
          initial={reduced ? false : { scale: 0.4, opacity: 0, rotate: -45 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <g fill="none" stroke="#C9A227" strokeWidth="1.6">
            <circle cx="30" cy="30" r="5.5" fill="#E8B923" fillOpacity="0.35" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <path
                key={deg}
                d="M30 24 C 33.5 17, 30 9, 30 9 C 30 9, 26.5 17, 30 24 Z"
                transform={`rotate(${deg} 30 30)`}
                fill="#B3122D"
                fillOpacity="0.12"
              />
            ))}
            <circle cx="30" cy="30" r="9" strokeDasharray="2 3" />
          </g>
        </motion.svg>

        <KolamBorder className="flex-1" height={24} tile={26} />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- CORNER KOLAM */
export function KolamCorner({ className = '', flip = false }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      aria-hidden="true"
      fill="none"
      stroke="#C9A227"
      strokeWidth="1.2"
    >
      <path d="M2 2 h44 M2 2 v44" strokeOpacity="0.5" />
      <circle cx="6" cy="6" r="1.8" fill="#C9A227" stroke="none" />
      <path d="M6 6 L22 6 L6 22 Z" />
      <path d="M6 22 Q6 6 22 6" strokeOpacity="0.7" />
      <path d="M12 12 Q12 4 20 4" strokeOpacity="0.45" />
    </svg>
  );
}

export default KolamBorder;
