'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const galleries = [
  {
    title: 'Social Events',
    images: [
      '/m1.jpeg',
      '/m2.jpeg',
      '/m3.jpeg',
      '/m4.jpeg',
      '/m5.jpeg',
      '/m6.jpeg',
      '/r.jpeg',
      
    ],
  },
  {
    title: 'Teaching',
    images: [
      '/1.jpeg',
      '/c1.jpeg',
      '/c2.jpeg',
      '/c3.jpeg',
      '/n.jpeg',
      
    ],
  },
  {
    title: 'Art of Living',
    images: [
      '/anita1.jpeg',
      '/b.jpeg',
      '/c.jpeg',
      '/g.jpeg',
      '/h.jpeg', 
      '/zz.jpeg',
      '/zzz.jpeg',  
      '/u.jpeg',
      '/v.jpeg',0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                              
    ],
  },
  {
    title: 'Spiritual Events',
    images: [
      '/k.jpeg',
      '/h.jpeg',
      '/f.jpeg',
      '/e.jpeg',
      '/u.jpeg',
      '/v.jpeg',
      '/w.jpeg',
      '/x.jpeg',
      
    ],
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('Social Events');

  const currentGallery = galleries.find((g) => g.title === activeCategory);

  return (
    <section className="w-full py-16 bg-yellow-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-6xl font-bold text-center text-gray-900 mb-12 accent pb-6">
          Gallery
        </h1>

        {/* Category Selector */}
<div className="flex flex-wrap justify-center gap-4 mb-12">
  {galleries.map((section) => (
    <button
      key={section.title}
      onClick={() => setActiveCategory(section.title)}
      className={`relative text-xl sm:text-2xl font-bold accent text-black shadow-md px-3 py-1 transition-all duration-300
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:h-[2px] after:bg-black after:transition-all after:duration-300
        ${activeCategory === section.title
          ? 'after:w-full'
          : 'after:w-0 hover:after:w-full opacity-80 hover:opacity-100'}
      `}
    >
      {section.title}
    </button>
  ))}
</div>


        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
  {currentGallery && (
    <motion.div
      key={activeCategory}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {currentGallery.images.map((src, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <motion.div
            whileHover={{ scale: 1.05 }} // image zooms smoothly
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Image
              src={src}
              alt={`${activeCategory} ${index + 1}`}
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )}
</AnimatePresence>



      </div>
    </section>
  );
}
