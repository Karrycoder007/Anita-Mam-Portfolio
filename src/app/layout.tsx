import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import fonts with CSS variables
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-accent",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anita Raicar",
  description:
    "Spiritual guidance, mindfulness sessions, and workshops by Anita Raicar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${dancingScript.variable} antialiased bg-[#fff9ed] text-black`}
      >
        {/* Fixed Navbar */}
        <Navbar />

        {/* Main Page Content */}
        <main className="pt-20 min-h-screen">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
