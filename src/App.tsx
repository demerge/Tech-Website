import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Schedule from './components/Schedule/Schedule';
import Speakers from './components/Speakers/Speakers';
import Exhibition from './components/Exhibition/Exhibition';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Schedule />
      <Speakers />
      <Exhibition />
    </div>
  );
}

export default App;