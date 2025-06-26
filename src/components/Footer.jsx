import React from 'react'
import { Accessibility } from 'lucide-react'



const Footer = ({setCurrentPage}) => {

  return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Accessibility className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-xl font-bold">AccessEase</span>
              </div>
              <p className="text-gray-400">
                Making the web accessible for everyone, everywhere.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setCurrentPage('features')}>Features</button></li>
                <li><button onClick={() => setCurrentPage('pricing')}>Pricing</button></li>
                <li>Documentation</li>
                <li>API</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setCurrentPage('about')}>About</button></li>
                <li>Blog</li>
                <li>Careers</li>
                <li><button onClick={() => setCurrentPage('contact')}>Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Community</li>
                <li>Status</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AccessEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer;