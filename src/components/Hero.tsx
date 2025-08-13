import React, { useEffect, useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
// @ts-ignore
import newHeroImage from '@/assets/Untitled design.JPEG';

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
    <section id="home" className="relative w-full flex items-center justify-center overflow-hidden min-h-screen">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 parallax"
        style={{
          backgroundImage: `url(${newHeroImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
      </div>
      
      {/* Mobile-specific background adjustments for landscape image */}
      <style>
        {`
          @media (max-width: 1024px) {
            #home .parallax {
              background-attachment: scroll;
            }
          }
          @media (max-width: 768px) {
            #home {
              min-height: 70vh;
            }
            #home .parallax {
              background-size: contain;
              background-position: center top;
              background-attachment: scroll;
              background-color: #1a1a1a;
            }
          }
          @media (max-width: 480px) {
            #home {
              min-height: 60vh;
            }
            #home .parallax {
              background-size: 80%;
              background-position: center center;
              background-attachment: scroll;
              background-color: #1a1a1a;
            }
          }
        `}
      </style>

      {/* CTA only at bottom center */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          <div className={`flex items-center justify-center pb-10 transition-all duration-1000 ${
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
      </div>
    </section>
  );
};

export default Hero;