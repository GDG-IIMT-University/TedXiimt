import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SchedulePage = () => {
  const scheduleItems = [
    {
      time: "8:00 AM",
      title: "Registration & Welcome Coffee",
      description: "Check-in, networking, and light refreshments",
      type: "logistics"
    },
    {
      time: "9:00 AM",
      title: "Opening Ceremony",
      description: "Welcome address and event overview",
      type: "ceremony"
    },
    {
      time: "9:30 AM",
      title: "Keynote: The Future of Innovation",
      speaker: "Dr. Sarah Johnson",
      description: "Exploring breakthrough technologies and their impact on society",
      type: "talk"
    },
    {
      time: "10:00 AM",
      title: "Talk: Sustainable Tomorrow",
      speaker: "Michael Chen",
      description: "Environmental solutions for the next generation",
      type: "talk"
    },
    {
      time: "10:30 AM",
      title: "Coffee Break & Networking",
      description: "Connect with speakers and fellow attendees",
      type: "break"
    },
    {
      time: "11:00 AM",
      title: "Talk: Digital Transformation",
      speaker: "Priya Sharma",
      description: "How technology is reshaping business landscapes",
      type: "talk"
    },
    {
      time: "11:30 AM",
      title: "Performance: Musical Interlude",
      speaker: "Local Artists",
      description: "Inspiring musical performance",
      type: "performance"
    },
    {
      time: "12:00 PM",
      title: "Talk: Education Revolution",
      speaker: "Prof. Rajesh Kumar",
      description: "Reimagining learning for the digital age",
      type: "talk"
    },
    {
      time: "12:30 PM",
      title: "Mystery Speaker",
      speaker: "Special Guest",
      description: "A surprise presentation that will inspire and amaze",
      type: "mystery"
    },
    {
      time: "1:00 PM",
      title: "Networking Lunch",
      description: "Gourmet lunch with structured networking activities",
      type: "break"
    },
    {
      time: "2:30 PM",
      title: "Panel Discussion: Future Leaders",
      speaker: "Multiple Speakers",
      description: "Interactive discussion on leadership in the modern world",
      type: "panel"
    },
    {
      time: "3:30 PM",
      title: "Talk: Creative Innovation",
      speaker: "Artist TBA",
      description: "The intersection of art and technology",
      type: "talk"
    },
    {
      time: "4:00 PM",
      title: "Final Networking & Closing",
      description: "Wrap-up, key takeaways, and continued connections",
      type: "logistics"
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'talk': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'panel': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'performance': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'mystery': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'break': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'ceremony': return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Header />
      
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                Event <span className="text-red-500">Schedule</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                A full day of inspiring talks, networking, and transformative experiences
              </p>
            </motion.div>
          </div>
        </section>

        {/* Schedule Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              {scheduleItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start mb-8 last:mb-0"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Timeline Line */}
                  <div className="absolute left-16 top-8 w-0.5 h-full bg-gray-700 -z-10" />
                  
                  {/* Time */}
                  <div className="flex-shrink-0 w-32 text-right pr-8">
                    <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium inline-block">
                      {item.time}
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-4 h-4 bg-red-500 rounded-full mt-2 relative z-10" />
                  
                  {/* Content */}
                  <div className="flex-1 ml-8">
                    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-red-500/30 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}>
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </span>
                      </div>
                      
                      {item.speaker && (
                        <p className="text-red-400 font-medium mb-2">
                          Speaker: {item.speaker}
                        </p>
                      )}
                      
                      <p className="text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Info */}
        <section className="py-20 bg-gray-800/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Duration",
                  content: "Full day event\n8:00 AM - 4:00 PM",
                  icon: "⏰"
                },
                {
                  title: "Breaks",
                  content: "Multiple networking breaks\nLunch included",
                  icon: "☕"
                },
                {
                  title: "Interactive",
                  content: "Q&A sessions\nNetworking opportunities",
                  icon: "🤝"
                }
              ].map((info, index) => (
                <motion.div
                  key={info.title}
                  className="text-center bg-gray-800/50 rounded-xl p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{info.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                  <p className="text-gray-300 whitespace-pre-line">{info.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Join Us?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't miss this incredible day of inspiration and connection
              </p>
              <motion.a
                href="/join-us/attendee"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 inline-block"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Your Tickets Now
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SchedulePage;