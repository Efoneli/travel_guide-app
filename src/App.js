import React from 'react';
import Activities from './components/Activities';
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
    </div>
  );
}

export default App;
