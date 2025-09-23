import React from 'react';

const AboutSection = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Real Sensor Technology</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h3 className="text-2xl font-bold mb-4">Our Story</h3>
          <p className="text-lg text-gray-700 mb-6">
            Real Sensor Technology is a premier technology training institute and consultancy founded in 2008. 
            We bridge the gap between academic knowledge and industry demands through practical, project-based learning.
          </p>
          <img 
            src="https://placehold.co/600x400/0D2B56/FFFFFF?text=Our+Learning+Environment" 
            alt="Our Learning Environment" 
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 text-blue-600">Our Mission</h3>
            <p className="text-gray-700">
              To equip individuals and organizations with cutting-edge technological skills that drive innovation, 
              productivity, and career advancement.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 text-blue-600">Our Vision</h3>
            <p className="text-gray-700">
              To be Africa's leading technology training and consultancy hub — transforming learners into confident, 
              job-ready tech professionals.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 text-blue-600">Our Core Values</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span><strong>Excellence</strong> — We never compromise on quality.</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span><strong>Integrity</strong> — Honest, transparent, and ethical in all we do.</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span><strong>Innovation</strong> — Constantly evolving with tech trends.</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span><strong>Empowerment</strong> — Education as a tool for personal and societal transformation.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
