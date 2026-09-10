import Header from "@/components/Header";
import Hero from "@/sections/Hero";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Process from "@/sections/Process";
import Services from "@/sections/Services";
import Stats from "@/sections/Stats";

export default function Home() {
  return (
    <>
      <Hero header={<Header />} />
      <Stats />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}
