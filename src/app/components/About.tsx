'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaCertificate, FaAward, FaUsers } from 'react-icons/fa';

// Easing function for smooth slow-down at end
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const SmoothCounter = ({ to, duration = 2.5 }: { to: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = (time - startTime) / 1000; // in seconds
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      setCount(Math.floor(easedProgress * to));

      if (progress < 1) requestAnimationFrame(animate);
      else setCount(to); // ensure exact target at end
    };

    requestAnimationFrame(animate);
  }, [inView, to, duration]);

  return (
    <div
      ref={ref}
      className="inline-block font-extrabold text-3xl sm:text-4xl md:text-5xl text-yellow-600"
      style={{ minWidth: '3ch', minHeight: '1em' }} // fixes flicker
    >
      {count}+
    </div>
  );
};

const images = [
  '/anita2.jpeg',
  '/anita7.jpeg',
  '/anita6.jpeg',
  '/anita8.jpeg',
];

export default function About() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((prev) => (prev + 1) % images.length), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="w-full py-24 bg-gradient-to-b from-yellow-50 to-white overflow-hidden px-4 sm:px-6 md:px-20"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Image Section */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end relative"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[480px] md:h-[480px] rounded-[40px] overflow-hidden shadow-2xl border-[3px] border-gray-300">
            {images.map((src, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: current === index ? 1 : 0 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              >
                <Image
                  src={src}
                  alt={`About Image ${index + 1}`}
                  fill
                  className="object-cover object-center"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-800 mb-6 accent">
            About Anita Raicar
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed text-base sm:text-lg">
            Anita Raicar is a passionate <strong>Art of Living teacher</strong> and{' '}
            <strong>Computer Science educator</strong> devoted to uplifting lives through
            mindfulness, service, and learning.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-10">
            Over the past decade, she has conducted multiple workshops, empowered students,
            and supported community initiatives aimed at social and spiritual growth.
          </p>

          {/* Animated Stats */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6 sm:gap-10 md:gap-16 mb-10">
            <div className="text-center px-2 sm:px-4">
              <SmoothCounter to={10} />
              <p className="text-gray-700 text-xs sm:text-sm mt-2">Years Experience</p>
            </div>

            <div className="text-center px-2 sm:px-4">
              <SmoothCounter to={400} />
              <p className="text-gray-700 text-xs sm:text-sm mt-2">Lives Touched</p>
            </div>

            <div className="text-center px-2 sm:px-4">
              <SmoothCounter to={50} />
              <p className="text-gray-700 text-xs sm:text-sm mt-2">Workshops</p>
            </div>
          </div>

          {/* Certifications with Icons */}
          {/* Certifications with Icons */}
<motion.div
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1.5, delay: 0.3 }}
  viewport={{ once: true }}
>
  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 bg-white shadow-md rounded-lg p-4 border border-yellow-100 hover:shadow-lg transition text-center sm:text-left">
    <FaCertificate className="text-yellow-600 w-5 h-5" />
    <p className="text-yellow-700 font-semibold text-sm">Certified AOL Instructor</p>
  </div>
  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 bg-white shadow-md rounded-lg p-4 border border-yellow-100 hover:shadow-lg transition text-center sm:text-left">
    <FaAward className="text-yellow-600 w-5 h-5" />
    <p className="text-yellow-700 font-semibold text-sm">National Educator Award 2022</p>
  </div>
  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 bg-white shadow-md rounded-lg p-4 border border-yellow-100 hover:shadow-lg transition text-center sm:text-left">
    <FaUsers className="text-yellow-600 w-5 h-5" />
    <p className="text-yellow-700 font-semibold text-sm">Community Mentor & Speaker</p>
  </div>
</motion.div>

        </motion.div>
      </div>
    </section>
  );
}
