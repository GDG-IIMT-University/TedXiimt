import React from 'react';
import { motion } from 'framer-motion';

const EventInfo = () => {
  return (
    <section className="w-full px-6 py-16 bg-gradient-to-br from-black via-[#1a1a1a] to-red-950/20 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Event <span className="text-red-500">Information</span>
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-red-500/20 to-transparent rounded-2xl p-6 border border-red-500/30 hover:border-red-500/50 transition-colors"
          >
            <h3 className="text-xl font-semibold text-red-500 mb-4">Event Details</h3>
            <div className="space-y-3 text-gray-300">
              <p><span className="text-white font-medium">Event:</span> TEDxIIMT University</p>
              <p><span className="text-white font-medium">Date:</span> Coming Soon</p>
              <p><span className="text-white font-medium">Theme:</span> Ideas Worth Spreading</p>
              <p><span className="text-white font-medium">Time:</span> To be announced</p>
            </div>
          </motion.div>

          {/* Venue Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-gradient-to-br from-red-500/20 to-transparent rounded-2xl p-6 border border-red-500/30 hover:border-red-500/50 transition-colors"
          >
            <h3 className="text-xl font-semibold text-red-500 mb-4">Venue</h3>
            <div className="space-y-3 text-gray-300">
              <p><span className="text-white font-medium">Location:</span> IIMT University</p>
              <p><span className="text-white font-medium">City:</span> Greater Noida, India</p>
              <p><span className="text-white font-medium">Address:</span> Knowledge Park III, Greater Noida</p>
              <p><span className="text-white font-medium">Capacity:</span> To be announced</p>
            </div>
          </motion.div>

          {/* Team Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-gradient-to-br from-red-500/20 to-transparent rounded-2xl p-6 border border-red-500/30 hover:border-red-500/50 transition-colors"
          >
            <h3 className="text-xl font-semibold text-red-500 mb-4">Our Team</h3>
            <div className="space-y-3 text-gray-300">
              <p><span className="text-white font-medium">Organizer:</span> TEDxIIMT Team</p>
              <p><span className="text-white font-medium">University:</span> IIMT University</p>
              <p><span className="text-white font-medium">Contact:</span> tedxiimt@iimt.ac.in</p>
              <p><span className="text-white font-medium">Phone:</span> +91 12345 67890</p>
            </div>
          </motion.div>

        </div>

        {/* Schedule Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 bg-gradient-to-r from-red-500/10 to-transparent rounded-2xl p-8 border border-red-500/20"
        >
          <h3 className="text-2xl font-semibold text-red-500 mb-6 text-center">Event Schedule</h3>
          <div className="text-center text-gray-300">
            <p className="text-lg mb-4">Detailed schedule coming soon!</p>
            <p className="text-sm text-gray-400">
              Our carefully curated program will feature inspiring speakers, interactive sessions, 
              and networking opportunities designed to spark meaningful conversations and connections.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-gray-300 mb-6">
            Be the first to know about speakers, schedule updates, and registration details.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Join Our Mailing List
            </button>
            <button className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Follow Updates
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EventInfo;