'use client';

import { useEffect, useRef, useState } from 'react';

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export default function SmoothCounter({
  to,
  duration = 2.5,
}: {
  to: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = (time - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      setCount(Math.floor(eased * to));

      if (progress < 1) requestAnimationFrame(animate);
      else setCount(to);
    };

    requestAnimationFrame(animate);
  }, [inView, to, duration]);

  return (
    <div
      ref={ref}
      className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-yellow-600"
    >
      {count}+
    </div>
  );
}
