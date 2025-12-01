import React, { useState } from 'react';
import { Phone, Mail, MapPin, Globe, Facebook, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    service: 'إدارة العروض والمناقصات',
    message: ''
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: data.message });
        setFormData({ name: '', company: '', email: '', service: 'إدارة العروض والمناقصات', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'حدث خطأ أثناء إرسال الرسالة' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى.' });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
                  <a href="tel:+966571521400" className="font-bold font-sans ltr:text-left hover:text-accent-400 transition-colors" dir="ltr">+966 57 152 1400</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center text-accent-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">البريد الإلكتروني</p>
                  <a href="mailto:info@roaia.org" className="font-bold hover:text-accent-400 transition-colors">info@roaia.org</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center text-accent-400">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">الموقع الإلكتروني</p>
                  <a href="https://www.roaia.org" className="font-bold hover:text-accent-400 transition-colors">www.roaia.org</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-gray-800 shadow-xl">
            <h3 className="text-2xl font-bold text-primary-900 mb-6">أرسل لنا رسالة</h3>
            
            {status.type && (
              <div className={`mb-4 p-4 rounded-lg ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {status.message}
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">الاسم *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-gray-50" 
                    placeholder="اسمك الكامل" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">الشركة</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-gray-50" 
                    placeholder="اسم الشركة" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني *</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-gray-50" 
                  placeholder="example@company.com" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">نوع الخدمة</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-gray-50"
                >
                  <option>إدارة العروض والمناقصات</option>
                  <option>تطوير الأعمال</option>
                  <option>حلول التسويق</option>
                  <option>حلول التقنية (ERP)</option>
                  <option>استشارات مالية/أيزو</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">الرسالة *</label>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-gray-50" 
                  placeholder="كيف يمكننا مساعدتك؟"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className={`w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-accent-500/30 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? 'جاري الإرسال...' : 'إرسال الرسالة'}
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