import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Mentors from './components/Mentors';
import FAQ from './components/FAQ';
import Registration from './components/Registration';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <Schedule />
      <Mentors />
      <Registration />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;