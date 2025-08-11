import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import classicalNiche from '@/assets/classical-niche.jpg';

const About = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Text Content */}
          <div className={`${isRTL ? 'lg:col-start-2' : ''}`}>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cocoa mb-8">
              {t('about.title')}
            </h2>
            
            <div className="prose prose-lg">
              <p className="text-sage leading-relaxed mb-8">
                {t('about.description')}
              </p>
              
              {/* Featured Quote with Niche Background */}
              <div className="relative my-12">
                <div 
                  className="absolute inset-0 opacity-10 bg-cover bg-center rounded-xl"
                  style={{
                    backgroundImage: `url(${classicalNiche})`,
                  }}
                ></div>
                <div className="relative bg-gradient-to-br from-sand/50 to-ivory/50 backdrop-blur-sm rounded-xl p-8 border border-sand/30">
                  <blockquote className="font-playfair text-2xl md:text-3xl font-semibold text-cocoa italic text-center">
                    "{t('about.quote')}"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className={`${isRTL ? 'lg:col-start-1' : ''}`}>
            <div className="relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-elegant">
                <img
                  src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&h=1000&fit=crop"
                  alt={t('about.image.alt')}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-xl p-6 shadow-elegant max-w-xs">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sage to-cocoa rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{t('brand.initial')}</span>
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg font-semibold text-cocoa">{t('brand.name')}</h4>
                    <p className="text-sage text-sm">{t('footer.tagline')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;