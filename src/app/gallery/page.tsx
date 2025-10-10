'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1580136609853-1b54b96409a7?w=800&q=80',
    title: 'Art of Living Session',
    category: 'events',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    title: 'Meditation Workshop',
    category: 'events',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1515169067865-5387ec356754?w=800&q=80',
    title: 'Achievement Award',
    category: 'achievements',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&q=80',
    title: 'Community Gathering',
    category: 'events',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
    title: 'Personal Milestone',
    category: 'achievements',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80',
    title: 'Yoga & Wellness Event',
    category: 'events',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&q=80',
    title: 'Inspiring Talk',
    category: 'events',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80',
    title: 'Honor Ceremony',
    category: 'achievements',
  },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredImages =
    activeFilter === 'all'
      ? images
      : images.filter((img) => img.category === activeFilter);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-black mb-10"
      >
        Gallery
      </motion.h1>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        {['all', 'events', 'achievements'].map((filter) => (
          <motion.button
            key={filter}
            whileTap={{ scale: 0.9 }}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 
              ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                  : 'bg-white text-black border-gray-300 hover:bg-blue-50'
              }`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* Image Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredImages.map((img) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition-all"
            >
              <Image
                src={img.src}
                alt={img.title}
                width={400}
                height={250}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-sm font-semibold text-gray-800">
                  {img.title}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
