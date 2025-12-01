import React from 'react';
import { SECTORS, CLIENTS, WHY_US } from '../constants';
import { Briefcase } from 'lucide-react';

const WhyUsAndClients: React.FC = () => {
  return (
    <>
      {/* Sectors Section */}
      <section id="sectors" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900">القطاعات التي ندعمها</h2>
            <p className="text-gray-600 mt-2">خبرة تمتد عبر صناعات متعددة</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {SECTORS.map((sector, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 group cursor-default">
                <div className="p-3 bg-primary-50 rounded-full text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <sector.icon size={24} />
                </div>
                <h3 className="text-sm font-semibold text-gray-800">{sector.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Marquee */}
      <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 mb-8 text-center">
            <h3 className="text-lg font-bold text-gray-400 uppercase tracking-widest">من شركاء النجاح</h3>
        </div>
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
            {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, index) => (
              <div key={index} className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                 <Briefcase className="text-gray-400" />
                 <span className="text-xl font-bold text-gray-700">{client}</span>
              </div>
            ))}
          </div>
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 px-8">
            {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, index) => (
              <div key={index} className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                 <Briefcase className="text-gray-400" />
                 <span className="text-xl font-bold text-gray-700">{client}</span>
              </div>
            ))}
          </div>
        </div>
        <style>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        `}</style>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent-600 font-bold uppercase tracking-wider text-sm">لماذا نحن</span>
              <h2 className="text-3xl md:text-5xl font-bold text-primary-900 mt-4 mb-6 leading-tight">
                لماذا رؤية هي <br/> شريكك الأمثل؟
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                نحن أكثر من مجرد مزود خدمات، نحن شريك يلتزم بتحقيق أهدافك الاستراتيجية من خلال منهجيات مدروسة.
              </p>
              
              <div className="space-y-6">
                {WHY_US.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center text-accent-600">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/800/1000?random=3" 
                alt="Strategic Planning" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-900/40"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary-900 to-transparent text-white">
                <p className="text-2xl font-bold">"نجاحك هو معيارنا الأول"</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUsAndClients;