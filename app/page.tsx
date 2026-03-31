import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import AIFeatures from '@/components/AIFeatures';
import WhyChoose from '@/components/WhyChoose';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <AIFeatures />
      <WhyChoose />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
      <FloatingChat />
      <BackToTop />
    </main>
  );
}
