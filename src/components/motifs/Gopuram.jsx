import { motion, useReducedMotion } from 'framer-motion';

/**
 * Gopuram — the tiered temple tower silhouette used as a parallax backdrop.
 * `variant="line"` gives a thin outline drawing, `variant="fill"` a solid mass.
 */
export default function Gopuram({
  className = '',
  variant = 'fill',
  color = '#6B0F1A',
  stroke = '#C9A227',
}) {
  const reduced = useReducedMotion();

  const tiers = [
    { x1: 36, x2: 164, y1: 190, y2: 160 },
    { x1: 44, x2: 156, y1: 160, y2: 132 },
    { x1: 52, x2: 148, y1: 132, y2: 106 },
    { x1: 60, x2: 140, y1: 106, y2: 82 },
    { x1: 68, x2: 132, y1: 82, y2: 60 },
    { x1: 76, x2: 124, y1: 60, y2: 40 },
  ];

  const silhouette =
    'M30 210 L36 190 L44 160 L52 132 L60 106 L68 82 L76 60 L78 40 ' +
    'A22 22 0 0 1 122 40 ' +
    'L124 60 L132 82 L140 106 L148 132 L156 160 L164 190 L170 210 Z';

  return (
    <svg viewBox="0 0 200 220" className={className} aria-hidden="true" role="presentation">
      <motion.g
        initial={reduced ? false : { y: 8, opacity: 0.85 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        {variant === 'fill' && <path d={silhouette} fill={color} />}
        {variant === 'line' && (
          <path d={silhouette} fill="none" stroke={stroke} strokeWidth="1.6" />
        )}

        {/* horizontal bands between each tier */}
        {tiers.map((tier, i) => (
          <line
            key={i}
            x1={tier.x1 + 3}
            x2={tier.x2 - 3}
            y1={tier.y2}
            y2={tier.y2}
            stroke={stroke}
            strokeWidth="1.1"
            strokeOpacity={variant === 'fill' ? 0.75 : 0.5}
          />
        ))}

        {/* vertical ribs */}
        {tiers.map((tier, i) => (
          <g key={`rib-${i}`} stroke={stroke} strokeWidth="0.7" strokeOpacity="0.35">
            <line x1={tier.x1 + (tier.x2 - tier.x1) * 0.25} x2={tier.x1 + (tier.x2 - tier.x1) * 0.3} y1={tier.y1} y2={tier.y2} />
            <line x1={tier.x1 + (tier.x2 - tier.x1) * 0.75} x2={tier.x1 + (tier.x2 - tier.x1) * 0.7} y1={tier.y1} y2={tier.y2} />
          </g>
        ))}

        {/* doorway (the sanctum entrance) */}
        <path
          d="M88 210 L88 178 A12 12 0 0 1 112 178 L112 210 Z"
          fill={variant === 'fill' ? '#FFE9B0' : 'none'}
          fillOpacity="0.22"
          stroke={stroke}
          strokeWidth="1.2"
        />

        {/* kalasam finial + side spikes */}
        <g stroke={stroke} strokeWidth="1.4" fill="none">
          <line x1="100" y1="18" x2="100" y2="4" />
          <circle cx="100" cy="4" r="2.6" fill={stroke} />
          <path d="M92 22 C 92 16, 108 16, 108 22 Z" fill={stroke} fillOpacity="0.8" />
          <path d="M84 30 L72 22" />
          <path d="M116 30 L128 22" />
          <circle cx="72" cy="22" r="1.8" fill={stroke} />
          <circle cx="128" cy="22" r="1.8" fill={stroke} />
        </g>
      </motion.g>
    </svg>
  );
}
