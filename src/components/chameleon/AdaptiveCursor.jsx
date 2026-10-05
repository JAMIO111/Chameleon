import { useEffect, useRef, useState } from "react";

export default function AdaptiveCursor() {
  const ref = useRef(null);
  const [color, setColor] = useState("#B8860B");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;
    const el = ref.current;
    let targetX = -100;
    let targetY = -100;
    let x = -100;
    let y = -100;
    let last = 0;
    let frame = 0;
    let seen = false;

    const tick = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const k = 1 - Math.exp(-dt * 24);
      x += (targetX - x) * k;
      y += (targetY - y) * k;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame =
        Math.abs(targetX - x) > 0.1 || Math.abs(targetY - y) > 0.1
          ? requestAnimationFrame(tick)
          : 0;
    };

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!seen) {
        seen = true;
        x = targetX;
        y = targetY;
      }
      const host = e.target.closest ? e.target.closest("[data-swatch]") : null;
      if (host && host.dataset.swatch) setColor(host.dataset.swatch);
      if (!frame) {
        last = performance.now();
        frame = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ transform: "translate3d(-100px, -100px, 0)" }}>
      <div
        className="h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-colors duration-500"
        style={{ borderColor: color }}
      />
    </div>
  );
}
