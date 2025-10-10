import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const testimonials = [
    {
      id: 1,
      quote: "TEDxIIMT transformed how I think about innovation. The speakers weren't just presenting ideas - they were sharing life-changing perspectives that I still apply in my startup today.",
      name: "Priya Sharma",
      title: "Founder & CEO",
      company: "TechFlow Solutions",
      image: "/api/placeholder/80/80",
      category: "entrepreneur",
      year: "2023",
      credentials: "Featured in Forbes 30 Under 30",
      rating: 5,
      verified: true
    },
    {
      id: 2,
      quote: "The networking at TEDxIIMT was unparalleled. I met my current business partner during the event, and we've since launched a successful sustainable energy company together.",
      name: "Dr. Rajesh Kumar",
      title: "Research Director",
      company: "Green Energy Institute",
      image: "/api/placeholder/80/80",
      category: "academic",
      year: "2023",
      credentials: "PhD in Renewable Energy, 50+ publications",
      rating: 5,
      verified: true
    },
    {
      id: 3,
      quote: "As a student, TEDxIIMT opened my eyes to possibilities I never knew existed. The interactive sessions and mentorship opportunities were invaluable for my career growth.",
      name: "Anisha Patel",
      title: "Software Engineer",
      company: "Microsoft India",
      image: "/api/placeholder/80/80",
      category: "student",
      year: "2022",
      credentials: "IIMT Alumna, Microsoft Certified",
      rating: 5,
      verified: true
    },
    {
      id: 4,
      quote: "The production quality and organization were exceptional. Every detail was thoughtfully planned, making it one of the most professional events I've attended.",
      name: "Michael Chen",
      title: "Creative Director",
      company: "Design Studio Pro",
      image: "/api/placeholder/80/80",
      category: "creative",
      year: "2023",
      credentials: "15+ years in creative industry",
      rating: 5,
      verified: true
    },
    {
      id: 5,
      quote: "TEDxIIMT's focus on diversity and inclusion created an environment where every voice was heard and valued. The conversations continued long after the event ended.",
      name: "Sarah Johnson",
      title: "Diversity & Inclusion Lead",
      company: "Global Corp",
      image: "/api/placeholder/80/80",
      category: "corporate",
      year: "2023",
      credentials: "Certified D&I Professional",
      rating: 5,
      verified: true
    },
    {
      id: 6,
      quote: "The speaker lineup was incredibly diverse and inspiring. Each talk provided unique insights that challenged my perspectives and motivated me to take action.",
      name: "Prof. Amit Gupta",
      title: "Dean of Innovation",
      company: "IIT Delhi",
      image: "/api/placeholder/80/80",
      category: "academic",
      year: "2022",
      credentials: "30+ years in academia, 200+ publications",
      rating: 5,
      verified: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Attendees', count: testimonials.length },
    { id: 'entrepreneur', label: 'Entrepreneurs', count: testimonials.filter(t => t.category === 'entrepreneur').length },
    { id: 'academic', label: 'Academics', count: testimonials.filter(t => t.category === 'academic').length },
    { id: 'student', label: 'Students', count: testimonials.filter(t => t.category === 'student').length },
    { id: 'corporate', label: 'Corporate', count: testimonials.filter(t => t.category === 'corporate').length },
    { id: 'creative', label: 'Creatives', count: testimonials.filter(t => t.category === 'creative').length }
  ];

  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [filteredTestimonials.length, isAutoPlaying]);

  useEffect(() => {
    setCurrentTestimonial(0);
  }, [selectedCategory]);

  const TestimonialCard = ({ testimonial, isActive }) => (
    <motion.div
      className={`bg-[#0a0a0a] border-2 ${
        isActive ? 'border-[#EB0028]' : 'border-[#1a1a1a]'
      } p-8 relative overflow-hidden h-full`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsAutoPlaying(false)}
      onHoverEnd={() => setIsAutoPlaying(true)}
    >
      <div className="absolute top-0 left-0 h-1 w-full bg-[#EB0028]" />
      
      <div className="relative z-10 space-y-6">
        <div>
          <div className="text-[#EB0028] text-6xl font-serif leading-none mb-4">"</div>
          <blockquote className="text-lg text-gray-200 leading-relaxed">
            {testimonial.quote}
          </blockquote>
        </div>

        <div className="flex gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-[#EB0028]"></div>
          ))}
          <span className="ml-2 text-sm text-gray-400">({testimonial.rating}.0)</span>
        </div>

        <div className="flex items-start gap-4 pt-4 border-t border-[#1a1a1a]">
          <div className="flex-shrink-0 w-16 h-16 bg-[#1a1a1a] border-2 border-[#EB0028]/30 overflow-hidden">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-bold text-white">
                {testimonial.name}
              </h4>
              {testimonial.verified && (
                <div className="w-4 h-4 bg-[#EB0028] flex items-center justify-center">
                  <div className="w-2 h-2 bg-white"></div>
                </div>
              )}
            </div>
            
            <p className="text-[#EB0028] font-medium text-sm mb-1">
              {testimonial.title}
            </p>
            <p className="text-gray-400 text-sm mb-2">
              {testimonial.company}
            </p>
            
            <p className="text-gray-500 text-xs mb-2">
              {testimonial.credentials}
            </p>

            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Attended {testimonial.year}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section 
      className="py-16 md:py-24 lg:py-32 bg-black"
      aria-labelledby="testimonials-title"
      role="region"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6">
            <div className="h-1 w-20 bg-[#EB0028]"></div>
          </div>
          <h2 
            id="testimonials-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
          >
            What <span className="text-[#EB0028]">Attendees</span> Say
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Real experiences from past TEDxIIMT participants
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#EB0028] text-white'
                    : 'bg-[#0a0a0a] border border-[#1a1a1a] text-gray-400 hover:border-[#EB0028]/50'
                }`}
                aria-label={`Filter by ${category.label}`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence mode="wait">
              {filteredTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  isActive={index === currentTestimonial}
                />
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {filteredTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentTestimonial(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-2 transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'w-8 bg-[#EB0028]' 
                    : 'w-2 bg-[#1a1a1a] hover:bg-[#EB0028]/50'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <a
            href="/attendee-form"
            className="inline-block bg-[#EB0028] hover:bg-[#ff1a3d] text-white font-bold px-8 py-4 text-lg transition-all duration-300"
          >
            Join Our Community
          </a>
          <p className="text-gray-400 text-sm mt-4">
            Be part of the next success story
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
