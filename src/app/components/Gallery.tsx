'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  '/gallery4.jpg',
  '/gallery5.jpg',
  '/gallery6.jpg',
  '/gallery7.jpg',
  '/gallery8.jpg',
  '/gallery9.jpg',
  '/gallery10.jpg',
  '/gallery11.jpg',
  '/gallery12.jpg',
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="w-full py-20 bg-yellow-50 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Heading & Text */}
        <motion.h2
          className="text-4xl font-bold text-yellow-800 mb-4"
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

      {/* Infinite Scrolling Gallery */}
      <div className="relative w-full">
        <motion.div
          className="flex gap-6"
          initial={{ x: 0 }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 30,
            repeat: Infinity,
          }}
        >
          {[...galleryImages, ...galleryImages].map((src, index) => (
            <div
              key={index}
              className="relative w-64 h-40 md:w-80 md:h-52 flex-shrink-0 rounded-2xl overflow-hidden border-4 border-yellow-200 shadow-md"
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
      </div>

      {/* Gradient overlays for fade edges */}
      <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-yellow-50 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-yellow-50 to-transparent pointer-events-none" />
    </section>
  );
};

export default Gallery;
