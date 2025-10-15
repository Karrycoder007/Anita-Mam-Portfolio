'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { GiMeditation, GiLotus } from 'react-icons/gi';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch('https://formspree.io/f/mzzjknpr', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      router.push('/thank-you');
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="w-full py-24 relative overflow-hidden bg-gradient-to-b from-yellow-50 to-white">
      {/* Floating Waves */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[400px] h-[400px] bg-yellow-200 rounded-full opacity-20 blur-3xl"
            initial={{ y: Math.random() * 600 - 300, x: Math.random() * 1200 - 600 }}
            animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              repeatType: 'loop',
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-yellow-800 text-center mb-12 accent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Book a Session / Contact Anita
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-stretch">
          {/* Left Side: Image + Text */}
          <motion.div
            className="md:w-1/2 flex flex-col justify-between bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-md"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-lg ">
              <Image
                src="/t.jpeg"
                alt="Anita Raicar"
                fill
                className="object-contain scale-105 transition-transform duration-700 ease-out hover:scale-110 "
                priority
              />
            </div>

            <p className="text-gray-700 text-lg mt-6">
              Connect with Anita for spiritual guidance, mindfulness sessions, workshops, and personal growth.
            </p>

            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center gap-3 text-yellow-700 text-lg font-semibold">
                <FaEnvelope /> <span>anitaraicarwebsite@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-yellow-700 text-lg font-semibold">
                <FaPhone /> <span>+91 9011370514</span>
              </div>
            </div>

            <div className="flex gap-6 mt-6">
              <motion.div whileHover={{ scale: 1.2 }} className="p-4 rounded-full bg-yellow-100 text-yellow-600 shadow-md">
                <GiMeditation className="text-3xl" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} className="p-4 rounded-full bg-yellow-100 text-yellow-600 shadow-md">
                <GiLotus className="text-3xl" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            className="md:w-1/2 flex flex-col justify-center bg-white p-8 rounded-2xl shadow-lg border border-yellow-100"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <label className="text-gray-600 font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="p-4 rounded-xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              />

              <label className="text-gray-600 font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="p-4 rounded-xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              />

              <label className="text-gray-600 font-medium">Phone</label>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="p-4 rounded-xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              />

              <label className="text-gray-600 font-medium">Message / Intention</label>
              <textarea
                name="message"
                placeholder="Your Message / Intention"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="p-4 rounded-xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              ></textarea>

              <button
                type="submit"
                className="bg-yellow-600 text-white px-6 py-3 rounded-xl hover:bg-yellow-700 transition font-semibold text-lg mt-2"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
