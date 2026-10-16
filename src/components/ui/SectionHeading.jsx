import Reveal from './Reveal.jsx';
import Bilingual from './Bilingual.jsx';
import { Lotus } from '../motifs/Ornaments.jsx';

/**
 * Consistent section header: small English eyebrow, big gold Tamil heading,
 * muted English subtitle, flanked by lotus motifs.
 */
export default function SectionHeading({ eyebrow, heading, subtitle, tone = 'light', className = '' }) {
  const dark = tone === 'dark';

  return (
    <Reveal className={`relative text-center ${className}`}>
      {eyebrow && (
        <p className={`eyebrow mb-2 ${dark ? 'text-turmeric' : ''}`}>{eyebrow}</p>
      )}

      <div className="flex items-center justify-center gap-2 sm:gap-3">
        <Lotus className="h-6 w-9 shrink-0 sm:h-7 sm:w-11" draw={false} />
        <h2
          className={`gold-text font-tamil text-2xl font-semibold leading-[1.5] sm:text-4xl ${
            dark ? 'drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]' : ''
          }`}
        >
          {heading?.tamil ?? heading}
        </h2>
        <Lotus className="h-6 w-9 shrink-0 sm:h-7 sm:w-11" draw={false} />
      </div>

      {(subtitle || heading?.english) && (
        <Bilingual
          value={subtitle ?? heading}
          showEnglish
          tamilClassName="sr-only"
          englishClassName={`mt-2 text-[0.7rem] uppercase tracking-widest2 sm:text-xs ${
            dark ? 'text-cream/75' : 'text-maroon/60'
          }`}
        />
      )}

      <div className="rule-diamond mx-auto mt-4 max-w-xs text-gold" aria-hidden="true">
        <span className="text-[0.6rem]">◆</span>
      </div>
    </Reveal>
  );
}
