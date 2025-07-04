import React from 'react';
import { Mail, MessageCircle, MapPin, MessageCircleMore } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in <span className="bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about Build3X Season 1? Need help with your application? Our team is here to support you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-teal-400/30 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-teal-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-teal-400 hover:text-teal-300 transition-colors">buildthreex@gmail.com</p>

                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MessageCircle className="h-6 w-6 text-orange-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Discord Community</h4>
                    <p className="text-gray-300">Join our Discord for community support</p>
                    <a href="https://discord.com/invite/JDSQvchS"
                      target='_blank'
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:text-teal-300 transition-colors">
                      discord.gg/tHxZ4x5xu6
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MessageCircleMore className="h-6 w-6 text-teal-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Whatsapp Support</h4>
                    <a href="https://chat.whatsapp.com/BjZ3QgyzTX68qSXi4wmmOi"
                      target='_blank'
                      rel="noopener noreferrer"
                    className="text-teal-400 hover:text-teal-300 transition-colors">Build3X</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-orange-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Virtual Bootcamp</h4>
                    <p className="text-gray-300">Accessible from anywhere in the world</p>
                    <p className="text-gray-400 text-sm">All sessions in UTC timezone</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-teal-400/30 h-full flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-teal-400 focus:outline-none transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-teal-400 focus:outline-none transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-teal-400 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">Subject</label>
                <select className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-teal-400 focus:outline-none transition-colors">
                  <option value="">Select a topic</option>
                  <option value="application">Application Help</option>
                  <option value="technical">Technical Questions</option>
                  <option value="curriculum">Curriculum Inquiry</option>
                  <option value="general">General Information</option>
                  <option value="partnership">Partnership Opportunity</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-teal-400 focus:outline-none transition-colors"
                  placeholder="How can we help you with Build3X Season 1?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-400 to-orange-400 text-black py-3 rounded-lg font-semibold hover:from-teal-300 hover:to-orange-300 transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Support Hours */}
        {/* <div className="mt-16 text-center">
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-teal-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">Support Hours</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-teal-400 font-semibold mb-2">Pre-Bootcamp</h4>
                <p className="text-gray-300">Mon-Fri: 9 AM - 6 PM GMT+5:30</p>
              </div>
              <div>
                <h4 className="text-orange-400 font-semibold mb-2">During Bootcamp</h4>
                <p className="text-gray-300">Extended hours + Discord support</p>
              </div>
              <div>
                <h4 className="text-teal-400 font-semibold mb-2">Post-Bootcamp</h4>
                <p className="text-gray-300">Career support available</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;