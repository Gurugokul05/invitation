import Section from './ui/Section.jsx';
import SectionHeading from './ui/SectionHeading.jsx';
import Reveal from './ui/Reveal.jsx';
import { KolamCorner } from './motifs/Kolam.jsx';
import Gopuram from './motifs/Gopuram.jsx';
import { venue } from '../data/wedding.js';

export default function Venue() {
  return (
    <Section id="venue" tone="deep">
      <div className="relative overflow-hidden">
        {/* faint gopuram watermark behind the venue details */}
        <Gopuram
          className="pointer-events-none absolute -right-8 top-6 h-56 w-auto opacity-[0.09] sm:h-80"
          variant="line"
          stroke="#E8B923"
        />

        <div className="section-shell relative">
          <SectionHeading
            eyebrow="Venue"
            heading={venue.heading}
            subtitle={{ tamil: '', english: venue.nameEnglish }}
            tone="dark"
          />

          <Reveal className="mt-9" y={30}>
            <div className="relative rounded-2xl border border-gold/45 bg-cream/95 p-5 shadow-card sm:p-7">
              <KolamCorner className="absolute left-1.5 top-1.5 h-7 w-7 opacity-70" />
              <KolamCorner className="absolute right-1.5 top-1.5 h-7 w-7 opacity-70" flip />

              <h3 className="mt-2 text-center font-tamil text-xl font-semibold text-maroon sm:text-3xl">
                {venue.name}
              </h3>
              <p className="mt-1 text-center font-display text-[0.6rem] uppercase tracking-widest2 text-gold-dark sm:text-xs">
                {venue.nameEnglish}
              </p>

              <div className="rule-diamond mx-auto my-5 max-w-[9rem]" aria-hidden="true">
                <span className="text-[0.6rem]">◆</span>
              </div>

              <div className="grid gap-4 text-center sm:grid-cols-2 sm:gap-6 sm:text-left">
                <address className="not-italic">
                  <p className="eyebrow mb-1.5">தமிழ்</p>
                  {venue.addressTamil.map((line) => (
                    <p key={line} className="font-tamil text-sm leading-relaxed text-maroon/90 sm:text-base">
                      {line}
                    </p>
                  ))}
                </address>

                <address className="not-italic">
                  <p className="eyebrow mb-1.5">English</p>
                  {venue.addressEnglish.map((line) => (
                    <p key={line} className="font-body text-sm leading-relaxed text-maroon/70 sm:text-base">
                      {line}
                    </p>
                  ))}
                </address>
              </div>

              {venue.phone && (
                <p className="mt-5 text-center">
                  <a
                    href={`tel:${venue.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2 font-body text-sm font-medium text-kumkum underline decoration-gold/60 underline-offset-4 sm:text-base"
                  >
                    <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
                      <path
                        d="M4 3h3l1.5 4-2 1.4a11 11 0 0 0 5.1 5.1L13 11.5l4 1.5v3c0 .8-.7 1.5-1.5 1.4A14.5 14.5 0 0 1 2.6 4.5C2.5 3.7 3.2 3 4 3Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {venue.phone}
                  </a>
                </p>
              )}

              <p className="mt-4 text-center font-tamil text-xs text-leaf sm:text-sm">
                🌿 {venue.note}
              </p>
              <p className="mt-0.5 text-center font-body text-[0.68rem] text-maroon/55">
                {venue.noteEnglish}
              </p>
            </div>
          </Reveal>

          {/* ------------------------------------------------------- map */}
          <Reveal className="mt-6" y={30} delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-gold/45 shadow-gold">
              <iframe
                title={`${venue.nameEnglish} — Google Map`}
                src={venue.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-[240px] w-full border-0 sm:h-[340px]"
              />
            </div>
          </Reveal>

          <Reveal className="mt-6 flex justify-center" delay={0.15}>
            <a
              href={venue.mapDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full max-w-xs sm:w-auto"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="10" r="2.6" fill="currentColor" />
              </svg>
              <span className="font-tamil">வழி காட்டு</span>
              <span className="font-display text-[0.62rem] uppercase tracking-widest2">
                Get Directions
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
