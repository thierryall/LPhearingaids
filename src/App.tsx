import React from 'react';
import Header from './components/Header';
import PromoBanner from './components/PromoBanner';
import Hero from './components/Hero';
import MediaBanner from './components/MediaBanner';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import ComparisonTable from './components/ComparisonTable';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      <PromoBanner />
      <Header />
      <main>
        <Hero />
        <MediaBanner />
        <Benefits />
        <HowItWorks />
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

