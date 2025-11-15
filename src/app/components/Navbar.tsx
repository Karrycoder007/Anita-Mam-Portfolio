'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'Social Work', href: '/socialwork' },
  { title: 'Events', href: '/events' },
  { title: 'Gallery', href: '/gallery' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/30 backdrop-blur-md shadow-md'
          : 'bg-white/20 backdrop-blur-sm'
      } border-b border-white/30`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12 h-20">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-black accent">
          Anita Raicar
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-black hover:text-yellow-700 transition-colors duration-300 text-2l font-bold accent"
            >
              {item.title}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-orange-400 hover:bg-yellow-500 text-white py-2 px-6 rounded-full font-semibold shadow-md transition-all duration-300 text-xl accent"
          >
            Connect
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 focus:outline-none"
          >
            {isOpen ? (
              <X size={28} className="text-black" />
            ) : (
              <Menu size={28} className="text-black" />
            )}
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
            className="md:hidden bg-white/30 backdrop-blur-lg shadow-md overflow-hidden border-b border-white/30"
          >
            <ul className="flex flex-col gap-4 px-6 py-4">
              {navItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block hover:text-yellow-700 font-medium accent"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-6 rounded-full font-semibold shadow-md text-center text-xl accent"
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
