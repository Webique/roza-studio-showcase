import React from 'react';
import { Search, Lightbulb, PenTool, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import processImg1 from '@/assets/22e55e04-fe56-45b5-8862-712a19835f3c.JPG';
import processImg2 from '@/assets/2a72ceae-1962-4b09-acee-39c15dbdd746.JPG';
import processImg3 from '@/assets/4e2f16e8-e5cf-4529-9db2-9c41ba58d9d2.JPG';
import processImg4 from '@/assets/528dbdaa-2233-4d10-a3a3-9b1e9abf6bb7.JPG';

const Process = () => {
  const { t, isRTL } = useLanguage();

  const steps = [
    {
      icon: Search,
      titleKey: 'process.discovery',
      descKey: 'process.discovery.desc',
      number: '01',
    },
    {
      icon: Lightbulb,
      titleKey: 'process.concept',
      descKey: 'process.concept.desc',
      number: '02',
    },
    {
      icon: PenTool,
      titleKey: 'process.development',
      descKey: 'process.development.desc',
      number: '03',
    },
    {
      icon: CheckCircle,
      titleKey: 'process.execution',
      descKey: 'process.execution.desc',
      number: '04',
    },
  ];

  return (
    <section id="process" className="py-20 bg-gradient-subtle stripe-pattern">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cocoa mb-6">
            {t('process.title')}
          </h2>
          <p className="text-xl text-sage max-w-3xl mx-auto">
            {t('process.subtitle')}
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className={`hidden lg:block absolute top-24 ${isRTL ? 'right-1/2' : 'left-1/2'} transform -translate-x-1/2 w-1 h-96 bg-gradient-to-b from-sage to-cocoa`}></div>

          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={step.titleKey}
                  className={`relative ${
                    isEven 
                      ? isRTL ? 'lg:text-left lg:pr-16' : 'lg:text-right lg:pl-16' 
                      : isRTL ? 'lg:text-right lg:pl-16 lg:col-start-2' : 'lg:text-left lg:pr-16 lg:col-start-2'
                  }`}
                >
                  {/* Timeline Dot (number removed) */}
                  <div className={`hidden lg:block absolute top-8 ${
                    isEven 
                      ? isRTL ? '-left-8' : '-right-8' 
                      : isRTL ? '-right-8' : '-left-8'
                  } w-4 h-4 bg-sage rounded-full border-4 border-white shadow-soft`}></div>

                  {/* Content Card */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-soft hover:shadow-elegant transition-all duration-500 group hover:-translate-y-2">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-sage/60 to-cocoa/60 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent size={28} className="text-white/90" />
                      </div>
                    </div>

                    <h3 className="font-playfair text-2xl font-semibold text-cocoa mb-4">
                      {t(step.titleKey)}
                    </h3>

                    <p className="text-sage leading-relaxed">
                      {t(step.descKey)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Showcase - Behind the Scenes */}
        <div className="mt-32 space-y-24">
          {/* Discovery Process */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-8">
              <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                <div className="w-1 h-16 bg-gradient-to-b from-sage to-cocoa rounded-full"></div>
                <div>
                  <span className="text-sage/70 text-sm font-medium tracking-wider uppercase">Step 01</span>
                  <h3 className="font-playfair text-3xl md:text-4xl font-bold text-cocoa">{t('process.discovery')}</h3>
                </div>
              </div>
              
              <p className="text-sage text-lg leading-relaxed">
                {t('process.discovery.detailed')}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-sage/10 rounded-xl px-4 py-2">
                  <span className="text-sage font-medium text-sm">{t('process.tags.siteAnalysis')}</span>
                </div>
                <div className="bg-sage/10 rounded-xl px-4 py-2">
                  <span className="text-sage font-medium text-sm">{t('process.tags.clientConsultation')}</span>
                </div>
                <div className="bg-sage/10 rounded-xl px-4 py-2">
                  <span className="text-sage font-medium text-sm">{t('process.tags.needsAssessment')}</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 relative">
              <div className="relative group">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant">
                  <img
                    src={processImg1}
                    alt="Design Discovery Process"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Floating Number Badge */}
                <div className={`absolute -top-4 w-16 h-16 bg-white rounded-2xl shadow-elegant flex items-center justify-center ${isRTL ? '-right-4' : '-left-4'}`}>
                  <span className="font-playfair text-2xl font-bold text-cocoa">01</span>
                </div>
              </div>
            </div>
          </div>

          {/* Concept Development (Text Only) */}
          <div className="max-w-4xl mx-auto text-center space-y-8 mb-32">
            <div className={`flex items-center justify-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
              <div className="w-1 h-16 bg-gradient-to-b from-sage to-cocoa rounded-full"></div>
              <div>
                <span className="text-sage/70 text-sm font-medium tracking-wider uppercase">Step 02</span>
                <h3 className="font-playfair text-3xl md:text-4xl font-bold text-cocoa">{t('process.concept')}</h3>
              </div>
            </div>
            
            <p className="text-sage text-lg leading-relaxed">
              {t('process.concept.detailed')}
            </p>
            
            <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-cocoa/5 border border-cocoa/20 rounded-xl p-4">
                <div className="font-playfair text-2xl font-bold text-cocoa mb-2">3-5</div>
                <div className="text-sage text-sm">{t('process.stats.designOptions')}</div>
              </div>
              <div className="bg-cocoa/5 border border-cocoa/20 rounded-xl p-4">
                <div className="font-playfair text-2xl font-bold text-cocoa mb-2">3D</div>
                <div className="text-sage text-sm">{t('process.stats.visualizations')}</div>
              </div>
            </div>
          </div>

          {/* Design Development */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-8">
              <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                <div className="w-1 h-16 bg-gradient-to-b from-cocoa to-sage rounded-full"></div>
                <div>
                  <span className="text-sage/70 text-sm font-medium tracking-wider uppercase">Step 03</span>
                  <h3 className="font-playfair text-3xl md:text-4xl font-bold text-cocoa">{t('process.development')}</h3>
                </div>
              </div>
              
              <p className="text-sage text-lg leading-relaxed">
                {t('process.development.detailed')}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-sage/10 rounded-xl px-4 py-2">
                  <span className="text-sage font-medium text-sm">{t('process.tags.technicalDrawings')}</span>
                </div>
                <div className="bg-sage/10 rounded-xl px-4 py-2">
                  <span className="text-sage font-medium text-sm">{t('process.tags.materialSelection')}</span>
                </div>
                <div className="bg-sage/10 rounded-xl px-4 py-2">
                  <span className="text-sage font-medium text-sm">{t('process.tags.projectTimeline')}</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 relative">
              <div className="relative group">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant">
                  <img
                    src={processImg4}
                    alt="Design Development"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Floating Progress Badge */}
                <div className={`absolute -top-6 bg-white rounded-2xl p-4 shadow-elegant ${isRTL ? '-left-6' : '-right-6'}`}>
                  <div className="text-center">
                    <PenTool size={24} className="text-cocoa mx-auto mb-2" />
                    <span className="font-playfair text-cocoa font-semibold text-sm">{t('process.stats.development')}</span>
                  </div>
                </div>
                
                {/* Geometric Decoration */}
                <div className={`absolute -bottom-6 w-16 h-16 bg-gradient-to-br from-sage/20 to-cocoa/20 rounded-2xl transform rotate-45 ${isRTL ? '-right-6' : '-left-6'}`}></div>
              </div>
            </div>
          </div>

          {/* Execution Process */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 lg:order-1 relative">
              <div className="relative group">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant">
                  <img
                    src={processImg2}
                    alt="Project Execution"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Floating Stats Card */}
                <div className={`absolute -bottom-6 bg-gradient-to-br from-cocoa to-sage rounded-2xl p-6 shadow-elegant text-white ${isRTL ? '-right-6' : '-left-6'}`}>
                  <div className="text-center">
                    <div className="font-playfair text-3xl font-bold">98%</div>
                    <div className="text-sm opacity-90">{t('process.stats.onTimeDelivery')}</div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className={`absolute -top-4 w-8 h-8 bg-sage rounded-full ${isRTL ? '-left-4' : '-right-4'}`}></div>
                <div className={`absolute -top-2 w-4 h-4 bg-cocoa rounded-full ${isRTL ? '-left-8' : '-right-8'}`}></div>
              </div>
            </div>
            
            <div className="lg:col-span-3 lg:order-2 space-y-8">
              <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                <div className="w-1 h-16 bg-gradient-to-b from-cocoa to-sage rounded-full"></div>
                <div>
                  <span className="text-sage/70 text-sm font-medium tracking-wider uppercase">Step 04</span>
                  <h3 className="font-playfair text-3xl md:text-4xl font-bold text-cocoa">{t('process.execution')}</h3>
                </div>
              </div>
              
              <p className="text-sage text-lg leading-relaxed">
                {t('process.execution.detailed')}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="border border-sage/20 rounded-xl p-4">
                  <div className="font-playfair text-2xl font-bold text-cocoa mb-2">6-12</div>
                  <div className="text-sage text-sm">{t('process.stats.weeksTimeline')}</div>
                </div>
                <div className="border border-sage/20 rounded-xl p-4">
                  <div className="font-playfair text-2xl font-bold text-cocoa mb-2">24/7</div>
                  <div className="text-sage text-sm">{t('process.stats.projectSupport')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;