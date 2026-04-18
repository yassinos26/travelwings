import * as React from 'react';
import { Clock, Percent, Gift } from 'lucide-react';

const deals = [
  {
    id: 1,
    title: 'Summer Flash Sale',
    description: 'Save up to 40% on flights to Europe',
    discount: '40% OFF',
    validUntil: '48 hours',
    image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 2,
    title: 'Business Class Upgrade',
    description: 'Complimentary upgrade for bookings over $1000',
    discount: 'FREE',
    validUntil: '7 days',
    image: 'https://images.pexels.com/photos/1309644/pexels-photo-1309644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 3,
    title: 'Weekend Getaway',
    description: 'Special prices for domestic flights',
    discount: '25% OFF',
    validUntil: '3 days',
    image: 'https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    color: 'from-green-500 to-teal-500'
  }
];

const Deals: React.FC = () => {
  return (
    <section id="deals" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Exclusive Deals & Offers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't miss out on these limited-time offers. Book now and save on your next journey 
            to destinations around the world.
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {deals.map((deal) => (
            <div 
              key={deal.id}
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Discount Badge */}
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${deal.color} text-white px-4 py-2 rounded-lg font-bold shadow-lg`}>
                  {deal.discount}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{deal.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{deal.description}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">Valid for {deal.validUntil}</span>
                  </div>
                </div>

                <button className={`w-full bg-gradient-to-r ${deal.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105`}>
                  Claim This Deal
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <Gift className="h-12 w-12 mx-auto mb-4 text-blue-200" />
          <h3 className="text-2xl font-bold mb-2">Never Miss a Deal</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about exclusive offers, flash sales, and travel tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deals;