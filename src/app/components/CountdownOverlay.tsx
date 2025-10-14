'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CountdownOverlay({
  children,
}: {
  children: React.ReactNode;
}) {
    const launchDate = new Date('2025-10-15T11:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState(launchDate - Date.now());
  const [isLaunched, setIsLaunched] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsLaunched(true);
      return;
    }

    const timer = setInterval(() => {
      const now = Date.now();
      const diff = launchDate - now;
      setTimeLeft(diff);

      if (diff <= 0) {
        clearInterval(timer);
        setIsLaunched(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate, timeLeft]);

  if (isLaunched) return <>{children}</>;

  // Countdown calculations
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <AnimatePresence>
      {!isLaunched && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-black text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl mb-4"
          >
            🚀 Launching Soon!
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-mono tracking-wider"
          >
            {days}d : {hours}h : {minutes}m : {seconds}s
          </motion.div>

          <p className="mt-4 opacity-80 text-lg">
            Going live on <strong>15th October, 11:00 AM IST</strong>
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
