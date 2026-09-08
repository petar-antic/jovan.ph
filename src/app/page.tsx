import Header from "@/components/Header";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Perspective from "@/sections/Perspective";
import Process from "@/sections/Process";

export default function Home() {
  return (
    <>
      <Hero header={<Header />} />
      <Perspective />
      <About />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}
