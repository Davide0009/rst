import React from 'react';

const Footer = ({ scrollToSection }) => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Real Sensor Technology</h3>
          <p className="text-gray-400 mb-4">
            Empowering tech futures since 2008 with hands-on training and industry expertise.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">FB</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">TW</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">IG</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LI</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">YT</a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {['home', 'about', 'courses', 'admissions', 'why', 'consulting', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Courses</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Graphic Design</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Video Editing</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Microsoft Office</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">See All Courses</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Contact</h4>
          <ul className="space-y-2">
            <li className="text-gray-400">+234 80X XXX XXXX</li>
            <li className="text-gray-400">info@realsensor.tech</li>
            <li className="text-gray-400">123 Tech Avenue, Ikeja</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 mt-8">
        <div className="text-center mb-6">
          <p className="text-xl font-bold italic">
            "At Real Sensor Technology, education meets innovation — shaping the next generation of tech professionals with knowledge, skill, and confidence."
          </p>
        </div>
        <div className="text-center text-gray-400">
          <p>&copy; 2025 Real Sensor Technology. All Rights Reserved.</p>
          <p className="mt-1">Empowering Tech Futures Since 2008.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
