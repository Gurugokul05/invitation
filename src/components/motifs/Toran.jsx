import { useId } from 'react';

/**
 * Maavilai thorang — the mango-leaf toran strung across the top of Tamil
 * wedding entrances. Tiles indefinitely via an SVG <pattern>.
 */
export default function MangoLeafToran({ className = '', height = 58, tile = 42 }) {
  const id = useId().replace(/:/g, '');

  return (
    <div className={`pointer-events-none relative ${className}`} aria-hidden="true">
      <svg width="100%" height={height} role="presentation">
        <defs>
          <pattern id={`toran-${id}`} width={tile} height={height} patternUnits="userSpaceOnUse">
            {/* the string, dipping between fixings */}
            <path
              d={`M0 6 Q ${tile / 2} 15 ${tile} 6`}
              fill="none"
              stroke="#9A7A17"
              strokeWidth="1.8"
            />

            {/* marigold bead at each fixing */}
            <circle cx={tile / 2} cy="11" r="4.6" fill="#E8B923" />
            <circle cx={tile / 2} cy="11" r="2.4" fill="#B3122D" fillOpacity="0.55" />
            <circle cx={tile / 2} cy="11" r="1" fill="#FFF8E7" fillOpacity="0.8" />

            {/* jasmine buds at the edges */}
            <circle cx="2" cy="8" r="2.6" fill="#FFF8E7" />
            <circle cx={tile - 2} cy="8" r="2.6" fill="#FFF8E7" />

            {/* left mango leaf */}
            <g>
              <path
                d={`M14 15 C 20 23, 20 38, 14 50 C 8 38, 8 23, 14 15 Z`}
                fill="#2F6B3A"
              />
              <path
                d={`M14 15 C 17 23, 17 38, 14 50 C 11 38, 11 23, 14 15 Z`}
                fill="#3C8449"
                fillOpacity="0.55"
              />
              <path d="M14 17 L14 48" stroke="#E8B923" strokeWidth="0.9" strokeOpacity="0.8" />
            </g>

            {/* right mango leaf, slightly shorter for a natural rhythm */}
            <g>
              <path
                d={`M28 15 C 34 22, 34 35, 28 46 C 22 35, 22 22, 28 15 Z`}
                fill="#2F6B3A"
              />
              <path
                d={`M28 15 C 31 22, 31 35, 28 46 C 25 35, 25 22, 28 15 Z`}
                fill="#3C8449"
                fillOpacity="0.45"
              />
              <path d="M28 17 L28 44" stroke="#E8B923" strokeWidth="0.9" strokeOpacity="0.8" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height={height} fill={`url(#toran-${id})`} />
      </svg>
    </div>
  );
}
