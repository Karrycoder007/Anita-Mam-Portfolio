'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const galleries = [
  {
    title: 'Social Events',
    images: [
      'https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?w=800&q=80',
      'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&q=80',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
      'https://images.unsplash.com/photo-1564865881470-96a8f1d6a0b7?w=800&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
      'https://images.unsplash.com/photo-1523958203904-cdcb402031fd?w=800&q=80',
      
    ],
  },
  {
    title: 'Teaching',
    images: [
      'https://images.unsplash.com/photo-1581092580490-ec94e4e74f0b?w=800&q=80',
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
      'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&q=80',
      'https://images.unsplash.com/photo-1581092795365-1c4b91a8d982?w=800&q=80',
      'https://images.unsplash.com/photo-1519455953755-af066f52f1d7?w=800&q=80',
      'https://images.unsplash.com/photo-1531219432768-54e4e8e9a7a4?w=800&q=80',
      
    ],
  },
  {
    title: 'Travel',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
      'https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=800&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
      
    ],
  },
  {
    title: 'Spiritual Events',
    images: [
      'https://images.unsplash.com/photo-1509400190065-8f97aa9b80c5?w=800&q=80',
      'https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?w=800&q=80',
      'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&q=80',
      'https://images.unsplash.com/photo-1511974035430-5de47d3b95da?w=800&q=80',
      'https://images.unsplash.com/photo-1532619187606-6b06aa6de744?w=800&q=80',
      'https://images.unsplash.com/photo-1483030095059-1335d1b3df37?w=800&q=80',
      
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {currentGallery.images.map((src, index) => (
                <div
                  key={index}
                  className="relative w-full aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
                >
                  <Image
                    src={src}
                    alt={`${activeCategory} ${index + 1}`}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
