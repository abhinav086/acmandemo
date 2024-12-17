import React from 'react';
import { GraduationCap, BookOpen, TrendingUp } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Master of Business Administration (MBA)",
      description: "2-year program focusing on advanced business management, leadership, and strategic planning",
      duration: "2 years",
      specializations: "Marketing, Finance, HR, Operations"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Bachelor of Computer Applications (BCA)",
      description: "3-year program covering programming, software development, and IT management",
      duration: "3 years",
      specializations: "Software Development, Web Technologies, Data Science"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Bachelor of Business Administration (BBA)",
      description: "3-year program in business fundamentals, management, and entrepreneurship",
      duration: "3 years",
      specializations: "Finance, Marketing, International Business"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600">Industry-focused programs designed for future leaders</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <div className="text-sky-400 mb-4">{course.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Duration: {course.duration}</p>
                <p className="text-sm text-gray-500">Specializations: {course.specializations}</p>
                <button className="mt-4 text-sky-400 hover:text-sky-500 font-medium">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}