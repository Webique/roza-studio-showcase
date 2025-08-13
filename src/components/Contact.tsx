import React from 'react';
import { MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import contactImg from '@/assets/45639a28-c44f-49dc-aca2-8234f5d0aba7.JPG';

const Contact = () => {
  const { t, isRTL } = useLanguage();

  const handleDirectWhatsApp = () => {
    window.open('https://wa.me/966536601777', '_blank');
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cocoa via-sage to-cocoa"></div>
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url(${contactImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        

      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-ivory mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl md:text-2xl text-ivory/90 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Enhanced CTA Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-white/90 text-sm font-medium tracking-wider uppercase border border-white/30 rounded-full px-4 py-2">
                  {t('contact.readyToStart')}
                </span>
              </div>
              <h3 className="font-playfair text-4xl md:text-5xl font-bold text-white leading-tight">
                {t('contact.createTogether')}
              </h3>
              <p className="text-white/90 text-xl leading-relaxed">
                {t('contact.whatsapp.description')}
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleDirectWhatsApp}
                className={`group w-full bg-white text-cocoa hover:bg-white/95 transition-all duration-300 px-8 py-5 rounded-2xl font-semibold flex items-center justify-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'} shadow-elegant`}
              >
                <MessageCircle size={24} />
                <span className="text-lg">{t('contact.cta')}</span>
                <ArrowIcon size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              
              <div className={`flex items-center justify-center text-white/80 ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                <MessageCircle size={18} className="text-green-400" />
                <span className="tracking-wide font-medium" dir="ltr">+966 53 660 1777</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-white/70 text-sm">{t('contact.stats.yearsExperience')}</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-white/70 text-sm">{t('contact.stats.satisfactionRate')}</div>
              </div>
            </div>
          </div>

          {/* Right Side - Decorative Card */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-elegant">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center">
                  <MessageCircle size={32} className="text-white" />
                </div>
                
                <div>
                  <h4 className="font-playfair text-2xl font-semibold text-white mb-3">
                    {t('contact.responseGuarantee')}
                  </h4>
                  <p className="text-white/80 leading-relaxed">
                    {t('contact.responseTime')}
                  </p>
                </div>

                <div className={`flex items-center pt-4 ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                  <div className={`flex ${isRTL ? 'space-x-reverse -space-x-2' : '-space-x-2'}`}>
                    <div className="w-8 h-8 bg-sage rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-cocoa rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs font-bold">+</span>
                    </div>
                  </div>
                  <span className="text-white/80 text-sm">{t('contact.availableAlways')}</span>
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;