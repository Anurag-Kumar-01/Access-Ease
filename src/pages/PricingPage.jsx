import React from 'react';
import { Check } from 'lucide-react';

export const PricingPage = ({ setCurrentPage }) => (
  <div className="min-h-screen bg-gray-50 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-gray-600">
          Choose the plan that's right for your accessibility needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {[
          {
            name: "Free",
            price: "$0",
            period: "forever",
            description: "Perfect for personal projects",
            features: [
              "Basic accessibility scanner",
              "Up to 5 page scans/month", 
              "Basic contrast checker",
              "Community support",
              "Email notifications"
            ],
            cta: "Get Started",
            popular: false
          },
          {
            name: "Pro",
            price: "$29",
            period: "per month",
            description: "Ideal for small businesses",
            features: [
              "Advanced accessibility tools",
              "Unlimited page scans",
              "Real-time monitoring",
              "Priority support",
              "Custom reporting",
              "API access",
              "Team collaboration",
              "WCAG compliance reports"
            ],
            cta: "Start Free Trial",
            popular: true
          },
          {
            name: "Enterprise",
            price: "$99",
            period: "per month", 
            description: "For large organizations",
            features: [
              "Everything in Pro",
              "White-label solution",
              "Custom integrations",
              "Dedicated support manager",
              "SLA guarantee",
              "Training & onboarding",
              "Advanced analytics",
              "Custom compliance reports"
            ],
            cta: "Contact Sales",
            popular: false
          }
        ].map((plan, index) => (
          <div key={index} className={`bg-white rounded-2xl p-8 shadow-sm ${plan.popular ? 'ring-2 ring-blue-600 relative scale-105' : ''}`}>
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-600">/{plan.period}</span>
              </div>
              <p className="text-gray-600">{plan.description}</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={() => setCurrentPage('signup')}
              className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                plan.popular 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-2xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "Can I change plans anytime?",
              a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
            },
            {
              q: "Is there a free trial?",
              a: "Yes, all paid plans come with a 14-day free trial. No credit card required."
            },
            {
              q: "What payment methods do you accept?",
              a: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans."
            },
            {
              q: "Do you offer discounts for nonprofits?",
              a: "Yes, we offer 50% discount for qualified nonprofit organizations. Contact us for details."
            }
          ].map((faq, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
export default PricingPage