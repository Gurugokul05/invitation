import MangoLeafToran from '../motifs/Toran.jsx';
import { KolamDivider } from '../motifs/Kolam.jsx';

const TONES = {
  cream: 'bg-transparent',
  tint: 'bg-cream-dark/70',
  deep: 'bg-maroon-deep text-cream',
  maroon: 'bg-maroon text-cream',
};

/**
 * Every page section is wrapped in this shell so the silk zari borders and
 * kolam dividers stay perfectly consistent down the page.
 */
export default function Section({
  id,
  children,
  className = '',
  tone = 'cream',
  divider = true,
  toran = false,
  zari = true,
}) {
  return (
    <section id={id} className={`relative scroll-mt-4 ${className}`}>
      {divider && <KolamDivider />}

      <div className={`relative ${TONES[tone] ?? TONES.cream}`}>
        {zari && <div className="zari-line" aria-hidden="true" />}

        {toran && <MangoLeafToran className="absolute inset-x-0 top-[7px] z-20" height={62} />}

        <div className="relative">{children}</div>

        {zari && <div className="zari-line" aria-hidden="true" />}
      </div>
    </section>
  );
}
