import React from 'react';
import { ShieldCheck, Package, Zap } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Special Limited Time Offer
          </h2>
          <p className="text-xl text-gray-600">
            Order today and save over 50% off retail price
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <div className="flex flex-col items-center">
            <div className="text-center mb-8">
              <div className="text-gray-500 line-through text-xl">Regular Price: $797</div>
              <div className="text-4xl font-bold text-primary mt-2">Today Only: $397</div>
              <div className="text-gray-600 mt-2">Save $400 (50% OFF)</div>
            </div>

            <div className="w-full max-w-md space-y-6">
              <button className="btn-primary text-white text-xl font-semibold py-4 px-8 rounded-full w-full">
                Claim Your Discount Now
              </button>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <span>120-Day Money Back Guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <Package className="h-5 w-5 text-primary" />
                  <span>Free Shipping on All Orders</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>Fast Delivery - Ships Within 24 Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-600">
          <p className="mb-4">🔒 Secure 256-bit SSL encrypted checkout</p>
          <p>* Limited time offer. Stock is limited.</p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;