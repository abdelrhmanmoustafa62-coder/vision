import React from 'react';
import { Phone, Mail, MapPin, Globe, Facebook, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-primary-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">تواصل معنا لبدء شراكة مثمرة</h2>
            <p className="text-gray-300 mb-8 text-lg">
              نتطلع لمناقشة كيف يمكننا مساعدتكم على تحقيق أهدافكم وتجاوز التوقعات.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center text-accent-400">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">الهاتف</p>
                  <p className="font-bold font-sans ltr:text-left" dir="ltr">+966 57 152 1400</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center text-accent-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">البريد الإلكتروني</p>
                  <p className="font-bold">info@roaia.org</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center text-accent-400">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">الموقع الإلكتروني</p>
                  <p className="font-bold">www.roaia.org</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-gray-800 shadow-xl">
            <h3 className="text-2xl font-bold text-primary-900 mb-6">أرسل لنا رسالة</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">الاسم</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-gray-50" placeholder="اسمك الكامل" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">الشركة</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-gray-50" placeholder="اسم الشركة" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-gray-50" placeholder="example@company.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">نوع الخدمة</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-gray-50">
                  <option>إدارة العروض والمناقصات</option>
                  <option>تطوير الأعمال</option>
                  <option>حلول التسويق</option>
                  <option>حلول التقنية (ERP)</option>
                  <option>استشارات مالية/أيزو</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">الرسالة</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-gray-50" placeholder="كيف يمكننا مساعدتك؟"></textarea>
              </div>

              <button className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-accent-500/30">
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} رؤية لحلول الأعمال. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-accent-500 hover:text-white transition-colors"><Twitter size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-accent-500 hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-accent-500 hover:text-white transition-colors"><Facebook size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;