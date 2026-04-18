import * as React from 'react';
import { useState } from 'react';
import { Search, MapPin, Calendar, Users, ArrowRightLeft } from 'lucide-react';

const FlightSearch: React.FC = () => {
  const [tripType, setTripType] = useState('roundtrip');
  const [passengers, setPassengers] = useState(1);

  return (
    <section id="flights" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Find Your Perfect Flight
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Search and compare flights from hundreds of airlines to get the best deals for your journey
          </p>
        </div>

        {/* Flight Search Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-5xl mx-auto">
          {/* Trip Type Selection */}
          <div className="flex flex-wrap gap-4 mb-8">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value="roundtrip"
                checked={tripType === 'roundtrip'}
                onChange={(e) => setTripType(e.target.value)}
                className="sr-only"
              />
              <div className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                tripType === 'roundtrip' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}>
                Round Trip
              </div>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value="oneway"
                checked={tripType === 'oneway'}
                onChange={(e) => setTripType(e.target.value)}
                className="sr-only"
              />
              <div className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                tripType === 'oneway' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}>
                One Way
              </div>
            </label>
          </div>

          {/* Search Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {/* From */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="New York (JFK)"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>
            </div>

            {/* Swap Button */}
            <div className="hidden lg:flex items-end pb-3">
              <button className="p-3 text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 hover:scale-110">
                <ArrowRightLeft className="h-5 w-5" />
              </button>
            </div>

            {/* To */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Los Angeles (LAX)"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>
            </div>

            {/* Departure Date */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Departure</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>
            </div>

            {/* Return Date */}
            {tripType === 'roundtrip' && (
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Return</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  />
                </div>
              </div>
            )}

            {/* Passengers */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={passengers}
                  onChange={(e) => setPassengers(parseInt(e.target.value))}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="text-center">
            <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-1">
              <span className="flex items-center justify-center space-x-2">
                <Search className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                <span>Search Flights</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightSearch;