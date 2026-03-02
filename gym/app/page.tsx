// app/page.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Programs from "./components/Programs";
import Trainers from "./components/Trainers";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import CTAS from "./components/CTAS";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F0F]">
      <Navbar />
      <Hero />
      <Stats />
      <Programs />
      <Trainers />
      <Pricing />
      <Testimonials />
      <CTAS />
      <Footer />
    </main>
  );
}