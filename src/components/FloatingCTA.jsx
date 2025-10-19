import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentCTA, setCurrentCTA] = useState(0);

  // Multiple CTA variations for A/B testing and contextual messaging
  const ctaVariations = [
    {
      primary: "Get Tickets",
      secondary: "Early Bird Pricing",
      urgency: "Limited Time",
      gradient: "from-red-600 to-red-700",
      action: "tickets"
    },
    {
      primary: "Join Waitlist",
      secondary: "Get Notified",
      urgency: "Almost Full",
      gradient: "from-orange-600 to-red-600",
      action: "waitlist"
    },
    {
      primary: "Become Sponsor",
      secondary: "Partner With Us",
      urgency: "Few Slots Left",
      gradient: "from-purple-600 to-red-600",
      action: "sponsor"
    }
  ];

  // Show/hide based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const totalScroll = docHeight - winHeight;
      const progress = scrollTop / totalScroll;
      
      setScrollProgress(progress);
      
      // Show after scrolling 20% of page, hide when near bottom (90%+)
      setIsVisible(scrollTop > 300 && progress < 0.9);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rotate CTA messages based on scroll progress or time
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCTA((prev) => (prev + 1) % ctaVariations.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, []);

  // Smart positioning based on Fitts's Law
  const getOptimalPosition = () => {
    // Large target area, positioned in dominant thumb reach zone for mobile
    // Bottom right for desktop (natural mouse movement)
    return {
      mobile: { bottom: '20px', right: '16px' },
      desktop: { bottom: '32px', right: '32px' }
    };
  };

  const currentVariation = ctaVariations[currentCTA];

  const handleCTAClick = (action) => {
    // Analytics tracking would go here
    console.log(`CTA clicked: ${action}`);
    
    switch(action) {
      case 'tickets':
        // Navigate to ticket purchase
        window.open('#tickets', '_self');
        break;
      case 'waitlist':
        // Open waitlist modal
        window.open('#waitlist', '_self');
        break;
      case 'sponsor':
        // Navigate to sponsorship page
        window.open('#sponsor', '_self');
        break;
      default:
        window.open('#tickets', '_self');
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed z-50 pointer-events-none"
          style={{
            bottom: '32px',
            right: '32px',
            // Responsive positioning
            '@media (max-width: 768px)': {
              bottom: '20px',
              right: '16px'
            }
          }}
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 100 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            duration: 0.6 
          }}
        >
          {/* Progress Ring */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ rotate: -90 }}
            animate={{ rotate: -90 }}
          >
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={`${scrollProgress * 283} 283`}
                initial={{ strokeDasharray: "0 283" }}
                animate={{ strokeDasharray: `${scrollProgress * 283} 283` }}
                transition={{ duration: 0.1 }}
              />
            </svg>
          </motion.div>

          {/* Main CTA Button */}
          <motion.button
            className={`relative pointer-events-auto w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r ${currentVariation.gradient} shadow-2xl flex items-center justify-center text-white font-bold hover:shadow-red-500/25 transition-all duration-300 group`}
            onClick={() => setIsExpanded(!isExpanded)}
            onHoverStart={() => setIsExpanded(true)}
            onHoverEnd={() => setIsExpanded(false)}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 20px 40px rgba(239, 68, 68, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Open quick actions menu"
            // Accessibility: Large touch target (minimum 44px)
            style={{ minWidth: '44px', minHeight: '44px' }}
          >
            {/* Animated Background Pulse */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-red-700 opacity-75"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.75, 0.3, 0.75]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Icon */}
            <motion.span 
              className="relative z-10 text-2xl md:text-3xl"
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isExpanded ? '✕' : currentVariation.icon}
            </motion.span>

            {/* Urgency Indicator */}
            <motion.div
              className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: isExpanded ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {currentVariation.urgency}
            </motion.div>
          </motion.button>

          {/* Expanded Menu */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="absolute bottom-full right-0 mb-4 pointer-events-auto"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Quick Actions Menu */}
                <div className="bg-gray-900/95 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl p-4 min-w-[280px]">
                  {/* Header */}
                  <div className="text-center mb-4">
                    <h3 className="text-white font-bold text-lg mb-1">
                      TEDxIIMT UNIVERSITY 2024
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Transform Your Perspective
                    </p>
                  </div>

                  {/* Primary Actions */}
                  <div className="space-y-3">
                    {ctaVariations.map((cta, index) => (
                      <motion.button
                        key={cta.action}
                        onClick={() => handleCTAClick(cta.action)}
                        className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                          index === currentCTA
                            ? `bg-gradient-to-r ${cta.gradient} text-white shadow-lg`
                            : 'bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white'
                        }`}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        // Fitts's Law: Large, easy-to-click targets
                        style={{ minHeight: '48px' }}
                      >
                        <span className="text-xl">{cta.icon}</span>
                        <div className="flex-1 text-left">
                          <div className="font-semibold text-sm">
                            {cta.primary}
                          </div>
                          <div className="text-xs opacity-75">
                            {cta.secondary}
                          </div>
                        </div>
                        <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                    ))}
                  </div>

                  {/* Secondary Actions */}
                  <div className="border-t border-gray-700/50 mt-4 pt-4">
                    <div className="grid grid-cols-2 gap-3">
                      <motion.button
                        onClick={() => handleCTAClick('info')}
                        className="flex items-center justify-center space-x-2 py-2 px-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-300 hover:text-white transition-colors text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        
                        <span>Info</span>
                      </motion.button>
                      
                      <motion.button
                        onClick={() => handleCTAClick('contact')}
                        className="flex items-center justify-center space-x-2 py-2 px-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-300 hover:text-white transition-colors text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                      
                        <span>Contact</span>
                      </motion.button>
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span>Event Progress</span>
                      <span>{Math.round(scrollProgress * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-red-600 to-red-700 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${scrollProgress * 100}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Arrow pointing to main button */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                  <div className="w-4 h-4 bg-gray-900/95 border-r border-b border-gray-700/50 transform rotate-45" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile-Optimized Quick CTA */}
          <div className="md:hidden">
            <AnimatePresence>
              {!isExpanded && (
                <motion.div
                  className="absolute bottom-full right-0 mb-2 pointer-events-auto"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.button
                    onClick={() => handleCTAClick(currentVariation.action)}
                    className={`bg-gradient-to-r ${currentVariation.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ minHeight: '44px' }} // Accessibility: Minimum touch target
                  >
                    {currentVariation.primary}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;