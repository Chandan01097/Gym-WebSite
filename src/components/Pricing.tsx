import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: 29,
      period: 'month',
      description: 'Perfect for getting started',
      features: [
        'Gym access during peak hours',
        'Basic equipment usage',
        'Locker room access',
        'Monthly fitness assessment',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Premium',
      price: 59,
      period: 'month',
      description: 'Most popular choice',
      features: [
        '24/7 gym access',
        'All equipment & facilities',
        'Group fitness classes',
        'Personal training session (1/month)',
        'Nutrition consultation',
        'Guest passes (2/month)',
        'Mobile app access'
      ],
      popular: true
    },
    {
      name: 'Elite',
      price: 99,
      period: 'month',
      description: 'Ultimate fitness experience',
      features: [
        'Everything in Premium',
        'Unlimited personal training',
        'Recovery services access',
        'Exclusive member events',
        'Priority class booking',
        'Unlimited guest passes',
        'Nutrition meal planning',
        'Wellness coaching'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-red-600">Membership</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible membership options designed to fit your lifestyle and budget. 
            All plans include our commitment to your success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-8 ${
              plan.popular ? 'ring-2 ring-red-600 scale-105' : ''
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                plan.popular 
                  ? 'bg-red-600 text-white hover:bg-red-700' 
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All memberships include a 7-day free trial. No commitment required.
          </p>
          <p className="text-sm text-gray-500">
            * Prices may vary based on location. Contact us for corporate and student discounts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;