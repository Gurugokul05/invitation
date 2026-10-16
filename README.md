# திருமண அழைப்பிதழ் — Tamil Wedding Invitation

A mobile-first, single-page Tamil wedding (Kalyanam) invitation built for sharing on
WhatsApp. Temple-door opening screen, falling jasmine petals, kolam dividers, a
muhurtham countdown, an events timeline, an embedded map, a photo gallery with
lightbox and an RSVP form that sends straight to WhatsApp — with **no backend**.

Frontend only: React + Vite + Tailwind CSS + Framer Motion. All wording, names,
dates and photos live in **one file** (`src/data/wedding.js`).

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the production build locally
npm run lint
```

> Heads-up: this machine has `omit=dev` set in npm config, so plain `npm install`
> skips the dev tooling. If `npm run dev` says `'vite' is not recognized`, run
> `npm install --include=dev`.

---

## 1. Editing the invitation — `src/data/wedding.js`

This is the only file you need to touch. It is grouped into clearly labelled
blocks, each with comments:

| Block        | What it controls                                                    |
| ------------ | ------------------------------------------------------------------- |
| `music`      | Background nadaswaram track (or `''` to remove the music button)     |
| `meta`       | Live site URL + browser tab title                                    |
| `muhurtham`  | The auspicious moment — **drives the countdown timer**               |
| `couple`     | Bride & groom names, parents, one-line intro, photos                 |
| `hero`       | Title, tagline, opening blessing                                     |
| `opening`    | Door-screen mantra, button label, sound hint                         |
| `invitation` | The invitation paragraph, translation and host family                |
| `countdown`  | Timer labels, Tamil-numeral toggle, "the big day is here" message     |
| `events`     | The ceremony timeline (title, date, time, venue, icon)                |
| `venue`      | Tamil + English address, phone, Google Maps embed + directions        |
| `gallery`    | Photo list — add or remove as many as you like                        |
| `rsvp`       | WhatsApp number and the two prefilled messages                        |
| `footer`     | Blessing, family names, WhatsApp share text                           |

### Bilingual text

Anywhere you see `{ tamil: '…', english: '…' }`, the Tamil line is rendered large
and the English line sits underneath in small caps. Delete the `english` key if
you only want Tamil.

### The muhurtham date

```js
export const muhurtham = {
  iso: '2027-05-13T09:15:00+05:30',   // keep the +05:30 IST offset
  display: { tamil: '…', english: '…' },
};
```

`iso` is what the countdown ticks against — keep the `+05:30` offset so guests
dialling in from abroad see the right time. The Tamil calendar (panchangam)
wording in `muhurtham.display` and in each `events[].tamilDate` is placeholder
data; copy the exact thithi / nakshatram from your family's panchangam.

### RSVP → WhatsApp

Set `whatsappNumber` to the family number in **international format, digits only**
(no `+`, no spaces): `919876543210`. Two message templates are provided so a
declining guest isn't asked how many people they're bringing:

- `messageYes` — uses `{name}`, `{guests}`, `{side}`
- `messageNo` — uses `{name}`, `{side}`

Guests tap **Send via WhatsApp**, which opens WhatsApp with the message
prefilled. They still press send themselves, so nothing leaves their phone
without their knowledge.

---

## 2. Photos

Drop your images into `public/images/` and point `wedding.js` at them (paths start
with a leading slash and **omit** `public`):

```
public/images/bride.jpg   ->   photo: '/images/bride.jpg'
```

The shipped `.svg` files are decorative placeholders — delete them once you've
added real photos.

- **Couple portraits** — tall crops look best (roughly 4:5). They're framed in a
  gold temple-arch border and cropped with `object-cover`.
- **Gallery** — any mix of portrait/landscape works; the grid is a masonry layout.
  Every image is lazy-loaded and gets its own lightbox.
- Keep files under ~300 KB each (export at ~1600 px wide, quality 80) so the page
  stays quick on mobile data.

## 3. Background music

Put a royalty-free nadaswaram / thavil instrumental at:

```
public/audio/nadaswaram.mp3
```

Keep it instrumental, ~60–90 seconds and under ~1.5 MB — it loops automatically.
Music starts when the guest taps **அழைப்பிதழைத் திறக்க** (browsers block autoplay
until a tap, which is exactly why that tap unlocks it) and pauses when they switch
tabs. If the file is missing or blocked, the play/mute button simply hides itself.
To remove music entirely, set `music = { src: '', label: '…' }`.

## 4. Social preview (important for WhatsApp)

The link preview is read from `index.html`, not from JavaScript. Before deploying,
replace every `https://YOUR-DOMAIN.vercel.app` with your real URL and point
`og:image` at your own image:

