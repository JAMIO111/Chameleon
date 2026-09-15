import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function AdaptiveCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 50 });
  const sy = useSpring(y, { stiffness: 600, damping: 50 });
  const [color, setColor] = useState("#B8860B");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return undefined;
    setEnabled(true);
    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const host = e.target.closest ? e.target.closest("[data-swatch]") : null;
      if (host && host.dataset.swatch) setColor(host.dataset.swatch);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ x: sx, y: sy }}>
      <div
        className="h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-colors duration-500"
        style={{ borderColor: color }}
      />
    </motion.div>
  );
}
