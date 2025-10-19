import React, { Suspense, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Breadcrumbs from './Breadcrumbs';

const Router = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isLoading, setIsLoading] = useState(false);

  // Listen for navigation changes
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Enhanced route mapping with metadata
  const routes = {
    '/': {
      component: React.lazy(() => import('../App')),
      title: 'Home - TEDxIIMT UNIVERSITY 2024',
      description: 'Transform Your Perspective at TEDxIIMT UNIVERSITY 2024'
    },
    '/blog': {
      component: React.lazy(() => import('../pages/BlogPage')),
      title: 'Stories - TEDxIIMT UNIVERSITY',
      description: 'Read inspiring stories and updates from TEDxIIMT UNIVERSITY'
    },
    '/mystery': {
      component: React.lazy(() => import('../pages/MysteryPage')),
      title: 'Mystery Speaker - TEDxIIMT UNIVERSITY',
      description: 'Discover our surprise speaker'
    },
    '/sponsors': {
      component: React.lazy(() => import('../pages/SponsorsPage')),
      title: 'Sponsors - TEDxIIMT UNIVERSITY',
      description: 'Meet our amazing sponsors and partners'
    },
    '/speakers': {
      component: React.lazy(() => import('../pages/SpeakersPage')),
      title: 'Speakers - TEDxIIMT UNIVERSITY',
      description: 'Meet our inspiring speakers'
    },
    '/join-us/speaker': {
      component: React.lazy(() => import('../pages/SpeakerForm')),
      title: 'Become a Speaker - TEDxIIMT UNIVERSITY',
      description: 'Apply to speak at TEDxIIMT UNIVERSITY 2024'
    },
    '/join-us/sponsor': {
      component: React.lazy(() => import('../pages/SponsorForm')),
      title: 'Sponsor Us - TEDxIIMT UNIVERSITY',
      description: 'Partner with TEDxIIMT UNIVERSITY 2024'
    },
    '/join-us/attendee': {
      component: React.lazy(() => import('../pages/AttendeeForm')),
      title: 'Get Tickets - TEDxIIMT UNIVERSITY',
      description: 'Register for TEDxIIMT UNIVERSITY 2024'
    },
    '/about': {
      component: React.lazy(() => import('../pages/AboutPage')),
      title: 'About - TEDxIIMT UNIVERSITY',
      description: 'Learn about TEDxIIMT UNIVERSITY and our mission'
    },
    '/schedule': {
      component: React.lazy(() => import('../pages/SchedulePage')),
      title: 'Schedule - TEDxIIMT UNIVERSITY',
      description: 'Full event schedule and timeline'
    },
    '/venue': {
      component: React.lazy(() => import('../pages/VenuePage')),
      title: 'Venue - TEDxIIMT UNIVERSITY',
      description: 'Event location and directions'
    },
    '/faq': {
      component: React.lazy(() => import('../pages/FAQPage')),
      title: 'FAQ - TEDxIIMT UNIVERSITY',
      description: 'Frequently asked questions'
    },
    '/media-partners': {
      component: React.lazy(() => import('../pages/MediaPartnersPage')),
      title: 'Media Partners - TEDxIIMT UNIVERSITY',
      description: 'Our media and press partners'
    },
    '/community-partners': {
      component: React.lazy(() => import('../pages/CommunityPartnersPage')),
      title: 'Community Partners - TEDxIIMT UNIVERSITY',
      description: 'Our community and organizational partners'
    },
    '/accessibility': {
      component: React.lazy(() => import('../pages/AccessibilityPage')),
      title: 'Accessibility - TEDxIIMT UNIVERSITY',
      description: 'Accessibility features and accommodations'
    },
    '/live': {
      component: React.lazy(() => import('../pages/LiveStreamPage')),
      title: 'Live Stream - TEDxIIMT UNIVERSITY',
      description: 'Watch TEDxIIMT UNIVERSITY talks live online'
    },
    '/what-to-expect': {
      component: React.lazy(() => import('../pages/WhatToExpectPage')),
      title: 'What to Expect - TEDxIIMT UNIVERSITY',
      description: 'Complete guide to the TEDxIIMT UNIVERSITY event experience'
    },
    '/networking': {
      component: React.lazy(() => import('../pages/NetworkingPage')),
      title: 'Networking - TEDxIIMT UNIVERSITY',
      description: 'Connect with innovators and changemakers at TEDxIIMT UNIVERSITY'
    },
    '/team': {
      component: React.lazy(() => import('../pages/TeamPage')),
      title: 'Organizing Team - TEDxIIMT UNIVERSITY',
      description: 'Meet the passionate team behind TEDxIIMT UNIVERSITY'
    },
    '/gallery': {
      component: React.lazy(() => import('../pages/GalleryPage')),
      title: 'Gallery - TEDxIIMT UNIVERSITY',
      description: 'Explore photos, videos, and moments from TEDxIIMT UNIVERSITY events'
    },

    '/test': {
      component: React.lazy(() => import('../pages/TESTpage')),
      title: 'Test Page - TEDxIIMT UNIVERSITY',
      description: 'This is a test page for development purposes'
    }
  };

  // Get component and metadata for current path
  const getRouteData = () => {
    // Exact match first
    if (routes[currentPath]) {
      return routes[currentPath];
    }

    // Dynamic routes
    if (currentPath.startsWith('/blog/')) {
      return {
        component: React.lazy(() => import('../pages/BlogPost')),
        title: 'Blog Post - TEDxIIMT UNIVERSITY',
        description: 'Read our latest blog post'
      };
    }

    // 404 fallback
    return {
      component: React.lazy(() => import('../pages/NotFoundPage')),
      title: '404 - Page Not Found',
      description: 'The page you are looking for could not be found'
    };
  };

  const routeData = getRouteData();
  const Component = routeData.component;

  // Update document title and meta description
  useEffect(() => {
    document.title = routeData.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', routeData.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = routeData.description;
      document.head.appendChild(meta);
    }
  }, [routeData.title, routeData.description]);

  // Enhanced loading component
  const LoadingScreen = () => (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center">
        {/* Animated TEDx Logo */}
        <motion.div
          className="mb-8"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto">
            <span className="text-white text-2xl font-bold">TEDx</span>
          </div>
        </motion.div>

        {/* Loading Animation */}
        <motion.div className="flex justify-center space-x-2 mb-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-red-500 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>

        <p className="text-white text-lg font-medium mb-2">Loading Experience</p>
        <p className="text-gray-400 text-sm">Preparing your journey...</p>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-black">
      {/* Breadcrumbs */}
      <Breadcrumbs />
      
      {/* Page Content with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPath}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Suspense fallback={<LoadingScreen />}>
            <Component />
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Router;