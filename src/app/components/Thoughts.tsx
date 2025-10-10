'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const thoughts = [
  {
    text: "The most important thing in life is to be happy. Happiness is within you, not outside.",
    author: "Sri Sri Ravi Shankar",
    image: "/guru1.webp", // Add the path to your Gurudev image
  },
  {
    text: "Breathing properly is the gateway to a calm mind and healthy body.",
    author: "Sri Sri Ravi Shankar",
    image: "/guru2.webp",
  },
  {
    text: "When you serve others, you serve yourself in the highest way.",
    author: "Sri Sri Ravi Shankar",
    image: "/guru3.webp",
  },
  {
    text: "Smile, it is the universal language of kindness.",
    author: "Sri Sri Ravi Shankar",
    image: "/guru5.jpg",
  },
  {
    text: "Inner peace is the foundation for external peace.",
    author: "Sri Sri Ravi Shankar",
    image: "/guru6.jpg",
  },
];

export default function GurudevThoughtsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % thoughts.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-6 bg-gradient-to-b from-white to-yellow-50">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-800 mb-12 accent">
          Thoughts from Gurudev
        </h2>

        <div className="relative h-72 md:h-80 lg:h-96 overflow-hidden flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute inset-0 flex flex-col items-center justify-center px-6"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
            >
              {/* Gurudev Image */}
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mb-6 border-4 border-yellow-300 shadow-lg">
                <img
                  src={thoughts[currentIndex].image}
                  alt="Gurudev"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote */}
              <p className="text-gray-700 italic text-lg md:text-xl mb-4">
                &quot;{thoughts[currentIndex].text}&quot;
              </p>
              <p className="text-yellow-800 font-semibold text-sm md:text-base">
                - {thoughts[currentIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
