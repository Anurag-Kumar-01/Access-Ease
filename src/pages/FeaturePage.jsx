import React from 'react';
import { Check, Monitor, Tablet, Smartphone } from 'lucide-react';

// Features Page Component
 const FeaturesPage = () => (
  <div className="min-h-screen bg-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Powerful Accessibility Features
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive tools designed to make any website accessible to users with disabilities
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {[
          {
            category: "Visual Accessibility",
            color: "blue",
            features: [
              "Screen Reader Optimization",
              "High Contrast Mode",
              "Font Size Adjustment",
              "Color Blind Support",
              "Image Alt Text Generation"
            ]
          },
          {
            category: "Motor Accessibility", 
            color: "green",
            features: [
              "Keyboard Navigation",
              "Voice Control",
              "Click Alternatives",
              "Gesture Recognition",
              "Switch Device Support"
            ]
          },
          {
            category: "Cognitive Support",
            color: "purple", 
            features: [
              "Content Simplification",
              "Reading Assistant",
              "Focus Management",
              "Distraction Blocker",
              "Memory Aids"
            ]
          },
          {
            category: "Hearing Accessibility",
            color: "orange",
            features: [
              "Auto Captions",
              "Sign Language Support", 
              "Visual Alerts",
              "Sound Descriptions",
              "Vibration Feedback"
            ]
          }
        ].map((category, index) => (
          <div key={index} className="bg-gray-50 rounded-2xl p-8">
            <h3 className={`text-2xl font-bold mb-6 ${
              category.color === 'blue' ? 'text-blue-600' :
              category.color === 'green' ? 'text-green-600' :
              category.color === 'purple' ? 'text-purple-600' :
              'text-orange-600'
            }`}>
              {category.category}
            </h3>
            <ul className="space-y-4">
              {category.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <Check className={`h-5 w-5 mr-3 ${
                    category.color === 'blue' ? 'text-blue-600' :
                    category.color === 'green' ? 'text-green-600' :
                    category.color === 'purple' ? 'text-purple-600' :
                    'text-orange-600'
                  }`} />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Device Compatibility */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Works On All Devices</h2>
        <div className="flex justify-center items-center space-x-8 mb-8">
          <Monitor className="h-16 w-16 text-gray-300" />
          <Tablet className="h-16 w-16 text-gray-300" />
          <Smartphone className="h-16 w-16 text-gray-300" />
        </div>
        <p className="text-xl text-gray-300">
          Seamless accessibility across desktop, tablet, and mobile platforms
        </p>
      </div>
    </div>
  </div>
);
export default FeaturesPage;