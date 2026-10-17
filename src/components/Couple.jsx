import Section from './ui/Section.jsx';
import SectionHeading from './ui/SectionHeading.jsx';
import Reveal from './ui/Reveal.jsx';
import { Jasmine } from './motifs/Ornaments.jsx';
import { couple } from '../data/wedding.js';

export default function Couple() {
  const people =
    couple.order === 'bride-first' ? [couple.bride, couple.groom] : [couple.groom, couple.bride];

  return (
    <Section id="couple">
      <div className="section-shell">
        <SectionHeading
          eyebrow="The Couple"
          heading={{ tamil: 'மணமக்கள்', english: 'The Bride & The Groom' }}
        />

        <Reveal className="mt-9">
          <article className="ornate-card mx-auto max-w-2xl p-4 sm:p-6">
            {/* one shared couple photo inside the ornate gold temple-arch frame */}
            <div className="gopuram-frame relative mx-auto aspect-[4/5] w-48 sm:w-60">
              <img
                src={couple.photo}
                alt={couple.photoAlt}
                width={480}
                height={600}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <span
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-maroon/35 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>

            <div className="mt-5 text-center">
              <h3 className="gold-text font-tamil text-2xl font-semibold leading-snug sm:text-4xl">
                {people.map((person) => person.nameTamil).join(' & ')}
              </h3>
              <p className="font-display text-[0.6rem] uppercase tracking-widest2 text-gold-dark sm:text-xs">
                {people.map((person) => person.nameEnglish).join(' & ')}
              </p>

              <span className="rule-diamond mx-auto my-3 w-full max-w-[7rem]" aria-hidden="true">
                <Jasmine size={14} />
              </span>

              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                {people.map((person) => (
                  <div key={person.nameEnglish}>
                    <p className="font-tamil text-[0.82rem] leading-relaxed text-maroon/85 sm:text-sm">
                      {person.parents}
                    </p>
                    <p className="mt-1 font-body text-[0.68rem] leading-snug text-maroon/55 sm:text-xs">
                      {person.parentsEnglish}
                    </p>
                    {person.line && (
                      <p className="mt-2 font-tamil text-[0.78rem] text-kumkum sm:text-sm">
                        {person.line}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
