import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import rozaLogo from '@/assets/Screenshot 2025-08-12 at 03.43.02.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.process', href: '#process' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect shadow-soft' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 items-center h-20">
          {/* Logo */}
          <div className="flex items-center col-start-1 justify-self-start">
            <img 
              src={rozaLogo} 
              alt={t('brand.name')} 
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center col-start-2 justify-center gap-8 flex-nowrap`}>
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-cocoa hover:text-sage transition-colors duration-300 font-medium whitespace-nowrap px-2"
              >
                {t(item.key)}
              </a>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4 col-start-3 justify-self-end justify-end">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-cocoa hover:text-sage transition-colors duration-300"
              aria-label={language === 'ar' ? t('lang.en') : t('lang.ar')}
              title={language === 'ar' ? t('lang.en') : t('lang.ar')}
            >
              <Globe size={20} />
              <span className="font-medium">{language === 'ar' ? t('lang.short.en') : t('lang.short.ar')}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-cocoa hover:text-sage transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-ivory/95 backdrop-blur-md border-t border-sand mt-4 rounded-lg shadow-soft">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="block px-4 py-2 text-cocoa hover:text-sage transition-colors duration-300 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;