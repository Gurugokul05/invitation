import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Background nadaswaram music.
 *
 * Browsers block autoplay until the guest interacts with the page, which is
 * exactly why the opening screen's "open invitation" tap calls `play()` — that
 * click is the user gesture that unlocks audio.
 *
 * If the mp3 is missing or blocked, `available` flips to false and the UI
 * simply hides the music button instead of showing a broken player.
 */
export default function useBackgroundMusic(src, { loop = true, volume = 0.5 } = {}) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [available, setAvailable] = useState(Boolean(src));

  useEffect(() => {
    if (!src) {
      setAvailable(false);
      return undefined;
    }

    const audio = new Audio(src);
    audio.loop = loop;
    audio.volume = volume;
    audio.preload = 'auto';
    audio.crossOrigin = 'anonymous';

    const onError = () => setAvailable(false);
    const onPause = () => setIsPlaying(false);
    const onPlay = () => setIsPlaying(true);

    audio.addEventListener('error', onError);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('play', onPlay);
    audioRef.current = audio;

    return () => {
      audio.removeEventListener('error', onError);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('play', onPlay);
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, [src, loop, volume]);

  const play = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || !available) return false;
    try {
      await audio.play();
      return true;
    } catch {
      setAvailable(false);
      return false;
    }
  }, [available]);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setIsPlaying(false);
  }, []);

  const toggle = useCallback(() => (isPlaying ? pause() : play()), [isPlaying, pause, play]);

  return { isPlaying, available, play, pause, toggle };
}
