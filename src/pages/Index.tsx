import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Process from '@/components/Process';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleSmoothScroll));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleSmoothScroll));
    };
  }, []);

  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      {/* Placeholder Portfolio Section - Coming Soon */}
      <section id="work" className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cocoa mb-4">{t('portfolio.title')}</h2>
          <p className="text-sage text-xl mb-8">{t('portfolio.subtitle')}</p>
          <div className="mx-auto max-w-3xl rounded-2xl border border-sand bg-white/60 p-10 shadow-soft">
            <p className="text-cocoa/80 text-lg">{t('portfolio.comingSoon')}</p>
          </div>
        </div>
      </section>
      <Services />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
