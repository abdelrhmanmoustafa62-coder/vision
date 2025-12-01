import React from 'react';
import { Check, Star, ArrowLeft } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { PricingPackage } from '../data/servicesContent';

interface PricingPackagesProps {
  packages: PricingPackage[];
}

const PricingPackages: React.FC<PricingPackagesProps> = ({ packages }) => {
  const { ref: pricingRef, isVisible: pricingVisible } = useScrollAnimation(0.2);

  return (
    <section ref={pricingRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            pricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            الباقات الشهرية للاشتراك
          </h2>
          <p className="text-lg text-gray-600">
            اختر الباقة المناسبة لاحتياجات شركتك وابدأ رحلة النجاح معنا
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all duration-1000 overflow-hidden group hover:scale-105 ${
                pkg.highlighted 
                  ? 'border-accent-500 shadow-accent-500/20' 
                  : 'border-gray-200 hover:border-accent-300'
              } ${
                pricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Most Popular Badge */}
              {pkg.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-center py-2 text-sm font-bold">
                  <Star size={16} className="inline-block mr-1" />
                  الأكثر طلباً
                </div>
              )}

              <div className={`p-8 ${pkg.highlighted ? 'pt-16' : ''}`}>
                {/* Package Name */}
                <h3 className="text-2xl font-bold text-primary-900 mb-2">
                  {pkg.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-black text-primary-900">
                      {pkg.price}
                    </span>
                    <span className="text-gray-600 font-medium">ريال/شهرياً</span>
                  </div>
                </div>

                {/* Offers Count */}
                <div className="bg-primary-50 rounded-lg p-4 mb-6 border border-primary-100">
                  <p className="text-center">
                    <span className="text-3xl font-bold text-primary-900">{pkg.offers}</span>
                    <span className="text-gray-700 mr-2">عروض شهرياً</span>
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <Check 
                        size={20} 
                        className={`shrink-0 mt-0.5 ${
                          pkg.highlighted ? 'text-accent-500' : 'text-primary-500'
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contact-cta"
                  className={`block w-full py-4 rounded-lg font-bold text-center transition-all group-hover:shadow-lg ${
                    pkg.highlighted
                      ? 'bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white shadow-accent-500/30'
                      : 'bg-primary-600 hover:bg-primary-700 text-white'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    اشترك الآن
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                  </span>
                </a>
              </div>

              {/* Hover Glow Effect */}
              <div 
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                  pkg.highlighted 
                    ? 'bg-gradient-to-br from-accent-500/5 to-transparent' 
                    : 'bg-gradient-to-br from-primary-500/5 to-transparent'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div 
          className={`text-center mt-12 transition-all duration-1000 delay-500 ${
            pricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gray-600 mb-4">
            جميع الباقات تشمل إدارة منصة اعتماد بشكل كامل
          </p>
          <p className="text-sm text-gray-500">
            * الأسعار شاملة ضريبة القيمة المضافة
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;
