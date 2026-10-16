/**
 * ============================================================================
 *  WEDDING DATA — EDIT EVERYTHING HERE
 * ============================================================================
 *  This is the ONLY file you need to touch to personalise the invitation.
 *  Change names, dates, venue, photos, phone numbers and text below.
 *
 *  Tips
 *  ----
 *  - Anything wrapped in { tamil: '...', english: '...' } shows the Tamil line
 *    first (larger) with the English line underneath. You may delete the
 *    `english` key if you only want Tamil.
 *  - Photos live in /public/images — drop your own files there and update the
 *    `src` paths (they start with a leading slash, no "public" prefix).
 *  - Dates are ISO-8601 strings. Keep the "+05:30" (IST) offset so the
 *    countdown is correct for guests in other time zones.
 * ============================================================================
 */

/* ------------------------------------------------------------------ MUSIC */
// Put a royalty-free nadaswaram / thavil track at /public/audio/nadaswaram.mp3
// Leave `src` empty ('') to hide the music button entirely.
export const music = {
  src: '/audio/nadaswaram.mp3',
  label: 'நாதஸ்வரம்',
};

/* ------------------------------------------------------------------ META */
// Used for the document title, the WhatsApp share button and social previews.
export const meta = {
  // Set this to your live URL after deploying to Vercel. Also update the
  // matching <meta og:*> tags in index.html.
  siteUrl: 'https://YOUR-DOMAIN.vercel.app',
  title: 'அன்புடன் அழைக்கிறோம் — Arjun weds Meenakshi',
};

/* --------------------------------------------------------------- THE DATE */
// Muhurtham (the exact auspicious moment). Drives the countdown timer.
// Keep the "+05:30" (IST) offset so the countdown is right for guests abroad.
export const muhurtham = {
  iso: '2027-05-13T09:15:00+05:30',
  // Shown in the hero and countdown, exactly as written.
  display: {
    tamil: 'சித்திரை மாதம் 30-ஆம் தேதி (13.05.2027) வியாழக்கிழமை',
    english: 'Thursday, 13 May 2027 · 09:15 AM IST',
  },
};

/* ---------------------------------------------------------------- COUPLE */
export const couple = {
  groom: {
    nameTamil: 'அர்ஜுன்',
    nameEnglish: 'Arjun',
    // Shown as "வி. ரமேஷ் & லதா ரமேஷ் அவர்களின் மகன்"
    parents: 'வி. ரமேஷ் & லதா ரமேஷ் அவர்களின் மகன்',
    parentsEnglish: 'Son of Mr. V. Ramesh & Mrs. Latha Ramesh',
    line: 'சென்னை · மென்பொருள் பொறியாளர்',
    photo: '/images/groom.svg',
    photoAlt: 'Arjun',
  },
  bride: {
    nameTamil: 'மீனாக்ஷி',
    nameEnglish: 'Meenakshi',
    parents: 'சு. கணேசன் & கமலா கணேசன் அவர்களின் மகள்',
    parentsEnglish: 'Daughter of Mr. S. Ganesan & Mrs. Kamala Ganesan',
    line: 'மதுரை · கட்டிடக் கலைஞர்',
    photo: '/images/bride.svg',
    photoAlt: 'Meenakshi',
  },
  // "bride-first" or "groom-first" — controls the order of the couple cards.
  order: 'groom-first',
};

/* ------------------------------------------------------------------ HERO */
export const hero = {
  title: { tamil: 'திருமண அழைப்பிதழ்', english: 'Wedding Invitation' },
  tagline: 'இரு மனம் இணையும் திருநாள்',
  taglineEnglish: 'The auspicious day two hearts become one',
  // Big line under the names.
  blessing: 'ஸ்ரீ கணேசாய நமஹ',
};

/* -------------------------------------------------------------- OPENING */
export const opening = {
  sloka: 'ஸ்ரீ கணேசாய நமஹ',
  slokaMeaning: 'Salutations to Lord Ganesha',
  cta: 'அழைப்பிதழைத் திறக்க',
  ctaEnglish: 'Tap to open the invitation',
  // The music pill under the button. Tapping it switches the nadaswaram on or
  // off BEFORE the doors open — it never opens the invitation itself.
  musicOn: 'இசையுடன் திறக்கவும்',
  musicOff: 'இசை இல்லாமல் திறக்கவும்',
};

