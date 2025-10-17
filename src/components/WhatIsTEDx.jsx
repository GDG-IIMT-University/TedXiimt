import React from 'react';
import { motion } from 'framer-motion';

const WhatIsTEDx = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4">
            <div className="h-1 w-20 bg-[#EB0028] mb-6"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            What is <span className="text-[#EB0028]">TEDx</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            In the spirit of discovering and spreading ideas, TED has created a program called TEDx.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Official TEDx Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#0a0a0a] border border-[#1a1a1a] p-8 md:p-12 mb-12"
          >
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                TEDx is a program of local, self-organized events that bring people together to share 
                a TED-like experience. Our event is called <span className="text-[#EB0028] font-semibold">TEDxIIMT University</span>, 
                where <span className="text-[#EB0028]">x</span> = independently organized TED event.
              </p>
              
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                At our TEDxIIMT University event, TED Talks video and live speakers will combine to spark deep 
                discussion and connection in a small group. The TED Conference provides general guidance 
                for the TEDx program, but individual TEDx events, including ours, are self-organized.
              </p>
              
              <div className="pt-6">
                <a 
                  href="https://www.ted.com/about/programs-initiatives/tedx-program" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#EB0028] hover:text-[#ff1a3d] transition-colors duration-300 font-medium"
                >
                  Learn more about the TEDx program
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* TEDx Global Impact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                TEDx <span className="text-[#EB0028]">Worldwide</span>
              </h3>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { number: "3000+", label: "Events Annually" },
                { number: "180+", label: "Countries" },
                { number: "100M+", label: "Views Online" },
                { number: "1B+", label: "People Reached" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-[#0a0a0a] border border-[#1a1a1a] p-6 md:p-8 text-center hover:border-[#EB0028]/50 transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#EB0028] mb-3">{stat.number}</div>
                  <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Principles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 md:mt-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                TEDx <span className="text-[#EB0028]">Principles</span>
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { title: "Ideas First", desc: "Content matters most" },
                { title: "Diverse Voices", desc: "Multiple perspectives" },
                { title: "Local Focus", desc: "Community-driven topics" },
                { title: "Connection", desc: "Building meaningful networks" }
              ].map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="group bg-[#0a0a0a] border border-[#1a1a1a] p-6 md:p-8 hover:border-[#EB0028]/50 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 h-1 w-0 bg-[#EB0028] group-hover:w-full transition-all duration-500"></div>
                  <div className="relative z-10">
                    <h4 className="text-lg md:text-xl font-bold text-white mb-3">{principle.title}</h4>
                    <p className="text-gray-400 text-sm md:text-base">{principle.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsTEDx;
