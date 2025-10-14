import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/Whatsapp";
import CountdownOverlay from "./components/CountdownOverlay";
 // 👈 new component

// Fonts
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

// Metadata
export const metadata: Metadata = {
  title: "Anita Raicar",
  description:
    "Spiritual guidance, mindfulness sessions, and workshops by Anita Raicar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${dancingScript.variable} antialiased bg-[#fff9ed] text-black`}
      >
        {/* 👇 Wrap everything in the countdown overlay */}
        <CountdownOverlay>
          <Navbar />
          <main className="pt-20 min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </CountdownOverlay>
      </body>
    </html>
  );
}