/* ------------------------------------------------------ INVITATION TEXT */
export const invitation = {
  heading: { tamil: 'அன்புடன் அழைக்கிறோம்', english: 'With love, we invite you' },
  // Each item is one paragraph.
  paragraphs: [
    'எங்கள் இல்ல திருமண விழாவிற்கு தங்கள் குடும்பத்துடன் வருகை தந்து மணமக்களை ஆசீர்வதிக்க அன்புடன் அழைக்கிறோம்.',
  ],
  paragraphsEnglish: [
    'We warmly invite you and your family to grace our home wedding celebration and bless the couple with your presence.',
  ],
  // The family signing the invitation.
  hosts: {
    tamil: 'வி. ரமேஷ் & லதா ரமேஷ்',
    english: 'V. Ramesh & Latha Ramesh',
  },
};

/* -------------------------------------------------------------- COUNTDOWN */
export const countdown = {
  heading: { tamil: 'முகூர்த்தத்திற்கு', english: 'Countdown to the Muhurtham' },
  // Show a Tamil-numeral toggle button next to the timer.
  allowTamilNumerals: true,
  labels: {
    days: 'நாட்கள்',
    hours: 'மணி',
    minutes: 'நிமிடம்',
    seconds: 'வினாடி',
  },
  labelsEnglish: {
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
  },
  finished: { tamil: 'விழா இன்று!', english: 'The big day is here!' },
};

/* ----------------------------------------------------------------- EVENTS */
// `icon` must be one of: ring | turmeric | mehendi | garland | lamp | feast
// NOTE: the Tamil calendar (panchangam) dates below are placeholders —
// copy the exact thithi / nakshatram wording from your family's panchangam.
export const events = [
  {
    id: 'nichayathartham',
    icon: 'ring',
    title: { tamil: 'நிச்சயதார்த்தம்', english: 'Nichayathartham · Engagement' },
    date: '11 May 2027',
    tamilDate: 'சித்திரை 28, செவ்வாய்க்கிழமை',
    time: 'காலை 10:00 மணி',
    timeEnglish: '10:00 AM',
    venue: 'இல்லம், அண்ணா நகர், சென்னை',
  },
  {
    id: 'manjal-neeratu',
    icon: 'turmeric',
    title: { tamil: 'மஞ்சள் நீராட்டு', english: 'Manjal Neeratu' },
    date: '12 May 2027',
    tamilDate: 'சித்திரை 29, புதன்கிழமை',
    time: 'காலை 7:00 மணி',
    timeEnglish: '7:00 AM',
    venue: 'இல்லம், அண்ணா நகர், சென்னை',
  },
  {
    id: 'mehendi',
    icon: 'mehendi',
    title: { tamil: 'மெஹந்தி', english: 'Mehendi' },
    date: '12 May 2027',
    tamilDate: 'சித்திரை 29, புதன்கிழமை',
    time: 'மாலை 5:00 மணி',
    timeEnglish: '5:00 PM',
    venue: 'ஸ்ரீ லக்ஷ்மி திருமண மண்டபம், சென்னை',
  },
  {
    id: 'reception',
    icon: 'garland',
    title: { tamil: 'வரவேற்பு', english: 'Reception' },
    date: '12 May 2027',
    tamilDate: 'சித்திரை 29, புதன்கிழமை',
    time: 'இரவு 7:00 மணி',
    timeEnglish: '7:00 PM',
    venue: 'ஸ்ரீ லக்ஷ்மி திருமண மண்டபம், சென்னை',
  },
  {
    id: 'muhurtham',
    icon: 'lamp',
    title: { tamil: 'முகூர்த்தம்', english: 'Muhurtham' },
    date: '13 May 2027',
    tamilDate: 'சித்திரை 30, வியாழக்கிழமை',
    time: 'காலை 9:15 மணி',
    timeEnglish: '9:15 AM',
    venue: 'ஸ்ரீ லக்ஷ்மி திருமண மண்டபம், சென்னை',
  },
  {
    id: 'sappadu',
    icon: 'feast',
    title: { tamil: 'விருந்து', english: 'Wedding Feast' },
    date: '13 May 2027',
    tamilDate: 'சித்திரை 30, வியாழக்கிழமை',
    time: 'பகல் 12:00 மணி',
    timeEnglish: '12:00 PM',
    venue: 'இலை விருந்து · ஸ்ரீ லக்ஷ்மி திருமண மண்டபம்',
  },
];

/* ------------------------------------------------------------------ VENUE */
export const venue = {
  heading: { tamil: 'மண்டபம்', english: 'Venue' },
  name: 'ஸ்ரீ லக்ஷ்மி திருமண மண்டபம்',
  nameEnglish: 'Sri Lakshmi Thirumana Mandapam',
  // Shown line by line.
  addressTamil: ['12, 2வது தெரு, அண்ணா நகர் மேற்கு', 'சென்னை – 600 040, தமிழ்நாடு'],
  addressEnglish: ['12, 2nd Street, Anna Nagar West', 'Chennai – 600 040, Tamil Nadu'],
  phone: '+91 98765 43210',
  // Google Maps embed URL. Replace the `q=` query with your venue pincode/name.
  // Works without an API key.
  mapEmbed:
    'https://www.google.com/maps?q=Sri+Lakshmi+Thirumana+Mandapam+Anna+Nagar+Chennai&output=embed',
  // "Get Directions" destination — keep it URL-encoded.
  mapDirections:
    'https://www.google.com/maps/dir/?api=1&destination=Sri%20Lakshmi%20Thirumana%20Mandapam%2C%20Anna%20Nagar%20West%2C%20Chennai',
  note: 'மண்டபத்தில் வாகன நிறுத்த வசதி உள்ளது',
  noteEnglish: 'Car parking available on the premises',
};

