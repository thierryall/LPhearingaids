import React, { useEffect, useRef } from 'react';
import { Volume2, Battery, Settings, Sliders, Layers, Headphones } from 'lucide-react';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex items-start mb-8 gap-4 group">
    <div className="p-3 rounded-lg bg-primary-light text-primary flex-shrink-0
                   group-hover:-translate-y-1 transition-transform duration-300">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Features: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const featureElements = featuresRef.current?.querySelectorAll('.feature-item');
    featureElements?.forEach(el => {
      el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
      observer.observe(el);
    });

    return () => {
      featureElements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Real Benefits <span className="text-primary">That Matter</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Claritone delivers practical features that make a real difference in your daily life.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2" ref={featuresRef}>
            <div className="feature-item">
              <Feature
                icon={<Volume2 className="h-6 w-6" />}
                title="Crystal-Clear Sound"
                description="Advanced noise reduction focuses on speech, not background noise, making conversations clear again."
              />
            </div>

            <div className="feature-item">
              <Feature
                icon={<Headphones className="h-6 w-6" />}
                title="Discreet & Lightweight"
                description="Sits comfortably behind the ear. Almost invisible design means others won't even notice you're wearing it."
              />
            </div>

            <div className="feature-item">
              <Feature
                icon={<Battery className="h-6 w-6" />}
                title="Rechargeable Battery"
                description="Up to 20 hours of use per charge. No fiddling with tiny batteries ever again."
              />
            </div>

            <div className="feature-item">
              <Feature
                icon={<Sliders className="h-6 w-6" />}
                title="Adjustable Volume"
                description="Easily tailored to your comfort level – no specialist needed."
              />
            </div>

            <div className="feature-item">
              <Feature
                icon={<Settings className="h-6 w-6" />}
                title="Multiple Sound Modes"
                description="4 distinct sound profiles to optimize your hearing in different environments."
              />
            </div>

            <div className="feature-item">
              <Feature
                icon={<Layers className="h-6 w-6" />}
                title="Universal Fit"
                description="Comes with multiple ear tips to ensure comfort for everyone."
              />
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-light rounded-full opacity-40 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-100 rounded-full opacity-40 animate-pulse delay-700"></div>
              <img
                src="https://images.pexels.com/photos/5699424/pexels-photo-5699424.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Close-up of Claritone hearing aid being worn"
                className="rounded-xl shadow-2xl relative z-10 max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;