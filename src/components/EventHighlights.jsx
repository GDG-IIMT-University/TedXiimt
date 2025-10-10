import React from 'react';
import { motion } from 'framer-motion';

const EventHighlights = () => {
  const highlights = [
    {
      title: "Inspiring Talks",
      description: "Experience powerful 18-minute talks from speakers who challenge perspectives and ignite change"
    },
    {
      title: "Interactive Sessions",
      description: "Engage in thought-provoking discussions and intimate Q&A sessions with renowned speakers"
    },
    {
      title: "Networking Opportunities",
      description: "Connect with innovators, entrepreneurs, and change-makers who share your passion"
    },
    {
      title: "Cultural Performances",
      description: "Enjoy curated artistic performances that blend creativity with meaningful expression"
    },
    {
      title: "Innovation Showcase",
      description: "Discover breakthrough projects and cutting-edge innovations shaping our future"
    },
    {
      title: "Community Building",
      description: "Join a vibrant community of passionate individuals committed to driving positive change"
    }
  ];

  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Premium Spacing Container */}
      <div className="px-6 py-20 md:px-12 md:py-32 lg:px-20 lg:py-40">
        {/* Content Container with Max Width */}
        <div className="mx-auto max-w-6xl">
          
          {/* Section Header with Generous Bottom Spacing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-20 lg:mb-24 text-center"
          >
            <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              What to <span className="text-red-500">Expect</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl">
              A day filled with inspiration, connection, and transformative experiences
            </p>
          </motion.div>

          {/* Premium List with Generous Vertical Spacing */}
          <div className="space-y-8 md:space-y-10 lg:space-y-12">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                {/* Premium List Item with Left Border and Padding */}
                <div className="border-l-4 border-gray-800 pl-8 py-6 transition-all duration-500 ease-out md:pl-10 md:py-8 lg:pl-12 lg:py-10 hover:border-red-500">
                  
                  {/* Title with Generous Bottom Margin */}
                  <h3 className="mb-3 text-2xl font-semibold leading-tight text-white transition-colors duration-300 md:mb-4 md:text-3xl lg:text-4xl group-hover:text-red-500">
                    {highlight.title}
                  </h3>
                  
                  {/* Description with Proper Line Height */}
                  <p className="text-base leading-relaxed text-gray-400 md:text-lg lg:text-xl">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
