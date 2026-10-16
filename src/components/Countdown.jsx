import { useState } from 'react';
import Section from './ui/Section.jsx';
import SectionHeading from './ui/SectionHeading.jsx';
import Reveal from './ui/Reveal.jsx';
import useCountdown from '../hooks/useCountdown.js';
import { countdown, muhurtham } from '../data/wedding.js';
import { pad } from '../utils/tamilNumerals.js';

export default function Countdown() {
  const remaining = useCountdown(muhurtham.iso);
  const [tamilDigits, setTamilDigits] = useState(false);

  const cells = [
    { key: 'days', value: remaining.days, label: countdown.labels.days, en: countdown.labelsEnglish.days },
    { key: 'hours', value: remaining.hours, label: countdown.labels.hours, en: countdown.labelsEnglish.hours },
    { key: 'minutes', value: remaining.minutes, label: countdown.labels.minutes, en: countdown.labelsEnglish.minutes },
    { key: 'seconds', value: remaining.seconds, label: countdown.labels.seconds, en: countdown.labelsEnglish.seconds },
  ];

  return (
    <Section id="countdown" tone="tint">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Countdown"
          heading={countdown.heading}
          subtitle={{ tamil: '', english: muhurtham.display.english }}
        />

        {remaining.finished ? (
          <Reveal className="mt-8 text-center">
            <p className="gold-text font-tamil text-2xl font-semibold sm:text-4xl">
              {countdown.finished.tamil}
            </p>
            <p className="mt-1 font-display text-xs uppercase tracking-widest2 text-maroon/60">
              {countdown.finished.english}
            </p>
          </Reveal>
        ) : (
          <>
            <Reveal className="mt-8" y={30}>
              <ul
                className="grid grid-cols-4 gap-2 sm:gap-4"
                aria-label={`${remaining.days} நாட்கள் ${remaining.hours} மணி ${remaining.minutes} நிமிடம் ${remaining.seconds} வினாடி`}
              >
                {cells.map((cell) => (
                  <li
                    key={cell.key}
                    className="relative overflow-hidden rounded-xl border border-gold/50 bg-cream/85 px-1 py-4 text-center shadow-card sm:rounded-2xl sm:py-6"
                  >
                    <span
                      className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-turmeric to-transparent"
                      aria-hidden="true"
                    />
                    <span className="block font-tamil text-2xl font-bold tabular-nums leading-none text-maroon sm:text-4xl">
                      {pad(cell.value, tamilDigits)}
                    </span>
                    <span className="mt-2 block font-tamil text-[0.62rem] leading-tight text-maroon/70 sm:text-sm">
                      {cell.label}
                    </span>
                    <span className="mt-0.5 block font-display text-[0.5rem] uppercase tracking-widest2 text-maroon/40 sm:text-[0.6rem]">
                      {cell.en}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {countdown.allowTamilNumerals && (
              <Reveal className="mt-6 flex justify-center" delay={0.15}>
                <button
                  type="button"
                  onClick={() => setTamilDigits((value) => !value)}
                  aria-pressed={tamilDigits}
                  className="btn-outline px-5 py-2 text-sm"
                >
                  <span className="font-tamil">
                    {tamilDigits ? '123 எண்கள்' : '௧௨௩ தமிழ் எண்கள்'}
                  </span>
                </button>
              </Reveal>
            )}
          </>
        )}
      </div>
    </Section>
  );
}
