import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-black via-[#1a1a1a] to-red-950 text-white overflow-hidden">
      
      {/* Background 'X' Animation */}
      <motion.div
        initial={{ rotate: 0, scale: 0.8 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 flex justify-center items-center opacity-100 pointer-events-none"
      >
        <div className="text-[30vw] font-extrabold text-white/10 tracking-widest">
          X
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
        >
          <span className="block text-red-600">TEDx</span>
          <span className="block text-white text-2xl md:text-4xl font-medium ml-22">
                IIMT University
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-300 max-w-2xl text-sm md:text-lg mt-4"
        >
          Ideas Worth Spreading — A celebration of voices that matter. 
          Explore innovation, inspiration, and identity.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
