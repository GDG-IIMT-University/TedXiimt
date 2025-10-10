import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './logo-white.png'; // Make sure this is correct path

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isJoinUsOpen, setIsJoinUsOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const megaMenuRef = useRef(null);

  // Enhanced navigation structure
  const navigationItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Event',
      href: '#',

      megaMenu: {
        sections: [
          {
            title: 'Event Information',
            items: [
              { label: 'About TEDxIIMT', href: '/about', desc: 'Learn about our mission and vision' },
              { label: 'Organizing Team', href: '/team', desc: 'Meet the team behind TEDxIIMT' },
              { label: 'Schedule', href: '/schedule', desc: 'Full day timeline and agenda' },
              { label: 'Venue', href: '/venue', desc: 'Location and directions' },
              { label: 'FAQ', href: '/faq',
                 desc: 'Frequently asked questions' }
            ]
          },
          {
            title: 'Experience',
            items: [
              { label: 'What to Expect', href: '/what-to-expect', desc: 'Complete event experience guide' },
              { label: 'Networking', href: '/networking', desc: 'Connect with innovators and changemakers' },
              { label: 'Gallery', href: '/gallery', desc: 'Event photos and videos' },
              { label: 'Live Streaming', href: '/live', desc: 'Watch talks online' },
              { label: 'Accessibility', href: '/accessibility', desc: 'Inclusive event features' }
            ]
          }
        ]
      }
    },
    {
      label: 'Stories',
      href: '/blog',
     
    },
    {
      label: 'Speakers',
      href: '/speakers',
    
    },
    {
      label: 'Gallery',
      href: '/gallery',
    
    },
    {
      label: 'Partners',
      href: '#',
      submenu: [
        { label: 'Sponsors', href: '/sponsors' },
        { label: 'Media Partners', href: '/media-partners' },
        { label: 'Community Partners', href: '/community-partners' }
      ]
    }
  ];

  // Scroll detection for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setIsMegaMenuOpen(false);
        setActiveSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsJoinUsOpen(false);
    setIsMegaMenuOpen(false);
    setActiveSubmenu(null);
  };

  const toggleJoinUs = () => {
    setIsJoinUsOpen(!isJoinUsOpen);
  };

  const handleNavItemHover = (item) => {
    if (item.megaMenu) {
      setIsMegaMenuOpen(true);
      setActiveSubmenu(item.label);
    } else if (item.submenu) {
      setActiveSubmenu(item.label);
    } else {
      setIsMegaMenuOpen(false);
      setActiveSubmenu(null);
    }
  };
  return (
    <motion.header 
      className={`w-full px-6 py-4 flex justify-between items-center text-white shadow-md relative z-50 h-20 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md border-b border-gray-800/50' 
          : 'bg-black'
      }`}
      initial={false}
      animate={{
        backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 1)'
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Logo on Left */}
      <motion.div 
        className="flex items-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <a href="/" className="flex items-center">
          <img src={logo || "/placeholder.svg"} alt="TEDxIIMT Logo" className="h-16" />
        </a>
      </motion.div>

      {/* Hamburger Menu Button (visible on small screens) */}
      <button 
        className="md:hidden flex flex-col justify-center items-center w-8 h-8"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Enhanced Desktop Navigation */}
      <nav 
        className="hidden lg:flex items-center space-x-8 text-sm font-medium"
        ref={megaMenuRef}
      >
        {navigationItems.map((item) => (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => handleNavItemHover(item)}
            onMouseLeave={() => {
              if (!item.megaMenu && !item.submenu) {
                setActiveSubmenu(null);
                setIsMegaMenuOpen(false);
              }
            }}
          >
            <motion.a
              href={item.href}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-gray-800/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm">{item.icon}</span>
              <span>{item.label}</span>
              {(item.megaMenu || item.submenu) && (
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </motion.a>

            {/* Regular Submenu */}
            {item.submenu && activeSubmenu === item.label && (
              <motion.div
                className="absolute top-full left-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl overflow-hidden"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {item.submenu.map((subItem) => (
                  <motion.a
                    key={subItem.label}
                    href={subItem.href}
                    className="flex items-center space-x-3 px-4 py-3 hover:bg-red-500/10 hover:text-red-400 transition-colors border-b border-gray-800 last:border-b-0"
                    whileHover={{ x: 4 }}
                  >
                    <span>{subItem.icon}</span>
                    <span>{subItem.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </div>
        ))}

        {/* Join Us CTA */}
        <div className="relative">
          <motion.button
            onClick={toggleJoinUs}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Join Us</span>
            <svg className={`w-4 h-4 transition-transform ${isJoinUsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.button>
          
          <AnimatePresence>
            {isJoinUsOpen && (
              <motion.div
                className="absolute top-full right-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl overflow-hidden"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2">
                  <motion.a
                    href="/join-us/speaker"
                    className="flex items-center space-x-3 px-4 py-3 hover:bg-red-500/10 hover:text-red-400 transition-colors rounded-lg mb-1"
                    whileHover={{ x: 4 }}
                  >
                    <div>
                      <div className="font-medium">Speaker</div>
                      <div className="text-xs text-gray-500">Share your ideas</div>
                    </div>
                  </motion.a>
                  <motion.a
                    href="/join-us/sponsor"
                    className="flex items-center space-x-3 px-4 py-3 hover:bg-red-500/10 hover:text-red-400 transition-colors rounded-lg mb-1"
                    whileHover={{ x: 4 }}
                  >
                    
                    <div>
                      <div className="font-medium">Sponsor</div>
                      <div className="text-xs text-gray-500">Partner with us</div>
                    </div>
                  </motion.a>
                  <motion.a
                    href="/join-us/attendee"
                    className="flex items-center space-x-3 px-4 py-3 hover:bg-red-500/10 hover:text-red-400 transition-colors rounded-lg"
                    whileHover={{ x: 4 }}
                  >
              
                    <div>
                      <div className="font-medium">Attendee</div>
                      <div className="text-xs text-gray-500">Get your tickets</div>
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Mega Menu */}
      <AnimatePresence>
        {isMegaMenuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-gray-900/98 backdrop-blur-md border-b border-gray-800 shadow-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => {
              setIsMegaMenuOpen(false);
              setActiveSubmenu(null);
            }}
          >
            <div className="container mx-auto px-6 py-8">
              {navigationItems
                .find(item => item.label === activeSubmenu && item.megaMenu)
                ?.megaMenu?.sections.map((section, index) => (
                <div key={section.title} className="mb-8 last:mb-0">
                  <h3 className="text-white font-semibold mb-4 text-lg">
                    {section.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {section.items.map((item) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        className="group block p-4 bg-gray-800/50 rounded-xl hover:bg-red-500/10 border border-gray-700/50 hover:border-red-500/30 transition-all duration-200"
                        whileHover={{ y: -2, scale: 1.02 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className="flex items-start space-x-3">
                          <span className="text-2xl">{item.icon}</span>
                          <div>
                            <h4 className="text-white font-medium group-hover:text-red-400 transition-colors">
                              {item.label}
                            </h4>
                            <p className="text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu (visible when hamburger is clicked) */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black border-t border-gray-800 shadow-lg md:hidden">
          <div className="flex flex-col p-4">
            <a 
              href="/" 
              className="py-3 hover:text-red-500 transition border-b border-gray-800"
              onClick={closeMenu}
            >
              Home
            </a>
            <a 
              href="/blog" 
              className="py-3 hover:text-red-500 transition border-b border-gray-800"
              onClick={closeMenu}
            >
              Stories
            </a>
            <a 
              href="/mystery" 
              className="py-3 hover:text-red-500 transition border-b border-gray-800"
              onClick={closeMenu}
            >
              Mystery
            </a>
            <a 
              href="/sponsors" 
              className="py-3 hover:text-red-500 transition border-b border-gray-800"
              onClick={closeMenu}
            >
              Sponsors
            </a>
            <a 
              href="/speakers" 
              className="py-3 hover:text-red-500 transition border-b border-gray-800"
              onClick={closeMenu}
            >
              Speakers
            </a>
            <a 
              href="/team" 
              className="py-3 hover:text-red-500 transition border-b border-gray-800"
              onClick={closeMenu}
            >
              Team
            </a>
            <a 
              href="/gallery" 
              className="py-3 hover:text-red-500 transition border-b border-gray-800"
              onClick={closeMenu}
            >
              Gallery
            </a>
            <div className="border-b border-gray-800">
              <button
                onClick={toggleJoinUs}
                className="w-full text-left py-3 hover:text-red-500 transition flex items-center justify-between"
              >
                Join Us
                <svg className={`w-4 h-4 transition-transform ${isJoinUsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isJoinUsOpen && (
                <div className="pl-4 pb-2">
                  <a href="/join-us/speaker" className="block py-2 text-sm hover:text-red-500 transition" onClick={closeMenu}>Speaker</a>
                  <a href="/join-us/sponsor" className="block py-2 text-sm hover:text-red-500 transition" onClick={closeMenu}>Sponsor</a>
                  <a href="/join-us/attendee" className="block py-2 text-sm hover:text-red-500 transition" onClick={closeMenu}>Attendee</a>
                </div>
              )}
            </div>
            
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Header;