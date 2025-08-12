import React, { useEffect, useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroMobile from '@/assets/hero.jpg';
import heroDesktop from '@/assets/hero1.png';

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ perspective: '1000px' }}>
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 parallax"
        style={{
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 35%',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
      </div>
      {/* Responsive background images (mobile default, desktop override) */}
      <style>
        {`
          #home .parallax {
            background-image: url(${heroMobile});
          }
          @media (min-width: 1024px) {
            #home .parallax {
              background-image: url(${heroDesktop});
            }
          }
        `}
      </style>

      {/* CTA only at bottom center */}
      <div className="relative z-10 container mx-auto px-4">
        <div className={`min-h-screen flex items-end justify-center pb-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
    </section>
  );
};

export default Hero;