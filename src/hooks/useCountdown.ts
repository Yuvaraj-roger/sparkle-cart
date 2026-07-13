import { useEffect, useState } from "react";

export interface CountdownParts {
  hours: string;
  minutes: string;
  seconds: string;
  expired: boolean;
}

const pad = (n: number) => n.toString().padStart(2, "0");

/** Ticks every second in real time until the target timestamp is reached. */
export function useCountdown(targetMs: number): CountdownParts {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, targetMs - now);
  const totalSeconds = Math.floor(diff / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
    expired: diff <= 0
  };
}
