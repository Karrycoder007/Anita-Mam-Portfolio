import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Workshops from "./components/Workshops";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <About/>
   <Workshops/>
   <Gallery/>
   <Contact/>
   <Footer/>
   
   </>
  
  );
}
