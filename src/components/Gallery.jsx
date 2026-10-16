import { useCallback, useState } from 'react';
import Section from './ui/Section.jsx';
import SectionHeading from './ui/SectionHeading.jsx';
import { RevealGroup, RevealItem } from './ui/Reveal.jsx';
import Lightbox from './Lightbox.jsx';
import { gallery } from '../data/wedding.js';

export default function Gallery() {
  const photos = gallery.photos;
  const [activeIndex, setActiveIndex] = useState(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [photos.length]
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length]
  );

  return (
    <Section id="gallery">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Gallery"
          heading={gallery.heading}
          subtitle={{ tamil: '', english: gallery.hint }}
        />

        <RevealGroup className="mt-9 columns-2 gap-3 sm:columns-3 sm:gap-4" stagger={0.08} amount={0.1}>
          {photos.map((photo, index) => (
            <RevealItem key={photo.src} className="mb-3 break-inside-avoid sm:mb-4">
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative block w-full overflow-hidden rounded-xl border border-gold/45 bg-cream-dark shadow-card"
                aria-label={`${photo.alt} — பெரிதாக்கு`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt ?? ''}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={1000}
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-maroon/45 via-transparent to-transparent opacity-70"
                  aria-hidden="true"
                />
                <span
                  className="pointer-events-none absolute inset-[6px] rounded-lg border border-gold/35"
                  aria-hidden="true"
                />
              </button>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mt-5 text-center font-tamil text-xs text-maroon/50 sm:text-sm">{gallery.hint}</p>
      </div>

      <Lightbox photos={photos} index={activeIndex} onClose={close} onPrev={prev} onNext={next} />
    </Section>
  );
}
