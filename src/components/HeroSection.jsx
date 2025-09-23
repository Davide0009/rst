import React from 'react';

const HeroSection = ({ scrollToSection }) => (
  <section id="home" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Empowering Futures Through Technology
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
        Hands-on training. Industry-certified instructors. Real-world skills that get you hired.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={() => scrollToSection('admissions')}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
        >
          Apply Now
        </button>
        <button
          onClick={() => scrollToSection('courses')}
          className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
        >
          View Courses
        </button>
      </div>
    </div>
  </section>
);

export default HeroSection;
