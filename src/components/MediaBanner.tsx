import React from 'react';

const MediaBanner: React.FC = () => (
  <section className="bg-white py-4">
    <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-6">
      <span className="text-sm font-semibold text-gray-500">As seen on</span>
      <img src="https://via.placeholder.com/100x40?text=TV+1" alt="TV1" className="h-6" />
      <img src="https://via.placeholder.com/100x40?text=TV+2" alt="TV2" className="h-6" />
      <img src="https://via.placeholder.com/100x40?text=TV+3" alt="TV3" className="h-6" />
    </div>
  </section>
);

export default MediaBanner;

