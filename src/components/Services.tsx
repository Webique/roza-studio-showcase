import React from 'react';
import { Home, Building2, Palette, Eye, Wrench, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import stripePattern from '@/assets/stripe-pattern.jpg';
import serviceImg1 from '@/assets/992efb13-0a73-4123-85a0-aed68443d18f.JPG';
import serviceImg2 from '@/assets/01114349-11c2-474b-8c3b-4ba657e4bf44.JPG';
import serviceImg3 from '@/assets/1994f335-8eac-4417-99f2-78d1578b1dd6.JPG';

const Services = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: Home,
      titleKey: 'services.interior',
      descKey: 'services.interior.desc',
    },
    {
      icon: Building2,
      titleKey: 'services.architecture',
      descKey: 'services.architecture.desc',
    },
    {
      icon: Palette,
      titleKey: 'services.selection',
      descKey: 'services.selection.desc',
    },
    {
      icon: Eye,
      titleKey: 'services.consultation',
      descKey: 'services.consultation.desc',
    },
    {
      icon: Wrench,
      titleKey: 'services.renovation',
      descKey: 'services.renovation.desc',
    },
    {
      icon: Sparkles,
      titleKey: 'services.styling',
      descKey: 'services.styling.desc',
    },
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/966536601777', '_blank');
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="services" className="py-20 relative">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${stripePattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cocoa mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-sage max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div
                key={service.titleKey}
                className="group bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-soft hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-sage/60 to-cocoa/60 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={32} className="text-white/90" />
                  </div>
                  
                  <h3 className="font-playfair text-2xl font-semibold text-cocoa mb-4">
                    {t(service.titleKey)}
                  </h3>
                  
                  <p className="text-sage leading-relaxed mb-6">
                    {t(service.descKey)}
                  </p>
                </div>

                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center justify-center space-x-2 text-cocoa hover:text-sage transition-colors duration-300 font-medium group mx-auto"
                >
                  <span>{t('services.cta')}</span>
                  <ArrowIcon size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Featured Projects Showcase */}
        <div className="space-y-32 mt-32">
          {/* Project 1 - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={serviceImg1}
                  alt="Luxury Interior Design"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl px-6 py-3 shadow-elegant">
                <span className="font-playfair text-cocoa font-semibold">2024</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sage text-sm font-medium tracking-wide uppercase border border-sage/30 rounded-full px-4 py-2">
                  {t('services.interior')}
                </span>
              </div>
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-cocoa leading-tight">
                {t('services.project1.title')}
              </h3>
              <p className="text-sage text-lg leading-relaxed">
                {t('services.project1.description')}
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="group flex items-center justify-center space-x-3 text-cocoa hover:text-sage transition-colors duration-300 mx-auto"
              >
                <span className="font-medium">{t('services.cta')}</span>
                <ArrowIcon size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Project 2 - Architectural Excellence (Text Only) */}
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-32">
            <div className="inline-block">
              <span className="text-sage text-sm font-medium tracking-wide uppercase border border-sage/30 rounded-full px-4 py-2">
                {t('services.architecture')}
              </span>
            </div>
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-cocoa leading-tight">
              {t('services.project2.title')}
            </h3>
            <p className="text-sage text-lg leading-relaxed">
              {t('services.project2.description')}
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="group flex items-center space-x-3 text-cocoa hover:text-sage transition-colors duration-300 mx-auto"
            >
              <span className="font-medium">{t('services.cta')}</span>
              <ArrowIcon size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>

          {/* Project 3 - Full Width with Overlay */}
          <div className="relative">
            <div className="aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={serviceImg3}
                alt="Premium Interior Solutions"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/80 via-black/40 to-black/20 md:from-black/60 md:via-black/20 md:to-transparent"></div>
            </div>
            
            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center md:justify-start">
              <div className="container mx-auto px-6 md:px-4">
                <div className="max-w-2xl space-y-4 md:space-y-6 text-white text-center md:text-left">
                  <div className="inline-block">
                    <span className="text-white/90 text-xs md:text-sm font-medium tracking-wide uppercase border border-white/30 rounded-full px-3 py-1 md:px-4 md:py-2">
                      {t('services.consultation')}
                    </span>
                  </div>
                  <h3 className="font-playfair text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    {t('services.project3.title')}
                  </h3>
                  <p className="text-white/90 text-base md:text-xl leading-relaxed">
                    {t('services.project3.description')}
                  </p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="group bg-white text-cocoa hover:bg-white/90 transition-colors duration-300 px-6 py-3 md:px-8 md:py-4 rounded-xl font-medium flex items-center justify-center space-x-3 w-full md:w-auto"
                  >
                    <span>{t('services.cta')}</span>
                    <ArrowIcon size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;