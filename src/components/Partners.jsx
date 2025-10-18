import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    {
      category: "Title Sponsor",
      partners: [
        { name: "Tech Innovators Inc", logo: "/api/placeholder/200/100", type: "title" }
      ]
    },
    {
      category: "Gold Sponsors",
      partners: [
        { name: "Digital Solutions Ltd", logo: "/api/placeholder/150/80" },
        { name: "Future Systems", logo: "/api/placeholder/150/80" }
      ]
    },
    {
      category: "Silver Sponsors",
      partners: [
        { name: "Innovation Hub", logo: "/api/placeholder/120/70" },
        { name: "Startup Accelerator", logo: "/api/placeholder/120/70" },
        { name: "Tech Foundation", logo: "/api/placeholder/120/70" }
      ]
    },
    {
      category: "Community Partners",
      partners: [
        { name: "Local Business Network", logo: "/api/placeholder/100/60" },
        { name: "Student Association", logo: "/api/placeholder/100/60" },
        { name: "Innovation Society", logo: "/api/placeholder/100/60" },
        { name: "Entrepreneur Club", logo: "/api/placeholder/100/60" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Our <span className="text-red-500">Partners</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're grateful to our amazing partners who make TEDxIIMT UNIVERSITY possible and help us spread ideas worth spreading.
          </p>
        </motion.div>

        <div className="space-y-12">
          {partners.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-center mb-8 text-red-400">
                {category.category}
              </h3>
              
              <div className={`flex flex-wrap justify-center items-center gap-8 ${
                category.category === "Title Sponsor" ? "mb-12" : 
                category.category === "Gold Sponsors" ? "gap-12" : 
                category.category === "Silver Sponsors" ? "gap-8" : "gap-6"
              }`}>
                {category.partners.map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 ${
                      category.category === "Title Sponsor" ? "w-80 h-40" :
                      category.category === "Gold Sponsors" ? "w-64 h-32" :
                      category.category === "Silver Sponsors" ? "w-48 h-28" : "w-40 h-24"
                    }`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      boxShadow: "0 20px 40px rgba(239, 68, 68, 0.1)"
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="max-w-full max-h-full object-contain filter brightness-110 hover:brightness-125 transition-all duration-300"
                      />
                    </div>
                    <div className="mt-3 text-center">
                      <p className="text-gray-300 text-sm font-medium">{partner.name}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnership CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-2xl p-8 border border-red-500/30 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Become a Partner</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our mission to spread ideas worth spreading. Partner with TEDxIIMT UNIVERSITY and connect 
              with a community of innovators, entrepreneurs, and change-makers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/sponsors"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>🤝</span>
                <span>Partner With Us</span>
              </motion.a>
              
              <motion.a
                href="/community-partners"
                className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>🌟</span>
                <span>View All Partners</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;