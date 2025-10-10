import React, { useEffect, Suspense } from 'react';
import { LazySection, PerformanceInsights, registerServiceWorker } from './utils/performanceUtils.jsx';

// Critical components (loaded immediately)
import Header from './components/Header';
import Hero from './components/Hero';
import FloatingCTA from './components/FloatingCTA';

// Lazy-loaded components for performance
const HomePage = React.lazy(() => import('./pages/HomePage'));
const Footer = React.lazy(() => import('./components/Footer'));

// Performance monitoring in development
if (process.env.NODE_ENV === 'development') {
  import('./utils/performanceUtils.jsx').then(({ BundleAnalyzer }) => {
    // Optional bundle analysis in development
  });
}

const App = () => {
  useEffect(() => {
    // Register service worker for performance
    registerServiceWorker();

    // Preload critical resources
    const criticalResources = [
      { type: 'image', src: '/api/placeholder/800/600' },
      { type: 'image', src: '/api/placeholder/400/300' }
    ];

    // Preload next likely pages
    const linkPrefetch = document.createElement('link');
    linkPrefetch.rel = 'prefetch';
    linkPrefetch.href = '/blog';
    document.head.appendChild(linkPrefetch);

    const linkPreload = document.createElement('link');
    linkPreload.rel = 'preload';
    linkPreload.href = '/speakers';
    linkPreload.as = 'document';
    document.head.appendChild(linkPreload);

    return () => {
      document.head.removeChild(linkPrefetch);
      document.head.removeChild(linkPreload);
    };
  }, []);

  return (
    <div className="bg-black text-white font-sans scroll-smooth">
      {/* Performance monitoring (development only) */}
      {/* <PerformanceInsights /> */}

      {/* Critical above-the-fold content */}
      <Header />
     

      {/* Lazy-loaded main content */}
      <LazySection
        fallback={
          <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-400">Loading experience...</p>
            </div>
          </div>
        }
      >
        <Suspense fallback={
          <div className="h-screen bg-gray-900 animate-pulse flex items-center justify-center">
            <div className="text-white">Loading content...</div>
          </div>
        }>
          <HomePage />
        </Suspense>
      </LazySection>

      {/* Lazy-loaded footer */}
      <LazySection
        fallback={<div className="h-64 bg-gray-900 animate-pulse" />}
      >
        <Suspense fallback={<div className="h-64 bg-gray-800" />}>
          <Footer />
        </Suspense>
      </LazySection>

     
    </div>
  );
};

export default App;
