
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';

const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'expert', text: string }[]>([
    { role: 'expert', text: 'أهلاً بك في Giftly! أنا خبير الهدايا الخاص بك. هل تبحث عن شيء مميز اليوم؟' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `أنت الآن "خبير هدايا" في تطبيق "Giftly". وظيفتك هي مساعدة العميل في اختيار هدية رائعة.
        أجب باحترافية، وود، وبلهجة سعودية بيضاء خفيفة. لا تطل في الكلام. العميل قال: "${userMsg}"`,
        config: {
          systemInstruction: "You are an expert gift consultant for 'Giftly'. Use modern Arabic (Saudi focus). Respond concisely and helpfully. Focus on the marketplace benefits like customization and fast delivery.",
        }
      });
      
      setMessages(prev => [...prev, { role: 'expert', text: response.text || 'أعتذر، حدث خطأ ما.' }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'expert', text: 'أنا هنا لمساعدتك! جرب سؤالنا عن هدايا تخرج أو زواج مثلاً.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section id="chat" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-8 order-2 lg:order-1">
             <div className="inline-block p-3 px-6 bg-purple-100/50 rounded-2xl text-purple-700 font-bold text-sm">
               تجربة تفاعلية
             </div>
             <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
               محادثة واحدة، <br />
               <span className="text-purple-600">ألف خيار مميز.</span>
             </h2>
             <p className="text-lg text-slate-600 leading-relaxed font-medium">
               نظامنا لا يعطيك قائمة هدايا جامدة. بدلاً من ذلك، نربطك بخبير حقيقي يفهم احتياجك، يبحث عن المنتج الأمثل، وينسقه بشكل فني ليس له مثيل.
             </p>
             <ul className="space-y-4">
               {[
                 'استشارات هدايا فورية',
                 'وصول لمنتجات حصرية وغير متوفرة في المتاجر العامة',
                 'متابعة حالة الطلب بالصور والفيديو'
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-4 font-bold text-slate-700">
                   <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">✓</span>
                   {item}
                 </li>
               ))}
             </ul>
          </div>

          <div className="order-1 lg:order-2">
            <div className="glass-morphism rounded-[3rem] overflow-hidden flex flex-col h-[700px] border border-white shadow-2xl relative">
              {/* Profile Header */}
              <div className="p-8 bg-white/50 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img src="https://i.pravatar.cc/150?img=32" className="w-16 h-16 rounded-full border-4 border-white shadow-lg" alt="expert" />
                    <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900">سارة الـخبير</h4>
                    <p className="text-xs text-purple-500 font-bold uppercase tracking-widest">مستشار هدايا معتمد</p>
                  </div>
                </div>
                <div className="flex gap-2">
                   <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center cursor-pointer hover:bg-slate-200 transition-colors text-lg">⚙️</div>
                </div>
              </div>

              {/* Chat Content */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide bg-white/30">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                    <div className={`max-w-[85%] p-5 px-6 rounded-3xl text-[1.05rem] font-medium leading-relaxed shadow-sm ${
                      msg.role === 'user' 
                      ? 'bg-purple-600 text-white rounded-tr-none' 
                      : 'bg-white text-slate-800 rounded-tl-none border border-slate-100'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-end">
                    <div className="bg-white p-4 rounded-3xl rounded-tl-none flex gap-1.5 shadow-sm">
                      <div className="w-2 h-2 bg-purple-300 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-2 h-2 bg-purple-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input UI */}
              <div className="p-8 bg-white border-t border-slate-100">
                <div className="relative flex items-center gap-4">
                  <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="ما هي المناسبة التي تحضر لها؟"
                    className="w-full bg-slate-50 border border-slate-200 rounded-[2rem] px-8 py-5 focus:outline-none focus:ring-4 focus:ring-purple-500/10 transition-all text-slate-800 font-medium"
                  />
                  <button 
                    onClick={handleSend}
                    className="absolute left-3 w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center hover:scale-105 transition-all shadow-xl active:scale-95"
                  >
                    <svg className="w-6 h-6 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
