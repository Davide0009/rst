import React from 'react';

const WhyChooseUsSection = ({ advantages }) => (
  <section id="why" className="py-20 bg-blue-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
        <p className="text-xl text-gray-600">Why thousands of students trust Real Sensor Technology</p>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {advantages.map((advantage, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-blue-600 text-3xl mb-4">🔹</div>
            <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
            <p className="text-gray-700">{advantage.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <div className="text-center">
          <blockquote className="text-xl italic text-gray-700 mb-4">
            "Real Sensor didn't just teach me Photoshop. They taught me how to think like a designer. I got my first job within 2 weeks!"
          </blockquote>
          <cite className="font-semibold text-blue-600">— Tunde A., Graphic Design Graduate</cite>
        </div>
      </div>
            <div className="mt-16 bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <div className="text-center">
          <blockquote className="text-xl italic text-gray-700 mb-4">
            "Real Sensor didn't just teach me Photoshop. They taught me how to think like a designer. I got my first job within 2 weeks!"
          </blockquote>
          <cite className="font-semibold text-blue-600">— Tunde A., Graphic Design Graduate</cite>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
