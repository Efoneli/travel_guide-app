import React from 'react';
import Activities from './components/Activities';
import Booking from './components/Booking';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="">
      <TopBar />
      <Navbar />
      <Hero />
      <Activities />
      <Booking />
    </div>
  );
}

export default App;
