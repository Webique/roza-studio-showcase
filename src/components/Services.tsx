import React from 'react';
import { Home, Building2, Palette, Eye, Wrench, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import stripePattern from '@/assets/stripe-pattern.jpg';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div
                key={service.titleKey}
                className="group bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-soft hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-sage to-cocoa rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={32} className="text-white" />
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
                  className="flex items-center space-x-2 text-cocoa hover:text-sage transition-colors duration-300 font-medium group"
                >
                  <span>{t('services.cta')}</span>
                  <ArrowIcon size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;