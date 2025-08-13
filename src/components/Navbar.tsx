import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import rozaLogo from '@/assets/Screenshot 2025-08-13 at 17.37.08-Photoroom.png';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scroll position
      setScrollY(currentScrollY);
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up or at top - show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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

  // Calculate navbar styles based on scroll
  const getNavbarStyles = () => {
    if (scrollY === 0) {
      // At the very top - completely transparent
      return 'bg-transparent border-transparent';
    } else if (scrollY > 0 && scrollY < 150) {
      // Light scrolling - subtle background
      return 'bg-white/20 backdrop-blur-sm border-white/10';
    } else {
      // Heavy scrolling - solid background
      return 'bg-white/95 backdrop-blur-md border-white/20 shadow-lg';
    }
  };

  const getTextStyles = () => {
    if (scrollY === 0) {
      return 'text-white';
    } else if (scrollY > 0 && scrollY < 150) {
      return 'text-white/90';
    } else {
      return 'text-cocoa';
    }
  };

  return (
    <nav 
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out border-b ${getNavbarStyles()} ${
        isVisible ? 'top-0 opacity-100' : '-top-28 opacity-0'
      }`}
      style={{
        transform: `translateY(${isVisible ? '0' : '-100%'})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center transition-transform duration-300 hover:scale-105">
            <img 
              src={rozaLogo} 
              alt={t('brand.name')} 
              className={`h-20 w-auto object-contain transition-all duration-300 max-w-none ${
                scrollY > 100 ? 'h-18' : 'h-20'
              }`}
              style={{ maxHeight: 'none' }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-6' : 'space-x-6'}`}>
              {navItems.map((item, index) => (
                <a
                  key={item.key}
                  href={item.href}
                  className={`${getTextStyles()} hover:text-sage transition-all duration-300 font-medium whitespace-nowrap px-3 py-2 rounded-lg hover:bg-white/10 relative group`}
                  style={{
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  {t(item.key)}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-sage transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`${getTextStyles()} hover:text-sage transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/10 flex items-center ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}
              aria-label={language === 'ar' ? t('lang.en') : t('lang.ar')}
            >
              <Globe size={16} />
              <span className="font-medium text-xs uppercase tracking-wide">
                {language === 'ar' ? 'EN' : 'AR'}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden ${getTextStyles()} hover:text-sage transition-all duration-300 p-2 rounded-lg hover:bg-white/10`}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-2 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                }`}></span>
                <span className={`absolute top-3.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-current/10">
            <div className="space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={item.key}
                  href={item.href}
                  className={`block px-4 py-3 ${getTextStyles()} hover:text-sage hover:bg-white/10 transition-all duration-300 font-medium rounded-lg transform ${
                    isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;