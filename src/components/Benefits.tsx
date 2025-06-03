import React from 'react';
import { Check } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    "Crystal-clear conversations with loved ones",
    "No prescription or doctor visits needed",
    "Rechargeable battery - no tiny batteries to replace",
    "Comfortable, nearly invisible design",
    "Easy volume adjustment",
    "Advanced noise reduction technology",
    "Works right out of the box",
    "Universal fit with multiple ear tips"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why People Love <span className="gradient-text">Claritone</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="bg-primary/10 rounded-full p-1 flex-shrink-0">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;