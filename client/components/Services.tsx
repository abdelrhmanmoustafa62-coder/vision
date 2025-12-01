import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-primary-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">خدماتنا وحلولنا</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">حلول متكاملة لنمو أعمالك</h2>
          <p className="text-gray-400">
            نقدم خدمات متكاملة وحلولاً مصممة خصيصاً لتلبية احتياجاتك، مع باقات مرنة تناسب جميع الميزانيات.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-primary-800 rounded-2xl p-8 hover:bg-primary-700 transition-colors group border border-primary-700 hover:border-accent-500/50"
            >
              <div className="w-14 h-14 bg-primary-900 rounded-xl flex items-center justify-center mb-6 text-accent-400 group-hover:scale-110 transition-transform">
                <service.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check size={16} className="text-accent-500 shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-primary-600 flex justify-end">
                <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-accent-400 hover:text-accent-300 transition-colors">
                  طلب الخدمة <ArrowLeft size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;