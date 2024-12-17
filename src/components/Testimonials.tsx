import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Nikita",
      role: "Computer Science Graduate '23",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      quote: "The faculty and resources at Excellence College helped me land my dream job at a top tech company.",
    },
    {
      name: "Abhinav",
      role: "Business Major",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      quote: "The practical approach to business education gave me real-world experience while studying.",
    },
    {
      name: "Emily",
      role: "Arts & Design Student",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      quote: "The creative environment and supportive community helped me grow as an artist.",
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Testimonials</h2>
          <p className="text-xl text-gray-600">Hear from our successful students and alumni</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}