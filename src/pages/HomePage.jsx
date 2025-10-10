import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CountdownTimer from '../components/CountdownTimer';
import ValueProposition from '../components/ValueProposition';
import FeaturedSpeakers from '../components/FeaturedSpeakers';
import EventHighlights from '../components/EventHighlights';
import WhatIsTEDx from '../components/WhatIsTEDx';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Partners from '../components/Partners';
import NewsletterSignup from '../components/NewsletterSignup';
import Footer from '../components/Footer';
import FloatingCTA from '../components/FloatingCTA';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      
      {/* Main Content */}
      <main>
        {/* 1. Hero Section - First Impression & Value Prop */}
        <Hero />
        
        {/* 2. Countdown Timer - Creates Urgency (Von Restorff Effect) */}
        <CountdownTimer />
        
        {/* 3. Value Proposition - Why Attend (Miller's Rule - 4 key benefits) */}
        <ValueProposition />
        
        {/* 4. Featured Speakers - Social Proof & Authority */}
        <FeaturedSpeakers />
        
        {/* 5. Event Highlights - Features & Benefits (Progressive Disclosure) */}
        <EventHighlights />
        
        {/* 6. What is TEDx - Educational Context */}
        <WhatIsTEDx />
        
        {/* 7. Testimonials - Social Proof & Trust Building */}
        <Testimonials />
        
        {/* 8. Blog Preview - Fresh Content & Engagement */}
        <Blog />
        
        {/* 9. Partners - Credibility & Trust */}
        <Partners />
        
        {/* 10. Newsletter Signup - Lead Generation (Peak-End Rule) */}
        <NewsletterSignup />
      </main>


    </div>
  );
};

export default HomePage;