import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Gallery categories
  const categories = [
    { id: 'all', label: 'All Media' },
    { id: 'videos', label: 'YouTube Videos' },
    { id: 'clips', label: 'Event Clips' },
    { id: 'photos', label: 'Photos' },
    { id: 'highlights', label: 'Highlights' }
  ];

  // YouTube Videos
  const youtubeVideos = [
    {
      id: 'yt1',
      type: 'videos',
      title: 'TEDxIIMT UNIVERSITY 2023 Highlights',
      videoId: 'dQw4w9WgXcQ',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      description: 'Relive the best moments from TEDxIIMT UNIVERSITY 2023',
      date: 'March 2023'
    },
    {
      id: 'yt2',
      type: 'videos',
      title: 'Speaker Talk: Innovation in Education',
      videoId: 'dQw4w9WgXcQ',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      description: 'Full talk on transforming education systems',
      date: 'March 2023'
    },
    {
      id: 'yt3',
      type: 'videos',
      title: 'Behind the Scenes - TEDxIIMT UNIVERSITY',
      videoId: 'dQw4w9WgXcQ',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      description: 'A glimpse into the making of TEDxIIMT UNIVERSITY',
      date: 'April 2023'
    },
    {
      id: 'yt4',
      type: 'videos',
      title: 'Keynote: The Future of Technology',
      videoId: 'dQw4w9WgXcQ',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      description: 'Exploring emerging technologies and their impact',
      date: 'March 2023'
    }
  ];

  // Event Clips
  const eventClips = [
    {
      id: 'clip1',
      type: 'clips',
      title: 'Opening Ceremony',
      thumbnail: '/api/placeholder/800/450',
      videoUrl: '#',
      description: 'TEDxIIMT UNIVERSITY 2023 Opening Ceremony',
      duration: '2:30',
      category: 'highlights'
    },
    {
      id: 'clip2',
      type: 'clips',
      title: 'Audience Reactions',
      thumbnail: '/api/placeholder/800/450',
      videoUrl: '#',
      description: 'Best audience moments and reactions',
      duration: '1:45',
      category: 'highlights'
    },
    {
      id: 'clip3',
      type: 'clips',
      title: 'Networking Session',
      thumbnail: '/api/placeholder/800/450',
      videoUrl: '#',
      description: 'Attendees connecting and sharing ideas',
      duration: '3:15',
      category: 'highlights'
    },
    {
      id: 'clip4',
      type: 'clips',
      title: 'Performance Act',
      thumbnail: '/api/placeholder/800/450',
      videoUrl: '#',
      description: 'Cultural performance during intermission',
      duration: '4:20',
      category: 'highlights'
    }
  ];

  // Photos
  const photos = [
    {
      id: 'photo1',
      type: 'photos',
      title: 'Main Stage Setup',
      image: '/api/placeholder/1200/800',
      description: 'The iconic TEDx red circle on stage',
      category: 'highlights'
    },
    {
      id: 'photo2',
      type: 'photos',
      title: 'Speaker Preparation',
      image: '/api/placeholder/1200/800',
      description: 'Speakers preparing backstage',
      category: 'photos'
    },
    {
      id: 'photo3',
      type: 'photos',
      title: 'Full Auditorium',
      image: '/api/placeholder/1200/800',
      description: 'Packed house at IIMT UNIVERSITY',
      category: 'photos'
    },
    {
      id: 'photo4',
      type: 'photos',
      title: 'Team Photo',
      image: '/api/placeholder/1200/800',
      description: 'The organizing team behind TEDxIIMT UNIVERSITY',
      category: 'photos'
    },
    {
      id: 'photo5',
      type: 'photos',
      title: 'Attendee Engagement',
      image: '/api/placeholder/1200/800',
      description: 'Engaged audience during talk',
      category: 'photos'
    },
    {
      id: 'photo6',
      type: 'photos',
      title: 'Registration Desk',
      image: '/api/placeholder/1200/800',
      description: 'Welcome desk and registration area',
      category: 'photos'
    },
    {
      id: 'photo7',
      type: 'photos',
      title: 'Networking Zone',
      image: '/api/placeholder/1200/800',
      description: 'Attendees networking during break',
      category: 'photos'
    },
    {
      id: 'photo8',
      type: 'photos',
      title: 'Closing Ceremony',
      image: '/api/placeholder/1200/800',
      description: 'Final moments of TEDxIIMT UNIVERSITY 2023',
      category: 'highlights'
    }
  ];

  // Combine all media
  const allMedia = [...youtubeVideos, ...eventClips, ...photos];

  // Filter media based on active filter
  const filteredMedia = activeFilter === 'all' 
    ? allMedia 
    : allMedia.filter(item => {
        if (activeFilter === 'highlights') {
          return item.category === 'highlights' || item.type === 'videos';
        }
        return item.type === activeFilter;
      });

  // Open media modal
  const openMedia = (media) => {
    setSelectedMedia(media);
    document.body.style.overflow = 'hidden';
  };

  // Close media modal
  const closeMedia = () => {
    setSelectedMedia(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main id="main-content" className="pt-24 md:pt-28 lg:pt-32">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-20 lg:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-[#EB0028]/5 to-transparent pointer-events-none"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-6 md:mb-8">
                <div className="h-1 w-20 bg-[#EB0028]"></div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 md:mb-8">
                Event <span className="text-[#EB0028]">Gallery</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed">
                Explore photos, videos, and moments from TEDxIIMT UNIVERSITY events
              </p>
            </motion.div>
          </div>
          
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#EB0028]/30 to-transparent mt-16"></div>
        </section>

        {/* Filter Buttons */}
        <section className="py-8 md:py-12 border-b border-[#1a1a1a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 border-2 font-bold uppercase tracking-wider text-sm transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-[#EB0028] border-[#EB0028] text-white'
                      : 'bg-transparent border-[#1a1a1a] text-gray-400 hover:border-[#EB0028]/50 hover:text-white'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFilter}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                  {filteredMedia.map((media, index) => (
                    <motion.div
                      key={media.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="bg-[#0a0a0a] border-2 border-[#1a1a1a] hover:border-[#EB0028]/50 transition-all duration-300 cursor-pointer group"
                      onClick={() => openMedia(media)}
                    >
                      {/* Thumbnail */}
                      <div className="relative aspect-video overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-[#EB0028]"></div>
                        <img
                          src={media.thumbnail || media.image}
                          alt={media.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.target.src = '/api/placeholder/800/450';
                          }}
                        />
                        
                        {/* Type Badge */}
                        <div className="absolute top-4 right-4 bg-[#EB0028] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
                          {media.type === 'videos' ? 'YouTube' : media.type === 'clips' ? 'Clip' : 'Photo'}
                        </div>

                        {/* Duration Badge for Videos/Clips */}
                        {media.duration && (
                          <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 text-xs font-bold">
                            {media.duration}
                          </div>
                        )}

                        {/* Play Icon Overlay */}
                        {(media.type === 'videos' || media.type === 'clips') && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-16 h-16 border-4 border-white flex items-center justify-center">
                              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-[#EB0028] transition-colors duration-300">
                          {media.title}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                          {media.description}
                        </p>
                        {media.date && (
                          <p className="text-gray-500 text-xs uppercase tracking-wider">
                            {media.date}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Empty State */}
              {filteredMedia.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <div className="h-1 w-16 bg-[#EB0028] mx-auto mb-6"></div>
                  <p className="text-2xl text-gray-400">No media found in this category</p>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Media Modal */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
              onClick={closeMedia}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-6xl bg-[#0a0a0a] border-2 border-[#EB0028]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeMedia}
                  className="absolute top-4 right-4 z-10 w-12 h-12 border-2 border-white hover:border-[#EB0028] bg-black/80 text-white flex items-center justify-center transition-all duration-300"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Media Content */}
                <div className="relative">
                  {selectedMedia.type === 'videos' && (
                    <div className="relative aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${selectedMedia.videoId}?autoplay=1`}
                        title={selectedMedia.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  )}

                  {selectedMedia.type === 'clips' && (
                    <div className="relative aspect-video bg-[#1a1a1a] flex items-center justify-center">
                      <video
                        controls
                        autoPlay
                        className="w-full h-full"
                        poster={selectedMedia.thumbnail}
                      >
                        <source src={selectedMedia.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}

                  {selectedMedia.type === 'photos' && (
                    <div className="relative">
                      <img
                        src={selectedMedia.image}
                        alt={selectedMedia.title}
                        className="w-full h-auto"
                        onError={(e) => {
                          e.target.src = '/api/placeholder/1200/800';
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Media Info */}
                <div className="p-6 md:p-8 border-t-2 border-[#1a1a1a]">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {selectedMedia.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {selectedMedia.description}
                  </p>
                  {selectedMedia.date && (
                    <p className="text-gray-500 text-sm uppercase tracking-wider mt-4">
                      {selectedMedia.date}
                    </p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <section className="py-16 md:py-24 lg:py-32 bg-[#0a0a0a]/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-[#0a0a0a] border-2 border-[#1a1a1a] p-10 md:p-12 lg:p-16">
                <div className="h-1 w-20 bg-[#EB0028] mx-auto mb-8"></div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Be Part of <span className="text-[#EB0028]">TEDxIIMT UNIVERSITY 2024</span>
                </h2>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  Don't miss your chance to experience ideas worth spreading in person. Join us for an unforgettable event.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/join-us/attendee"
                    className="inline-block bg-[#EB0028] hover:bg-[#ff1a3d] text-white font-bold px-8 py-4 text-lg transition-all duration-300"
                  >
                    Get Tickets
                  </a>
                  <a
                    href="/schedule"
                    className="inline-block bg-transparent border-2 border-[#1a1a1a] hover:border-[#EB0028] text-white font-bold px-8 py-4 text-lg transition-all duration-300"
                  >
                    View Schedule
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GalleryPage;
