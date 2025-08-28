import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section id="about" className="w-full px-6 py-16 bg-[#0f0f0f] text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
        >
          About <span className="text-red-500">TEDxIIMT</span>
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              TEDxIIMT is an independently organized TED event hosted at IIMT University, 
              bringing together brilliant minds, innovative thinkers, and passionate changemakers 
              to share ideas worth spreading.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our mission is to foster a community of curious individuals who believe in the 
              power of ideas to transform lives, inspire action, and create positive change in 
              our world. Through carefully curated talks, we aim to spark conversations that matter.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex-1 min-w-[200px]">
                <h3 className="text-red-500 font-semibold mb-2">Innovation</h3>
                <p className="text-gray-400 text-sm">Showcasing groundbreaking ideas and technologies</p>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex-1 min-w-[200px]">
                <h3 className="text-red-500 font-semibold mb-2">Inspiration</h3>
                <p className="text-gray-400 text-sm">Stories that motivate and drive positive change</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-red-500/20 to-transparent rounded-2xl p-8 border border-white/10">
              <div className="text-center space-y-6">
                <div className="text-6xl font-bold text-red-500">TEDx</div>
                <div className="text-2xl font-light text-white">IIMT University</div>
                <p className="text-gray-300 italic">Ideas Worth Spreading</p>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500"></div>
                    <div className="text-xs text-gray-400">Speakers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500"></div>
                    <div className="text-xs text-gray-400">Attendees</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500"></div>
                    <div className="text-xs text-gray-400">Events</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;