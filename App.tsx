
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChatSection from './components/ChatSection';
import Features from './components/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-purple-200 selection:text-purple-900">
      <Navbar />
      <main>
        <Hero />
        <div className="space-y-0">
          <ChatSection />
          <Features />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
