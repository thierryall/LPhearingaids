import React from 'react';

const MediaBanner: React.FC = () => (
  <section className="bg-white py-4">
    <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-6">
      <span className="text-sm font-semibold text-gray-500">As seen on</span>
      <img
        src="https://images.unsplash.com/photo-1584959734903-28e8a9a821ac?auto=compress&h=40"
        alt="Health News Network logo"
        className="h-6 w-auto"
      />
      <img
        src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=compress&h=40"
        alt="Daily Tech Review logo"
        className="h-6 w-auto"
      />
      <img
        src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=compress&h=40"
        alt="National Health Journal logo"
        className="h-6 w-auto"
      />
    </div>
  </section>
);

export default MediaBanner;

