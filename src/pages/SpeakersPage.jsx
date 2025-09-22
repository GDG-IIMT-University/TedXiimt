import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Speakers from '../components/Speakers';

const SpeakersPage = () => {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <Header />
      
      <main className="pt-20">
        <Speakers isHomepage={false} />
      </main>

      <Footer />
    </div>
  );
};

export default SpeakersPage;
