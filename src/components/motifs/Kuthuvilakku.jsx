/**
 * Kuthuvilakku — the tall brass oil lamp. The flame flickers and a warm glow
 * pulses behind it via CSS animations (both disabled by prefers-reduced-motion).
 */
export default function Kuthuvilakku({ className = '', lit = true }) {
  return (
    <svg viewBox="0 0 120 200" className={className} role="img" aria-label="குத்துவிளக்கு">
      <defs>
        <radialGradient id="lamp-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE9A8" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#E8B923" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#E8B923" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="brass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E4C868" />
          <stop offset="40%" stopColor="#C9A227" />
          <stop offset="70%" stopColor="#9A7A17" />
          <stop offset="100%" stopColor="#E4C868" />
        </linearGradient>
      </defs>

      {lit && (
        <circle
          cx="74"
          cy="52"
          r="46"
          fill="url(#lamp-glow)"
          className="animate-glow"
          style={{ transformOrigin: '74px 52px' }}
        />
      )}

      {/* stem */}
      <rect x="56" y="96" width="8" height="72" fill="url(#brass)" />
      {/* decorative knob */}
      <ellipse cx="60" cy="118" rx="15" ry="7" fill="url(#brass)" />
      <ellipse cx="60" cy="118" rx="15" ry="7" fill="none" stroke="#9A7A17" strokeWidth="0.8" />
      <ellipse cx="60" cy="150" rx="10" ry="4.5" fill="url(#brass)" />

      {/* base plate */}
      <path d="M28 190 C 28 178, 92 178, 92 190 C 92 197, 28 197, 28 190 Z" fill="url(#brass)" />
      <ellipse cx="60" cy="178" rx="26" ry="7" fill="url(#brass)" />
      <ellipse cx="60" cy="178" rx="26" ry="7" fill="none" stroke="#9A7A17" strokeWidth="0.8" />

      {/* oil cup */}
      <path d="M32 74 C 32 92, 88 92, 88 74 C 82 68, 38 68, 32 74 Z" fill="url(#brass)" />
      <ellipse cx="60" cy="74" rx="28" ry="7" fill="#9A7A17" fillOpacity="0.45" />
      <ellipse cx="60" cy="74" rx="28" ry="7" fill="none" stroke="#E4C868" strokeWidth="1" />

      {/* wick */}
      <path d="M74 70 L82 60" stroke="#5B3A16" strokeWidth="2.4" strokeLinecap="round" />

      {/* flame */}
      {lit && (
        <g className="animate-flicker" style={{ transformOrigin: '84px 58px' }}>
          <path
            d="M84 34 C 93 47, 93 57, 84 62 C 75 57, 75 47, 84 34 Z"
            fill="#E8B923"
          />
          <path d="M84 43 C 88 50, 88 56, 84 59 C 80 56, 80 50, 84 43 Z" fill="#FFF8E7" />
        </g>
      )}
    </svg>
  );
}
