// import * as React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FlightSearch from './components/FlightSearch';
import Destinations from './components/Destinations';
import Deals from './components/Deals';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FlightSearch />
      <Destinations />
      <Deals />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;