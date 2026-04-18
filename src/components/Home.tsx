import * as React from 'react';
import { ArrowRight, Shield, Clock, Award, Link, Locate } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/background.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your Journey
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Begins Here
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Discover the world with premium flights, exceptional service, and unforgettable experiences. 
            Book your next adventure today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1">
              <span className="flex items-center justify-center space-x-2">
                <span>Book Your Flight</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                <Link
                  to="/Flights"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all hover:opacity-90 hover:shadow-xl"
                  style={{ background: "linear-gradient(135deg, #EC4899, #A855F7)" }}
                ></Link>
              </span>
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
              Explore Destinations
              <Locate className="h-5 w-5 inline-block ml-2" />
              <Link
                  to="/Flights"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all hover:opacity-90 hover:shadow-xl"
                  style={{ background: "linear-gradient(135deg, #EC4899, #A855F7)" }}
              ></Link>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-gray-200">
              <Shield className="h-8 w-8 text-blue-400" />
              <div className="text-left">
                <div className="font-semibold">Safe Travel</div>
                <div className="text-sm opacity-80">99.9% Safety Record</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-200">
              <Clock className="h-8 w-8 text-blue-400" />
              <div className="text-left">
                <div className="font-semibold">On-Time</div>
                <div className="text-sm opacity-80">95% Punctuality</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-200">
              <Award className="h-8 w-8 text-blue-400" />
              <div className="text-left">
                <div className="font-semibold">Award Winning</div>
                <div className="text-sm opacity-80">Best Airline 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;