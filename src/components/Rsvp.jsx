import { useState } from 'react';
import Section from './ui/Section.jsx';
import SectionHeading from './ui/SectionHeading.jsx';
import Reveal from './ui/Reveal.jsx';
import { Marigold } from './motifs/Ornaments.jsx';
import { couple, rsvp } from '../data/wedding.js';

/**
 * No backend: the form composes a Tamil message and hands it to WhatsApp.
 * The guest still has to press send inside WhatsApp, so nothing is sent
 * without their knowledge.
 */
export default function Rsvp() {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState(1);
  const [attending, setAttending] = useState('yes');
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmed = name.trim();
    if (!trimmed) {
      setError(rsvp.labels.errorName);
      return;
    }
    setError('');

    const template = attending === 'yes' ? rsvp.messageYes : rsvp.messageNo;

    const message = template
      .replaceAll('{name}', trimmed)
      .replaceAll('{guests}', String(guests))
      .replaceAll('{side}', `${couple.groom.nameTamil} & ${couple.bride.nameTamil}`);

    const url = `https://wa.me/${rsvp.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  const adjustGuests = (delta) =>
    setGuests((value) => Math.min(30, Math.max(1, value + delta)));

  return (
    <Section id="rsvp" tone="tint">
      <div className="section-shell">
        <SectionHeading
          eyebrow="RSVP"
          heading={rsvp.heading}
          subtitle={{ tamil: '', english: rsvp.introEnglish }}
        />

        <Reveal className="mt-4 text-center" y={16}>
          <p className="mx-auto max-w-md font-tamil text-sm text-maroon/75 sm:text-base">
            {rsvp.intro}
          </p>
        </Reveal>

        <Reveal className="mt-8" y={30} delay={0.08}>
          <form
            onSubmit={handleSubmit}
            className="ornate-card mx-auto max-w-lg p-5 sm:p-7"
            noValidate
          >
            {/* ---------------------------------------------------- name */}
            <label htmlFor="rsvp-name" className="block font-tamil text-sm font-medium text-maroon sm:text-base">
              {rsvp.labels.name}
            </label>
            <input
              id="rsvp-name"
              name="name"
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                if (error) setError('');
              }}
              placeholder={rsvp.labels.namePlaceholder}
              autoComplete="name"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? 'rsvp-name-error' : undefined}
              className="mt-2 w-full rounded-xl border border-gold/55 bg-cream/80 px-4 py-3 font-tamil text-base
                         text-maroon placeholder:text-maroon/35 focus:border-turmeric focus:bg-cream"
            />
            {error && (
              <p id="rsvp-name-error" role="alert" className="mt-1.5 font-tamil text-xs text-kumkum">
                {error}
              </p>
            )}

            {/* -------------------------------------------------- guests */}
            <fieldset className="mt-6">
              <legend className="font-tamil text-sm font-medium text-maroon sm:text-base">
                {rsvp.labels.guests}
              </legend>

              <div className="mt-2 flex items-center justify-center gap-5 rounded-xl border border-gold/55 bg-cream/80 px-4 py-2">
                <button
                  type="button"
                  onClick={() => adjustGuests(-1)}
                  disabled={guests <= 1}
                  aria-label="ஒரு நபரைக் குறை"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/60
                             bg-cream text-xl font-semibold text-maroon disabled:opacity-35"
                >
                  −
                </button>

                <input
                  id="rsvp-guests"
                  name="guests"
                  type="number"
                  min="1"
                  max="30"
                  value={guests}
                  onChange={(event) => {
                    const parsed = Number(event.target.value);
                    setGuests(Number.isFinite(parsed) ? Math.min(30, Math.max(1, parsed)) : 1);
                  }}
                  aria-label={rsvp.labels.guests}
                  className="w-16 border-0 bg-transparent text-center font-tamil text-2xl font-bold tabular-nums text-maroon focus:outline-none"
                />

                <button
                  type="button"
                  onClick={() => adjustGuests(1)}
                  disabled={guests >= 30}
                  aria-label="ஒரு நபரைக் கூட்டு"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/60
                             bg-cream text-xl font-semibold text-maroon disabled:opacity-35"
                >
                  +
                </button>
              </div>
              <p className="mt-1 text-center font-body text-[0.65rem] text-maroon/50">
                {rsvp.labelsEnglish.guests}
              </p>
            </fieldset>

            {/* ----------------------------------------------- attending */}
            <fieldset className="mt-6">
              <legend className="font-tamil text-sm font-medium text-maroon sm:text-base">
                {rsvp.labels.attending}
              </legend>

              <div className="mt-2 grid grid-cols-2 gap-3">
                {[
                  { value: 'yes', tamil: rsvp.labels.yes, english: rsvp.labelsEnglish.yes, icon: 'leaf' },
                  { value: 'no', tamil: rsvp.labels.no, english: rsvp.labelsEnglish.no, icon: 'sad' },
                ].map((option) => (
                  <label key={option.value} className="relative cursor-pointer">
                    <input
                      type="radio"
                      name="attending"
                      value={option.value}
                      checked={attending === option.value}
                      onChange={() => setAttending(option.value)}
                      className="peer sr-only"
                    />
                    <span
                      className="flex h-full flex-col items-center gap-1 rounded-xl border border-gold/55 bg-cream/80
                                 px-3 py-3 text-center transition-colors
                                 peer-checked:border-maroon peer-checked:bg-maroon peer-checked:text-cream
                                 peer-focus-visible:ring-2 peer-focus-visible:ring-turmeric"
                    >
                      <Marigold size={20} />
                      <span className="font-tamil text-sm font-medium sm:text-base">{option.tamil}</span>
                      <span className="font-display text-[0.52rem] uppercase tracking-widest2 opacity-70">
                        {option.english}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* -------------------------------------------------- submit */}
            <button type="submit" className="btn-gold mt-7 w-full text-base sm:text-lg">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M20.5 3.5 3 10.2l6.4 2.4 2.4 6.4 2.6-5.6 6.1-9.9Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
                <path d="M9.4 12.6 20.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
              <span className="font-tamil">{rsvp.labels.submit}</span>
            </button>

            <p className="mt-2.5 text-center font-body text-[0.68rem] text-maroon/55">
              {sent ? rsvp.labels.thanks : rsvp.labels.submitNote}
            </p>

            <p className="sr-only" aria-live="polite">
              {error || (sent ? rsvp.labels.thanks : '')}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
