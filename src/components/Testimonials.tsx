import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const { t, isRTL } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'سارة أحمد',
      nameEn: 'Sarah Ahmed',
      location: 'الرياض',
      locationEn: 'Riyadh',
      rating: 5,
      testimonialAr: 'تعامل راقي واحترافية عالية. استوديو روزا حول منزلي إلى قصر فني يعكس ذوقي الشخصي. أنصح بهم بشدة.',
      testimonialEn: 'Elegant service and high professionalism. Roza Studio transformed my home into an artistic palace that reflects my personal taste. I highly recommend them.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1-e?w=400&h=400&fit=crop&crop=face',
    },
    {
      id: 2,
      name: 'محمد الخالد',
      nameEn: 'Mohammed Al-Khaled',
      location: 'جدة',
      locationEn: 'Jeddah',
      rating: 5,
      testimonialAr: 'فريق متميز ومبدع. صمموا مكتبي بطريقة تجمع بين الأناقة والعملية. النتيجة فاقت توقعاتي بكثير.',
      testimonialEn: 'Outstanding and creative team. They designed my office in a way that combines elegance and functionality. The result exceeded my expectations by far.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    },
    {
      id: 3,
      name: 'فاطمة السالم',
      nameEn: 'Fatima Al-Salem',
      location: 'الدمام',
      locationEn: 'Dammam',
      rating: 5,
      testimonialAr: 'خدمة استثنائية وذوق رفيع. كل تفصيلة في التصميم تعكس الاهتمام والإبداع. شكراً لاستوديو روزا على هذا العمل المتقن.',
      testimonialEn: 'Exceptional service and refined taste. Every detail in the design reflects attention and creativity. Thank you to Roza Studio for this perfect work.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section id="testimonials" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cocoa mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-sage max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-elegant">
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} size={24} className="text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className={`font-inter text-lg md:text-xl leading-relaxed text-sage mb-8 ${
              isRTL ? 'text-right' : 'text-left'
            }`}>
              "{isRTL ? currentTestimonial.testimonialAr : currentTestimonial.testimonialEn}"
            </blockquote>

            {/* Author */}
            <div className={`flex items-center ${isRTL ? 'justify-end' : 'justify-start'}`}>
              <img
                src={currentTestimonial.avatar}
                alt={isRTL ? currentTestimonial.name : currentTestimonial.nameEn}
                className={`w-16 h-16 rounded-full object-cover ${isRTL ? 'ml-4' : 'mr-4'}`}
              />
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <h4 className="font-playfair text-lg font-semibold text-cocoa">
                  {isRTL ? currentTestimonial.name : currentTestimonial.nameEn}
                </h4>
                <p className="text-sage">
                  {isRTL ? currentTestimonial.location : currentTestimonial.locationEn}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className={`absolute top-1/2 transform -translate-y-1/2 ${
              isRTL ? 'right-4' : 'left-4'
            } w-12 h-12 bg-white rounded-full shadow-soft hover:shadow-elegant transition-all duration-300 flex items-center justify-center text-cocoa hover:text-sage`}
          >
            {isRTL ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>

          <button
            onClick={nextSlide}
            className={`absolute top-1/2 transform -translate-y-1/2 ${
              isRTL ? 'left-4' : 'right-4'
            } w-12 h-12 bg-white rounded-full shadow-soft hover:shadow-elegant transition-all duration-300 flex items-center justify-center text-cocoa hover:text-sage`}
          >
            {isRTL ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-cocoa scale-125' 
                    : 'bg-sage/30 hover:bg-sage/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;