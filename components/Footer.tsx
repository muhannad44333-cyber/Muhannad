
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="about" className="pt-24 pb-12 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5 space-y-8">
             <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🎁</span>
              </div>
              <span className="text-3xl font-black tracking-tight">Giftly.</span>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md font-medium">
              نعيد تعريف صناعة الإهداء في المنطقة عبر دمج الخبرة البشرية مع التقنية المتقدمة لخلق لحظات لا تُنسى.
            </p>
            <div className="flex gap-4">
               {['𝕏', '', ''].map((s, i) => (
                 <a key={i} href="#" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-purple-600 transition-all text-xl">{s}</a>
               ))}
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <h4 className="font-bold text-white text-lg">الشركة</h4>
            <ul className="text-slate-400 space-y-4 font-medium">
              <li><a href="#" className="hover:text-purple-400 transition-colors">عن المنصة</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">نموذج العمل</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">المستثمرون</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">الوظائف</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <h4 className="font-bold text-white text-lg">تواصل معنا</h4>
            <ul className="text-slate-400 space-y-4 font-medium">
              <li className="break-all">bsm.am2025@outlook.com</li>
              <li>0553111551</li>
              <li>الرياض، المملكة</li>
            </ul>
          </div>
          
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-bold text-white text-lg">انضم للنشرة الاستثمارية</h4>
            <p className="text-sm text-slate-400 font-medium leading-relaxed">كن أول من يعرف عن تحديثاتنا التقنية وتقارير النمو السنوي.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني"
                className="bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-purple-500 flex-1"
              />
              <button className="bg-purple-600 text-white px-6 py-4 rounded-2xl font-bold hover:bg-purple-500 transition-all">ارسال</button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:row justify-between items-center pt-10 border-t border-slate-800 text-slate-500 font-bold gap-6">
          <p className="text-sm">© 2024 Giftly Platform. All Rights Reserved.</p>
          <div className="flex gap-8 text-sm uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a>
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
