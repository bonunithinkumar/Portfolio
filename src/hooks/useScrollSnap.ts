import { useEffect, useRef } from 'react';

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'contact'];

/**
 * When the user is in the Hero (home) section and scrolls down,
 * auto-snaps to the About section. Subsequent scrolls are free-scroll.
 */
export function useScrollSnap() {
  const isSnapping = useRef(false);
  const lastSnap = useRef(0);

  useEffect(() => {
    const COOLDOWN_MS = 1000;

    const getCurrentSectionIndex = (): number => {
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4) return i;
      }
      return 0;
    };

    const snapToIndex = (index: number) => {
      const target = document.getElementById(SECTION_IDS[index]);
      if (!target) return;
      isSnapping.current = true;
      lastSnap.current = Date.now();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => { isSnapping.current = false; }, COOLDOWN_MS);
    };

    const onWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (isSnapping.current || now - lastSnap.current < COOLDOWN_MS) return;

      const currentIdx = getCurrentSectionIndex();
      const direction = e.deltaY > 0 ? 1 : -1;
      const nextIdx = currentIdx + direction;

      // Only intercept when in the home section scrolling DOWN
      if (currentIdx === 0 && direction === 1) {
        e.preventDefault();
        snapToIndex(Math.min(nextIdx, SECTION_IDS.length - 1));
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, []);
}
