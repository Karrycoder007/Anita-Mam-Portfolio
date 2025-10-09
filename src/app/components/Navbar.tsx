'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Work', href: '#work' },
  { title: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-yellow-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12 h-20">
        {/* Logo */}
        <Link href="#home" className="text-2xl font-bold text-black">
          Anita Raicar
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-black hover:text-yellow-700 transition-colors duration-300 font-medium"
            >
              {item.title}
            </Link>
          ))}
          <Link
            href="#contact"
            className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-6 rounded-full font-semibold shadow-md transition-all duration-300"
          >
            Connect
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} className="text-black" /> : <Menu size={28} className="text-black" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-yellow-50 shadow-md overflow-hidden"
          >
            <ul className="flex flex-col gap-4 px-6 py-4">
              {navItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-black hover:text-yellow-700 font-medium"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-6 rounded-full font-semibold shadow-md text-center"
                >
                  Connect
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
