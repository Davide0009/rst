import React from 'react';

const CoursesSection = ({ courses, scrollToSection }) => (
  <section id="courses" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Courses & Programs</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose your path. Master your craft. Launch your career.
        </p>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <div className="text-4xl mb-4">{course.icon}</div>
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-blue-600 font-medium mb-3">{course.subtitle}</p>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <div className="flex justify-between items-center pt-4 border-t">
                <span className="text-sm font-medium text-gray-600">Duration: {course.duration}</span>
                <span className="text-sm font-medium text-blue-600">{course.certification}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <button
          onClick={() => scrollToSection('admissions')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
        >
          Book a Free Career Consultation
        </button>
      </div>
    </div>
  </section>
);

export default CoursesSection;
