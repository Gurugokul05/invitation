import { motion, useReducedMotion } from 'framer-motion';

/* ------------------------------------------------------------------- LOTUS */
export function Lotus({ className = '', draw = true }) {
  const reduced = useReducedMotion();
  const petals = [-72, -48, -24, 0, 24, 48, 72];

  const petal = 'M50 52 C 42 40, 42 22, 50 8 C 58 22, 58 40, 50 52 Z';

  return (
    <svg viewBox="0 0 100 62" className={className} aria-hidden="true" role="presentation">
      <g fill="none" stroke="#C9A227" strokeWidth="1.5" strokeLinejoin="round">
        {petals.map((deg, i) => (
          <motion.path
            key={deg}
            d={petal}
            transform={`rotate(${deg} 50 52)`}
            fill={i === 3 ? '#B3122D' : '#E8B923'}
            fillOpacity={i === 3 ? 0.22 : 0.12}
            initial={reduced || !draw ? false : { pathLength: 0, opacity: 0.3 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.9, delay: 0.07 * Math.abs(i - 3), ease: 'easeOut' }}
          />
        ))}
        <path d="M20 52 Q50 62 80 52" strokeWidth="1.8" />
      </g>
    </svg>
  );
}

/* ----------------------------------------------------------------- PAISLEY */
export function Paisley({ className = '', flip = false }) {
  return (
    <svg
      viewBox="0 0 64 84"
      className={className}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      aria-hidden="true"
      fill="none"
      stroke="#C9A227"
      strokeWidth="1.4"
    >
      <path d="M32 82 C 10 66, 2 40, 18 22 C 33 5, 58 11, 59 33 C 60 52, 45 63, 35 54 C 27 46, 32 34, 43 37" />
      <path
        d="M32 74 C 16 60, 10 40, 22 26 C 33 13, 51 17, 52 33 C 53 46, 43 54, 36 48"
        strokeOpacity="0.5"
      />
      <circle cx="34" cy="40" r="2" fill="#B3122D" fillOpacity="0.5" stroke="none" />
      <circle cx="40" cy="30" r="1.6" fill="#C9A227" stroke="none" />
      <circle cx="26" cy="52" r="1.6" fill="#C9A227" stroke="none" />
    </svg>
  );
}

/* ---------------------------------------------------------- JASMINE GARLAND */
/**
 * A strung jasmine (malligai) garland. Tiles horizontally like the toran.
 */
export function JasmineGarland({ className = '', flip = false }) {
  const buds = [
    { x: 6, y: 16, r: 4.2 },
    { x: 20, y: 22, r: 5 },
    { x: 34, y: 16, r: 4.4 },
    { x: 48, y: 24, r: 5.2 },
    { x: 62, y: 16, r: 4.2 },
  ];

  return (
    <svg
      viewBox="0 0 68 34"
      className={className}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      aria-hidden="true"
      role="presentation"
    >
      <path
        d="M0 12 C 17 26, 51 26, 68 12"
        fill="none"
        stroke="#2F6B3A"
        strokeWidth="1.2"
        strokeOpacity="0.75"
      />
      {buds.map((b, i) => (
        <g key={i}>
          <circle cx={b.x} cy={b.y} r={b.r} fill="#FFF8E7" />
          <circle cx={b.x} cy={b.y} r={b.r} fill="none" stroke="#E4C868" strokeWidth="0.6" />
          <circle cx={b.x} cy={b.y} r={b.r * 0.42} fill="#EEDFBF" />
        </g>
      ))}
    </svg>
  );
}

/* ----------------------------------------------------------- JASMINE FLOWER */
export function Jasmine({ className = '', size = 18 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <ellipse
          key={deg}
          cx="12"
          cy="7"
          rx="3.1"
          ry="5"
          fill="#FFF8E7"
          transform={`rotate(${deg} 12 12)`}
        />
      ))}
      <circle cx="12" cy="12" r="2.6" fill="#E8B923" />
    </svg>
  );
}

/* ------------------------------------------------------------ MARIGOLD DOT */
export function Marigold({ className = '', size = 18 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <ellipse
          key={deg}
          cx="12"
          cy="8"
          rx="2.6"
          ry="4.4"
          fill="#E8B923"
          fillOpacity="0.9"
          transform={`rotate(${deg} 12 12)`}
        />
      ))}
      <circle cx="12" cy="12" r="3" fill="#B3122D" fillOpacity="0.75" />
    </svg>
  );
}
