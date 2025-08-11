import React, { useState } from 'react';
import { Send, MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: isRTL ? 'خطأ' : 'Error',
        description: isRTL ? 'يرجى ملء جميع الحقول' : 'Please fill in all fields',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: isRTL ? 'تم الإرسال بنجاح' : 'Successfully Sent',
      description: isRTL ? 'سيتم توجيهك إلى واتساب للمتابعة' : 'You will be redirected to WhatsApp to continue',
    });

    // Redirect to WhatsApp with pre-filled message
    const message = `${isRTL ? 'مرحباً، اسمي' : 'Hello, my name is'} ${formData.name}\n${isRTL ? 'رقم الهاتف:' : 'Phone:'} ${formData.phone}\n\n${formData.message}`;
    const whatsappUrl = `https://wa.me/966536601777?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleDirectWhatsApp = () => {
    window.open('https://wa.me/966536601777', '_blank');
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-cocoa via-sage to-cocoa relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-ivory mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl md:text-2xl text-ivory/90 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Direct WhatsApp CTA */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle size={40} className="text-white" />
                </div>
                
                <h3 className="font-playfair text-2xl font-semibold text-ivory mb-4">
                  {t('contact.cta')}
                </h3>
                
                <p className="text-ivory/80 mb-8 leading-relaxed">
                  {isRTL 
                    ? 'تواصل معنا مباشرة على واتساب للحصول على استشارة فورية ومجانية'
                    : 'Contact us directly on WhatsApp for instant and free consultation'
                  }
                </p>

                <button
                  onClick={handleDirectWhatsApp}
                  className="btn-whatsapp w-full flex items-center justify-center space-x-3 text-lg"
                >
                  <MessageCircle size={24} />
                  <span>{t('contact.cta')}</span>
                  <ArrowIcon size={20} />
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h4 className="font-playfair text-xl font-semibold text-ivory mb-6">
                {isRTL ? 'معلومات التواصل' : 'Contact Information'}
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MessageCircle size={20} className="text-green-400" />
                  <span className="text-ivory/90">+966 53 660 1777</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="font-playfair text-2xl font-semibold text-ivory mb-8 text-center">
              {isRTL ? 'أرسل رسالة سريعة' : 'Send a Quick Message'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-ivory/90 font-medium mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-ivory placeholder-ivory/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                  placeholder={t('contact.form.name')}
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </div>

              <div>
                <label className="block text-ivory/90 font-medium mb-2">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-ivory placeholder-ivory/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                  placeholder={t('contact.form.phone')}
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-ivory/90 font-medium mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-ivory placeholder-ivory/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 resize-none"
                  placeholder={t('contact.form.message')}
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-cocoa px-6 py-4 rounded-lg font-medium hover:bg-ivory transition-all duration-300 flex items-center justify-center space-x-3 group"
              >
                <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                <span>{t('contact.form.submit')}</span>
              </button>
            </form>

            <p className="text-center text-ivory/70 text-sm mt-6">
              {t('contact.form.continue')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;