import { useState } from 'react';
import { Menu, X, Plane } from 'lucide-react';
import { Link } from 'react-router';

const Navbar= () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg">
              <Plane className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              SkyWings
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/home" className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Home
              </Link>
              <Link to="/flights" className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Flights
              </Link>
              <Link to="/destinations" className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Destinations
              </Link>
              <Link to="/deals" className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Deals
              </Link>
              <Link to="/about" className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                About
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <Link to="/home" className="block px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Home
              </Link>
              <Link to="/flights" className="block px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Flights
              </Link>
              <Link to="/destinations" className="block px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Destinations
              </Link>
              <Link to="/deals" className="block px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Deals
              </Link>
              <Link to="/about" className="block px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                About
              </Link>
              <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200">
                Sign In
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;