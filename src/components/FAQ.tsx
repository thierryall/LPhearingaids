import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200 last:border-0">
    <button
      className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <span className="text-lg font-medium">{question}</span>
      {isOpen ? (
        <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
      ) : (
        <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
      )}
    </button>
    <div 
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
      }`}
    >
      <p className="text-gray-600 leading-relaxed">{answer}</p>
    </div>
  </div>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "Do I need a prescription?",
      answer: "No. Claritone is FDA-registered and designed for adults with mild to moderate hearing loss – no medical visits needed."
    },
    {
      question: "Is it hard to set up?",
      answer: "Not at all. Turn it on, adjust the volume, and enjoy. That's it."
    },
    {
      question: "Will people notice I'm wearing it?",
      answer: "Most won't. The behind-the-ear design is discreet and sleek."
    },
    {
      question: "What if it doesn't work for me?",
      answer: "You have 120 days to try it risk-free. Love it or send it back."
    },
    {
      question: "How long does the battery last?",
      answer: "Up to 20 hours per charge, with easy USB-C recharging."
    },
    {
      question: "Is Claritone covered by insurance?",
      answer: "While some insurance plans may cover part of the cost, Claritone is already priced affordably so most customers choose to purchase it outright rather than deal with insurance paperwork."
    }
  ];
  
  return (
    <section id="faq" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You might be wondering about these common questions.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;