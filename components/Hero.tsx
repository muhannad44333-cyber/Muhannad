
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-44 pb-24 overflow-hidden min-h-screen flex items-center bg-[#FAFAFF]">
      {/* Simplified Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-[10%] right-[10%] w-96 h-96 bg-purple-100 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
        {/* Text Content */}
        <div className="lg:col-span-6 space-y-10 text-center lg:text-right">
          <div className="inline-flex items-center gap-3 bg-white border border-purple-100 px-6 py-2.5 rounded-full text-sm font-bold text-purple-600 shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            <span>منصة Marketplace متكاملة لخبراء الهدايا</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-[1.2] text-slate-900 tracking-tight">
            أهلاً بك في <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-purple-600 to-indigo-500">مستقبل الـهدايا</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            سوق تفاعلي يجمعك بخبراء الهدايا لتنسيق لحظاتك. ابدأ بوصف هديتك أو اترك الأمر لمبدعينا.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
            <button className="px-10 py-5 btn-gradient text-white rounded-[2rem] font-extrabold text-xl shadow-2xl flex items-center justify-center gap-4 group">
              <span>اطلب هديتك الآن</span>
              <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-[-4px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Recreated Screenshot UI */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[400px] bg-white rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white overflow-hidden aspect-[9/18.5] flex flex-col animate-float">
            
            {/* Header */}
            <div className="px-8 pt-12 pb-6 flex items-center justify-between">
              <div className="w-10 h-10 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 shadow-sm border border-slate-100 cursor-pointer">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-xl font-extrabold text-slate-800">وصف الهدية</h3>
              <div className="w-10 h-10"></div> {/* Spacer */}
            </div>

            {/* Content Area */}
            <div className="flex-1 px-8 space-y-8">
              <div className="flex items-center justify-between">
                <h4 className="text-[1.1rem] font-bold text-slate-700">اكتب وصف الهدية المخصصة المناسبة لك</h4>
                <span className="text-purple-300 text-2xl">☆</span>
              </div>

              {/* Text Area Mockup */}
              <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 h-64 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.03)] relative">
                <div className="absolute top-6 right-6 opacity-20">
                  <svg className="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <p className="text-slate-300 text-right leading-relaxed font-medium">
                  مثال: أريد باقة ورد حمراء مع شوكولاتة باتشي مغلفة بشريطة ذهبية وكرت مكتوب عليه...
                </p>
              </div>

              {/* Info Box */}
              <div className="bg-blue-50/50 border border-blue-100/50 rounded-3xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <p className="text-blue-600 text-sm font-bold leading-relaxed">
                  إذا ماتعرف وش الهدية، لا تقلق! اترك الوصف فارغاً وسيقوم مندوبنا بترتيبها وتنسيقها معك خطوة بخطوة.
                </p>
              </div>
            </div>

            {/* Footer Action */}
            <div className="px-8 pb-12 pt-4">
              <button className="w-full bg-[#D8B4FE] text-white py-6 rounded-[2rem] font-black text-xl shadow-[0_15px_30px_-5px_rgba(216,180,254,0.5)] active:scale-95 transition-all">
                تخطي والترتيب مع المندوب
              </button>
            </div>

            {/* iOS Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-slate-200 rounded-full"></div>
          </div>

          {/* Decorative Back Elements */}
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-purple-100 rounded-full blur-[100px] -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-50 rounded-full blur-[80px] -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
