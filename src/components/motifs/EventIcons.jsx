/**
 * Small line-art icons for the events timeline.
 * Every icon shares the same 48x48 grid, gold stroke and maroon accent so the
 * timeline reads as one set.
 */
const base = {
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: '#C9A227',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const Ring = () => (
  <>
    <circle cx="19" cy="28" r="11" />
    <circle cx="29" cy="28" r="11" strokeOpacity="0.75" />
    <path d="M24 9 L28 14 L24 19 L20 14 Z" fill="#B3122D" fillOpacity="0.3" />
  </>
);

const Turmeric = () => (
  <>
    <path d="M10 28 C 10 38, 38 38, 38 28 C 34 22, 14 22, 10 28 Z" />
    <ellipse cx="24" cy="28" rx="14" ry="5" strokeOpacity="0.6" />
    <path d="M18 22 C 20 16, 28 16, 30 22" fill="#E8B923" fillOpacity="0.35" />
    <circle cx="24" cy="17" r="2.4" fill="#E8B923" fillOpacity="0.8" />
    <path d="M31 12 C 36 12, 38 16, 36 20" stroke="#2F6B3A" strokeOpacity="0.9" />
  </>
);

const Mehendi = () => (
  <>
    <path d="M15 40 L15 26 C 15 22, 33 22, 33 26 L33 40 Z" />
    <path d="M19 24 L19 12 M25 24 L25 9 M31 24 L31 12" />
    <path d="M15 31 L9 27 M33 31 L39 27" />
    <circle cx="24" cy="32" r="1.6" fill="#B3122D" fillOpacity="0.6" stroke="none" />
    <circle cx="20" cy="35" r="1.2" fill="#B3122D" fillOpacity="0.5" stroke="none" />
    <circle cx="28" cy="35" r="1.2" fill="#B3122D" fillOpacity="0.5" stroke="none" />
  </>
);

const Garland = () => (
  <>
    <path d="M12 14 C 17 30, 31 30, 36 14" />
    <path d="M12 22 C 17 36, 31 36, 36 22" strokeOpacity="0.6" />
    <circle cx="16" cy="23" r="3.4" fill="#E8B923" fillOpacity="0.55" />
    <circle cx="24" cy="27" r="3.8" fill="#FFF8E7" />
    <circle cx="32" cy="23" r="3.4" fill="#B3122D" fillOpacity="0.35" />
    <circle cx="24" cy="12" r="2.6" fill="#E8B923" fillOpacity="0.8" />
  </>
);

const Lamp = () => (
  <>
    <path d="M18 22 C 18 30, 30 30, 30 22 C 27 19, 21 19, 18 22 Z" />
    <path d="M24 30 L24 38 M18 40 C 18 37, 30 37, 30 40 C 30 42, 18 42, 18 40 Z" />
    <path d="M27 19 L29 15" strokeOpacity="0.8" />
    <path d="M29 6 C 33 11, 33 15, 29 17 C 25 15, 25 11, 29 6 Z" fill="#E8B923" fillOpacity="0.8" />
  </>
);

const Feast = () => (
  <>
    <path d="M8 30 C 8 20, 40 20, 40 30" strokeOpacity="0.7" />
    <path d="M6 31 C 6 40, 42 40, 42 31 Z" fill="#2F6B3A" fillOpacity="0.18" />
    <path d="M14 30 C 14 24, 20 24, 20 30" strokeOpacity="0.8" />
    <path d="M23 30 C 23 23, 29 23, 29 30" strokeOpacity="0.8" />
    <circle cx="35" cy="28" r="2.6" strokeOpacity="0.8" />
    <path d="M12 34 L36 34" strokeOpacity="0.45" />
  </>
);

const Kaal = () => (
  <>
    <path
      d="M24 13 C 25 6, 32 4, 34 7 C 29 9, 26 11, 24 13 Z"
      fill="#2F6B3A"
      fillOpacity="0.3"
    />
    <path d="M20 20 C 19 14, 29 14, 28 20 Z" />
    <path d="M21 14 L21 11.5 M27 14 L27 11.5" />
    <path d="M21 11.5 L27 11.5" />
    <circle cx="24" cy="9.4" r="1.6" fill="#E8B923" fillOpacity="0.85" stroke="none" />
    <path d="M21 20 L21 42 M27 20 L27 42" />
    <path d="M19.5 27 L28.5 27 M19.5 35 L28.5 35" strokeOpacity="0.65" />
    <path d="M15 42 L33 42" />
  </>
);

const ICONS = {
  kaal: Kaal,
  ring: Ring,
  turmeric: Turmeric,
  mehendi: Mehendi,
  garland: Garland,
  lamp: Lamp,
  feast: Feast,
};

export default function EventIcon({ name = 'lamp', className = 'h-12 w-12' }) {
  const Shape = ICONS[name] ?? Lamp;
  return (
    <svg {...base} className={className} aria-hidden="true" role="presentation">
      <Shape />
    </svg>
  );
}
