"use client";

import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <Link
       href="https://wa.me/919011370514?text=Hi%20👋"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110">
        <FaWhatsapp className="text-3xl" />
      </div>
    </Link>
  );
}
