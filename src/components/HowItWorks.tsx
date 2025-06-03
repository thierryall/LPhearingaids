import React from 'react';
import { ShoppingCart, PackageCheck, Smile } from 'lucide-react';

const steps = [
  {
    icon: <ShoppingCart className="h-6 w-6" />,
    title: 'Order Claritone',
    text: 'Choose your package and place your secure order.'
  },
  {
    icon: <PackageCheck className="h-6 w-6" />,
    title: 'Receive Quickly',
    text: 'We ship within 24 hours. Enjoy free shipping.'
  },
  {
    icon: <Smile className="h-6 w-6" />,
    title: 'Hear Clearly',
    text: 'Put them on, adjust the volume and rediscover conversations.'
  }
];

const HowItWorks: React.FC = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        How <span className="gradient-text">It Works</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mx-auto mb-4">
              {step.icon}
            </div>
            <h3 className="font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;

