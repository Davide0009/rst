import React from 'react';

const ConsultingSection = ({ consultingServices, scrollToSection }) => (
  <section id="consulting" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Consulting Services</h2>
        <p className="text-xl text-gray-600">Beyond Training — We Power Your Business with Tech Solutions</p>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {consultingServices.map((service, index) => (
          <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">{service.title}</h3>
            <p className="text-gray-700 mb-6">{service.description}</p>
            <div className="h-px bg-gray-300 my-6"></div>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center"
            >
              Request a Free Consultation
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ConsultingSection;
