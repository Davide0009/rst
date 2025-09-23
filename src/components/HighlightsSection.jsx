import React from 'react';

const HighlightsSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="text-4xl mb-4">🎓</div>
          <h3 className="text-xl font-bold mb-2">16+ Years of Excellence</h3>
          <p className="text-gray-600">Trusted by thousands of students and corporate clients across Nigeria and West Africa.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="text-4xl mb-4">👨‍🏫</div>
          <h3 className="text-xl font-bold mb-2">Expert Instructors</h3>
          <p className="text-gray-600">Learn from certified professionals with real industry experience.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="text-4xl mb-4">💼</div>
          <h3 className="text-xl font-bold mb-2">Career-Ready Skills</h3>
          <p className="text-gray-600">Practical labs, certifications, and job placement support included.</p>
        </div>
      </div>
    </div>
  </section>
);

export default HighlightsSection;
