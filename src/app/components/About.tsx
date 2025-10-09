'use client';

import Image from 'next/image';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaCertificate, FaAward, FaUsers } from 'react-icons/fa'; // icons added

const Counter = ({ from, to }: { from: number; to: number }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2.5, ease: 'easeOut' });
      return controls.stop;
    }
  }, [inView, count, to]);

  return (
    <motion.span ref={ref} className="inline-block">
      {rounded}
    </motion.span>
  );
};

const images = [
  'https://images.unsplash.com/photo-1618835962148-cf177563c6c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGh1bWFufGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1620122303020-87ec826cf70d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGh1bWFufGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1714205901279-1b157398fad5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGh1bWFufGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1722615095956-c346e12ac0f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGh1bWFufGVufDB8fDB8fHww',
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
      className="w-full py-24 bg-gradient-to-b from-yellow-50 to-white overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
        {/* Image Section */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end relative"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="relative w-80 h-80 md:w-[480px] md:h-[480px] rounded-[40px] overflow-hidden shadow-2xl border-[3px] border-yellow-300">
            {images.map((src, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: current === index ? 1 : 0 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              >
                <Image src={src} alt={`About Image ${index + 1}`} fill className="object-cover object-center" />
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
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-800 mb-6">
            About Anita Raicar
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed text-lg">
            Anita Raicar is a passionate <strong>Art of Living teacher</strong> and
            <strong> Computer Science educator</strong> devoted to uplifting lives
            through mindfulness, service, and learning.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-10">
            Over the past decade, she has conducted multiple workshops,
            empowered students, and supported community initiatives aimed at
            social and spiritual growth.
          </p>

          {/* Animated Stats */}
          <div className="flex justify-center md:justify-start gap-10 md:gap-16 mb-10">
            <div className="text-center">
              <h3 className="text-5xl font-extrabold text-yellow-600">
                <Counter from={0} to={10} />+
              </h3>
              <p className="text-gray-700 text-sm mt-2">Years Experience</p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-extrabold text-yellow-600">
                <Counter from={0} to={1000} />+
              </h3>
              <p className="text-gray-700 text-sm mt-2">Lives Touched</p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-extrabold text-yellow-600">
                <Counter from={0} to={50} />+
              </h3>
              <p className="text-gray-700 text-sm mt-2">Workshops</p>
            </div>
          </div>

          {/* Certifications with Icons */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 bg-white shadow-md rounded-lg p-4 border border-yellow-100 hover:shadow-lg transition">
              <FaCertificate className="text-yellow-600 w-5 h-5" />
              <p className="text-yellow-700 font-semibold text-sm">Certified AOL Instructor</p>
            </div>
            <div className="flex items-center gap-2 bg-white shadow-md rounded-lg p-4 border border-yellow-100 hover:shadow-lg transition">
              <FaAward className="text-yellow-600 w-5 h-5" />
              <p className="text-yellow-700 font-semibold text-sm">National Educator Award 2022</p>
            </div>
            <div className="flex items-center gap-2 bg-white shadow-md rounded-lg p-4 border border-yellow-100 hover:shadow-lg transition">
              <FaUsers className="text-yellow-600 w-5 h-5" />
              <p className="text-yellow-700 font-semibold text-sm">Community Mentor & Speaker</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