```html
<meta property="og:image" content="https://your-domain.vercel.app/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

A `public/og-image.svg` placeholder is included. **Export it as a 1200×630 JPG
named `og-image.jpg`** — WhatsApp and most crawlers do not render SVG images, so a
JPG (or PNG) is what actually shows up in the preview. Using a photo of the couple
here is the single biggest improvement to how the shared link looks.

---

## 5. Deploying to Vercel

No configuration needed — Vercel detects Vite automatically.

**Option A — dashboard**

1. Push this folder to a GitHub/GitLab repository.
2. On [vercel.com](https://vercel.com) → **Add New… → Project** → import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output directory
   `dist`. Leave the rest as-is.
4. **Deploy**, then add your custom domain under *Settings → Domains*.
5. Update the `og:*` URLs in `index.html` (step 4 above) and redeploy.

**Option B — CLI**

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

After the first deploy, copy your production URL into `meta.siteUrl` in
`wedding.js` and into the `og:*` tags in `index.html`, then redeploy. `siteUrl` is
what the WhatsApp share and copy-link buttons use, so it needs to be correct.

> Vercel already serves `/assets/*` with immutable caching, and static files in
> `public/` are served as-is, so no `vercel.json` is required.

---

## Project structure

```
├── index.html                  Google Fonts + Open Graph tags (edit the URLs)
├── public/
│   ├── images/                 couple + gallery photos (placeholders shipped)
│   ├── audio/                  nadaswaram.mp3 goes here
│   ├── og-image.svg            social preview placeholder (export a .jpg)
│   ├── favicon.svg
│   └── robots.txt
└── src/
    ├── data/wedding.js         ← ALL CONTENT LIVES HERE
    ├── hooks/
    │   ├── useBackgroundMusic.js   audio + autoplay unlocking
    │   └── useCountdown.js         ticks to the muhurtham
    ├── utils/tamilNumerals.js      digits -> ௦௧௨௩௪௫௬௭௮௯
    └── components/
        ├── motifs/             inline SVG ornaments (no image downloads)
        │   ├── PillayarSuzhi.jsx   the "உ" with a self-drawing kolam ring
        │   ├── Kolam.jsx           kolam borders + the divider between sections
        │   ├── Toran.jsx           mango-leaf (maavilai) toran
        │   ├── Gopuram.jsx         temple tower (filled or line art)
        │   ├── Kuthuvilakku.jsx    brass lamp with a flickering flame
        │   ├── Ornaments.jsx       lotus, paisley, jasmine, marigold
        │   └── EventIcons.jsx      timeline icons
        ├── ui/                 Section, SectionHeading, Reveal, Bilingual
        ├── OpeningScreen.jsx   temple doors + petals + music unlock
        ├── Hero.jsx            names, date, parallax gopuram, lamp
        ├── Invitation.jsx  Couple.jsx  Countdown.jsx  Events.jsx
        ├── Venue.jsx       Gallery.jsx  Lightbox.jsx  Rsvp.jsx  Footer.jsx
        ├── MusicToggle.jsx
        └── Petals.jsx
```

All ornaments are **inline SVG**, so the traditional motifs cost zero extra
network requests and stay crisp at any size.

---

## Notes on quality

- **Mobile first** — designed at 390 px and scaled up; `svh` units and safe-area
  padding keep the layout correct behind iPhone notches.
- **`prefers-reduced-motion` is respected twice over**: a global CSS rule kills
  CSS animations, and every Framer Motion animation checks `useReducedMotion()`
  and renders statically instead (petals and parallax disappear entirely).
- **Tamil typography** — Noto Serif Tamil for headings, Mukta Malar for body, with
  generous line-height (Tamil script needs ~1.8) and `text-wrap: balance` on
  headings.
- **Performance** — no image frameworks, no icon libraries, code-split React /
  Framer Motion chunks, lazy-loaded images and map, preconnected fonts. The page
  is a handful of small requests, so Lighthouse mobile scores comfortably in the
  green once real photos are compressed.
- **No backend, no tracking, no cookies** — the RSVP is a hand-off to WhatsApp.

## Accessibility

Semantic landmarks, labelled form fields with an `aria-live` status region, real
radio inputs for the RSVP choice, focus-visible rings, keyboard-navigable lightbox
(`←` / `→` / `Esc`) and descriptive `aria-label`s on every icon button.
