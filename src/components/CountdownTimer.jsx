import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = ({ targetDate = '2025-11-11T10:00:00' }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
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
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Analog-inspired circular progress ring matching the black theme
  const CircularTimer = ({ value, max, label, delay = 0, index }) => {
    // Responsive radius - smaller on mobile
    const radiusMobile = 45;      // Mobile
    const radiusTablet = 55;      // Tablet
    const radiusDesktop = 65;     // Desktop
    
    // Use desktop radius for calculations (SVG viewport handles scaling)
    const radius = 65;
    const circumference = 2 * Math.PI * radius;
    const progress = (value / max) * circumference;
    const offset = circumference - progress;
    
    // Alternating colors for visual interest
    const isRed = index % 2 === 0;
    const color = isRed ? "#EB0028" : "#FFFFFF";

    return (
      <div className="relative flex flex-col items-center group flex-shrink-0">
        {/* SVG Circle - Analog clock inspiration - Better mobile sizing */}
        <div className="relative w-20 h-20 xs:w-24 xs:h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44">
          <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 176 176">
            {/* Outer glow ring */}
            <circle
              cx="50%"
              cy="50%"
              r={radius + 5}
              stroke={color}
              strokeWidth="0.5"
              fill="none"
              opacity="0.1"
            />
            
            {/* Background track */}
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              stroke="#333333"
              strokeWidth="2"
              fill="none"
              opacity="0.3"
            />
            
            {/* Clock markers (12 dots) - inspired by rangoli */}
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30 - 90) * (Math.PI / 180);
              const dotRadius = radius + 8;
              const x = 88 + dotRadius * Math.cos(angle);
              const y = 88 + dotRadius * Math.sin(angle);
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="1.5"
                  fill={color}
                  opacity="0.4"
                />
              );
            })}
            
            {/* Progress circle with smooth continuous animation */}
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              stroke={color}
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{
                filter: `drop-shadow(0 0 8px ${color}40)`,
                transition: 'stroke-dashoffset 1s linear',
                willChange: 'stroke-dashoffset'
              }}
            />
            
            {/* Inner decorative circle */}
            <circle
              cx="50%"
              cy="50%"
              r={radius - 10}
              stroke={color}
              strokeWidth="0.5"
              fill="none"
              opacity="0.15"
            />
          </svg>

          {/* Center content - number display - completely stable, no flickering */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight"
              style={{ 
                color, 
                fontVariantNumeric: 'tabular-nums',
                fontFeatureSettings: '"tnum"',
                willChange: 'contents'
              }}
            >
              {String(value).padStart(2, '0')}
            </span>
          </div>

          {/* Hover effect - subtle pulse */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle, ${color}10, transparent 70%)`
            }}
          />
        </div>

        {/* Label with elegant spacing */}
        <p 
          className="mt-1.5 xs:mt-2 sm:mt-3 md:mt-4 text-[0.6rem] xs:text-[0.65rem] sm:text-xs md:text-sm tracking-[0.15em] xs:tracking-[0.2em] sm:tracking-[0.25em] uppercase font-light"
          style={{ color: `${color}CC` }}
        >
          {label}
        </p>
      </div>
    );
  };

  if (!mounted) {
    return (
      <section className="relative bg-black text-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="h-96" /> {/* Prevent layout shift */}
        </div>
      </section>
    );
  }

  return (
    <section 
      className="relative bg-black text-white py-16 md:py-24 lg:py-32 overflow-hidden"
      aria-labelledby="countdown-title"
      role="timer"
    >
      {/* Subtle background effects matching the theme */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#EB0028] rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white rounded-full blur-[100px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Subtle grid pattern - jaali inspired */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #EB0028 0.5px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Minimal Header matching the theme */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20 lg:mb-24"
        >
          <motion.h2 
            id="countdown-title"
            className="text-4xl md:text-5xl lg:text-7xl font-light text-white mb-6 tracking-tight leading-none"
          >
            Time Until<br />
            <span className="text-[#EB0028] font-normal">Ideas Worth Spreading</span>
          </motion.h2>
          
          {/* Minimal divider */}
          <motion.div 
            className="w-16 h-[1px] bg-[#EB0028] mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Circular Timer Grid - single horizontal line with proper mobile spacing */}
        <div className="overflow-x-auto pb-4 mb-16 md:mb-20 -mx-4 px-4">
          <div className="flex justify-center items-center gap-2 xs:gap-3 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 min-w-max mx-auto">
            <CircularTimer value={timeLeft.days} max={365} label="Days" delay={0.1} index={0} />
            <CircularTimer value={timeLeft.hours} max={24} label="Hours" delay={0.2} index={1} />
            <CircularTimer value={timeLeft.minutes} max={60} label="Minutes" delay={0.3} index={2} />
            <CircularTimer value={timeLeft.seconds} max={60} label="Seconds" delay={0.4} index={3} />
          </div>
        </div>

        {/* Event Details - subtle and elegant */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center"
        >
          {/* Date and venue */}
          <p className="text-gray-400 text-sm md:text-base tracking-wider uppercase font-light mb-6">
            November 11, 2025 • IIMT UNIVERSITY, Meerut
          </p>

          {/* Decorative separator - bindis inspired */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#EB0028]" />
            <div className="w-1 h-1 rounded-full bg-white opacity-50" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#EB0028]" />
          </div>

          {/* Subtle message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-gray-500 text-base md:text-lg font-light max-w-lg mx-auto leading-relaxed"
          >
            Mark your calendar for an unforgettable experience
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
};

export default CountdownTimer;