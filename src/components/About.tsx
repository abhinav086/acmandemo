import React from 'react';
import { Award, Users, Globe, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Accman Business School</h2>
          <p className="text-xl text-gray-600">Shaping minds and building futures since 1985</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.shiksha.com/mediadata/images/1491970584phpAOF8tX.jpeg"
              alt="College campus life"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Accman Business College is committed to providing world-class education that empowers students
              to achieve their full potential. Our institution combines academic excellence with
              innovative teaching methods and state-of-the-art facilities.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-sky-400" />
                <div>
                  <h3 className="font-semibold">Excellence</h3>
                  <p className="text-sm text-gray-600">In Education</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Users className="h-8 w-8 text-sky-400" />
                <div>
                  <h3 className="font-semibold">5000+</h3>
                  <p className="text-sm text-gray-600">Students</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Globe className="h-8 w-8 text-sky-400" />
                <div>
                  <h3 className="font-semibold">Global</h3>
                  <p className="text-sm text-gray-600">Recognition</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <BookOpen className="h-8 w-8 text-sky-400" />
                <div>
                  <h3 className="font-semibold">50+</h3>
                  <p className="text-sm text-gray-600">Programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}