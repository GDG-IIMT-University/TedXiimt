import React from 'react';
import { motion } from 'framer-motion';
import mysteryLogo from './mystery-logo.png';




const sponsorsData = [
  {
    name: "XYZ",
    logo: mysteryLogo, // use a dark silhouette or question mark image
    tier: "Title Sponsor",
    mysteryHint: "🔮 The story is yet to be revealed..."
  },
];


const Sponsors = ({ isHomepage = false }) => {
  const displaySponsors = isHomepage ? sponsorsData.slice(0, 4) : sponsorsData;

  return (
    <section className={`w-full px-6 py-16 ${isHomepage ? 'bg-[#0f0f0f]' : 'bg-black'} text-white`}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
        >
          Our <span className="text-red-500">Sponsors</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-300 text-center mb-12 max-w-2xl mx-auto"
        >
          We're grateful to our amazing sponsors who make TEDxIIMT possible and help us spread ideas worth sharing.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {displaySponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-red-500/30 transition-all duration-300 text-center group"
            >
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{sponsor.name}</h3>
              <p className="text-red-500 text-sm font-medium">{sponsor.tier}</p>
            </motion.div>
          ))}
        </div>

        {isHomepage && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href="/sponsors"
              className="inline-flex items-center px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              View All Sponsors
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        )}

        {!isHomepage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-red-500/10 to-transparent rounded-2xl p-8 border border-red-500/20">
              <h3 className="text-2xl font-bold mb-4">Become a Sponsor</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join us in spreading ideas worth sharing. Partner with TEDxIIMT and be part of something extraordinary.
              </p>
              <a
                href="/join-us/sponsor"
                className="inline-flex items-center px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                Partner With Us
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Sponsors;