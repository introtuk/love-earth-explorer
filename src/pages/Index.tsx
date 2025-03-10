
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Issues from '../components/Issues';
import TreeCalculator from '../components/TreeCalculator';
import TakeAction from '../components/TakeAction';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "LOVE EARTH - Environmental Awareness";
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Account for navbar
          behavior: 'smooth'
        });
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Issues />
        <TreeCalculator />
        <TakeAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
