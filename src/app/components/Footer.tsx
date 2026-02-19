'use client';

import { Facebook, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-yellow-50 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* About */}
        <div>
          <h3 className="text-3xl font-bold text-yellow-800 mb-4 accent">About Anita</h3>
          <p className="text-gray-800 leading-relaxed text-sm">
            Anita Raicar is a passionate educator, Art of Living teacher, and social worker
            committed to empowering minds and communities through knowledge, mindfulness, 
            and social service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-3xl font-bold text-yellow-800 mb-4 accent">Quick Links</h3>
          <ul className="space-y-2 text-gray-800">
            <li>
              <Link href="/" aria-label="Go to Home page" className="hover:text-yellow-700 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/socialwork" aria-label="Go to Social Work page" className="hover:text-yellow-700 transition">
                Social Work
              </Link>
            </li>
            <li>
              <Link href="/events" aria-label="Go to Events page" className="hover:text-yellow-700 transition">
                Events
              </Link>
            </li>
            <li>
              <Link href="/gallery" aria-label="Go to Gallery page" className="hover:text-yellow-700 transition">
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-3xl accent font-bold text-yellow-800 mb-4">Connect</h3>
          <div className="flex items-center space-x-4">
            <Link
              href="https://www.facebook.com/anita.raicar"
              target="_blank"
              aria-label="Visit Anita Raicar on Facebook"
              className="text-gray-800 hover:text-yellow-700"
            >
              <Facebook size={24} />
            </Link>
            <Link
              href="https://www.instagram.com/anitaraicar"
              target="_blank"
              aria-label="Visit Anita Raicar on Instagram"
              className="text-gray-800 hover:text-yellow-700"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="mailto:anitaraicarwebsite@gmail.com"
              aria-label="Send email to Anita Raicar"
              className="text-gray-800 hover:text-yellow-700"
            >
              <Mail size={24} />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-200 pt-6 text-center text-gray-800 text-sm">
        &copy; {new Date().getFullYear()} Anita Raicar. All rights reserved.
        <br />
        <span>
          Made with ❤️ by{' '}
          <a
            href="https://www.kartikbhat.me"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Coderkarry website"
            className="underline hover:text-yellow-700"
          >
            Coderkarry
          </a>
        </span>
      </div>
    </footer>
  );
}
