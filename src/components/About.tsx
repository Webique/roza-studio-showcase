import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import classicalNiche from '@/assets/classical-niche.jpg';
import aboutImage from '@/assets/6d3a979b-4e1f-42ee-8ee4-425fdde6e7e1.JPG';

const About = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cocoa mb-8">
            {t('about.title')}
          </h2>
          
          <div className="prose prose-lg mx-auto">
            <p className="font-playfair text-sage leading-relaxed mb-12 text-lg">
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
            
            {/* Featured Image */}
            <div className="mb-12">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-elegant mx-auto max-w-2xl">
                <img
                  src={aboutImage}
                  alt="About Roza Studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;