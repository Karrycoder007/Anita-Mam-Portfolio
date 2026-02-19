'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  '/anita2.jpeg',
  '/t.jpeg',
  '/anita7.jpeg',
  '/anita6.jpeg',
  '/anita8.jpeg',
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[480px] md:h-[480px] rounded-[40px] overflow-hidden shadow-2xl border-[3px] border-gray-300">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`About Image ${index + 1}`}
          fill
          priority={index === 0} // Improves LCP
          sizes="(max-width: 768px) 100vw, 480px"
          className={`object-cover transition-opacity duration-1000 ${
            current === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}
