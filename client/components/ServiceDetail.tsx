import React from 'react';
import { ArrowLeft, Check, Phone, Mail, ChevronRight, Home, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ServiceContent } from '../data/servicesContent';

interface ServiceDetailProps {
  service: ServiceContent;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.1);
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation(0.2);
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation(0.2);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-primary-600 flex items-center gap-1 transition-colors">
              <Home size={16} />
              <span>الرئيسية</span>
            </a>
            <ChevronRight size={16} className="text-gray-400" />
            <a href="/#services" className="hover:text-primary-600 transition-colors">
              الخدمات
            </a>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-primary-600 font-medium">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent-500 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <div 
              className={`transition-all duration-1000 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-accent-400 text-sm font-medium backdrop-blur-sm mb-6">
                <span>خدماتنا المتخصصة</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {service.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                {service.subtitle}
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-3xl">
                {service.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact-cta"
                  className="group px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white rounded-lg font-bold text-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/50 flex items-center justify-center gap-2"
                >
                  <span>اطلب الخدمة الآن</span>
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+966571521400"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-white rounded-lg font-bold text-lg transition-all backdrop-blur-sm flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  <span>اتصل بنا</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {service.sections.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-3xl font-bold text-primary-900 mb-6">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {section.content}
                </p>
                {section.list && (
                  <ul className="space-y-3">
                    {section.list.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check size={20} className="text-accent-500 shrink-0 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section 
        ref={benefitsRef}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 
              className={`text-3xl font-bold text-primary-900 mb-8 text-center transition-all duration-1000 ${
                benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              فوائد الخدمة
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-500 transform hover:scale-105 ${
                    benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center shrink-0">
                      <Check size={20} className="text-accent-600" />
                    </div>
                    <p className="text-gray-800 font-medium">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section 
        ref={processRef}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 
              className={`text-3xl font-bold text-primary-900 mb-12 text-center transition-all duration-1000 ${
                processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              خطوات العمل
            </h2>
            <div className="space-y-8">
              {service.process.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-6 transition-all duration-1000 ${
                    processVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      {step.step}
                    </div>
                    {index < service.process.length - 1 && (
                      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-accent-300 to-transparent" />
                    )}
                  </div>
                  <div className="flex-1 bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="text-xl font-bold text-primary-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Only show if pricing data exists */}
      {service.pricing && service.pricing.length > 0 && (
        <section 
          ref={pricingRef}
          className="py-16 bg-gradient-to-br from-gray-50 to-gray-100"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div 
                className={`text-center mb-12 transition-all duration-1000 ${
                  pricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                  باقاتنا الشهرية المتكاملة
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  اختر الباقة المناسبة لحجم أعمالك واحتياجاتك - جميع الأسعار شهرية ولا تشمل ضريبة القيمة المضافة
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {service.pricing.map((pkg, index) => (
                  <div
                    key={index}
                    className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all duration-1000 transform hover:scale-105 hover:shadow-2xl ${
                      pkg.highlighted 
                        ? 'border-accent-500 ring-4 ring-accent-100' 
                        : 'border-gray-200 hover:border-primary-300'
                    } ${
                      pricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {/* Badge for highlighted package */}
                    {pkg.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                        <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                          <Star size={16} className="fill-current" />
                          <span>الأكثر طلباً</span>
                        </div>
                      </div>
                    )}

                    <div className="p-8">
                      {/* Package Name */}
                      <h3 className="text-2xl font-bold text-primary-900 mb-4 text-center">
                        {pkg.name}
                      </h3>

                      {/* Price */}
                      <div className="text-center mb-6">
                        <div className="flex items-baseline justify-center gap-2">
                          <span className="text-5xl font-bold text-primary-900">
                            {pkg.price}
                          </span>
                          <div className="flex flex-col items-start">
                            <span className="text-lg text-gray-600">ريال</span>
                            <span className="text-sm text-gray-500">/ شهرياً</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                          *لا تشمل ضريبة القيمة المضافة
                        </p>
                      </div>

                      {/* Offers Count */}
                      <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-4 mb-6 text-center">
                        <div className="text-3xl font-bold text-primary-900">
                          {pkg.offers}
                        </div>
                        <div className="text-sm text-gray-700 font-medium">
                          عروض فنية شهرياً
                        </div>
                      </div>

                      {/* Features List */}
                      <ul className="space-y-4 mb-8">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-5 h-5 bg-accent-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                              <Check size={14} className="text-accent-600" />
                            </div>
                            <span className="text-gray-700 text-sm leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <a
                        href="#contact-cta"
                        className={`block w-full py-4 rounded-xl font-bold text-center transition-all transform hover:scale-105 ${
                          pkg.highlighted
                            ? 'bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white shadow-lg hover:shadow-2xl hover:shadow-accent-500/50'
                            : 'bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg'
                        }`}
                      >
                        اشترك الآن
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div 
                className={`mt-12 bg-white rounded-xl p-6 shadow-md border border-gray-200 transition-all duration-1000 ${
                  pricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '450ms' }}
              >
                <div className="text-center">
                  <p className="text-gray-700 mb-4">
                    <strong className="text-primary-900">ملاحظة هامة:</strong> جميع الباقات تشمل إدارة شاملة ويومية لمنصة اعتماد ومتابعة مستمرة للفرص المتاحة
                  </p>
                  <p className="text-sm text-gray-600">
                    للاستفسار عن الباقات المخصصة أو احتياجات خاصة، يرجى التواصل معنا مباشرة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section id="contact-cta" className="py-16 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {service.cta.title}
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              {service.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/#contact"
                className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white rounded-lg font-bold text-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/50 flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                <span>تواصل معنا</span>
              </a>
              <a 
                href="tel:+966571521400"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-white rounded-lg font-bold text-lg transition-all backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                <span dir="ltr">+966 57 152 1400</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">
            خدمات أخرى قد تهمك
          </h2>
          <div className="text-center">
            <a 
              href="/#services"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-accent-600 font-bold transition-colors"
            >
              <span>عرض جميع الخدمات</span>
              <ArrowLeft size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
