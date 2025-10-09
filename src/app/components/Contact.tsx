'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { GiMeditation, GiLotus } from 'react-icons/gi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: '',
    time: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Session Booking: ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDate: ${formData.date}\nTime: ${formData.time}\nMessage: ${formData.message}`;
    window.location.href = `mailto:anita@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="w-full py-24 relative overflow-hidden bg-gradient-to-b from-yellow-50 to-white">
      {/* Floating spiritual waves */}
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
          ></motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-yellow-800 text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Book a Session / Contact Anita
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          {/* Contact Info / Spiritual Icons */}
          <motion.div
            className="md:w-1/2 flex flex-col gap-8 justify-center min-h-[600px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-gray-700 text-lg">
              Connect with Anita for spiritual guidance, mindfulness sessions, workshops, and personal growth.
            </p>

            <div className="flex items-center gap-3 text-yellow-700 text-lg font-semibold">
              <FaEnvelope /> <span>anita@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-yellow-700 text-lg font-semibold">
              <FaPhone /> <span>+91 98765 43210</span>
            </div>

            {/* Spiritual Icons */}
            <div className="flex gap-6 mt-4">
              <motion.div whileHover={{ scale: 1.2 }} className="p-4 rounded-full bg-yellow-100 text-yellow-600 shadow-md">
                <GiMeditation className="text-3xl" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} className="p-4 rounded-full bg-yellow-100 text-yellow-600 shadow-md">
                <GiLotus className="text-3xl" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} className="p-4 rounded-full bg-yellow-100 text-yellow-600 shadow-md">
                <FaCalendarAlt className="text-3xl" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} className="p-4 rounded-full bg-yellow-100 text-yellow-600 shadow-md">
                <FaClock className="text-3xl" />
              </motion.div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.form
            className="md:w-1/2 flex flex-col gap-4 bg-white p-8 rounded-2xl shadow-lg border border-yellow-100 relative z-10 min-h-[500px]"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1 }}
          >
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

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="text-gray-600 font-medium">Date</label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="p-4 rounded-xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full transition"
                />
              </div>
              <div className="flex-1">
                <label className="text-gray-600 font-medium">Time</label>
                <input
                  type="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="p-4 rounded-xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full transition"
                />
              </div>
            </div>

            <label className="text-gray-600 font-medium">Message / Intention</label>
            <textarea
              name="message"
              placeholder="Your Message / Intention"
              rows={5}
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
          </motion.form>
        </div>
      </div>
    </section>
  );
}
