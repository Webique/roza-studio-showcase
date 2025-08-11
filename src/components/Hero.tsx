import React, { useEffect, useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import courtyardSky from '@/assets/courtyard-sky.jpg';

const Hero = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/966536601777', '_blank');
  };

  // Removed portfolio CTA for a simpler hero

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 parallax"
        style={{
          backgroundImage: `url(${courtyardSky})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Main Headline */}
          <h1 className={
            'font-playfair text-4xl md:text-6xl lg:text-7xl font-extrabold text-ivory mb-4 leading-tight text-center'
          }>
            <span className="inline-block animate-fade-in-up">
              {t('hero.title.short')}
            </span>
          </h1>

          {/* Subtitle (short) */}
          <p className={
            'text-lg md:text-xl text-ivory mb-10 max-w-2xl mx-auto leading-relaxed text-center font-bold'
          }>
            {t('hero.subtitle.short')}
          </p>
          

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center ${
            isRTL ? 'sm:flex-row-reverse' : ''
          }`}>
            <button
              onClick={handleWhatsAppClick}
              className="btn-whatsapp flex items-center space-x-3 transform hover:scale-105 transition-all duration-300"
            >
              <span>{t('hero.cta.primary')}</span>
              <ArrowIcon size={20} />
            </button>
          </div>
        </div>

        {/* Scroll Indicator removed for a cleaner hero */}
      </div>
    </section>
  );
};

export default Hero;