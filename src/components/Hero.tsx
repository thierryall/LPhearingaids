import React from 'react';
import { ShieldCheck, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Finally, An Affordable Hearing Aid That
            <span className="gradient-text block mt-2">Actually Works</span>
          </h1>
          <h2 className="text-lg md:text-xl text-primary font-semibold mb-4">
            Limited Time Offer: Order Today And Save 50%
          </h2>

          <p className="text-xl text-gray-600 mb-6 max-w-xl">
            Experience crystal-clear sound without the $2,000+ price tag. No prescription needed. Try risk-free for 120 days.
          </p>

          <div className="flex justify-center md:justify-start mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-gray-600">Rated 4.8/5 by 50,000+ users</span>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4 mb-8">
            <button className="btn-primary text-white text-xl font-semibold py-4 px-8 rounded-full w-full max-w-md">
              Get Your Claritone Today
            </button>

            <div className="flex items-center gap-2 text-gray-600">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <span>120-Day Money Back Guarantee</span>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="https://images.pexels.com/photos/5699424/pexels-photo-5699424.jpeg"
            alt="Claritone hearing aid"
            className="w-full max-w-sm rounded-xl shadow-xl"
          />
        </div>
      </div>

      <div className="bg-gray-50 rounded-2xl p-8 mt-12 max-w-3xl mx-auto">
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">120</div>
            <div className="text-gray-600">Day Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
