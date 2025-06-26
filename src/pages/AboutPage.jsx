import React from 'react';
import { Award, Users, Globe, Shield, Star } from 'lucide-react';



 const AboutPage = () => (
  <div className="min-h-screen bg-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About AccessEase
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're on a mission to make the web accessible to everyone, regardless of their abilities
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-6">
            Over 1 billion people worldwide live with disabilities. Yet, 98% of websites fail basic accessibility tests. 
            We believe the internet should be inclusive and accessible to everyone.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            AccessEase was founded to bridge this gap by providing powerful, easy-to-use tools that help developers 
            and businesses create truly accessible web experiences.
          </p>
          <div className="flex items-center space-x-4">
            <Award className="h-8 w-8 text-blue-600" />
            <span className="text-lg font-semibold text-gray-900">WCAG 2.1 AA Compliant</span>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">Impact Stats</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-blue-100">Websites Made Accessible</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">1M+</div>
              <div className="text-blue-100">Users Helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">99%</div>
              <div className="text-blue-100">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="h-12 w-12 text-blue-600" />,
              title: "Inclusion First",
              description: "Every decision we make prioritizes accessibility and inclusion for all users"
            },
            {
              icon: <Globe className="h-12 w-12 text-green-600" />,
              title: "Innovation",
              description: "We constantly push the boundaries of what's possible in web accessibility"
            },
            {
              icon: <Shield className="h-12 w-12 text-purple-600" />,
              title: "Empowerment",
              description: "We empower both users and developers to create better web experiences"
            }
          ].map((value, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Built by Accessibility Experts</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          Our team consists of accessibility consultants, developers with disabilities, and UX researchers 
          who understand the real challenges users face every day.
        </p>
        <div className="flex justify-center space-x-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
            <div className="font-semibold">Certified Experts</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="font-semibold">Diverse Team</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="font-semibold">Global Impact</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage