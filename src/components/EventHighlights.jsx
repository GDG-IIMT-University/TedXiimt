import React from 'react';
import { motion } from 'framer-motion';

const EventHighlights = () => {
  const expectations = [
    "Thought-provoking 18-minute talks from visionary speakers",
    "Intimate conversations with innovators and changemakers",
    "Live performances that blend art with ideas",
    "A community of curious minds and bold thinkers"
  ];

  return (
    <section className="relative bg-black text-white py-24 md:py-32 lg:py-40">
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
        
        {/* Ultra-minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 md:mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
            What to<br />Expect
          </h2>
        </motion.div>

        {/* Engaging Expectation List */}
        <div className="space-y-6 md:space-y-8">
          {expectations.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ x: 10 }}
              className="group relative pl-8 md:pl-10 cursor-pointer"
            >
              {/* Animated accent line */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-0.5 bg-[#EB0028] group-hover:w-6 transition-all duration-300" />
              
              {/* Expectation text with hover effects */}
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 leading-relaxed group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                {text}
              </p>
              
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#EB0028]/0 via-[#EB0028]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EventHighlights;
