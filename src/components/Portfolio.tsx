import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Portfolio = () => {
  const { t, isRTL } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all', label: t('portfolio.filter.all') },
    { key: 'residential', label: t('portfolio.filter.residential') },
    { key: 'commercial', label: t('portfolio.filter.commercial') },
    { key: 'hospitality', label: t('portfolio.filter.hospitality') },
  ];

  // Sample portfolio items - replace with real data
  const portfolioItems = [
    {
      id: 1,
      title: 'Modern Villa Interior',
      category: 'residential',
      location: 'Riyadh',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
    },
    {
      id: 2,
      title: 'Luxury Restaurant',
      category: 'hospitality',
      location: 'Jeddah',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
    },
    {
      id: 3,
      title: 'Corporate Office',
      category: 'commercial',
      location: 'Dammam',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    },
    {
      id: 4,
      title: 'Boutique Hotel Suite',
      category: 'hospitality',
      location: 'AlUla',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    },
    {
      id: 5,
      title: 'Contemporary Apartment',
      category: 'residential',
      location: 'Riyadh',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    },
    {
      id: 6,
      title: 'Retail Showroom',
      category: 'commercial',
      location: 'Jeddah',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cocoa mb-6">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-sage max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Filters */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-cocoa text-ivory shadow-soft'
                  : 'bg-white/50 text-cocoa hover:bg-cocoa hover:text-ivory hover:shadow-soft'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-playfair text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-90 mb-1">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </p>
                  <p className="text-sm opacity-75">
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;