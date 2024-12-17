import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AdmissionBanner from './components/AdmissionBanner';
import About from './components/About';
import Courses from './components/Courses';
import Placements from './components/Placements';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AdmissionBanner />
      <About />
      <Courses />
      <Placements />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;