import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });

  // Event date - Update this to your actual event date
  const eventDate = new Date('2024-12-15T10:00:00');

  // Countdown timer
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = eventDate - now;

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60)
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  // Animation variants optimized for performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: 'easeOut' }
    }
  };

  return (
    <section 
      className="relative w-full min-h-screen bg-black text-white overflow-hidden"
      style={{ 
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
      }}
      aria-label="Hero section"
    >
      {/* Mobile-Responsive Background with Architectural Silhouette */}
      <div className="absolute inset-0 bg-black overflow-hidden">
        {/* Background Image Layer - Full mobile responsiveness */}
        <img 
          src="/transparent-hero-bg.PNG" 
          alt=""
          className="absolute inset-0 
                     w-full h-full
                     object-cover object-center
                     xs:scale-110 xs:object-[center_30%]
                     sm:scale-105 sm:object-[center_40%]
                     md:scale-100 md:object-center
                     lg:scale-100 lg:object-center
                     transition-all duration-700 ease-out
                     will-change-transform"
          style={{
            minWidth: '100%',
            minHeight: '100%',
            maxWidth: 'none'
          }}
          aria-hidden="true"
          onError={(e) => {
            console.error('Hero background image failed to load:', e);
            e.target.style.display = 'none';
          }}
          onLoad={(e) => {
            console.log('✅ Hero background image loaded successfully');
            console.log('Image dimensions:', e.target.naturalWidth, 'x', e.target.naturalHeight);
            console.log('Viewport:', window.innerWidth, 'x', window.innerHeight);
          }}
        />
        
        {/* Responsive Gradient Overlay - Adjusts for different screen sizes */}
        <div className="absolute inset-0 bg-gradient-to-b 
                        from-black/50 via-black/40 to-black/60
                        sm:from-black/45 sm:via-black/35 sm:to-black/55
                        md:from-black/40 md:via-black/30 md:to-black/50
                        lg:from-black/35 lg:via-black/25 lg:to-black/45" />
        
        {/* Additional responsive gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t 
                        from-[#EB0028]/15 via-transparent to-transparent
                        md:from-[#EB0028]/10 md:via-transparent md:to-transparent" />
        
        {/* Subtle animated overlay - respects reduced motion */}
        {!prefersReducedMotion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-gradient-to-t from-[#EB0028]/10 via-transparent to-transparent"
          />
        )}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen py-20">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl"
        >
          {/* Event Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-6 md:mb-8"
          >
            <div className="h-px w-8 bg-[#EB0028]" aria-hidden="true"></div>
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400">
              Independently Organized TED Event
            </span>
            <div className="h-px w-8 bg-[#EB0028]" aria-hidden="true"></div>
          </motion.div>

          {/* Main Title - Enhanced Typography */}
          <motion.h1
            variants={itemVariants}
            className="mb-6 md:mb-8"
          >
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
              <span className="text-[#EB0028]">TED</span>
              <span className="text-[#EB0028] relative">
                x
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#EB0028]" aria-hidden="true"></span>
              </span>
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 md:mt-4 tracking-wide">
              IIMT University
            </span>
          </motion.h1>

          {/* Value Proposition - Enhanced Clarity */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed font-light"
          >
            <span className="text-white font-semibold">Ideas Worth Spreading.</span>
            <br className="hidden sm:block" />
            <span className="block mt-2">
              Experience transformative talks, connect with innovators, and discover perspectives that challenge convention.
            </span>
          </motion.p>

          {/* Countdown Timer - Urgency Element */}
          {countdown.days > 0 && (
            <motion.div
              variants={itemVariants}
              className="mb-8 md:mb-12"
            >
              <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
                Event Starts In
              </p>
              <div className="flex justify-center gap-3 md:gap-6">
                {[
                  { value: countdown.days, label: 'Days' },
                  { value: countdown.hours, label: 'Hours' },
                  { value: countdown.minutes, label: 'Minutes' }
                ].map((item, index) => (
                  <div 
                    key={item.label}
                    className="bg-[#0a0a0a] border-2 border-[#1a1a1a] px-4 py-3 md:px-6 md:py-4 min-w-[70px] md:min-w-[90px]"
                  >
                    <div className="text-2xl md:text-4xl font-bold text-[#EB0028] tabular-nums">
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-500 mt-1">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Call-to-Action Buttons - Enhanced Conversion */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-12"
          >
            <a
              href="https://forms.gle/uwZAyzv84SB1WMo37"
              className="group relative w-full sm:w-auto bg-[#EB0028] hover:bg-[#ff1a3d] text-white font-bold px-8 md:px-12 py-4 md:py-5 text-base md:text-lg transition-all duration-300 overflow-hidden"
              aria-label="Register for TEDxIIMT event"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Your Tickets
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" aria-hidden="true"></div>
            </a>

            <a
              href="/speakers"
              className="group w-full sm:w-auto bg-transparent border-2 border-white hover:border-[#EB0028] hover:bg-[#EB0028]/10 text-white font-bold px-8 md:px-12 py-4 md:py-5 text-base md:text-lg transition-all duration-300"
              aria-label="View TEDxIIMT speakers"
            >
              <span className="flex items-center justify-center gap-2">
                Meet Our Speakers
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </motion.div>

          {/* Social Proof - Trust Signals */}
          <motion.div
            variants={fadeInVariants}
            className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#EB0028]" aria-hidden="true"></div>
              <span className="font-semibold text-white">500+</span>
              <span>Attendees</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-700" aria-hidden="true"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#EB0028]" aria-hidden="true"></div>
              <span className="font-semibold text-white">12+</span>
              <span>Speakers</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-700" aria-hidden="true"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#EB0028]" aria-hidden="true"></div>
              <span className="font-semibold text-white">6 Hours</span>
              <span>of Inspiration</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: [0.4, 1, 0.4],
            y: [0, 8, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <div className="w-6 h-10 border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50"></div>
          </div>
        </motion.div>
      </div>

      {/* Performance optimization: Preload critical resources */}
      <link rel="preload" as="image" href="/hero-background.jpg" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
    </section>
  );
};

export default Hero;
