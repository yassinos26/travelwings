import * as React from 'react';
import { Plane, Facebook, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                SkyWings
              </span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
              Your trusted partner in air travel. We connect you to the world with safety, 
              comfort, and exceptional service. Experience the difference with SkyWings.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/yassinos.mellouli" className="bg-slate-800 p-3 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/yassinee_26mellouli/" className="bg-slate-800 p-3 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/yassine-mellouli-019384281/" className="bg-slate-800 p-3 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@yassinemellouli" className="bg-slate-800 p-3 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/flights" className="text-gray-300 hover:text-white transition-colors duration-200">Book a Flight</a></li>
              <li><a href="/destinations" className="text-gray-300 hover:text-white transition-colors duration-200">Manage Booking</a></li>
              <li><a href="/Deals" className="text-gray-300 hover:text-white transition-colors duration-200">Check-in Online</a></li>
              <li><a href="/Deals" className="text-gray-300 hover:text-white transition-colors duration-200">Travel Insurance</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+216 94411701</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">yassine.250mellouli@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  11 street sirage <br />
                  City Erriadh sousse, Tunisie 4023
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-300 mb-4 md:mb-0">
              © 2025 SkyWings . created by yassine mellouli.
            </div>
            <div className="flex items-center space-x-8">
              <a href="./Privacy_Policy.md" className="text-gray-300 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="./Terms_of_Service.md" className="text-gray-300 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="./Cookie_Policy.md" className="text-gray-300 hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;