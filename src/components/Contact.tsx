import React from 'react';
import { MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t, isRTL } = useLanguage();

  const handleDirectWhatsApp = () => {
    window.open('https://wa.me/966536601777', '_blank');
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-cocoa via-sage to-cocoa relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent"></div>
      
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

        {/* Single CTA Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 shadow-elegant">
            <div className="text-center">
              <div className="w-24 h-24 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft">
                <MessageCircle size={48} className="text-white" />
              </div>
              <h3 className="font-playfair text-3xl md:text-4xl font-semibold text-ivory mb-4">
                {t('contact.cta')}
              </h3>
              <p className="text-ivory/85 mb-8 leading-relaxed max-w-2xl mx-auto">
                {t('contact.whatsapp.description')}
              </p>

              <button
                onClick={handleDirectWhatsApp}
                className="btn-whatsapp w-full md:w-auto inline-flex items-center justify-center space-x-3 text-lg px-8 py-4"
              >
                <MessageCircle size={24} />
                <span>{t('contact.cta')}</span>
                <ArrowIcon size={20} />
              </button>

              {/* Divider */}
              <div className="my-10 flex items-center">
                <div className="flex-1 h-px bg-white/20" />
                <span className="px-4 text-ivory/60">•</span>
                <div className="flex-1 h-px bg-white/20" />
              </div>

              {/* Contact Info Row */}
              <div className={`flex items-center justify-center ${isRTL ? 'space-x-reverse' : ''} space-x-4 text-ivory/90`}>
                <MessageCircle size={20} className="text-green-400" />
                <span className="tracking-wide">+966 53 660 1777</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;