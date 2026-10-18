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
  siteUrl: 'https://sakthikumar-invitation.vercel.app/',
  title: 'அன்புடன் அழைக்கிறோம் — SakthiKumar weds Aruneswari',
};

/* --------------------------------------------------------------- THE DATE */
// Muhurtham (the exact auspicious moment). Drives the countdown timer.
// Keep the "+05:30" (IST) offset so the countdown is right for guests abroad.
export const muhurtham = {
  iso: '2026-11-01T10:30:00+05:30',
  // Shown in the hero and countdown, exactly as written.
  // The Aippasi day number is an estimate — confirm it from your panchangam.
  display: {
    tamil: 'ஐப்பசி மாதம் 15-ஆம் தேதி (01.11.2026) ஞாயிற்றுக்கிழமை',
    english: 'Sunday, 1 November 2026 · 10:30 AM IST',
  },
};

/* ---------------------------------------------------------------- COUPLE */
export const couple = {
  groom: {
    nameTamil: 'ம. சக்திகுமார்',
    nameEnglish: 'M. SakthiKumar',
    // Still a placeholder — replace with the groom's actual parents.
    parents: 'சு. மகாராஜன் & ம. சபரிமணி, ம. தங்கமாரி அவர்களின் மகன்',
    parentsEnglish: 'Son of Mr. S. Maharajan & Mrs. M. Sabarimani,Mrs. M. Thangamari',
    line: '',
  },
  bride: {
    nameTamil: 'சே. அருணேஸ்வரி',
    nameEnglish: 'S. Aruneswari',
    // Still a placeholder — replace with the bride's actual parents.
    parents: 'அ. சேங்கை & சே. நித்யா அவர்களின் மகள்',
    parentsEnglish: 'Daughter of Mr. A. Sengai & Mrs. S. Nithiya',
    line: '',
  },
  // One shared couple photo, shown at the top of the section.
  photo: '/images/couple.svg',
  photoAlt: 'M. SakthiKumar & S. Aruneswari',
  // "bride-first" or "groom-first" — controls the order of the names and details.
  order: 'groom-first',
};

/* ------------------------------------------------------------------ HERO */
export const hero = {
  title: { tamil: 'திருமண அழைப்பிதழ்', english: 'Wedding Invitation' },
  tagline: 'இரு மனம் இணையும் திருநாள்',
  taglineEnglish: 'The auspicious day two hearts become one',
  // Big line under the names.
  blessing: 'அன்பிற்கும் உண்டோ அடைக்கும் தாழ்!',
};

/* -------------------------------------------------------------- OPENING */
export const opening = {
  
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
    tamil: 'சு. மகாராஜன் & ம. சபரிமணி, ம. தங்கமாரி',
    english: 'S. Maharajan & M. Sabarimani, M. Thangamari',
  },
};

