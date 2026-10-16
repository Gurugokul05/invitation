import Section from './ui/Section.jsx';
import SectionHeading from './ui/SectionHeading.jsx';
import Reveal from './ui/Reveal.jsx';
import { Lotus, Paisley } from './motifs/Ornaments.jsx';
import { invitation } from '../data/wedding.js';

export default function Invitation() {
  return (
    <Section id="invitation" tone="tint">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Invitation"
          heading={invitation.heading}
          subtitle={{ tamil: '', english: 'From our family to yours' }}
        />

        <Reveal className="relative mt-9" y={34}>
          <div className="ornate-card relative px-5 py-9 sm:px-12 sm:py-12">
            {/* paisley corners */}
            <Paisley className="absolute left-2 top-2 h-8 w-6 opacity-60 sm:h-12 sm:w-9" />
            <Paisley className="absolute right-2 top-2 h-8 w-6 opacity-60 sm:h-12 sm:w-9" flip />
            <Paisley className="absolute bottom-2 left-2 h-8 w-6 rotate-180 opacity-60 sm:h-12 sm:w-9" />
            <Paisley
              className="absolute bottom-2 right-2 h-8 w-6 rotate-180 opacity-60 sm:h-12 sm:w-9"
              flip
            />

            <div className="relative mx-auto max-w-xl text-center">
              {invitation.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-tamil text-base font-medium leading-[1.95] text-maroon sm:text-[1.35rem] sm:leading-[2]"
                >
                  {paragraph}
                </p>
              ))}

              {invitation.paragraphsEnglish?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mx-auto mt-4 max-w-md font-body text-xs leading-relaxed text-maroon/60 sm:text-sm"
                >
                  {paragraph}
                </p>
              ))}

              <div className="rule-diamond mx-auto mt-8 max-w-[10rem]" aria-hidden="true">
                <Lotus className="h-6 w-10 shrink-0" draw={false} />
              </div>

              <p className="mt-6 font-tamil text-sm text-maroon/70">அன்புடன்,</p>
              <p className="mt-1 font-tamil text-lg font-semibold text-kumkum sm:text-xl">
                {invitation.hosts.tamil}
              </p>
              <p className="mt-1 font-display text-[0.62rem] uppercase tracking-widest2 text-maroon/55">
                {invitation.hosts.english}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
