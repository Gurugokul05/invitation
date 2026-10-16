import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Section from './ui/Section.jsx';
import Bilingual from './ui/Bilingual.jsx';
import Petals from './Petals.jsx';
import { Gopuram, Jasmine, Kuthuvilakku } from './motifs/index.js';
import { couple, hero, muhurtham } from '../data/wedding.js';

export default function Hero() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();

  // Parallax: the gopuram drifts slower than the page, the lamp rises slightly.
  const gopuramY = useTransform(scrollY, [0, 700], [0, 150]);
  const lampY = useTransform(scrollY, [0, 700], [0, -50]);
  const backdropOpacity = useTransform(scrollY, [0, 620], [0.26, 0.03]);

  const [first, second] =
    couple.order === 'bride-first'
      ? [couple.bride, couple.groom]
      : [couple.groom, couple.bride];

  return (
    <Section id="home" divider={false} toran>
      <div className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pb-24 pt-16 text-center sm:px-8">
        {/* --------------- parallax gopuram, dissolving into the cream silk */}
        <motion.div
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 flex justify-center"
          style={reduced ? { opacity: 0.2 } : { y: gopuramY, opacity: backdropOpacity }}
          aria-hidden="true"
        >
          <div
            className="w-full"
            style={{
              maskImage:
                'linear-gradient(to top, #000 20%, rgba(0,0,0,0.4) 58%, transparent 94%)',
              WebkitMaskImage:
                'linear-gradient(to top, #000 20%, rgba(0,0,0,0.4) 58%, transparent 94%)',
            }}
          >
            <Gopuram
              className="mx-auto h-[40vh] w-auto max-w-full sm:h-[56vh]"
              variant="fill"
              color="#6B0F1A"
              stroke="#C9A227"
            />
          </div>
        </motion.div>

        {/* ------------------------------------------ falling petals */}
        <Petals count={14} />

        {/* ------------------------------------------ floating jasmine */}
        <Jasmine
          className="absolute left-[8%] top-[20%] animate-floaty opacity-80 sm:h-6 sm:w-6"
          size={18}
        />
        <Jasmine
          className="absolute right-[10%] top-[32%] animate-floaty opacity-70 [animation-delay:1.4s]"
          size={22}
        />
        <Jasmine
          className="absolute right-[22%] top-[14%] animate-floaty opacity-60 [animation-delay:2.6s]"
          size={14}
        />

        {/* ------------------------------------------ content */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 flex w-full max-w-2xl flex-col items-center"
        >
          <p className="eyebrow mb-2">{hero.blessing}</p>

          <h1 className="gold-text font-tamil text-[1.85rem] font-bold leading-[1.6] sm:text-5xl">
            {hero.title.tamil}
          </h1>
          <p className="mt-1 font-display text-[0.6rem] uppercase tracking-widest2 text-maroon/60 sm:text-sm">
            {hero.title.english}
          </p>

          {/* ------------------------------------ the couple */}
          <div className="mt-7 flex flex-col items-center gap-1 sm:mt-9">
            <div className="flex flex-col items-center gap-1">
              <span className="font-tamil text-[2rem] font-semibold leading-tight text-maroon sm:text-5xl">
                {first.nameTamil}
              </span>
              <span className="font-display text-[0.65rem] uppercase tracking-widest2 text-gold-dark sm:text-sm">
                {first.nameEnglish}
              </span>
            </div>

            <span className="my-1.5 font-tamil text-xl text-gold sm:text-3xl" aria-hidden="true">
              &amp;
            </span>

            <div className="flex flex-col items-center gap-1">
              <span className="font-tamil text-[2rem] font-semibold leading-tight text-maroon sm:text-5xl">
                {second.nameTamil}
              </span>
              <span className="font-display text-[0.65rem] uppercase tracking-widest2 text-gold-dark sm:text-sm">
                {second.nameEnglish}
              </span>
            </div>
          </div>

          {/* ------------------------------------ date + tagline */}
          <div className="rule-diamond mt-6 w-full max-w-md" aria-hidden="true">
            <span className="text-[0.6rem]">◆</span>
          </div>

          <Bilingual
            value={muhurtham.display}
            className="mt-4"
            tamilClassName="text-sm font-medium text-maroon/90 sm:text-lg"
            englishClassName="mt-1 text-[0.6rem] uppercase tracking-widest2 text-maroon/55 sm:text-xs"
          />

          <p className="mt-5 font-tamil text-base italic text-kumkum sm:text-2xl">{hero.tagline}</p>
          <p className="mt-1 font-display text-[0.58rem] uppercase tracking-widest2 text-maroon/50 sm:text-xs">
            {hero.taglineEnglish}
          </p>
        </motion.div>

        {/* ------------------------------------------ glowing lamp */}
        {/* Centring lives on this plain wrapper. The motion child carries the
            parallax transform, and Framer writes `transform: none` inline at
            rest, which would otherwise cancel a Tailwind -translate-x-1/2. */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center"
          aria-hidden="true"
        >
          <motion.div style={reduced ? undefined : { y: lampY }}>
            <Kuthuvilakku className="h-24 w-auto opacity-95 sm:h-36" />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
