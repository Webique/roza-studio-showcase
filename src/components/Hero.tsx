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

  const handlePortfolioClick = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

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
          <h1 className={`font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-ivory mb-6 leading-tight ${
            isRTL ? 'text-right' : 'text-left'
          }`}>
            <span className="inline-block animate-fade-in-up">
              {t('hero.title')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-ivory/90 mb-8 max-w-3xl mx-auto leading-relaxed ${
            isRTL ? 'text-right' : 'text-left'
          }`}>
            {t('hero.subtitle')}
          </p>

          {/* Description */}
          <p className={`text-lg md:text-xl text-ivory/80 mb-12 max-w-2xl mx-auto leading-relaxed ${
            isRTL ? 'text-right' : 'text-left'
          }`}>
            {t('hero.description')}
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

            <button
              onClick={handlePortfolioClick}
              className="btn-secondary flex items-center space-x-3 bg-white/10 border-white/30 text-white hover:bg-white hover:text-cocoa"
            >
              <span>{t('hero.cta.secondary')}</span>
              <ArrowIcon size={20} />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;