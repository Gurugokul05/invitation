import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  const isOpen = index !== null && index !== undefined;

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onPrev();
      if (event.key === 'ArrowRight') onNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose, onPrev, onNext]);

  const photo = isOpen ? photos[index] : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-maroon-deep/96 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={photo?.alt ? `${photo.alt} — பெரிதாக்கப்பட்ட படம்` : 'Photo viewer'}
        >
          <motion.img
            key={photo.src}
            src={photo.src}
            alt={photo.alt ?? ''}
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.22}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) onNext();
              else if (info.offset.x > 60) onPrev();
            }}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[78vh] w-auto max-w-full cursor-grab rounded-xl border-2 border-gold/60 object-contain shadow-lamp active:cursor-grabbing"
          />

          {/* close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="மூடு (Close)"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-gold/60 bg-maroon/85 text-turmeric"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>

          {/* previous */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onPrev();
            }}
            aria-label="முந்தைய படம் (Previous)"
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/60 bg-maroon/70 text-turmeric sm:left-5"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* next */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onNext();
            }}
            aria-label="அடுத்த படம் (Next)"
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/60 bg-maroon/70 text-turmeric sm:right-5"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* counter */}
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-gold/40 bg-maroon/70 px-3 py-1 font-body text-xs text-cream/80">
            {index + 1} / {photos.length}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
