
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'py-4 glass-morphism shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-200">
            <span className="text-2xl">🎁</span>
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-slate-900">
            Giftly<span className="text-purple-500">.</span>
          </span>
        </div>
        
        <div className="hidden lg:flex items-center gap-10 font-bold text-slate-600">
          <a href="#hero" className="hover:text-purple-600 transition-colors text-sm uppercase tracking-wide">الرئيسية</a>
          <a href="#chat" className="hover:text-purple-600 transition-colors text-sm uppercase tracking-wide">المنصة</a>
          <a href="#features" className="hover:text-purple-600 transition-colors text-sm uppercase tracking-wide">المميزات</a>
          <a href="#about" className="hover:text-purple-600 transition-colors text-sm uppercase tracking-wide">تواصل معنا</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block text-slate-900 font-bold px-6 py-2 hover:text-purple-600 transition-colors">
            دخول
          </button>
          <button className="btn-gradient text-white px-8 py-3 rounded-2xl font-bold text-sm shadow-lg shadow-purple-100 active:scale-95">
            ابدأ الآن
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
