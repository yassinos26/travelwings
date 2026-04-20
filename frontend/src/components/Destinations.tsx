import * as React from 'react';
import { MapPin, Star } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Paris, France',
    description: 'City of Light and Romance',
    image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    price: '$589',
    rating: 4.9,
    flights: 'Direct flights available'
  },
  {
    id: 2,
    name: 'Tokyo, Japan',
    description: 'Where tradition meets innovation',
    image: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    price: '$799',
    rating: 4.8,
    flights: 'Daily departures'
  },
  {
    id: 3,
    name: 'Dubai, UAE',
    description: 'Luxury and adventure combined',
    image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    price: '$699',
    rating: 4.7,
    flights: 'Multiple daily flights'
  },
  {
    id: 4,
    name: 'New York, USA',
    description: 'The city that never sleeps',
    image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    price: '$459',
    rating: 4.8,
    flights: 'Hourly departures'
  },
  {
    id: 5,
    name: 'London, UK',
    description: 'Rich history and modern culture',
    image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    price: '$529',
    rating: 4.6,
    flights: 'Direct flights available'
  },
  {
    id: 6,
    name: 'Sydney, Australia',
    description: 'Harbor views and pristine beaches',
    image: 'https://images.pexels.com/photos/1680247/pexels-photo-1680247.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    price: '$1199',
    rating: 4.9,
    flights: 'Daily connections'
  }
];

const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our most loved destinations around the globe. From bustling metropolises to serene getaways, 
            discover your next adventure with unbeatable prices.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div 
              key={destination.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold text-slate-800">{destination.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                <p className="text-gray-200 mb-4">{destination.description}</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-300 mb-1">{destination.flights}</p>
                    <div className="flex items-center space-x-1 text-gray-300">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">Starting from</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">{destination.price}</div>
                    <div className="text-sm text-gray-300">per person</div>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-blue-600/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-900 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;