import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "I didn't realize how much I was missing until I tried Claritone. Now I can hear my grandkids clearly again!",
      author: "James R.",
      age: 67,
      location: "Florida",
      rating: 5
    },
    {
      quote: "Much better than my old $2,000 hearing aids and so much more comfortable to wear.",
      author: "Barbara H.",
      age: 72,
      location: "Texas",
      rating: 5
    },
    {
      quote: "Easy to use and no doctor visits needed. These hearing aids changed my life.",
      author: "Steve D.",
      age: 63,
      location: "California",
      rating: 5
    },
    {
      quote: "The sound quality is fantastic and the price can't be beat.",
      author: "Linda W.",
      age: 58,
      location: "New York",
      rating: 5
    },
    {
      quote: "I was skeptical at first but Claritone really works. Highly recommended!",
      author: "Paul T.",
      age: 70,
      location: "Ohio",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Real People, Real <span className="gradient-text">Results</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-card bg-gray-50 p-6 rounded-xl"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-4">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="text-gray-600">
                <div className="font-semibold">{testimonial.author}</div>
                <div>{testimonial.age}, {testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
