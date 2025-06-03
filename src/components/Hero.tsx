import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Finally, An Affordable Hearing Aid That
          <span className="gradient-text block mt-2">Actually Works</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Experience crystal-clear sound without the $2,000+ price tag. 
          No prescription needed. Try risk-free for 120 days.
        </p>

        <div className="flex flex-col items-center gap-6 mb-12">
          <button className="btn-primary text-white text-xl font-semibold py-4 px-8 rounded-full w-full max-w-md">
            Get Your Claritone Today
          </button>
          
          <div className="flex items-center gap-2 text-gray-600">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <span>120-Day Money Back Guarantee</span>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 max-w-3xl mx-auto">
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
      </div>
    </section>
  );
};

export default Hero;