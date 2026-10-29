import About from "@/components/About";
import Academic from "@/components/Academic";
import Contact from "@/components/Contact";
import DigitalTwin from "@/components/DigitalTwin";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Journey />
        <Work />
        <Academic />
        <Contact />
      </main>
      <DigitalTwin />
    </>
  );
}
