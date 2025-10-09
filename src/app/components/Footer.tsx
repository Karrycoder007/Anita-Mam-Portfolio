'use client';

import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-yellow-50 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* About */}
        <div>
          <h3 className="text-xl font-bold text-yellow-800 mb-4">About Anita</h3>
          <p className="text-gray-700 leading-relaxed text-sm">
            Anita Raicar is a passionate educator, Art of Living teacher, and social worker
            committed to empowering minds and communities through knowledge, mindfulness, 
            and social service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-yellow-800 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <Link href="#home" className="hover:text-yellow-700 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-yellow-700 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="#work" className="hover:text-yellow-700 transition">
                Work
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-yellow-700 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-bold text-yellow-800 mb-4">Connect</h3>
          <div className="flex items-center space-x-4">
            <Link href="https://facebook.com" target="_blank" className="text-gray-700 hover:text-yellow-700">
              <Facebook size={24} />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="text-gray-700 hover:text-yellow-700">
              <Instagram size={24} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-gray-700 hover:text-yellow-700">
              <Linkedin size={24} />
            </Link>
            <Link href="mailto:anita@example.com" className="text-gray-700 hover:text-yellow-700">
              <Mail size={24} />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-200 pt-6 text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Anita Raicar. All rights reserved.
      </div>
    </footer>
  );
}
