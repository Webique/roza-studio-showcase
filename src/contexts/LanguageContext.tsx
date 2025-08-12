import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: 'ar' | 'en';
  setLanguage: (lang: 'ar' | 'en') => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  ar: {
    // Brand & Language
    'brand.name': 'روزا ستوديو',
    'brand.initial': 'ر',
    'lang.ar': 'العربية',
    'lang.en': 'English',
    'lang.short.ar': 'ع',
    'lang.short.en': 'EN',
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.gallery': 'المعرض',
    'nav.portfolio': 'أعمالنا',
    'nav.services': 'خدماتنا',
    'nav.process': 'عملية التصميم',
    'nav.about': 'عن الاستوديو',
    'nav.contact': 'تواصل معنا',
    
    // Hero Section
    'hero.title': 'استوديو روزا للتصميم الداخلي — حيث تلتقي الفخامة بروح الإبداع.',
    'hero.subtitle': 'نبتكر مساحات تمزج الفخامة بالحيوية بأسلوب عصري يعكس ذوقك ويروي قصتك.',
    'hero.description': 'من الفكرة إلى التنفيذ، نصمّم تفاصيل أنيقة وألوانًا نابضة، لنخلق بيئات راقية ومريحة ببصمة فنية لا تُنسى.',
    'hero.title.short': 'تصاميم داخلية راقية',
    'hero.subtitle.short': 'بصمة فنية تعكس ذوقك',
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
    
    // Services Projects
    'services.project1.title': 'مساحات معيشة راقية',
    'services.project1.description': 'نحول المساحات العادية إلى تجارب استثنائية من خلال التصميم المدروس والمواد الفاخرة والاهتمام بكل التفاصيل المهمة.',
    'services.project2.title': 'التميز المعماري', 
    'services.project2.description': 'من المفهوم إلى الإنجاز، نقدم حلولاً معمارية تمزج بسلاسة بين الوظيفة والجمال الجمالي، مما يخلق هياكل خالدة.',
    'services.project3.title': 'استشارات وتخطيط التصميم',
    'services.project3.description': 'إرشاد خبير من المفهوم الأولي حتى التنفيذ النهائي، مما يضمن أن كل عنصر يعكس رؤيتك ونمط حياتك.',
    'services.stats.projects': 'مشروع',
    
    // Process
    'process.title': 'عملية التصميم',
    'process.subtitle': 'نتبع منهجية مدروسة لضمان تحقيق رؤيتك بأفضل صورة',
    'process.discovery': 'الاستكشاف',
    'process.discovery.desc': 'نبدأ بفهم احتياجاتك ورؤيتك للمساحة',
    'process.discovery.detailed': 'نبدأ كل مشروع بفهم عميق. تتضمن مرحلة الاستكشاف استشارة شاملة، تحليل الموقع، وتقييم نمط الحياة لضمان توافق التصميم النهائي مع رؤيتك واحتياجاتك.',
    'process.concept': 'المفهوم ولوحات الإلهام',
    'process.concept.desc': 'نطور المفاهيم الأولية ولوحات الألوان والمواد',
    'process.concept.detailed': 'تتحول المفاهيم الإبداعية إلى واقع من خلال حلول تصميمية مبتكرة. نطور اتجاهات تصميمية متعددة، ونستكشف لوحات الألوان والمواد والترتيبات المكانية لإنشاء الجمالية المثالية التي تناسب نمط حياتك.',
    'process.development': 'تطوير التصميم',
    'process.development.desc': 'نعمل على تفاصيل التصميم والرسومات التقنية',
    'process.development.detailed': 'يحول التطوير المفصل المفاهيم إلى خطط قابلة للتنفيذ. ننشئ رسومات تقنية شاملة، ومواصفات المواد، ووثائق البناء لضمان التنفيذ المثالي لرؤيتك.',
    'process.execution': 'التنفيذ والتسليم',
    'process.execution.desc': 'ندير عملية التنفيذ حتى التسليم النهائي',
    'process.execution.detailed': 'ينفذ التنفيذ المثالي رؤيتك. يضمن حرفيونا الخبراء ومديرو المشاريع تنفيذ كل تفصيلة بدقة، مع الحفاظ على أعلى معايير الجودة طوال مراحل البناء والتركيب.',
    
    // Process Stats & Labels
    'process.stats.designOptions': 'خيارات التصميم',
    'process.stats.visualizations': 'التصورات ثلاثية الأبعاد',
    'process.stats.weeksTimeline': 'مخطط زمني بالأسابيع',
    'process.stats.projectSupport': 'دعم المشروع',
    'process.stats.onTimeDelivery': 'التسليم في الموعد',
    'process.stats.development': 'التطوير',
    'process.tags.siteAnalysis': 'تحليل الموقع',
    'process.tags.clientConsultation': 'استشارة العميل',
    'process.tags.needsAssessment': 'تقييم الاحتياجات',
    'process.tags.technicalDrawings': 'الرسومات التقنية',
    'process.tags.materialSelection': 'اختيار المواد',
    'process.tags.projectTimeline': 'الجدول الزمني للمشروع',
    
    // About
    'about.title': 'عن روزا استوديو',
    'about.description': 'استوديو روزا للتصميم المعماري و الداخلي هو وجهتك لابتكار مساحات استثنائية تمزج بين الفخامة والحيوية بأسلوب عصري مبتكر. نحن نؤمن أن كل مساحة تحكي قصة، لذلك نصمم بعناية لتجسيد شخصيتك وذوقك الرفيع من خلال تفاصيل أنيقة وألوان نابضة بالحياة. من الفكرة إلى التنفيذ، نخلق بيئات راقية ومريحة تحمل بصمة فنية خاصة تترك انطباعًا لا يُنسى.',
    'about.quote': 'نؤمن أن كل مساحة تحكي قصة.',
    'about.image.alt': 'تصميم استوديو روزا',
    
    
    
    // Contact
    'contact.title': 'ابدأ رحلة التصميم معنا',
    'contact.subtitle': 'دعنا نحول مساحتك إلى تحفة فنية تعكس ذوقك الراقي',
    'contact.cta': 'تواصل معنا عبر واتساب',
    'contact.info.title': 'معلومات التواصل',
    'contact.whatsapp.description': 'تواصل معنا مباشرة على واتساب للحصول على استشارة فورية',
    'contact.readyToStart': 'جاهز للبدء؟',
    'contact.createTogether': 'لنبتكر شيئًا جميلاً معًا',
    'contact.responseGuarantee': 'ضمان الاستجابة السريعة',
    'contact.responseTime': 'نستجيب عادة خلال ساعة واحدة خلال ساعات العمل. مساحة أحلامك على بُعد رسالة واحدة فقط.',
    'contact.availableAlways': 'متاح على مدار الساعة',
    'contact.stats.happyClients': 'عميل سعيد',
    'contact.stats.yearsExperience': 'سنوات خبرة',
    'contact.stats.satisfactionRate': 'معدل الرضا',
    'contact.form.quickMessageTitle': 'أرسل رسالة سريعة',
    'contact.form.name': 'الاسم',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.message': 'رسالتك',
    'contact.form.submit': 'إرسال',
    'contact.form.continue': 'متابعة المحادثة على واتساب',
    'contact.toast.errorTitle': 'خطأ',
    'contact.toast.errorFill': 'يرجى ملء جميع الحقول',
    'contact.toast.successTitle': 'تم الإرسال بنجاح',
    'contact.toast.successDesc': 'سيتم توجيهك إلى واتساب للمتابعة',
    'contact.whatsapp.hello': 'مرحباً، اسمي',
    'contact.whatsapp.phone': 'رقم الهاتف:',
    
    // Footer
    'footer.tagline': 'حيث تلتقي الأناقة بالإبداع',
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.quickLinks': 'روابط سريعة',
    'footer.getInTouch': 'تواصل معنا',
    'footer.description': 'نحن متخصصون في إنشاء بيئات داخلية فاخرة تمزج بين الجمال الكلاسيكي والراحة العصرية.',
    'footer.madeWithLove': 'صُنع بحب في المملكة العربية السعودية',
    
    // Gallery
    'gallery.title': 'المعرض',
    'gallery.subtitle': 'مجموعة مختارة من الصور والتفاصيل',

    // Portfolio (Coming Soon)
    'portfolio.title': 'أعمالنا',
    'portfolio.subtitle': 'مشاريع مختارة قريبًا',
    'portfolio.comingSoon': 'قريبًا — نعمل على عرض مشاريعنا المختارة',
    'portfolio.filter.all': 'جميع المشاريع',
    'portfolio.filter.residential': 'سكني',
    'portfolio.filter.commercial': 'تجاري',
    'portfolio.filter.hospitality': 'ضيافة',

    // NotFound
    'notfound.title': '٤٠٤',
    'notfound.message': 'عذراً! الصفحة غير موجودة',
    'notfound.link': 'العودة للرئيسية',
  },
  en: {
    // Brand & Language
    'brand.name': 'Roza Studio',
    'brand.initial': 'R',
    'lang.ar': 'Arabic',
    'lang.en': 'English',
    'lang.short.ar': 'ع',
    'lang.short.en': 'EN',
    // Navigation
    'nav.home': 'Home',
    'nav.gallery': 'Gallery',
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Services',
    'nav.process': 'Process',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Roza Interior Studio — Designing luxurious spaces with a creative soul.',
    'hero.subtitle': 'We craft modern, vibrant interiors that reflect your taste and tell your story.',
    'hero.description': 'From concept to completion, we design elegant details and lively palettes to create refined, comfortable environments with an unforgettable artistic signature.',
    'hero.title.short': 'Elegant Interior Design',
    'hero.subtitle.short': 'An artistic touch that reflects your taste',
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
    
    // Services Projects
    'services.project1.title': 'Refined Living Spaces',
    'services.project1.description': 'We transform ordinary spaces into extraordinary experiences through thoughtful design, premium materials, and attention to every detail that matters.',
    'services.project2.title': 'Architectural Excellence',
    'services.project2.description': 'From concept to completion, we deliver architectural solutions that seamlessly blend functionality with aesthetic beauty, creating timeless structures.',
    'services.project3.title': 'Design Consultation & Planning',
    'services.project3.description': 'Expert guidance from initial concept through final implementation, ensuring every element reflects your vision and lifestyle.',
    'services.stats.projects': 'Projects',
    
    // Process
    'process.title': 'Our Process',
    'process.subtitle': 'We follow a studied methodology to ensure your vision is achieved in the best possible way',
    'process.discovery': 'Discovery',
    'process.discovery.desc': 'We start by understanding your needs and vision for the space',
    'process.discovery.detailed': 'We begin every project with deep understanding. Our discovery phase involves comprehensive consultation, site analysis, and lifestyle assessment to ensure the final design perfectly aligns with your vision and needs.',
    'process.concept': 'Concept & Moodboards',
    'process.concept.desc': 'We develop initial concepts and color and material boards',
    'process.concept.detailed': 'Creative concepts come to life through innovative design solutions. We develop multiple design directions, exploring color palettes, materials, and spatial arrangements to create the perfect aesthetic that matches your lifestyle.',
    'process.development': 'Design Development',
    'process.development.desc': 'We work on design details and technical drawings',
    'process.development.detailed': 'Detailed development transforms concepts into actionable plans. We create comprehensive technical drawings, material specifications, and construction documentation to ensure flawless execution of your vision.',
    'process.execution': 'Execution & Handover',
    'process.execution.desc': 'We manage the implementation process until final delivery',
    'process.execution.detailed': 'Flawless execution brings your vision to life. Our expert craftsmen and project managers ensure every detail is implemented to perfection, maintaining the highest quality standards throughout the construction and installation phases.',
    
    // Process Stats & Labels
    'process.stats.designOptions': 'Design Options',
    'process.stats.visualizations': '3D Visualizations',
    'process.stats.weeksTimeline': 'Weeks Timeline',
    'process.stats.projectSupport': 'Project Support',
    'process.stats.onTimeDelivery': 'On-Time Delivery',
    'process.stats.development': 'Development',
    'process.tags.siteAnalysis': 'Site Analysis',
    'process.tags.clientConsultation': 'Client Consultation',
    'process.tags.needsAssessment': 'Needs Assessment',
    'process.tags.technicalDrawings': 'Technical Drawings',
    'process.tags.materialSelection': 'Material Selection',
    'process.tags.projectTimeline': 'Project Timeline',
    
    // About
    'about.title': 'About Roza Studio',
    'about.description': 'Roza Studio for architecture and interior design is your destination for crafting exceptional spaces that blend luxury with vitality through a fresh, modern vision. We believe every space tells a story, so we design with care to reflect your personality and refined taste through elegant details and vibrant colors. From concept to execution, we create refined, comfortable environments with a distinctive artistic signature that leaves a lasting impression.',
    'about.quote': 'We believe every space tells a story.',
    'about.image.alt': 'Roza Studio Design',
    
    
    
    // Contact
    'contact.title': 'Start Your Design Journey With Us',
    'contact.subtitle': 'Let us transform your space into an artistic masterpiece that reflects your refined taste',
    'contact.cta': 'Contact us via WhatsApp',
    'contact.info.title': 'Contact Information',
    'contact.whatsapp.description': 'Contact us directly on WhatsApp for instant consultation',
    'contact.readyToStart': 'Ready to Start?',
    'contact.createTogether': 'Let\'s Create Something Beautiful Together',
    'contact.responseGuarantee': 'Quick Response Guaranteed',
    'contact.responseTime': 'We typically respond within 1 hour during business hours. Your dream space is just a message away.',
    'contact.availableAlways': 'Available 24/7',
    'contact.stats.happyClients': 'Happy Clients',
    'contact.stats.yearsExperience': 'Years Experience',
    'contact.stats.satisfactionRate': 'Satisfaction Rate',
    'contact.form.quickMessageTitle': 'Send a Quick Message',
    'contact.form.name': 'Name',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send',
    'contact.form.continue': 'Continue conversation on WhatsApp',
    'contact.toast.errorTitle': 'Error',
    'contact.toast.errorFill': 'Please fill in all fields',
    'contact.toast.successTitle': 'Successfully Sent',
    'contact.toast.successDesc': 'You will be redirected to WhatsApp to continue',
    'contact.whatsapp.hello': 'Hello, my name is',
    'contact.whatsapp.phone': 'Phone:',
    
    // Footer
    'footer.tagline': 'Where elegance meets creativity',
    'footer.rights': 'All rights reserved',
    'footer.quickLinks': 'Quick Links',
    'footer.getInTouch': 'Get in Touch',
    'footer.description': 'We specialize in creating luxurious interior environments that blend classical beauty with modern comfort.',
    'footer.madeWithLove': 'Made with love in Saudi Arabia',
    
    // Gallery
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'A curated selection of images and details',

    // Portfolio (Coming Soon)
    'portfolio.title': 'Our Portfolio',
    'portfolio.subtitle': 'Selected projects coming soon',
    'portfolio.comingSoon': 'Coming soon — we are preparing a selection of our projects',
    'portfolio.filter.all': 'All Projects',
    'portfolio.filter.residential': 'Residential',
    'portfolio.filter.commercial': 'Commercial',
    'portfolio.filter.hospitality': 'Hospitality',

    // NotFound
    'notfound.title': '404',
    'notfound.message': 'Oops! Page not found',
    'notfound.link': 'Return to Home',
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