import Image from "next/image";
import Hero from "./components/Hero";

import About from "./components/About";
import Workshops from "./components/Workshops";
import Gallery from "./components/Gallery";
import GurudevThoughts from "./components/Thoughts";


export default function Home() {
  return (
   <>
   
   <Hero/>
   <About/>
   <Workshops/>
   <GurudevThoughts/>
   <Gallery/>
   
  
   
   </>
  
  );
}
