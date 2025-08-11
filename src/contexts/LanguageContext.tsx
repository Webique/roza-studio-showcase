import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: 'ar' | 'en';
  setLanguage: (lang: 'ar' | 'en') => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.portfolio': 'أعمالنا',
    'nav.services': 'خدماتنا',
    'nav.process': 'عملية التصميم',
    'nav.about': 'عن الاستوديو',
    'nav.testimonials': 'آراء العملاء',
    'nav.contact': 'تواصل معنا',
    
    // Hero Section
    'hero.title': 'استوديو روزا للتصميم الداخلي — حيث تلتقي الفخامة بروح الإبداع.',
    'hero.subtitle': 'نبتكر مساحات تمزج الفخامة بالحيوية بأسلوب عصري يعكس ذوقك ويروي قصتك.',
    'hero.description': 'من الفكرة إلى التنفيذ، نصمّم تفاصيل أنيقة وألوانًا نابضة، لنخلق بيئات راقية ومريحة ببصمة فنية لا تُنسى.',
    'hero.cta.primary': 'تواصل عبر واتساب',
    'hero.cta.secondary': 'شاهد أعمالنا',
    
    // Services
    'services.title': 'خدماتنا',
    'services.subtitle': 'نقدم مجموعة شاملة من خدمات التصميم الداخلي والمعماري',
    'services.interior': 'التصميم الداخلي',
    'services.interior.desc': 'تصميم داخلي متكامل يعكس شخصيتك ويحقق راحتك',
    'services.architecture': 'التصميم المعماري وتخطيط المساحات',
    'services.architecture.desc': 'تخطيط وتصميم معماري احترافي للمساحات السكنية والتجارية',
    'services.selection': 'اختيار الأثاث والتجهيزات',
    'services.selection.desc': 'اختيار وتنسيق الأثاث والإكسسوارات بعناية فائقة',
    'services.consultation': 'استشارات المواد والألوان',
    'services.consultation.desc': 'استشارات متخصصة في اختيار المواد والألوان المناسبة',
    'services.renovation': 'التجديد والتنفيذ',
    'services.renovation.desc': 'إدارة مشاريع التجديد والتنفيذ بأعلى معايير الجودة',
    'services.styling': 'التنسيق والإكسسوار',
    'services.styling.desc': 'لمسات نهائية تضفي الروح والحيوية على المساحة',
    'services.cta': 'استشارة عبر واتساب',
    
    // Process
    'process.title': 'عملية التصميم',
    'process.subtitle': 'نتبع منهجية مدروسة لضمان تحقيق رؤيتك بأفضل صورة',
    'process.discovery': 'الاستكشاف',
    'process.discovery.desc': 'نبدأ بفهم احتياجاتك ورؤيتك للمساحة',
    'process.concept': 'المفهوم ولوحات الإلهام',
    'process.concept.desc': 'نطور المفاهيم الأولية ولوحات الألوان والمواد',
    'process.development': 'تطوير التصميم',
    'process.development.desc': 'نعمل على تفاصيل التصميم والرسومات التقنية',
    'process.execution': 'التنفيذ والتسليم',
    'process.execution.desc': 'ندير عملية التنفيذ حتى التسليم النهائي',
    
    // About
    'about.title': 'عن استوديو روزا',
    'about.description': 'نؤمن أن كل مساحة تحكي قصة. في استوديو روزا، نحن متخصصون في إنشاء بيئات داخلية فاخرة تمزج بين الجمال الكلاسيكي والراحة العصرية. فلسفتنا تقوم على أن التصميم الجيد يجب أن يعكس شخصية ساكنيه ويخلق تجربة حسية لا تُنسى.',
    'about.quote': 'نؤمن أن كل مساحة تحكي قصة.',
    
    // Testimonials
    'testimonials.title': 'آراء عملائنا',
    'testimonials.subtitle': 'ما يقوله عملاؤنا عن تجربتهم معنا',
    
    // Contact
    'contact.title': 'ابدأ رحلة التصميم معنا',
    'contact.subtitle': 'دعنا نحول مساحتك إلى تحفة فنية تعكس ذوقك الراقي',
    'contact.cta': 'تواصل معنا عبر واتساب',
    'contact.form.name': 'الاسم',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.message': 'رسالتك',
    'contact.form.submit': 'إرسال',
    'contact.form.continue': 'متابعة المحادثة على واتساب',
    
    // Footer
    'footer.tagline': 'حيث تلتقي الأناقة بالإبداع',
    'footer.rights': 'جميع الحقوق محفوظة',
    
    // Portfolio
    'portfolio.title': 'معرض أعمالنا',
    'portfolio.subtitle': 'استكشف مجموعة من مشاريعنا المميزة',
    'portfolio.filter.all': 'جميع المشاريع',
    'portfolio.filter.residential': 'سكني',
    'portfolio.filter.commercial': 'تجاري',
    'portfolio.filter.hospitality': 'ضيافة',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Services',
    'nav.process': 'Process',
    'nav.about': 'About',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Roza Interior Studio — Designing luxurious spaces with a creative soul.',
    'hero.subtitle': 'We craft modern, vibrant interiors that reflect your taste and tell your story.',
    'hero.description': 'From concept to completion, we design elegant details and lively palettes to create refined, comfortable environments with an unforgettable artistic signature.',
    'hero.cta.primary': 'Chat on WhatsApp',
    'hero.cta.secondary': 'View Portfolio',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'We offer a comprehensive range of interior design and architectural services',
    'services.interior': 'Interior Design',
    'services.interior.desc': 'Complete interior design that reflects your personality and ensures comfort',
    'services.architecture': 'Architecture & Space Planning',
    'services.architecture.desc': 'Professional architectural design and planning for residential and commercial spaces',
    'services.selection': 'FF&E Selection',
    'services.selection.desc': 'Careful selection and coordination of furniture and accessories',
    'services.consultation': 'Material & Color Consulting',
    'services.consultation.desc': 'Specialized consultation in selecting appropriate materials and colors',
    'services.renovation': 'Renovation & Fit-Out',
    'services.renovation.desc': 'Managing renovation and implementation projects with the highest quality standards',
    'services.styling': 'Styling & Staging',
    'services.styling.desc': 'Final touches that bring soul and vitality to the space',
    'services.cta': 'Consult via WhatsApp',
    
    // Process
    'process.title': 'Our Process',
    'process.subtitle': 'We follow a studied methodology to ensure your vision is achieved in the best possible way',
    'process.discovery': 'Discovery',
    'process.discovery.desc': 'We start by understanding your needs and vision for the space',
    'process.concept': 'Concept & Moodboards',
    'process.concept.desc': 'We develop initial concepts and color and material boards',
    'process.development': 'Design Development',
    'process.development.desc': 'We work on design details and technical drawings',
    'process.execution': 'Execution & Handover',
    'process.execution.desc': 'We manage the implementation process until final delivery',
    
    // About
    'about.title': 'About Roza Studio',
    'about.description': 'We believe every space tells a story. At Roza Studio, we specialize in creating luxurious interior environments that blend classical beauty with modern comfort. Our philosophy is that good design should reflect the personality of its inhabitants and create an unforgettable sensory experience.',
    'about.quote': 'We believe every space tells a story.',
    
    // Testimonials
    'testimonials.title': 'Client Testimonials',
    'testimonials.subtitle': 'What our clients say about their experience with us',
    
    // Contact
    'contact.title': 'Start Your Design Journey With Us',
    'contact.subtitle': 'Let us transform your space into an artistic masterpiece that reflects your refined taste',
    'contact.cta': 'Contact us via WhatsApp',
    'contact.form.name': 'Name',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send',
    'contact.form.continue': 'Continue conversation on WhatsApp',
    
    // Footer
    'footer.tagline': 'Where elegance meets creativity',
    'footer.rights': 'All rights reserved',
    
    // Portfolio
    'portfolio.title': 'Our Portfolio',
    'portfolio.subtitle': 'Explore a collection of our distinguished projects',
    'portfolio.filter.all': 'All Projects',
    'portfolio.filter.residential': 'Residential',
    'portfolio.filter.commercial': 'Commercial',
    'portfolio.filter.hospitality': 'Hospitality',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('roza-language') as 'ar' | 'en';
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('roza-language', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};