import React from "react";
import Header from '../components/Header';

const team = [
  { id: 't1', name: 'Ananya Gupta', role: 'Curator', avatar: 'https://i.pravatar.cc/300?img=10' },
  { id: 't2', name: 'Rohit Jain', role: 'Co-Curator', avatar: 'https://i.pravatar.cc/300?img=2' },
  { id: 't3', name: 'Maya Iyer', role: 'Production Lead', avatar: 'https://i.pravatar.cc/300?img=20' },
  { id: 't4', name: 'Dev Patel', role: 'Sponsorship Lead', avatar: 'https://i.pravatar.cc/300?img=22' },
  { id: 't5', name: 'Nisha Khan', role: 'Design Lead', avatar: 'https://i.pravatar.cc/300?img=26' },
  { id: 't6', name: 'Arjun Verma', role: 'Community Lead', avatar: 'https://i.pravatar.cc/300?img=40' },
];

export default function TeamPage() {
  return (
    <div className="min-h-dvh w-full overflow-x-hidden bg-gradient-to-br from-black via-[#1a1a1a] to-red-950 text-white">
      <Header />
      {/* Header Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-4">
            <div className="w-16 h-1 bg-red-600 rounded-full mx-auto"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Meet Our <span className="text-red-500">Team</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Passionate students and mentors working together to craft an unforgettable TEDx experience. 
            Each member brings unique talents and perspectives to create something extraordinary.
          </p>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.id}
                className="group relative bg-white/5 rounded-2xl p-8 text-center backdrop-blur-sm border border-white/10 hover:border-red-500/30 transition-all duration-500 hover:transform hover:scale-105 hover:bg-white/10"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Avatar */}
                <div className="relative z-10">
                  <div className="relative inline-block">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="h-32 w-32 rounded-full object-cover mx-auto border-4 border-white/10 group-hover:border-red-500/50 transition-all duration-500"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Member Info */}
                  <div className="mt-6 space-y-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <div className="text-red-400 font-semibold text-lg tracking-wide">
                      {member.role}
                    </div>
                    <div className="w-12 h-0.5 bg-red-600 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                  </div>
                </div>

                {/* Hover Social Links */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 translate-y-4 group-hover:translate-y-0">
                  <div className="flex space-x-4">
                    {['linkedin', 'twitter', 'email'].map((platform) => (
                      <button
                        key={platform}
                        className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 transform hover:scale-110 border border-white/20"
                        title={platform}
                      >
                        <span className="text-xs font-bold text-white">
                          {platform === 'linkedin' ? 'in' : platform === 'twitter' ? 'X' : '@'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 rounded-3xl p-12 border border-white/10 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Join Our <span className="text-red-500">Team</span>?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals to help us spread ideas worth sharing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </button>
              <button className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}