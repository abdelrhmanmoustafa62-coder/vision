import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUsAndClients from './components/WhyUsAndClients';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUsAndClients />
      </main>
      <Contact />
    </div>
  );
}

export default App;