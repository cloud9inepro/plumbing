import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import ServiceAreas from "@/components/ServiceAreas";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <About />
      <WhyUs />
      <Reviews />
      <ServiceAreas />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}