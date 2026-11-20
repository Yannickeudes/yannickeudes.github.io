import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Universes from "@/components/Universes";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Live from "@/components/Live";
import Stack from "@/components/Stack";
import Journey from "@/components/Journey";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Universes />
        <About />
        <Projects />
        <Live />
        <Stack />
        <Journey />
      </main>
      <Footer />
    </>
  );
}
