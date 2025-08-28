import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sponsors from '../components/Sponsors';

const SponsorsPage = () => {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <Header />
      
      <main className="pt-20">
        <Sponsors isHomepage={false} />
      </main>

      <Footer />
    </div>
  );
};

export default SponsorsPage;