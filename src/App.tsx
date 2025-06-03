import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import ComparisonTable from './components/ComparisonTable';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Features />
        <Testimonials />
        <ComparisonTable />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;