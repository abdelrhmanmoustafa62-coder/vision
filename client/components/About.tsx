import React from 'react';
import { Target, Eye, Users, Shield, CheckCircle } from 'lucide-react';
import { TIMELINE } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation(0.2);
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation(0.1);

  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Intro Grid with animations */}
        <div 
          ref={introRef}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div 
            className={`space-y-6 transition-all duration-1000 ${
              introVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="flex items-center gap-2 text-accent-600 font-bold tracking-wide uppercase text-sm">
              <span className="w-8 h-[2px] bg-accent-600 animate-pulse"></span>
              من نحن
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-900 leading-tight">
              أكثر من مجرد <br />
              <span className="text-accent-600 relative inline-block">
                شريك استراتيجي
                <span className="absolute bottom-0 right-0 w-full h-2 bg-accent-200 -z-10 animate-shimmer"></span>
              </span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              تأسست شركة "رؤية لحلول الأعمال" لتكون جسراً بين الفرص والشركات، مع التركيز على تمكين الشركات من المنافسة في بيئات الأعمال المتغيرة. نحن لا نرى أنفسنا مجرد مزود خدمة، بل شريك في رحلة نجاحك.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div 
                className="group bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border border-primary-200 hover:border-primary-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Eye className="w-8 h-8 text-primary-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-primary-900 mb-2">رؤيتنا</h3>
                <p className="text-sm text-gray-600">أن نكون الخيار الأول والوجهة الرائدة للشركات الطموحة في المنطقة.</p>
              </div>
              <div 
                className="group bg-gradient-to-br from-accent-50 to-accent-100 p-6 rounded-xl border border-accent-200 hover:border-accent-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Target className="w-8 h-8 text-accent-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-primary-900 mb-2">رسالتنا</h3>
                <p className="text-sm text-gray-600">تمكين عملائنا من تحقيق أقصى إمكاناتهم عبر تزويدهم بحلول استثنائية.</p>
              </div>
            </div>
          </div>

          <div 
            className={`relative transition-all duration-1000 delay-300 ${
              introVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://picsum.photos/800/600?random=2" 
                alt="About Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
            </div>
            
            {/* Floating Card with animation */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-2xl max-w-xs hidden md:block border-r-4 border-accent-500 transform hover:scale-105 transition-all duration-300 animate-float">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="text-primary-600 w-6 h-6" />
                <h4 className="font-bold text-primary-900">قيمنا الراسخة</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                  <CheckCircle size={14} className="text-accent-500" /> الشراكة الاستراتيجية
                </li>
                <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                  <CheckCircle size={14} className="text-accent-500" /> التميز والجودة
                </li>
                <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                  <CheckCircle size={14} className="text-accent-500" /> الخبرة والنزاهة
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Timeline with scroll animations */}
        <div ref={timelineRef} className="mt-24">
          <div 
            className={`text-center mb-12 transition-all duration-1000 ${
              timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900">مسيرة النجاح</h2>
            <p className="text-gray-500 mt-2">محطات فارقة في تاريخ رؤية</p>
          </div>
          
          <div className="relative">
            {/* Animated Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-500 via-primary-500 to-accent-500 hidden md:block opacity-20">
              <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-accent-500 to-transparent animate-pulse"></div>
            </div>
            
            <div className="space-y-12">
              {TIMELINE.map((item, index) => {
                const { ref, isVisible } = useScrollAnimation(0.3);
                
                return (
                  <div 
                    key={index}
                    ref={ref}
                    className={`flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-1000 ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    } ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-full md:w-5/12"></div>
                    
                    {/* Timeline dot with pulse animation */}
                    <div className="relative w-8 h-8 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 border-4 border-white shadow-lg z-10 hidden md:flex items-center justify-center shrink-0 group hover:scale-125 transition-transform duration-300">
                      <div className="absolute inset-0 rounded-full bg-accent-500 animate-ping opacity-75"></div>
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                    
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'text-right' : 'md:text-left text-right'}`}>
                      <div className="group relative bg-white p-6 rounded-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-accent-300 transform hover:scale-105 hover:-translate-y-2">
                        {/* Background year number */}
                        <span className="text-6xl font-black text-primary-50 absolute top-4 left-4 z-0 opacity-50 group-hover:opacity-70 transition-opacity">
                          {item.year}
                        </span>
                        
                        <div className="relative z-10">
                          <span className="inline-block px-3 py-1 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 rounded-full text-xs font-bold mb-2">
                            {item.year}
                          </span>
                          <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Hover shimmer effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
