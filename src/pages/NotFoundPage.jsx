import React from 'react';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="text-center z-10 max-w-2xl mx-auto px-4">
        {/* 404 Animation */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 1
          }}
        >
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-4">
            404
          </h1>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Looks like this page went off to spread ideas somewhere else! 
            Don't worry, we'll help you find your way back to inspiring content.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.a
            href="/"
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
        
            <span>Go Home</span>
          </motion.a>
          
          <motion.a
            href="/blog"
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
           
            <span>Read Stories</span>
          </motion.a>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <p className="text-gray-400 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <motion.a
              href="/speakers"
              className="text-red-400 hover:text-red-300 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              Speakers
            </motion.a>
            <motion.a
              href="/sponsors"
              className="text-red-400 hover:text-red-300 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              Sponsors
            </motion.a>
            <motion.a
              href="/join-us/attendee"
              className="text-red-400 hover:text-red-300 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              Get Tickets
            </motion.a>
            <motion.a
              href="/about"
              className="text-red-400 hover:text-red-300 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              About Us
            </motion.a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;