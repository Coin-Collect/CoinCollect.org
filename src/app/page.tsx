import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import StrategicPartners from '@/components/StrategicPartners';
import About from '@/components/About';
import Services from '@/components/Services';
import Token from '@/components/Token';
import Roadmap from '@/components/Roadmap';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-pink-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <About />
      <Token />
      <Roadmap />
      <FAQ />
      <StrategicPartners />
      <Footer />
    </main>
  );
}
