import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section id="about" className="w-full px-6 py-16 bg-[#0f0f0f] text-white">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* About TEDxIIMT */}
        <div>
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

        {/* About TEDx Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-red-500/10 to-transparent rounded-2xl p-8 border border-red-500/20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-red-500">About TEDx, x = independently organized event</h3>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            In the spirit of discovering and spreading ideas, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)
          </p>
        </motion.div>

        {/* About TED Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-l from-red-500/10 to-transparent rounded-2xl p-8 border border-red-500/20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-red-500">About TED</h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community.
            </p>
            <p>
              TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues. In addition to the TED Talks curated from our annual conferences and published on TED.com, we produce original podcasts, short video series, animated educational lessons (TED-Ed) and TV programs that are translated into more than 100 languages and distributed via partnerships around the world.
            </p>
            <p>
              Each year, thousands of independently run TEDx events bring people together to share ideas and bridge divides in communities on every continent. Through the Audacious Project, TED has helped catalyze more than $3 billion in funding for projects that seek to make the world more beautiful, sustainable and just. In 2020, TED launched Countdown, an initiative to accelerate solutions to the climate crisis and mobilize a movement for a net-zero future, and in 2023 TED launched TED Democracy to spark a new kind of conversation focused on realistic pathways towards a more vibrant and equitable future.
            </p>
            <p className="text-red-400">
              <a href="https://www.ted.com/about/programs-initiatives" target="_blank" rel="noopener noreferrer" className="hover:underline">
                View a full list of TED's many programs and initiatives.
              </a>
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <span className="text-gray-400">Follow TED on:</span>
              <a href="https://www.facebook.com/TED" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 hover:underline">Facebook</a>
              <a href="https://www.instagram.com/ted" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 hover:underline">Instagram</a>
              <a href="https://www.linkedin.com/company/ted-conferences" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 hover:underline">LinkedIn</a>
              <a href="https://www.tiktok.com/@tedtoks" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 hover:underline">TikTok</a>
              <a href="https://twitter.com/tedtalks" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 hover:underline">X</a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;