'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { GiMeditation } from 'react-icons/gi';

export default function Hero() {
  return (
    <section className="relative bg-yellow-50 min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
        
        {/* ---- Text Section ---- */}
        <motion.div
          className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg font-medium text-gray-700 mb-3">
            Art of Living Teacher & Educator
          </p>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-black leading-tight mb-6">
            Inspiring Minds Through Knowledge & Compassion
          </h1>
          <p className="text-gray-800 text-lg mb-8 leading-relaxed">
            Anita Raicar blends expertise in computer science education with her spiritual guidance,
            mindfulness workshops, and community service — helping people grow in wisdom, peace, and self-awareness.
          </p>

          <div className="flex justify-center lg:justify-start gap-4">
            <Link
              href="#contact"
              className="px-6 py-3 bg-orange-400 text-white font-semibold rounded-lg shadow-md hover:bg-orange-500  transition transform duration-200"
            >
              Book a Session
            </Link>
            <Link
              href="#about"
              className="px-6 py-3 border border-gray-800 text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* ---- Image Section ---- */}
        <motion.div
          className="lg:w-1/2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-[440px] h-[380px] md:w-[480px] md:h-[400px] lg:w-[520px] lg:h-[420px] rounded-[40px] overflow-hidden shadow-2xl border border-gray-200">
            <Image
              src="/anita1.jpeg"
              alt="Anita Raicar"
              fill
              className="object-cover object-center"
            />
            {/* Floating Icon */}
            <motion.div
              className="absolute top-4 left-4 text-yellow-500 opacity-90"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <GiMeditation size={40} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
