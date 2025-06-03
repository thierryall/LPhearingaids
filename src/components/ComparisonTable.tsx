import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonTable: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Compare <span className="text-primary">For Yourself</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Claritone stacks up against traditional hearing aids and other over-the-counter options.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-4 px-6 text-left text-lg font-semibold border-b">Feature</th>
                <th className="py-4 px-6 text-center text-lg font-semibold border-b text-primary">Claritone</th>
                <th className="py-4 px-6 text-center text-lg font-semibold border-b">Traditional Hearing Aids</th>
                <th className="py-4 px-6 text-center text-lg font-semibold border-b">Over-the-Counter Devices</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 border-b">Price</td>
                <td className="py-4 px-6 border-b text-center font-medium">
                  <span className="text-green-600 flex items-center justify-center">
                    <span className="mr-2">💲</span> Affordable
                  </span>
                </td>
                <td className="py-4 px-6 border-b text-center font-medium">
                  <span className="text-red-600 flex items-center justify-center">
                    <span className="mr-2">💰</span> $2,000+ per pair
                  </span>
                </td>
                <td className="py-4 px-6 border-b text-center font-medium">
                  <span className="text-yellow-600 flex items-center justify-center">
                    <span className="mr-2">💲💲</span> Moderate
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 border-b">Prescription Required</td>
                <td className="py-4 px-6 border-b text-center">
                  <X className="h-6 w-6 text-green-600 mx-auto" />
                </td>
                <td className="py-4 px-6 border-b text-center">
                  <Check className="h-6 w-6 text-red-600 mx-auto" />
                </td>
                <td className="py-4 px-6 border-b text-center">
                  <X className="h-6 w-6 text-green-600 mx-auto" />
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 border-b">Rechargeable</td>
                <td className="py-4 px-6 border-b text-center">
                  <Check className="h-6 w-6 text-green-600 mx-auto" />
                </td>
                <td className="py-4 px-6 border-b text-center">
                  <X className="h-6 w-6 text-red-600 mx-auto" />
                </td>
                <td className="py-4 px-6 border-b text-center">
                  <span className="text-yellow-600 text-center block">Sometimes</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 border-b">Easy to Use</td>
                <td className="py-4 px-6 border-b text-center font-medium text-green-600">Very</td>
                <td className="py-4 px-6 border-b text-center font-medium text-red-600">Complicated fitting</td>
                <td className="py-4 px-6 border-b text-center font-medium text-yellow-600">Usually</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 border-b">Comfort & Discretion</td>
                <td className="py-4 px-6 border-b text-center">
                  <Check className="h-6 w-6 text-green-600 mx-auto" />
                </td>
                <td className="py-4 px-6 border-b text-center font-medium text-yellow-600">Depends</td>
                <td className="py-4 px-6 border-b text-center font-medium text-red-600">Bulky</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 border-b">Risk-Free Trial</td>
                <td className="py-4 px-6 border-b text-center font-medium text-green-600">120 Days</td>
                <td className="py-4 px-6 border-b text-center font-medium text-red-600">Rarely</td>
                <td className="py-4 px-6 border-b text-center font-medium text-yellow-600">Varies</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;