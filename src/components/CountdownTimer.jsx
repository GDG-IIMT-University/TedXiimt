import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CountdownTimer = ({ targetDate = '2025-03-15T10:00:00' }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Gestalt Principle: Similarity - consistent styling for time units
  const TimeUnit = ({ value, label, delay = 0 }) => (
    <motion.div
      className="flex flex-col items-center justify-center bg-gradient-to-br from-red-600/20 to-red-800/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-red-500/30 hover:border-red-500/60 transition-all duration-300 group"
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        type: "spring",
        stiffness: 100 
      }}
      whileHover={{ 
        scale: 1.05,
        y: -5
      }}
      // Fitts's Law: Larger touch targets for better usability
      style={{ minHeight: '100px', minWidth: '80px' }}
    >
      {/* Number with Von Restorff Effect - making numbers stand out */}
      <motion.div
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-400 group-hover:text-red-300 transition-colors leading-none"
        key={value} // Key change triggers animation
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {String(value).padStart(2, '0')}
      </motion.div>
      
      {/* Label with consistent typography */}
      <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-300 group-hover:text-white transition-colors mt-2 font-medium">
        {label}
      </div>
      
      {/* Decorative pulse effect for seconds */}
      {label === 'Seconds' && (
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-red-500/50"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </motion.div>
  );

  if (!isVisible) return null;

  return (
    <section 
      className="relative py-16 sm:py-20 bg-gradient-to-br from-black via-gray-900 to-red-950/20 overflow-hidden"
      // Accessibility
      aria-labelledby="countdown-title"
      role="timer"
    >
      {/* Background Elements - Aesthetic-Usability Effect */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header - Progressive Disclosure */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 
            id="countdown-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          >
            Event Starts <span className="text-red-500">In</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Don't miss out on this transformative experience
          </p>
        </motion.div>

        {/* Countdown Display - Gestalt Principle: Proximity */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          <TimeUnit value={timeLeft.days} label="Days" delay={0.1} />
          <TimeUnit value={timeLeft.hours} label="Hours" delay={0.2} />
          <TimeUnit value={timeLeft.minutes} label="Minutes" delay={0.3} />
          <TimeUnit value={timeLeft.seconds} label="Seconds" delay={0.4} />
        </div>

        {/* Urgency Message - Von Restorff Effect */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-6 py-3 mb-6">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-yellow-400"
            >
              ⚡
            </motion.div>
            <span className="text-yellow-300 font-medium">Limited seats available</span>
          </div>

          {/* CTA Buttons - Fitts's Law compliant sizing */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 min-w-[200px]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              // Accessibility
              aria-label="Get tickets for TEDxIIMT event"
            >
              Get Tickets Now
            </motion.button>
            
            <motion.button
              className="border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 min-w-[200px]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Set reminder for TEDxIIMT event"
            >
              Set Reminder
            </motion.button>
          </div>
        </motion.div>

        {/* Event Details - Additional Context */}
        <motion.div
          className="text-center mt-8 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <p>March 15, 2025 • 10:00 AM • IIMT University, Greater Noida</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownTimer;