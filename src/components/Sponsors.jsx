import React from 'react';
import { motion } from 'framer-motion';

const Sponsors = () => {
  const sponsorTiers = [
    {
      title: "Platinum Sponsors",
      sponsors: [
        { name: "Partner 1", logo: "https://via.placeholder.com/240x120/000000/EB0028?text=Platinum+1" },
        { name: "Partner 2", logo: "https://via.placeholder.com/240x120/000000/EB0028?text=Platinum+2" }
      ]
    },
    {
      title: "Gold Sponsors",
      sponsors: [
        { name: "Partner 3", logo: "https://via.placeholder.com/220x110/000000/EB0028?text=Gold+1" },
        { name: "Partner 4", logo: "https://via.placeholder.com/220x110/000000/EB0028?text=Gold+2" },
        { name: "Partner 5", logo: "https://via.placeholder.com/220x110/000000/EB0028?text=Gold+3" }
      ]
    },
    {
      title: "Silver Sponsors",
      sponsors: [
        { name: "Partner 6", logo: "https://via.placeholder.com/200x100/000000/EB0028?text=Silver+1" },
        { name: "Partner 7", logo: "https://via.placeholder.com/200x100/000000/EB0028?text=Silver+2" },
        { name: "Partner 8", logo: "https://via.placeholder.com/200x100/000000/EB0028?text=Silver+3" },
        { name: "Partner 9", logo: "https://via.placeholder.com/200x100/000000/EB0028?text=Silver+4" }
      ]
    }
  ];

  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Premium Spacing Container */}
      <div className="px-6 py-20 md:px-12 md:py-32 lg:px-20 lg:py-40">
        {/* Content Container with Max Width */}
        <div className="mx-auto max-w-7xl">
          
          {/* Section Header with Generous Bottom Spacing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-20 lg:mb-24 text-center"
          >
            <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Our <span className="text-red-500">Sponsors</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl">
              Partnering with visionary organizations to make ideas worth spreading
            </p>
          </motion.div>

          {/* Sponsor Tiers with Generous Vertical Spacing */}
          <div className="space-y-20 md:space-y-24 lg:space-y-28">
            {sponsorTiers.map((tier, tierIndex) => (
              <div key={tierIndex}>
                
                {/* Tier Title with Bottom Spacing */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-10 text-center text-2xl font-semibold text-gray-400 md:mb-12 md:text-3xl lg:mb-16"
                >
                  {tier.title}
                </motion.h3>
                
                {/* Premium Sponsor Grid with Generous Gaps */}
                <div className={`grid gap-8 md:gap-10 lg:gap-12 xl:gap-16 ${
                  tier.sponsors.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' :
                  tier.sponsors.length === 3 ? 'grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto' :
                  'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                }`}>
                  {tier.sponsors.map((sponsor, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="group relative"
                    >
                      {/* Sponsor Card with Premium Padding */}
                      <div className="relative border border-gray-800 p-8 transition-all duration-500 ease-out md:p-10 lg:p-12 hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/10">
                        
                        {/* Top Red Accent Bar */}
                        <div className="absolute left-0 top-0 h-1 w-0 bg-red-500 transition-all duration-500 ease-out group-hover:w-full"></div>
                        
                        {/* Logo Container with Generous Padding */}
                        <div className="flex items-center justify-center">
                          <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="h-auto w-full max-h-24 object-contain filter grayscale transition-all duration-500 md:max-h-28 lg:max-h-32 group-hover:grayscale-0"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section with Generous Top Spacing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 text-center md:mt-28 lg:mt-32"
          >
            <p className="mb-8 text-lg text-gray-400 md:mb-10 md:text-xl lg:text-2xl">
              Interested in sponsoring TEDxIIMT UNIVERSITY?
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-red-500 px-10 py-4 text-base font-semibold text-red-500 transition-all duration-300 md:px-12 md:py-5 md:text-lg hover:bg-red-500 hover:text-black"
            >
              Become a Sponsor
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Sponsors;
