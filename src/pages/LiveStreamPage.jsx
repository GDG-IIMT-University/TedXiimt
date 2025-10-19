import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LiveStreamPage = () => {
  const [isLive, setIsLive] = useState(false);
  const [viewerCount, setViewerCount] = useState(1247);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: "TechEnthusiast", message: "Amazing talk on AI innovation!", time: "14:23" },
    { id: 2, user: "StudentExplorer", message: "This is exactly what I needed to hear today", time: "14:24" },
    { id: 3, user: "InnovationSeeker", message: "The speaker's perspective is revolutionary", time: "14:25" },
    { id: 4, user: "FutureBuilder", message: "How can we implement these ideas in education?", time: "14:26" },
    { id: 5, user: "ChangeAgent", message: "TEDxIIMT UNIVERSITY always delivers incredible content", time: "14:27" }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [userName, setUserName] = useState('');
  const [isNameSet, setIsNameSet] = useState(false);
  const [activeTab, setActiveTab] = useState('main');
  const chatContainerRef = useRef(null);

  // Simulate live viewer count updates
  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(prev => prev + Math.floor(Math.random() * 10) - 5);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() && isNameSet) {
      const message = {
        id: Date.now(),
        user: userName,
        message: newMessage.trim(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages(prev => [...prev, message]);
      setNewMessage('');
    }
  };

  const handleSetName = (e) => {
    e.preventDefault();
    if (userName.trim()) {
      setIsNameSet(true);
    }
  };

  const streamSchedule = [
    {
      time: "09:00 AM",
      title: "Opening Ceremony",
      speaker: "TEDxIIMT UNIVERSITY Team",
      status: "completed"
    },
    {
      time: "09:30 AM",
      title: "The Future of Sustainable Technology",
      speaker: "Dr. Priya Sharma",
      status: "completed"
    },
    {
      time: "10:15 AM",
      title: "Reimagining Education in the Digital Age",
      speaker: "Prof. Rajesh Kumar",
      status: "live"
    },
    {
      time: "11:00 AM",
      title: "Coffee Break & Networking",
      speaker: "",
      status: "upcoming"
    },
    {
      time: "11:30 AM",
      title: "Social Entrepreneurship: Changing Lives",
      speaker: "Meera Patel",
      status: "upcoming"
    },
    {
      time: "12:15 PM",
      title: "Innovation in Healthcare",
      speaker: "Dr. Arjun Singh",
      status: "upcoming"
    }
  ];

  const streamQuality = [
    { quality: "1080p", label: "HD" },
    { quality: "720p", label: "Standard" },
    { quality: "480p", label: "Mobile" },
    { quality: "Audio Only", label: "Audio" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Header />
      
      <main id="main-content" className="pt-20">
        {/* Live Stream Status Banner */}
        <motion.div
          className={`py-4 ${isLive ? 'bg-red-600' : 'bg-gray-800'} text-center`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4 sm:px-6 flex items-center justify-center space-x-4">
            <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-white animate-pulse' : 'bg-gray-400'}`}></div>
            <span className="font-semibold">
              {isLive ? 'LIVE NOW' : 'STREAM STARTING SOON'} - TEDxIIMT UNIVERSITY 2024
            </span>
            <span className="text-sm opacity-75">
              👥 {viewerCount.toLocaleString()} viewers
            </span>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            
            {/* Main Stream Area - Left Column */}
            <div className="lg:col-span-3 space-y-6">
              
              {/* Video Player */}
              <motion.div
                className="bg-black rounded-xl overflow-hidden aspect-video relative group"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                {/* Placeholder for video stream */}
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">TEDxIIMT UNIVERSITY 2024 Live Stream</h3>
                    <p className="text-gray-400">
                      {isLive ? 'Stream is live - join thousands of viewers worldwide' : 'Stream will begin shortly'}
                    </p>
                  </div>
                </div>
                
                {/* Video Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="text-white hover:text-red-400 transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </button>
                      <button className="text-white hover:text-red-400 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728" />
                        </svg>
                      </button>
                      <span className="text-sm">Live</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <select className="bg-black/50 text-white text-sm rounded px-2 py-1 border border-gray-600">
                        {streamQuality.map(quality => (
                          <option key={quality.quality} value={quality.quality}>
                            {quality.quality} - {quality.label}
                          </option>
                        ))}
                      </select>
                      <button className="text-white hover:text-red-400 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Stream Information */}
              <motion.div
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      Reimagining Education in the Digital Age
                    </h2>
                    <p className="text-red-400 font-semibold">Prof. Rajesh Kumar</p>
                    <p className="text-gray-400 text-sm mt-1">
                      Director of Digital Learning, Indian Institute of Technology
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium">
                      LIVE NOW
                    </div>
                    <p className="text-gray-400 text-sm mt-2">Started 15 minutes ago</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  Exploring how digital transformation is reshaping educational paradigms and creating new opportunities for personalized learning experiences that prepare students for the future workforce.
                </p>

                {/* Stream Actions */}
                <div className="flex items-center space-x-4 mt-6">
                  <motion.button
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    👍 Like (234)
                  </motion.button>
                  <motion.button
                    className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    📤 Share
                  </motion.button>
                  <motion.button
                    className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    🔗 Get Link
                  </motion.button>
                </div>
              </motion.div>

              {/* Tabs for additional content */}
              <div className="bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden">
                <div className="flex border-b border-gray-700/50">
                  {[
                    { id: 'schedule', label: 'Schedule', icon: '📅' },
                    { id: 'speakers', label: 'Speakers', icon: '🎤' },
                    { id: 'resources', label: 'Resources', icon: '📚' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 px-6 py-4 text-sm font-semibold transition-colors ${
                        activeTab === tab.id 
                          ? 'bg-red-600/20 text-red-400 border-b-2 border-red-500' 
                          : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                      }`}
                    >
                      <span className="mr-2">{tab.icon}</span>
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="p-6">
                  <AnimatePresence mode="wait">
                    {activeTab === 'schedule' && (
                      <motion.div
                        key="schedule"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-lg font-bold mb-4">Today's Schedule</h3>
                        <div className="space-y-3">
                          {streamSchedule.map((item, index) => (
                            <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-gray-800/50">
                              <div className="text-sm font-mono text-gray-400 min-w-[70px]">
                                {item.time}
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold">{item.title}</h4>
                                {item.speaker && (
                                  <p className="text-sm text-gray-400">{item.speaker}</p>
                                )}
                              </div>
                              <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                                item.status === 'live' ? 'bg-red-600/20 text-red-400' :
                                item.status === 'completed' ? 'bg-green-600/20 text-green-400' :
                                'bg-gray-600/20 text-gray-400'
                              }`}>
                                {item.status.toUpperCase()}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Right Column - Chat & Social */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Live Chat */}
              <motion.div
                className="bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="p-4 border-b border-gray-700/50">
                  <h3 className="font-bold flex items-center space-x-2">
                    <span>💬</span>
                    <span>Live Chat</span>
                    <span className="text-sm text-gray-400">({viewerCount})</span>
                  </h3>
                </div>

                {/* Chat Messages */}
                <div 
                  ref={chatContainerRef}
                  className="h-80 overflow-y-auto p-4 space-y-3"
                >
                  {chatMessages.map(message => (
                    <div key={message.id} className="text-sm">
                      <div className="flex items-start space-x-2">
                        <span className="text-red-400 font-semibold min-w-fit">
                          {message.user}:
                        </span>
                        <span className="text-gray-300 flex-1">{message.message}</span>
                      </div>
                      <span className="text-xs text-gray-500 ml-2">{message.time}</span>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-gray-700/50">
                  {!isNameSet ? (
                    <form onSubmit={handleSetName} className="space-y-2">
                      <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Enter your name to chat"
                        className="w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-red-500"
                      />
                      <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-sm font-semibold transition-colors"
                      >
                        Join Chat
                      </button>
                    </form>
                  ) : (
                    <form onSubmit={handleSendMessage} className="flex space-x-2">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 px-3 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-red-500"
                      />
                      <button
                        type="submit"
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                      >
                        Send
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Social Media Links */}
              <motion.div
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="font-bold mb-4 flex items-center space-x-2">
                  <span>🌐</span>
                  <span>Follow the Conversation</span>
                </h3>
                
                <div className="space-y-3">
                  {[
                    { platform: 'Twitter', handle: '@TEDxIIMT UNIVERSITY', color: 'text-blue-400' },
                    { platform: 'LinkedIn', handle: 'TEDxIIMT UNIVERSITY', color: 'text-blue-600' },
                    { platform: 'Instagram', handle: '@tedxIIMT UNIVERSITY', color: 'text-pink-400' },
                    { platform: 'YouTube', handle: 'TEDxIIMT UNIVERSITY', color: 'text-red-500' }
                  ].map(social => (
                    <a
                      key={social.platform}
                      href="#"
                      className="flex items-center space-x-3 p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
                    >
                      <span className={social.color}>#{social.platform}</span>
                      <span className="text-gray-300">{social.handle}</span>
                    </a>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700/50">
                  <p className="text-sm text-gray-400 mb-2">Use hashtag:</p>
                  <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-mono">
                    #TEDxIIMT UNIVERSITY2024
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LiveStreamPage;