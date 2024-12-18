import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sky-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Accman Business School</h3>
            <p className="text-sky-100 mb-4">
              Empowering minds, shaping futures, and building tomorrow's leaders.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-sky-100 hover:text-white"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="text-sky-100 hover:text-white"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="text-sky-100 hover:text-white"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="text-sky-100 hover:text-white"><Linkedin className="h-6 w-6" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sky-100 hover:text-white">About Us</a></li>
              <li><a href="#courses" className="text-sky-100 hover:text-white">Courses</a></li>
              <li><a href="#" className="text-sky-100 hover:text-white">Admissions</a></li>
              <li><a href="#" className="text-sky-100 hover:text-white">Campus Life</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sky-100 hover:text-white">Undergraduate</a></li>
              <li><a href="#" className="text-sky-100 hover:text-white">Graduate</a></li>
              <li><a href="#" className="text-sky-100 hover:text-white">Online Learning</a></li>
              <li><a href="#" className="text-sky-100 hover:text-white">Research</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-sky-100" />
                <span className="text-sky-100">Knowledge Park, Greater Noida </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-sky-100" />
                <span className="text-sky-100">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-sky-100" />
                <span className="text-sky-100">info@accmanbusinesscollege.edu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sky-400 mt-12 pt-8 text-center text-sky-100">
          <p>&copy; {new Date().getFullYear()} Accman Business College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}