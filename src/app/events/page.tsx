'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const events = [
  {
    title: "Art of Living Workshop",
    date: "15th November 2025",
    location: "Ponda, Goa",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=60",
    link: "#",
  },
  {
    title: "Mindfulness Meditation Retreat",
    date: "25th November 2025",
    location: "Goa Ashram",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop&q=60",
    link: "#",
  },
  {
    title: "Youth Leadership Seminar",
    date: "5th December 2025",
    location: "Panaji, Goa",
    image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=600&auto=format&fit=crop&q=60",
    link: "#",
  },
  {
    title: "Stress Relief Workshop",
    date: "15th December 2025",
    location: "Margao, Goa",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&auto=format&fit=crop&q=60",
    link: "#",
  },
];

export default function EventPage() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-yellow-50 to-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-800 mb-4">
            Upcoming Events
          </h1>
          <p className="text-gray-700 text-lg md:text-xl">
            Join us to experience mindfulness, learning, and growth.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-yellow-100 hover:shadow-2xl transition cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-56">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-yellow-800 mb-2">{event.title}</h3>
                <p className="text-gray-700 mb-1"><strong>Date:</strong> {event.date}</p>
                <p className="text-gray-700 mb-4"><strong>Location:</strong> {event.location}</p>
                <a
                  href={event.link}
                  className="inline-block px-6 py-2 bg-yellow-600 text-white font-semibold rounded-full hover:bg-yellow-700 transition"
                >
                  Register
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
