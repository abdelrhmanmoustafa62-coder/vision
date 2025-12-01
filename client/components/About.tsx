import React from 'react';
import { Target, Eye, Users, Shield, CheckCircle } from 'lucide-react';
import { TIMELINE } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Intro Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-accent-600 font-bold tracking-wide uppercase text-sm">
              <span className="w-8 h-[2px] bg-accent-600"></span>
              من نحن
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-900 leading-tight">
              أكثر من مجرد <br />
              <span className="text-accent-600">شريك استراتيجي</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              تأسست شركة "رؤية لحلول الأعمال" لتكون جسراً بين الفرص والشركات، مع التركيز على تمكين الشركات من المنافسة في بيئات الأعمال المتغيرة. نحن لا نرى أنفسنا مجرد مزود خدمة، بل شريك في رحلة نجاحك.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
                <Eye className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="font-bold text-primary-900 mb-2">رؤيتنا</h3>
                <p className="text-sm text-gray-600">أن نكون الخيار الأول والوجهة الرائدة للشركات الطموحة في المنطقة.</p>
              </div>
              <div className="bg-accent-50 p-6 rounded-xl border border-accent-100">
                <Target className="w-8 h-8 text-accent-600 mb-4" />
                <h3 className="font-bold text-primary-900 mb-2">رسالتنا</h3>
                <p className="text-sm text-gray-600">تمكين عملائنا من تحقيق أقصى إمكاناتهم عبر تزويدهم بحلول استثنائية.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/800/600?random=2" 
                alt="About Team" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl max-w-xs hidden md:block border-r-4 border-accent-500">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="text-primary-600 w-6 h-6" />
                <h4 className="font-bold text-primary-900">قيمنا الراسخة</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-accent-500" /> الشراكة الاستراتيجية</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-accent-500" /> التميز والجودة</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-accent-500" /> الخبرة والنزاهة</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900">مسيرة النجاح</h2>
            <p className="text-gray-500 mt-2">محطات فارقة في تاريخ رؤية</p>
          </div>
          
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {TIMELINE.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-5/12"></div>
                  
                  <div className="w-8 h-8 rounded-full bg-accent-500 border-4 border-white shadow z-10 hidden md:flex items-center justify-center shrink-0">
                  </div>
                  
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'text-right' : 'md:text-left text-right'}`}>
                    <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow border border-gray-100">
                      <span className="text-4xl font-black text-primary-100 absolute top-4 left-4 z-0 opacity-50">{item.year}</span>
                      <div className="relative z-10">
                        <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-bold mb-2">{item.year}</span>
                        <h3 className="text-xl font-bold text-primary-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;