import React from 'react';
import { ArrowRight, Play, Eye, Zap, Settings, Users,Shield } from 'lucide-react';

// Home Page Component
 const HomePage = ({ setCurrentPage }) => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Make The Web <span className="text-yellow-300">Accessible</span> For Everyone
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Empower users with disabilities to navigate websites seamlessly with our AI-powered accessibility tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setCurrentPage('signup')}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 flex items-center justify-center"
              >
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" /> Watch Demo
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center">
                  <Eye className="h-5 w-5 text-blue-600 mr-3" />
                  <span>Screen Reader Compatible</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-5 w-5 text-green-600 mr-3" />
                  <span>Voice Navigation Enabled</span>
                </div>
                <div className="flex items-center">
                  <Settings className="h-5 w-5 text-purple-600 mr-3" />
                  <span>Custom Accessibility Controls</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Features Preview */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Accessibility Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our suite of tools ensures websites are accessible to users with various disabilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Eye className="h-12 w-12 text-blue-600" />,
              title: "Visual Accessibility",
              description: "Screen readers, high contrast modes, and font size adjustments"
            },
            {
              icon: <Users className="h-12 w-12 text-green-600" />,
              title: "Motor Accessibility",
              description: "Keyboard navigation, voice controls, and click alternatives"
            },
            {
              icon: <Shield className="h-12 w-12 text-purple-600" />,
              title: "Cognitive Support",
              description: "Content simplification, reading assistance, and focus management"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Make Your Website Accessible?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of websites already using AccessEase to provide inclusive experiences
        </p>
        <button 
          onClick={() => setCurrentPage('pricing')}
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 text-lg"
        >
          View Pricing Plans
        </button>
      </div>
    </section>
  </div>
);
export default HomePage