/* -------------------------------------------------------------- COUNTDOWN */
export const countdown = {
  heading: { tamil: 'முகூர்த்தத்திற்கு', english: 'Countdown to the Muhurtham' },
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
// `icon` must be one of: kaal | ring | turmeric | mehendi | garland | lamp | feast
// NOTE: the Tamil calendar (panchangam) dates below are placeholders —
// copy the exact thithi / nakshatram wording from your family's panchangam.
export const events = [
  {
    id: 'muhurthakaal',
    icon: 'kaal',
    title: { tamil: 'முகூர்த்தக்கால்', english: 'Muhurtha Kaal' },
    date: '28 October 2026',
    tamilDate: 'ஐப்பசி 11, புதன்கிழமை',
    time: 'காலை 9:00–10:30 மணி',
    timeEnglish: '9:00–10:30 AM',
    venue: 'இல்லம்',
  },
  {
    id: 'nichayathartham',
    icon: 'ring',
    title: { tamil: 'நிச்சயதார்த்தம்', english: 'Nichayathartham · Engagement' },
    date: '31 October 2026',
    tamilDate: 'ஐப்பசி 14, சனிக்கிழமை',
    time: 'மாலை 7:15–8:47 மணி',
    timeEnglish: '7:15–8:47 PM',
    venue: 'ஏ.எஸ். அபிஷேக் திருமண மஹால், குருக்கல்பட்டி',
  },
  {
    id: 'muhurtham',
    icon: 'lamp',
    title: { tamil: 'முகூர்த்தம்', english: 'Muhurtham' },
    date: '1 November 2026',
    tamilDate: 'ஐப்பசி 15, ஞாயிற்றுக்கிழமை',
    time: 'காலை 10:30 மணி',
    timeEnglish: '10:30 AM',
    venue: 'மேலநீலிதநல்லூர், அருள்மிகு ஸ்ரீ சிவஞான வெளியப்பர் சாஸ்தா திருக்கோவில்',
  },
  {
    id: 'sappadu',
    icon: 'feast',
    title: { tamil: 'விருந்து', english: 'Wedding Feast' },
    date: '1 November 2026',
    tamilDate: 'ஐப்பசி 15, ஞாயிற்றுக்கிழமை',
    time: 'பகல் 11:00 மணி',
    timeEnglish: '11:00 PM',
    venue: 'இலை விருந்து · ஏ.எஸ். அபிஷேக் திருமண மஹால்',
  },
];

/* ------------------------------------------------------------------ VENUE */
export const venue = {
  heading: { tamil: 'மண்டபம்', english: 'Venue' },
  name: 'ஏ.எஸ். அபிஷேக் திருமண மஹால்',
  nameEnglish: 'AS Abishek Marriage Mahal',
  // Shown line by line.
  addressTamil: ['எஸ்.எச்-41, சங்கரன் கோவில் – திருநெல்வேலி சாலை', 'குருக்கல்பட்டி, திருநெல்வேலி – 627 953', 'தமிழ்நாடு'],
  addressEnglish: ['SH-41, Sankaran Kovil – Tirunelveli Road', 'Kurukkal Patti, Tirunelveli – 627 953', 'Tamil Nadu'],
  // Placeholder — put the family's contact number here.
  phone: '+91 63857 80907',
  // Coordinates taken from the venue's own Google Maps listing:
  // https://maps.app.goo.gl/mJBFPQ58GuCtUKP18
  // A maps.app.goo.gl short link cannot be used as an iframe src, so the embed
  // uses the resolved lat/lng instead. Works without an API key.
  // `t=k` forces the satellite layer (t=h would be hybrid, with labels).
  mapEmbed: 'https://www.google.com/maps?q=9.104674,77.585337&z=16&t=k&output=embed',
  // "Get Directions" destination — same exact pin.
  mapDirections: 'https://www.google.com/maps/dir/?api=1&destination=9.104674%2C77.585337',
  note: 'மண்டபத்தில் வாகன நிறுத்த வசதி உள்ளது',
  noteEnglish: 'Car parking available on the premises',
};

/* ------------------------------------------------------------------- RSVP */
export const rsvp = {
  heading: { tamil: 'வருகை உறுதி', english: 'RSVP' },
  intro: 'தங்கள் வருகையை உறுதிப்படுத்தி எங்களை மகிழ்விக்கவும்.',
  introEnglish: 'Please confirm your attendance so we can plan the feast.',
  // WhatsApp number in international format, digits only (no +, no spaces).
  whatsappNumber: '6385780907',
  // Two separate messages so a declining guest doesn't get asked for a head
  // count. Placeholders: {name} {guests} {side}
  messageYes:
    'வணக்கம்! நான் {name}. {side} திருமணத்திற்கு வருகை தருகிறேன். எங்கள் குடும்பத்திலிருந்து {guests} பேர் வருவோம்.',
  messageNo:
    'வணக்கம்! நான் {name}. {side} திருமணத்திற்கு வருகை தர இயலவில்லை. மனமார்ந்த வாழ்த்துகள்.',
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
  families: ['சு. மகாராஜன்', 'அ. சேங்கை'],
  familiesEnglish: ['S. Maharajan', 'A. Sengai'],
  // Used by the WhatsApp "share this invitation" button.
  shareText:
    '🙏 சக்திகுமார் & அருணேஸ்வரி திருமண அழைப்பிதழ் — 1 நவம்பர் 2026, குருக்கல்பட்டி. அழைப்பிதழை இங்கே பார்க்கவும்:',
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
  rsvp,
  footer,
};
