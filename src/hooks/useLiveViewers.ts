import { useEffect, useRef, useState } from "react";

/**
 * Simulates a live "people viewing / stock left" signal the way a real
 * storefront would stream it over a websocket. Values drift gently every
 * few seconds so the UI always feels "live".
 */
export function useLiveViewers(seedId: string, baseStock: number) {
  const seed = useRef(hashString(seedId));
  const [viewers, setViewers] = useState(() => 3 + (seed.current % 18));
  const [stockLeft, setStockLeft] = useState(baseStock);

  useEffect(() => {
    const id = setInterval(() => {
      setViewers((v) => {
        const delta = Math.floor(Math.random() * 5) - 2; // -2..+2
        return Math.max(1, Math.min(48, v + delta));
      });
      // Occasionally "sell" a unit to simulate real purchases draining stock
      if (Math.random() < 0.18) {
        setStockLeft((s) => Math.max(1, s - 1));
      }
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return { viewers, stockLeft };
}

function hashString(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}
