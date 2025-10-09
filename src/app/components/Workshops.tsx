'use client';
import { motion } from 'framer-motion';
import { Heart, Brain, Users, Sparkles } from 'lucide-react';

const workshops = [
  {
    icon: <Heart className="w-8 h-8 text-yellow-700" />,
    title: 'Art of Living Sessions',
    description:
      'Experience deep relaxation and mindfulness through guided Art of Living techniques and meditation.',
  },
  {
    icon: <Brain className="w-8 h-8 text-yellow-700" />,
    title: 'Mindfulness Workshops',
    description:
      'Learn practical methods to manage stress, improve focus, and cultivate inner peace in daily life.',
  },
  {
    icon: <Users className="w-8 h-8 text-yellow-700" />,
    title: 'Youth Empowerment',
    description:
      'Special sessions designed for students and young adults to build confidence and emotional balance.',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-yellow-700" />,
    title: 'Community Programs',
    description:
      'Collaborative events and service initiatives focused on bringing people together for positive change.',
  },
];

const Workshops: React.FC = () => {
  return (
    <section id="workshops" className="w-full py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.h2
          className="text-4xl font-bold text-yellow-800 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Workshops & Programs
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          Transformative experiences designed to bring balance, growth, and
          awareness to every individual.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {workshops.map((workshop, index) => (
            <motion.div
              key={index}
              className="p-8 bg-yellow-50 rounded-3xl shadow-md hover:shadow-xl transition-shadow border border-yellow-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-4">{workshop.icon}</div>
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">
                {workshop.title}
              </h3>
              <p className="text-gray-600">{workshop.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