/* ---------------------------------------------------------------- GALLERY */
// Photos are lazy-loaded. Add as many as you like — the grid auto-flows.
export const gallery = {
  heading: { tamil: 'நினைவுகள்', english: 'Our Moments' },
  photos: [
    { src: '/images/gallery-1.svg', alt: 'Pre-wedding photo 1' },
    { src: '/images/gallery-2.svg', alt: 'Pre-wedding photo 2' },
    { src: '/images/gallery-3.svg', alt: 'Pre-wedding photo 3' },
    { src: '/images/gallery-4.svg', alt: 'Pre-wedding photo 4' },
    { src: '/images/gallery-5.svg', alt: 'Pre-wedding photo 5' },
    { src: '/images/gallery-6.svg', alt: 'Pre-wedding photo 6' },
  ],
  hint: 'படத்தைத் தொட்டு பெரிதாக்கவும்',
};

/* ------------------------------------------------------------------- RSVP */
export const rsvp = {
  heading: { tamil: 'வருகை உறுதி', english: 'RSVP' },
  intro: 'தங்கள் வருகையை உறுதிப்படுத்தி எங்களை மகிழ்விக்கவும்.',
  introEnglish: 'Please confirm your attendance so we can plan the feast.',
  // WhatsApp number in international format, digits only (no +, no spaces).
  whatsappNumber: '919876543210',
  // Two separate messages so a declining guest doesn't get asked for a head
  // count. Placeholders: {name} {guests} {side}
  messageYes:
    'வணக்கம்! நான் {name}. {side} திருமணத்திற்கு வருகை தருகிறேன். எங்கள் குடும்பத்திலிருந்து {guests} பேர் வருவோம். 🙏',
  messageNo:
    'வணக்கம்! நான் {name}. {side} திருமணத்திற்கு வருகை தர இயலவில்லை. மனமார்ந்த வாழ்த்துகள். 🙏',
  labels: {
    name: 'தங்கள் பெயர்',
    namePlaceholder: 'எ.கா. ராமன் & குடும்பம்',
    guests: 'வருகை தரும் நபர்கள்',
    attending: 'வருகை தருவீர்களா?',
    yes: 'வருகிறேன்',
    no: 'வர முடியவில்லை',
    submit: 'வாட்ஸ்அப் மூலம் அனுப்பு',
    submitNote: 'WhatsApp திறக்கும் — செய்தியை அனுப்பவும்',
    thanks: 'நன்றி! வாட்ஸ்அப் திறக்கப்படுகிறது…',
    errorName: 'தயவுசெய்து பெயரை உள்ளிடவும்',
  },
  labelsEnglish: {
    name: 'Your name',
    namePlaceholder: 'e.g. Raman & family',
    guests: 'Number of guests',
    attending: 'Will you attend?',
    yes: 'Joyfully attending',
    no: 'Unable to attend',
    submit: 'Send via WhatsApp',
    submitNote: 'Opens WhatsApp — just press send',
    thanks: 'Thank you! Opening WhatsApp…',
    errorName: 'Please enter your name',
  },
};

/* ----------------------------------------------------------------- FOOTER */
export const footer = {
  blessing: 'உங்கள் வருகையே எங்கள் மகிழ்ச்சி',
  blessingEnglish: 'Your presence is our greatest joy',
  regards: 'இப்படிக்கு',
  regardsEnglish: 'With regards',
  families: ['வி. ரமேஷ் குடும்பம்', 'சு. கணேசன் குடும்பம்'],
  familiesEnglish: ['V. Ramesh Family', 'S. Ganesan Family'],
  // Used by the WhatsApp "share this invitation" button.
  shareText:
    '🙏 அர்ஜுன் & மீனாக்ஷி திருமண அழைப்பிதழ் — 13 மே 2027, சென்னை. அழைப்பிதழை இங்கே பார்க்கவும்:',
  credits: 'Made with love, for our family',
};

export default {
  music,
  meta,
  muhurtham,
  couple,
  hero,
  opening,
  invitation,
  countdown,
  events,
  venue,
  gallery,
  rsvp,
  footer,
};
