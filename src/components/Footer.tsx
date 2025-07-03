import React from 'react';
import { Code2, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-teal-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-12 text-gray-300">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-teal-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
                Build3X
              </span>
              <span className="text-sm bg-orange-400/20 text-orange-400 px-2 py-1 rounded-full font-semibold">
                S1
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              An intensive 0-3 week development bootcamp where you'll build real projects, 
              learn from industry experts, and grow your skills in a supportive community.
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Github className="h-5 w-5" />
              </a> */}
              <a href="#" className="text-gray-600 hover:text-teal-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/_build3x/"
              target='_blank' rel="noopener noreferrer"
              aria-label="Instagram"
               className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors">About</a></li>
              <li><a href="#curriculum" className="text-gray-300 hover:text-teal-400 transition-colors">Curriculum</a></li>
              <li><a href="#mentors" className="text-gray-300 hover:text-teal-400 transition-colors">Mentors</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-teal-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a  className="text-gray-400">Coming soon</a></li>
              {/* <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">Technical Requirements</a></li> */}
              <li><a className="text-gray-500">Learning Resources</a></li>
              <li><a className="text-gray-500">Alumni Network</a></li>
              <li><a className="text-gray-500">Code of Conduct</a></li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-teal-400 transition-colors">buildthreex@gmail.com</li>
              <li><a target="_blank" rel="noopener noreferrer"
              href="https://discord.gg/tHxZ4x5xu6" className="text-gray-300 hover:text-teal-400 transition-colors">Discord Community</a></li>
              <li><a target="_blank" rel="noopener noreferrer"
              href="https://chat.whatsapp.com/BjZ3QgyzTX68qSXi4wmmOi" className="text-gray-300 hover:text-teal-400 transition-colors">WhatsApp Community</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Build3X. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;