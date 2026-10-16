import { useEffect, useState } from 'react';

const EMPTY = { days: 0, hours: 0, minutes: 0, seconds: 0 };

function diffFrom(targetIso) {
  const target = new Date(targetIso).getTime();
  if (Number.isNaN(target)) return { ...EMPTY, finished: false, invalid: true };

  const delta = target - Date.now();
  if (delta <= 0) return { ...EMPTY, finished: true, invalid: false };

  const total = Math.floor(delta / 1000);
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
    finished: false,
    invalid: false,
  };
}

/** Ticks once a second until the muhurtham arrives. */
export default function useCountdown(targetIso) {
  const [remaining, setRemaining] = useState(() => diffFrom(targetIso));

  useEffect(() => {
    setRemaining(diffFrom(targetIso));
    const id = window.setInterval(() => setRemaining(diffFrom(targetIso)), 1000);
    return () => window.clearInterval(id);
  }, [targetIso]);

  return remaining;
}
