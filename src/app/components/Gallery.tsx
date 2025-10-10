'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const galleryImages = [
  '/cyber1.jpeg',
  '/cyber2.jpeg',
  '/ratan1.jpeg',
  '/tech4.jpeg',
  '/panch3.jpeg',
  '/panch4.jpeg',
  '/tech4.jpeg',
  '/gallery8.jpg',
  '/gallery9.jpeg',
  '/gallery10.jpeg',
  '/gallery11.jpeg',
  '/gallery12.jpeg',
];

const Gallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="gallery" className="w-full py-20 bg-yellow-50 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-12 text-center">
        {/* Heading & Text */}
        <motion.h2
          className="text-6xl font-bold text-yellow-800 mb-4 accent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Captured Moments
        </motion.h2>
        <motion.p
          className="text-gray-700 max-w-2xl mx-auto text-lg mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Glimpses from workshops, community events, and moments that define the
          spirit of compassion and connection.
        </motion.p>
      </div>

      {/* Scrollable Gallery */}
      <div
        className="relative w-full overflow-x-auto no-scrollbar"
        ref={scrollRef}
      >
        <div className="relative">
          <motion.div
            className="flex gap-4 w-max"
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              ease: 'linear',
              duration: 80, // slower sliding
              repeat: Infinity,
            }}
          >
            {[...galleryImages, ...galleryImages].map((src, index) => (
              <div
                key={index}
                className="relative w-64 h-40 md:w-80 md:h-52 flex-shrink-0 rounded-2xl overflow-hidden border-1 border-gray-400 shadow-md"
              >
                <Image
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover object-center"
                />
              </div>
            ))}
          </motion.div>

          {/* Gradient overlays for fade edges on images only */}
          <div className="absolute top-0 left-0 w-10 h-full bg-gradient-to-r from-gray-400 to-transparent pointer-events-none rounded-l-2xl" />
          <div className="absolute top-0 right-0 w-10 h-full bg-gradient-to-l from-gray-400 to-transparent pointer-events-none rounded-r-2xl" />
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default Gallery;
