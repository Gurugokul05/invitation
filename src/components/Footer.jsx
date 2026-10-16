import { useState } from 'react';
import Section from './ui/Section.jsx';
import Reveal from './ui/Reveal.jsx';
import { Kuthuvilakku, Lotus, MangoLeafToran } from './motifs/index.js';
import { footer, meta } from '../data/wedding.js';

export default function Footer() {
  const [copyState, setCopyState] = useState('idle');

  const share = async () => {
    const text = `${footer.shareText} ${meta.siteUrl}`;

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title: meta.title, text: footer.shareText, url: meta.siteUrl });
        return;
      } catch {
        // guest dismissed the native share sheet — fall through to WhatsApp
      }
    }

    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(meta.siteUrl);
      setCopyState('copied');
    } catch {
      // clipboard is blocked (http, or permission denied) — say so rather than
      // leaving the guest wondering whether the tap registered
      setCopyState('failed');
    }
    window.setTimeout(() => setCopyState('idle'), 2400);
  };

  const copyLabel = {
    idle: 'இணைப்பை நகலெடு',
    copied: 'நகலெடுக்கப்பட்டது ✓',
    failed: 'நகலெடுக்க இயலவில்லை',
  }[copyState];

  return (
    <Section id="footer" tone="deep" divider zari={false}>
      <MangoLeafToran className="absolute inset-x-0 top-6 z-10" height={52} />

      <div className="relative overflow-hidden px-5 pb-10 pt-24 text-center sm:px-8 sm:pt-28">
        <div
          className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2"
          aria-hidden="true"
        >
          <Kuthuvilakku className="h-24 w-auto opacity-90 sm:h-32" />
        </div>

        <div className="relative mx-auto max-w-xl">
          <Lotus className="mx-auto h-8 w-14" draw={false} />

          <p className="mt-5 font-tamil text-xl font-semibold leading-[1.8] text-turmeric text-shadow-gold sm:text-3xl">
            {footer.blessing}
          </p>
          <p className="mt-2 font-display text-[0.6rem] uppercase tracking-widest2 text-cream/60 sm:text-xs">
            {footer.blessingEnglish}
          </p>

          <div className="rule-diamond mx-auto my-7 max-w-[12rem]" aria-hidden="true">
            <span className="text-[0.6rem] text-gold">◆</span>
          </div>

          <p className="font-tamil text-sm text-cream/70">{footer.regards}</p>
          <p className="font-display text-[0.58rem] uppercase tracking-widest2 text-cream/45">
            {footer.regardsEnglish}
          </p>

          <ul className="mt-4 space-y-1.5">
            {footer.families.map((family, index) => (
              <li key={family}>
                <span className="font-tamil text-base font-medium text-cream sm:text-lg">{family}</span>
                <span className="ml-2 font-display text-[0.55rem] uppercase tracking-widest2 text-cream/45">
                  {footer.familiesEnglish[index]}
                </span>
              </li>
            ))}
          </ul>

          <Reveal className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center" y={16}>
            <button type="button" onClick={share} className="btn-gold w-full sm:w-auto">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M12 3v12M12 3 8 7M12 3l4 4M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-tamil">அழைப்பிதழைப் பகிர்</span>
            </button>

            <button type="button" onClick={copyLink} className="btn-outline w-full border-gold/70 bg-transparent text-turmeric sm:w-auto">
              <span className="font-tamil text-sm">{copyLabel}</span>
            </button>
          </Reveal>

          <p className="mt-9 font-body text-[0.62rem] text-cream/35">{footer.credits}</p>
        </div>
      </div>
    </Section>
  );
}
