
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "نظام Marketplace متكامل",
      desc: "أول منصة تجمع سلعاً من متاجر متعددة في سلة تنسيق واحدة، مما يلغي تشتت العميل بين التطبيقات ويجمع أفضل ما في السوق في مكان واحد.",
      icon: "🏪",
      color: "bg-blue-50",
      isUnique: true
    },
    {
      title: "تنسيق بشري (Expert-Led)",
      desc: "خلافاً للأتمتة الكاملة، نوفر خبراء حقيقيين (مناديب تنسيق) يضمنون جودة الهدية ومشاعرها قبل التسليم، مما يرفع القيمة المعنوية للمنتج.",
      icon: "🤝",
      color: "bg-purple-50",
      isUnique: true
    },
    {
      title: "ربط تقني مباشر (P2P)",
      desc: "نربط تقنياً بين العميل وخبير الهدايا (المندوب) مباشرة في بيئة عمل متكاملة؛ لضمان تلبية أدق التفاصيل وتخصيص التجربة لحظياً بأعلى معايير الدقة.",
      icon: "🔗",
      color: "bg-orange-50",
      isUnique: true
    },
    {
      title: "تحليل بيانات الإهداء",
      desc: "نستخدم الذكاء الاصطناعي لفهم التفضيلات الموسمية، مما يرفع معدل تكرار الشراء (Retention) ويحول المناسبات العابرة إلى ولاء مستمر.",
      icon: "📊",
      color: "bg-green-50"
    },
    {
      title: "هوية بصرية مخصصة",
      desc: "تغليف فاخر وبطاقات إلكترونية/ورقية مخصصة لكل طلب، مما يجعل 'Giftly' علامة تجارية مرادفة للفخامة والتميز في كل تفاصيلها.",
      icon: "✨",
      color: "bg-pink-50"
    },
    {
      title: "قابلية التوسع (Scalability)",
      desc: "نموذج عمل يعتمد على 'Asset-light'؛ لا نمتلك مخزوناً، بل ندير المنظومة التقنية التي تربط التاجر، الخبير، والعميل بكفاءة عالية.",
      icon: "🌍",
      color: "bg-indigo-50"
    }
  ];

  return (
    <section id="features" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background for investors */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-50/30 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-2xl space-y-6 text-right">
            <div className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-bold">
              لماذا نحن؟
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              ما الذي يجعل <br />
              <span className="text-purple-600">Giftly متفرداً؟</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              نحن لا ننافس متاجر الهدايا التقليدية، بل نبني المنظومة التقنية (Ecosystem) التي تجمع العميل بالخبير والمنتج في تجربة واحدة متكاملة.
            </p>
          </div>
          <button className="px-10 py-5 bg-slate-900 text-white rounded-[1.5rem] font-extrabold text-lg hover:bg-purple-600 transition-all shadow-xl shadow-slate-200 flex items-center gap-3">
            <span>رؤيتنا والمزايا التنافسية</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className={`p-10 rounded-[3rem] border ${f.isUnique ? 'border-purple-200 bg-purple-50/20' : 'border-slate-100 bg-white'} card-hover hover:shadow-2xl relative text-right`}>
              {f.isUnique && (
                <div className="absolute top-6 left-6 bg-purple-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                  ميزة تنافسية
                </div>
              )}
              <div className={`w-16 h-16 ${f.color} rounded-2xl flex items-center justify-center text-3xl mb-8`}>
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
