import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUsAndClients from './components/WhyUsAndClients';
import Contact from './components/Contact';
import CursorFollower from './components/CursorFollower';
import ServiceDetail from './components/ServiceDetail';
import { servicesContent } from './data/servicesContent';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'service'>('home');
  const [currentService, setCurrentService] = useState<string | null>(null);

  // Simple client-side routing
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      
      // Check if it's a service detail page
      if (path.startsWith('/service/')) {
        const serviceSlug = path.replace('/service/', '');
        const service = servicesContent.find(s => s.slug === serviceSlug);
        
        if (service) {
          setCurrentService(serviceSlug);
          setCurrentPage('service');
        } else {
          // Service not found, redirect to home
          window.history.pushState({}, '', '/');
          setCurrentPage('home');
          setCurrentService(null);
        }
      } else {
        // Home page
        setCurrentPage('home');
        setCurrentService(null);
      }
    };

    // Initial load
    handleLocationChange();

    // Listen for popstate (browser back/forward)
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Get current service data
  const serviceData = currentService 
    ? servicesContent.find(s => s.slug === currentService)
    : null;

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <CursorFollower />
      <Header />
      
      {currentPage === 'home' ? (
        <main>
          <Hero />
          <About />
          <Services />
          <WhyUsAndClients />
        </main>
      ) : currentPage === 'service' && serviceData ? (
        <main>
          <ServiceDetail service={serviceData} />
        </main>
      ) : null}
      
      <Contact />
    </div>
  );
}

export default App;