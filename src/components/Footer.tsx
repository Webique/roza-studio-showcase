import React from 'react';
import { Globe, MessageCircle, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import rozaLogo from '@/assets/roza-logo.png';

const Footer = () => {
  const { language, setLanguage, t, isRTL } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/966536601777', '_blank');
  };

  const navLinks = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.portfolio', href: '#portfolio' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <footer className="bg-cocoa text-ivory py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Tagline */}
          <div className={`md:col-span-2 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="mb-6">
              <img 
                src={rozaLogo} 
                alt={t('brand.name')} 
                className="h-16 w-auto object-contain"
              />
            </div>
            
            <p className="text-xl font-playfair italic mb-6 text-ivory/90">
              {t('footer.tagline')}
            </p>
            
            <p className="text-ivory/70 leading-relaxed max-w-md">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h4 className="font-playfair text-lg font-semibold mb-6 text-sand">
              {t('footer.quickLinks')}
            </h4>
            
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="block text-ivory/80 hover:text-sand transition-colors duration-300"
                >
                  {t(link.key)}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h4 className="font-playfair text-lg font-semibold mb-6 text-sand">
              {t('footer.getInTouch')}
            </h4>
            
            <div className="space-y-4 mb-6">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-3 text-ivory/80 hover:text-green-400 transition-colors duration-300 group"
              >
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span>+966 53 660 1777</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-ivory/10 rounded-full flex items-center justify-center hover:bg-ivory/20 transition-colors duration-300">
                <Instagram size={20} />
              </button>
              <button className="w-10 h-10 bg-ivory/10 rounded-full flex items-center justify-center hover:bg-ivory/20 transition-colors duration-300">
                <Twitter size={20} />
              </button>
            </div>

            {/* Language Toggle */}
            <div className="mt-6">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-ivory/80 hover:text-sand transition-colors duration-300"
              >
                <Globe size={16} />
                <span className="text-sm">{language === 'ar' ? t('lang.en') : t('lang.ar')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-12 pt-8 border-t border-ivory/20 flex flex-col md:flex-row justify-between items-center ${
          isRTL ? 'md:flex-row-reverse' : ''
        }`}>
          <p className="text-ivory/60 text-sm">
            © 2024 Roza Studio. {t('footer.rights')}.
          </p>
          
          <p className="text-ivory/60 text-sm mt-4 md:mt-0">
            {t('footer.madeWithLove')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;