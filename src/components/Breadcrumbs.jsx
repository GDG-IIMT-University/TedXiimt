import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Breadcrumbs = () => {
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const path = window.location.pathname;
    const pathSegments = path.split('/').filter(segment => segment);
    
    // Build breadcrumb array with proper names
    const breadcrumbItems = [
      { label: 'Home', url: '/',  }
    ];

    const pathMap = {
      'blog': { label: 'Stories',  },
      'mystery': { label: 'Mystery', },
      'sponsors': { label: 'Sponsors', },
      'speakers': { label: 'Speakers',  },
      'join-us': { label: 'Join Us', },
      'speaker': { label: 'Speaker Form',  },
      'sponsor': { label: 'Sponsor Form',  },
      'attendee': { label: 'Attendee Form',  },
      'about': { label: 'About',  },
      'contact': { label: 'Contact',  },
      'schedule': { label: 'Schedule',  },
      'venue': { label: 'Venue',  }
    };

    let currentPath = '';
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`;
      const segmentInfo = pathMap[segment];
      
      if (segmentInfo) {
        breadcrumbItems.push({
          label: segmentInfo.label,
          url: currentPath,
          icon: segmentInfo.icon
        });
      } else {
        // Handle dynamic routes like blog posts
        if (segment.match(/^[\w\-]+$/)) {
          breadcrumbItems.push({
            label: segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            url: currentPath,
          });
        }
      }
    });

    setBreadcrumbs(breadcrumbItems);
  }, []);

  if (breadcrumbs.length <= 1) return null;

  return (
    <motion.nav
      className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800 px-4 sm:px-6 py-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-label="Breadcrumb navigation"
      role="navigation"
    >
      <div className="container mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.url} className="flex items-center">
              {index > 0 && (
                <svg className="w-4 h-4 text-gray-600 mx-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              )}
              
              {index === breadcrumbs.length - 1 ? (
                // Current page - not clickable
                <span className="flex items-center space-x-2 text-red-400 font-medium">
                  <span>{crumb.icon}</span>
                  <span>{crumb.label}</span>
                </span>
              ) : (
                // Clickable breadcrumb
                <motion.a
                  href={crumb.url}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{crumb.icon}</span>
                  <span>{crumb.label}</span>
                </motion.a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </motion.nav>
  );
};

export default Breadcrumbs;