import React from 'react';
import { Search, Lightbulb, PenTool, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

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
                  {/* Timeline Dot */}
                  <div className={`hidden lg:block absolute top-8 ${
                    isEven 
                      ? isRTL ? '-left-8' : '-right-8' 
                      : isRTL ? '-right-8' : '-left-8'
                  } w-16 h-16 bg-white rounded-full border-4 border-sage flex items-center justify-center shadow-soft`}>
                    <span className="font-playfair font-bold text-cocoa">{step.number}</span>
                  </div>

                  {/* Content Card */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-soft hover:shadow-elegant transition-all duration-500 group hover:-translate-y-2">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-sage to-cocoa rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent size={28} className="text-white" />
                      </div>
                      <span className="font-playfair text-4xl font-bold text-sage/20">{step.number}</span>
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
      </div>
    </section>
  );
};

export default Process;