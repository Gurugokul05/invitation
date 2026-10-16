import Section from './ui/Section.jsx';
import SectionHeading from './ui/SectionHeading.jsx';
import Reveal from './ui/Reveal.jsx';
import EventIcon from './motifs/EventIcons.jsx';
import { events } from '../data/wedding.js';

export default function Events() {
  return (
    <Section id="events">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Ceremonies"
          heading={{ tamil: 'நிகழ்ச்சி நிரல்', english: 'Order of Events' }}
        />

        <ol className="relative mt-10 space-y-5 pl-16 sm:pl-24">
          {/* the kolam spine */}
          <span
            className="absolute left-[26px] top-3 bottom-3 w-[2px] rounded-full bg-gradient-to-b from-gold/20 via-gold/70 to-gold/20 sm:left-[42px]"
            aria-hidden="true"
          />

          {events.map((event, index) => {
            const highlight = event.id === 'muhurtham';

            return (
              <li key={event.id} className="relative">
                <Reveal delay={index * 0.06} x={18} y={14}>
                  {/* node on the spine */}
                  <span
                    className={`absolute -left-16 top-1 flex h-12 w-12 items-center justify-center rounded-full border shadow-gold sm:-left-24 sm:h-14 sm:w-14 ${
                      highlight ? 'border-turmeric bg-maroon' : 'border-gold/70 bg-cream'
                    }`}
                    aria-hidden="true"
                  >
                    <EventIcon
                      name={event.icon}
                      className={`h-7 w-7 sm:h-8 sm:w-8 ${highlight ? 'opacity-95' : ''}`}
                    />
                  </span>

                  <article
                    className={`ornate-card p-4 sm:p-5 ${
                      highlight ? 'bg-maroon/95 text-cream' : ''
                    }`}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
                      <h3
                        className={`font-tamil text-lg font-semibold leading-snug sm:text-2xl ${
                          highlight ? 'text-turmeric' : 'text-maroon'
                        }`}
                      >
                        {event.title.tamil}
                      </h3>
                      <span
                        className={`font-display text-[0.55rem] uppercase tracking-widest2 sm:text-[0.65rem] ${
                          highlight ? 'text-cream/70' : 'text-gold-dark'
                        }`}
                      >
                        {event.title.english}
                      </span>
                    </div>

                    <div
                      className={`mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.8rem] sm:text-sm ${
                        highlight ? 'text-cream/85' : 'text-maroon/80'
                      }`}
                    >
                      <span className="inline-flex flex-wrap items-center gap-x-1.5 font-tamil">
                        <CalendarDot />
                        <span>{event.tamilDate}</span>
                        <span className="font-display text-[0.55rem] uppercase tracking-widest2 opacity-60">
                          {event.date}
                        </span>
                      </span>
                      <span className="inline-flex flex-wrap items-center gap-x-1.5 font-tamil">
                        <ClockDot />
                        <span>{event.time}</span>
                        <span className="font-display text-[0.55rem] uppercase tracking-widest2 opacity-60">
                          {event.timeEnglish}
                        </span>
                      </span>
                    </div>

                    <p
                      className={`mt-2 font-tamil text-[0.78rem] leading-relaxed sm:text-sm ${
                        highlight ? 'text-cream/75' : 'text-maroon/65'
                      }`}
                    >
                      {event.venue}
                    </p>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}

function CalendarDot() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0 text-gold-dark" aria-hidden="true">
      <rect x="1.5" y="3" width="13" height="11.5" rx="2" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1.5 6.5h13" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5 1.5v3M11 1.5v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function ClockDot() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0 text-gold-dark" aria-hidden="true">
      <circle cx="8" cy="8" r="6.4" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 4.4V8l2.6 1.6" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
