import React, { useEffect, useState } from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { useMouseParallax } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mousePosition = useMouseParallax(15);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 animate-gradient-slow"></div>
        
        {/* Particle Background */}
        <ParticleBackground />
        
        {/* Floating Shapes */}
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-float"
          style={{ 
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float-delayed"
          style={{ 
            transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white pt-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge with animation */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-accent-400 text-sm font-medium backdrop-blur-sm transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <Sparkles size={16} className="animate-pulse" />
            <span>شريكك الاستراتيجي للنمو</span>
          </div>
          
          {/* Main Heading with stagger animation */}
          <h1 
            className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              transform: `perspective(1000px) rotateX(${mousePosition.y * 0.02}deg) rotateY(${-mousePosition.x * 0.02}deg)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            نحول التحديات إلى <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-amber-300 to-amber-200 animate-gradient">
              فرص نجاح مستدامة
            </span>
          </h1>
          
          {/* Description */}
          <p 
            className={`text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            شريكك الاستراتيجي الموثوق لتمكين الشركات وتحقيق النمو في الأسواق السعودية والمصرية، ندمج الخبرة المحلية بأفضل الممارسات العالمية.
          </p>

          {/* CTA Buttons with hover effects */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a 
              href="#contact" 
              className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white rounded-lg font-bold text-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/50 flex items-center justify-center gap-2 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative">تواصل معنا الآن</span>
              <ArrowLeft size={20} className="relative group-hover:-translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="group w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-white rounded-lg font-bold text-lg transition-all backdrop-blur-sm transform hover:scale-105"
            >
              تعرف على خدماتنا
            </a>
          </div>

          {/* Key Stats with counter animation */}
          <div 
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10 mt-12 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {[
              { value: '2021', label: 'عام التأسيس' },
              { value: '2+', label: 'دول نعمل بها' },
              { value: '360°', label: 'حلول متكاملة' },
              { value: '50+', label: 'شريك نجاح' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group cursor-pointer transition-all duration-300 hover:scale-110"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <p className="text-3xl md:text-4xl font-bold text-accent-400 group-hover:text-accent-300 transition-colors animate-pulse-slow">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;