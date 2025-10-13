'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const highlights = [
  {
    title: 'Supporting Local Businesses',
    description:
      'Encouraging people to buy from local producers and promoting small-scale entrepreneurship.',
    img: '/c.jpeg',
  },
  {
    title: 'Motivating the Youth',
    description:
      'Conducting workshops and talks to inspire young minds towards leadership and positive action.',
    img: '/b.jpeg',
  },
  {
    title: 'Community Development',
    description:
      'Engaging in social initiatives to improve education, health, and infrastructure in local communities.',
    img: '/c.jpeg',
  },
  {
    title: 'Global & Tech Awareness',
    description:
      'Sharing insights on global trends, technology, and sustainability to empower informed decisions.',
    img: '/tech4.jpeg',
  },
];

const galleryImages = [
  '/a.jpeg',
  '/h.jpeg',
  '/g.jpeg',
  '/e.jpeg',
  
];

export default function SocialWorkPage() {
  return (
    <section className="w-full py-16 bg-yellow-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero */}
        <motion.h1
          className="text-5xl sm:text-6xl font-bold text-center accent text-gray-900 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Social Initiatives
        </motion.h1>

        <motion.p
          className="text-gray-700 text-center sm:text-lg leading-relaxed pb-12 pt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Anita Raicar is committed to uplifting communities, supporting local businesses, motivating youth, and
          creating a meaningful impact in society. Her work inspires others to take action and be responsible citizens.
        </motion.p>

        {/* Highlight Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {highlights.map((h, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-40">
                <Image src={h.img} alt={h.title} fill className="object-cover" />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold mb-2 accent  text-gray-900">{h.title}</h3>
                <p className="text-gray-700 text-sm flex-1">{h.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Video */}
        <motion.div
          className="relative w-full aspect-video rounded-xl shadow-lg overflow-hidden pb-12 pt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/mQhgdiFqZt8?si=OSyXKdA7Qe_U-Vpy"
            title="Social Work Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </motion.div>
           {/* Info / Impact Cards */}
           <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
            <h3 className="text-3xl font-bold text-yellow-600 mb-2">500+</h3>
            <p className="text-gray-700">Lives Impacted</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
            <h3 className="text-3xl font-bold text-yellow-600 mb-2">25+</h3>
            <p className="text-gray-700">Workshops Conducted</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
            <h3 className="text-3xl font-bold text-yellow-600 mb-2">15+</h3>
            <p className="text-gray-700">Local Businesses Supported</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
            <h3 className="text-3xl font-bold text-yellow-600 mb-2">10+</h3>
            <p className="text-gray-700">Community Projects</p>
          </div>
        </motion.div>

        {/* Gallery / Photos */}
        <motion.div
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.5 }}
>
  {galleryImages.map((src, idx) => (
    <div
      key={idx}
      className="relative w-full aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
    >
      <motion.div
        className="w-full h-full"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        <Image
          src={src}
          alt={`Social Work ${idx + 1}`}
          fill
          className="object-cover object-center"
        />
      </motion.div>
    </div>
  ))}
</motion.div>


     

        {/* Closing Text */}
        <motion.p
          className="text-gray-700 text-center sm:text-lg leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Anita Raicar’s social work creates meaningful change by supporting communities, inspiring young minds, 
          and promoting responsible and sustainable living. Explore her initiatives and join in creating a positive impact.
        </motion.p>
      </div>
    </section>
  );
}
