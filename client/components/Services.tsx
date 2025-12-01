import React, { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { SERVICES } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-primary-900 via-primary-900 to-primary-800 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header with fade-in animation */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-accent-400 font-bold uppercase tracking-wider text-sm mb-4 px-4 py-2 bg-accent-500/10 rounded-full">
            خدماتنا وحلولنا
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            حلول متكاملة لنمو أعمالك
          </h2>
          <p className="text-gray-400 text-lg">
            نقدم خدمات متكاملة وحلولاً مصممة خصيصاً لتلبية احتياجاتك، مع باقات مرنة تناسب جميع الميزانيات.
          </p>
        </div>

        {/* Services grid with stagger animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const { ref, isVisible } = useScrollAnimation(0.1);
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                ref={ref}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl p-8 border border-primary-700 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  transform: isHovered 
                    ? 'translateY(-8px) rotateX(5deg)' 
                    : 'translateY(0) rotateX(0deg)',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* Glow effect on hover */}
                <div 
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/20 to-transparent opacity-0 transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : ''
                  }`}
                  style={{ filter: 'blur(20px)' }}
                />

                {/* Border glow */}
                <div 
                  className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500 ${
                    isHovered ? 'border-accent-500/50 shadow-lg shadow-accent-500/20' : 'border-transparent'
                  }`}
                />

                <div className="relative z-10">
                  {/* Icon with rotation animation */}
                  <div 
                    className={`w-14 h-14 bg-primary-900 rounded-xl flex items-center justify-center mb-6 text-accent-400 transition-all duration-500 ${
                      isHovered ? 'scale-110 rotate-6 bg-accent-500 text-white shadow-lg shadow-accent-500/50' : ''
                    }`}
                  >
                    <service.icon size={28} className={isHovered ? 'animate-pulse' : ''} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features list with slide animation */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className={`flex items-start gap-3 text-sm text-gray-300 transition-all duration-300 ${
                          isHovered ? 'translate-x-1' : ''
                        }`}
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <Check 
                          size={16} 
                          className={`shrink-0 mt-1 transition-all duration-300 ${
                            isHovered ? 'text-accent-400 scale-125' : 'text-accent-500'
                          }`} 
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Buttons */}
                  <div className="mt-8 pt-6 border-t border-primary-600 flex justify-between items-center gap-2">
                    {service.slug ? (
                      <a 
                        href={`/service/${service.slug}`}
                        className="text-accent-400 hover:text-accent-300 text-sm font-medium transition-colors duration-300 flex items-center gap-1"
                      >
                        <span>عرض التفاصيل</span>
                        <ArrowLeft size={14} />
                      </a>
                    ) : (
                      <div />
                    )}
                    <a 
                      href="#contact" 
                      className={`group inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-lg transition-all duration-300 ${
                        isHovered 
                          ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/50 scale-105' 
                          : 'text-accent-400 hover:text-accent-300'
                      }`}
                    >
                      <span>طلب الخدمة</span>
                      <ArrowLeft 
                        size={16} 
                        className={`transition-transform duration-300 ${
                          isHovered ? '-translate-x-1' : ''
                        }`}
                      />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;