import React from 'react';

const AdmissionsSection = ({ courses, formData, handleFormChange, handleSubmit }) => (
  <section id="admissions" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Admissions</h2>
        <p className="text-xl text-gray-600">Start your journey to a rewarding tech career today</p>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">Admission Requirements</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">✓</span>
              <span>Basic computer literacy</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">✓</span>
              <span>Minimum age: 15 years</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">✓</span>
              <span>No prior tech experience required (beginner-friendly)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">✓</span>
              <span>Laptop recommended (available for rent in-lab)</span>
            </li>
          </ul>
          <h3 className="text-2xl font-bold mb-6">Step-by-Step Application Process</h3>
          <div className="space-y-6">
            <div className="flex">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
              <div>
                <h4 className="font-bold">Fill Online Form</h4>
                <p className="text-gray-600">Complete the application form below</p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
              <div>
                <h4 className="font-bold">Attend Free Orientation Session</h4>
                <p className="text-gray-600">Virtual or In-Person (you choose)</p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
              <div>
                <h4 className="font-bold">Pay Registration Fee</h4>
                <p className="text-gray-600">Flexible payment plans available</p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
              <div>
                <h4 className="font-bold">Get Assigned to Class</h4>
                <p className="text-gray-600">Receive your welcome kit and schedule</p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
              <div>
                <h4 className="font-bold">Start Learning!</h4>
                <p className="text-gray-600">Begin your journey to tech mastery</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Apply Now</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Course</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a course</option>
                {courses.map((course, index) => (
                  <option key={index} value={course.title}>{course.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">How did you hear about us?</label>
              <input
                type="text"
                name="heardFrom"
                value={formData.heardFrom}
                onChange={handleFormChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                required
                className="mr-2"
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I agree to Terms & Privacy Policy
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors"
            >
              Submit Application
            </button>
            <p className="text-sm text-gray-600 text-center">
              Applications are reviewed within 24–48 hours. You'll receive an email confirmation and next steps.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default AdmissionsSection;
