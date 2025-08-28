import React from 'react';

const Router = () => {
  const path = window.location.pathname;

  // Import components dynamically based on path
  const getComponent = () => {
    switch (path) {
      case '/':
        return React.lazy(() => import('../App'));
      case '/mystery':
        return React.lazy(() => import('../pages/MysteryPage'));
      case '/sponsors':
        return React.lazy(() => import('../pages/SponsorsPage'));
      case '/join-us/speaker':
        return React.lazy(() => import('../pages/SpeakerForm'));
      case '/join-us/sponsor':
        return React.lazy(() => import('../pages/SponsorForm'));
      case '/join-us/attendee':
        return React.lazy(() => import('../pages/AttendeeForm'));
      default:
        return React.lazy(() => import('../App'));
    }
  };

  const Component = getComponent();

  return (
    <React.Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    }>
      <Component />
    </React.Suspense>
  );
};

export default Router;