import * as React from 'react';
import { Star, Quote } from 'lucide-react';

const About = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    content: 'Absolutely incredible service! The booking process was seamless and the flight was comfortable. Will definitely book with SkyWings again.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Singapore',
    content: 'Best airline experience I\'ve ever had. The staff was professional, the plane was modern, and the prices were unbeatable.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
  },
  {
    id: 3,
    name: 'Emma Williams',
    location: 'London, UK',
    content: 'SkyWings made my dream vacation possible with their amazing deals. The customer service team went above and beyond to help me.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join millions of satisfied travelers who have chosen SkyWings for their journeys. 
            Read their stories and experiences.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {About.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative"
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-blue-200 mb-4" />
              
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">2M+</div>
            <div className="text-gray-600 font-medium">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">150+</div>
            <div className="text-gray-600 font-medium">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Daily Flights</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">4.8★</div>
            <div className="text-gray-600 font-medium">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;