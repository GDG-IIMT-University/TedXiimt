import React from 'react';
import { motion } from 'framer-motion';
import miriamPhoto from './Miriam_Chandy.jpg';

const speakersData = [
  {
    name: "Miriam Chandy Menacherry",
    photo: miriamPhoto,
    title: "National Award-Winning Documentary Filmmaker",
    bio: "Founder of Filament Pictures. Miriam's documentaries, including 'From the Shadows' and 'The Rat Race,' have received international acclaim for shedding light on untold stories.",
    hint: "🔮 Stay tuned for more insights!"
  }
];

const Speakers = ({ isHomepage = false }) => {
  const displaySpeakers = isHomepage ? speakersData.slice(0, 4) : speakersData;
  const isSingleSpeaker = displaySpeakers.length === 1;

  return (
    <section className={`w-full px-6 py-20 ${isHomepage ? 'bg-[#0f0f0f]' : 'bg-black'} text-white relative`}>
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Our <span className="text-red-500">Speakers</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-300 mb-16 max-w-2xl mx-auto text-lg"
        >
          Meet the brilliant minds sharing their ideas and experiences at TEDxIIMT.
        </motion.p>

        <div className={`grid gap-12 ${isSingleSpeaker ? 'justify-center' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
          {displaySpeakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 hover:border-red-500/40 transition-all duration-300 text-center shadow-lg ${
                isSingleSpeaker ? 'max-w-xl mx-auto' : ''
              }`}
            >
              {/* Spotlight Glow */}
              {isSingleSpeaker && (
                <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent rounded-3xl blur-3xl -z-10"></div>
              )}

              <div className="mb-6 w-52 h-52 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-red-500/30">
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{speaker.name}</h3>
              <p className="text-red-500 text-lg font-semibold mb-4">{speaker.title}</p>
              <p className="text-gray-300 text-base mb-4">{speaker.bio}</p>
              <p className="text-gray-500 text-sm italic">{speaker.hint}</p>
            </motion.div>
          ))}
        </div>

        {isHomepage && displaySpeakers.length > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href="/speakers"
              className="inline-flex items-center px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full transition-colors duration-300 shadow-lg"
            >
              View All Speakers
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Speakers;
