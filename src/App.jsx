import React from 'react';

// Importing components
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Mystery from './components/Mystery';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-black text-white font-sans scroll-smooth">
      {/* Header with logo and navbar */}
      <Header />

      {/* Hero Section with props */}
      <Hero 
        title="Welcome to TEDxIIMT"
        subtitle="Ideas Worth Spreading. Voices That Inspire."
      />

      {/* About Us Section */}
      <AboutUs />

      {/* Mystery Section */}
      <Mystery />

      {/* Sponsors Section */}
      <Sponsors isHomepage={true} />

      {/* Footer with About and Contact */}
      <Footer />
    </div>
  );
};

export default App;
