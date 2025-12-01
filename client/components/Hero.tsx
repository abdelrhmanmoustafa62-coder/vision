import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?random=1&grayscale" 
          alt="Business Meeting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-800/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white pt-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-accent-400 text-sm font-medium animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-accent-400"></span>
            شريكك الاستراتيجي للنمو
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            نحول التحديات إلى <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-amber-200">
              فرص نجاح مستدامة
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            شريكك الاستراتيجي الموثوق لتمكين الشركات وتحقيق النمو في الأسواق السعودية والمصرية، ندمج الخبرة المحلية بأفضل الممارسات العالمية.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 group"
            >
              تواصل معنا الآن
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-lg font-bold text-lg transition-all backdrop-blur-sm"
            >
              تعرف على خدماتنا
            </a>
          </div>

          {/* Key Stats / Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10 mt-12">
            <div>
              <p className="text-3xl font-bold text-accent-400">2021</p>
              <p className="text-sm text-gray-300">عام التأسيس</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent-400">2+</p>
              <p className="text-sm text-gray-300">دول نعمل بها</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent-400">360°</p>
              <p className="text-sm text-gray-300">حلول متكاملة</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent-400">50+</p>
              <p className="text-sm text-gray-300">شريك نجاح</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;