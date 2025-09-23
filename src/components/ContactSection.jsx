import React from 'react';

const ContactSection = ({ contactFormData, handleContactFormChange, handleContactSubmit }) => (
  <section id="contact" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-xl text-gray-600">We're here to answer your questions and help you get started</p>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={contactFormData.name}
                onChange={handleContactFormChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={contactFormData.email}
                onChange={handleContactFormChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <select
                name="subject"
                value={contactFormData.subject}
                onChange={handleContactFormChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a subject</option>
                <option value="Admissions">Admissions</option>
                <option value="Corporate Training">Corporate Training</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Technical Support">Technical Support</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={contactFormData.message}
                onChange={handleContactFormChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-2">📍 Address</h4>
              <p className="text-gray-700">
                Real Sensor Technology<br />
                123 Tech Avenue, Computer Village<br />
                Ikeja, Lagos, Nigeria
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">📞 Phone</h4>
              <p className="text-gray-700">+234 80X XXX XXXX</p>
              <p className="text-gray-700">+234 90X XXX XXXX</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">✉️ Email</h4>
              <p className="text-gray-700">info@realsensor.tech</p>
              <p className="text-gray-700">admissions@realsensor.tech</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">🗺️ Location</h4>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-600">Google Maps Embed - Ikeja, Lagos location</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">🕒 Office Hours</h4>
              <p className="text-gray-700">Monday–Friday: 9AM–6PM</p>
              <p className="text-gray-700">Saturday: 10AM–4PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
