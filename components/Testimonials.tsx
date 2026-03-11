
import React from 'react';

const CustomerSamples: React.FC = () => {
  const samples = [
    {
      image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1000&auto=format&fit=crop",
      title: "تنسيق ورد فاخر",
      category: "مناسبات خاصة"
    },
    {
      image: "https://images.unsplash.com/photo-1549465220-1d8c9d9c6703?q=80&w=1000&auto=format&fit=crop",
      title: "صندوق مفاجآت متكامل",
      category: "هدايا تخرج"
    },
    {
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
      title: "ساعة فاخرة بتغليف خاص",
      category: "هدايا رجالية"
    },
    {
      image: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?q=80&w=1000&auto=format&fit=crop",
      title: "مجموعة العناية والجمال",
      category: "هدايا نسائية"
    },
    {
      image: "https://images.unsplash.com/photo-1512909006721-3d6018887183?q=80&w=1000&auto=format&fit=crop",
      title: "تغليف هدايا ملكي",
      category: "ذكرى زواج"
    },
    {
      image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=1000&auto=format&fit=crop",
      title: "سلة شوكولاتة عالمية",
      category: "زيارات عائلية"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-extrabold text-slate-800">نماذج من إبداعات خبرائنا</h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">لقطات واقعية لهدايا تم تجهيزها وتنسيقها وتسليمها بكل حب لعملائنا.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {samples.map((sample, index) => (
            <div key={index} className="group relative overflow-hidden rounded-[2.5rem] shadow-sm border border-purple-50 aspect-square">
              <img 
                src={sample.image} 
                alt={sample.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <span className="text-purple-200 text-sm font-bold mb-2">{sample.category}</span>
                <h3 className="text-white text-xl font-bold">{sample.title}</h3>
              </div>
              
              {/* Badge for realism */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full shadow-sm">
                <span className="text-xs font-bold text-purple-600">تم التنفيذ بواسطة خبراء هديتي ✨</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-10 py-4 border-2 border-[#D8B4FE] text-[#D8B4FE] rounded-full font-bold text-lg hover:bg-[#D8B4FE] hover:text-white transition-all">
            مشاهدة المزيد من الأعمال
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerSamples;
