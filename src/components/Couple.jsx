import Section from './ui/Section.jsx';
import SectionHeading from './ui/SectionHeading.jsx';
import { RevealGroup, RevealItem } from './ui/Reveal.jsx';
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

        <RevealGroup className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.16}>
          {people.map((person) => (
            <RevealItem key={person.nameEnglish}>
              <article className="ornate-card flex h-full gap-4 p-3.5 sm:flex-col sm:gap-0 sm:p-4">
                {/* portrait in an ornate gold temple-arch frame */}
                <div className="gopuram-frame relative aspect-[4/5] w-[38%] shrink-0 self-start sm:mx-auto sm:mb-5 sm:w-[78%]">
                  <img
                    src={person.photo}
                    alt={person.photoAlt ?? person.nameEnglish}
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

                <div className="flex min-w-0 flex-1 flex-col justify-center sm:items-center sm:text-center">
                  <h3 className="gold-text font-tamil text-xl font-semibold leading-snug sm:text-3xl">
                    {person.nameTamil}
                  </h3>
                  <p className="font-display text-[0.6rem] uppercase tracking-widest2 text-gold-dark sm:text-xs">
                    {person.nameEnglish}
                  </p>

                  <span className="rule-diamond my-2 w-full max-w-[7rem] sm:my-3" aria-hidden="true">
                    <Jasmine size={14} />
                  </span>

                  <p className="font-tamil text-[0.82rem] leading-relaxed text-maroon/85 sm:text-sm">
                    {person.parents}
                  </p>
                  <p className="mt-1 font-body text-[0.68rem] leading-snug text-maroon/55 sm:text-xs">
                    {person.parentsEnglish}
                  </p>

                  <p className="mt-2 font-tamil text-[0.78rem] text-kumkum sm:text-sm">
                    {person.line}
                  </p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
