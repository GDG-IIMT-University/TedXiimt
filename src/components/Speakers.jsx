import React from 'react';
import miriamPhoto from './Miriam_Chandy.jpg';

const speakersData = [
  {
    name: "Miriam Chandy Menacherry",
    photo: miriamPhoto,
    title: "National Award-Winning Documentary Filmmaker",
    bio: "Founder of Filament Pictures. Miriam's documentaries have received international acclaim for shedding light on untold stories.",
    category: "Film & Storytelling"
  }
  // Add more speakers here
];

const Speakers = ({ isHomepage = false }) => {
  const displaySpeakers = isHomepage ? speakersData.slice(0, 3) : speakersData;

  return (
    <section className={`w-full px-6 py-20 ${isHomepage ? 'bg-black' : 'bg-gradient-to-br from-black via-[#0a0a0a] to-red-950'} text-white`}>
      <div className="max-w-6xl mx-auto">
        {/* Header - Minimal like TEDx Amsterdam */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
            OUR <span className="font-bold">SPEAKERS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            TEDxIIMT invites speakers to inspire with powerful stories. Each year, a new theme sparks inspiration and ideas.
          </p>
        </div>

        {/* Speakers Grid - Minimal dots and clean layout */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {displaySpeakers.map((speaker, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-start group">
              {/* Dot indicator */}
              <div className="flex-shrink-0 w-4 h-4 bg-red-600 rounded-full mt-4 md:mt-6"></div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Speaker Image - Square instead of circle */}
                  <div className="w-32 h-32 flex-shrink-0 overflow-hidden">
                    <img
                      src={speaker.photo}
                      alt={speaker.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  
                  {/* Speaker Info */}
                  <div className="flex-1">
                    <div className="mb-2">
                      <span className="text-red-500 text-sm font-medium uppercase tracking-wide">
                        {speaker.category}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      {speaker.name}
                    </h3>
                    <p className="text-red-400 text-lg font-semibold mb-3">
                      {speaker.title}
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      {speaker.bio}
                    </p>
                    
                    {/* Learn More Link */}
                    <button className="mt-4 text-white hover:text-red-400 font-medium transition-colors duration-300 flex items-center gap-2">
                      Learn more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button - Only on homepage */}
        {isHomepage && speakersData.length > 3 && (
          <div className="text-center mt-16">
            <a
              href="/speakers"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold"
            >
              View All Speakers
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Speakers;