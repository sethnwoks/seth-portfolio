"use client";

import { useEffect, useRef } from "react";

/** Cursor-following background glow; no React re-renders per mouse move. */
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const move = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      cancelAnimationFrame(raf);
      const { clientX, clientY } = event;
      raf = requestAnimationFrame(() => {
        if (!ref.current) return;
        ref.current.style.setProperty("--cursor-x", `${clientX}px`);
        ref.current.style.setProperty("--cursor-y", `${clientY}px`);
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return <div ref={ref} className="spotlight" aria-hidden="true" />;
}
