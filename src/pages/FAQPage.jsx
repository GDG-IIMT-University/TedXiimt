import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqCategories = [
    {
      category: "General Information",
      questions: [
        {
          question: "What is TEDxIIMT UNIVERSITY?",
          answer: "TEDxIIMT UNIVERSITY is an independently organized TED event licensed by TED. It brings together forward-thinking individuals to share ideas worth spreading in the spirit of TED's mission of 'ideas worth spreading.'"
        },
        {
          question: "When and where is the event?",
          answer: "TEDxIIMT UNIVERSITY 2024 will be held at the IIMT UNIVERSITY Main Auditorium, Sector 58, Noida. The event runs from 8:00 AM to 4:00 PM. Check our schedule page for detailed timings."
        },
        {
          question: "How much do tickets cost?",
          answer: "Early bird tickets are available for ₹2,500. Regular tickets are ₹3,500. Student discounts are available with valid ID. All tickets include lunch, refreshments, and networking sessions."
        },
        {
          question: "Is there an age limit?",
          answer: "TEDxIIMT UNIVERSITY is open to all ages. However, we recommend the event for ages 16+ due to the nature and depth of the talks. Minors must be accompanied by an adult."
        }
      ]
    },
    {
      category: "Registration & Tickets",
      questions: [
        {
          question: "How do I register?",
          answer: "You can register online through our website by clicking 'Get Tickets' or visiting our registration page. Payment can be made via credit card, debit card, or UPI."
        },
        {
          question: "Can I get a refund?",
          answer: "Tickets are refundable up to 7 days before the event. A processing fee of ₹200 will be deducted. No refunds will be provided within 7 days of the event."
        },
        {
          question: "Can I transfer my ticket to someone else?",
          answer: "Yes, tickets can be transferred to another person up to 48 hours before the event. Please contact us with both attendees' details to process the transfer."
        },
        {
          question: "What if the event is cancelled?",
          answer: "In the unlikely event of cancellation, all ticket holders will receive a full refund within 10 business days. We'll also offer priority booking for the rescheduled event."
        }
      ]
    },
    {
      category: "Event Day",
      questions: [
        {
          question: "What should I bring?",
          answer: "Bring your ticket (digital or printed), a valid ID, and business cards for networking. Notebooks and pens will be provided. Don't forget comfortable clothes and an open mind!"
        },
        {
          question: "Is food provided?",
          answer: "Yes! Your ticket includes a gourmet lunch, coffee breaks, and light refreshments throughout the day. We accommodate all dietary restrictions - just let us know during registration."
        },
        {
          question: "Is there parking available?",
          answer: "Free parking is available at the IIMT UNIVERSITY campus. However, we encourage using public transport. The nearest metro station is Sector 59, just a 5-minute walk away."
        },
        {
          question: "Can I leave and re-enter?",
          answer: "Yes, you can leave and re-enter the venue during breaks. However, we recommend staying for the full experience as each talk builds on the day's theme."
        }
      ]
    },
    {
      category: "Accessibility & Special Needs",
      questions: [
        {
          question: "Is the venue wheelchair accessible?",
          answer: "Yes, the IIMT UNIVERSITY auditorium is fully wheelchair accessible with ramps, accessible restrooms, and reserved seating areas. Please mention any accessibility needs during registration."
        },
        {
          question: "Are sign language interpreters available?",
          answer: "Yes, we can arrange sign language interpreters with advance notice. Please contact us at least 2 weeks before the event to arrange this service."
        },
        {
          question: "What about dietary restrictions?",
          answer: "We accommodate all dietary restrictions including vegetarian, vegan, gluten-free, and religious dietary requirements. Please specify your needs during registration."
        },
        {
          question: "Is there medical assistance available?",
          answer: "Yes, we have medical personnel on-site throughout the event. The IIMT UNIVERSITY medical center is also within 5 minutes of the venue."
        }
      ]
    },
    {
      category: "Speakers & Content",
      questions: [
        {
          question: "Who are the speakers?",
          answer: "Our speakers include innovative entrepreneurs, researchers, artists, and thought leaders. Check our speakers page for detailed profiles and talk abstracts."
        },
        {
          question: "How long are the talks?",
          answer: "Following TED format, most talks are 18 minutes or less. We also have panel discussions and interactive sessions that may run longer."
        },
        {
          question: "Will talks be recorded?",
          answer: "Yes, all talks will be professionally recorded and made available on our website and YouTube channel within 2 weeks of the event."
        },
        {
          question: "Can I suggest a speaker?",
          answer: "We welcome speaker suggestions! Please email us with the speaker's details and why they'd be a good fit for TEDxIIMT UNIVERSITY. Suggestions for next year are always welcome."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const faqId = `${categoryIndex}-${questionIndex}`;
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Header />
      
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                Frequently Asked <span className="text-red-500">Questions</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Got questions? We've got answers! Find everything you need to know about TEDxIIMT UNIVERSITY 2024
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  className="mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  <h2 className="text-3xl font-bold mb-8 text-red-500">
                    {category.category}
                  </h2>
                  
                  <div className="space-y-4">
                    {category.questions.map((faq, questionIndex) => {
                      const faqId = `${categoryIndex}-${questionIndex}`;
                      const isOpen = openFAQ === faqId;
                      
                      return (
                        <motion.div
                          key={questionIndex}
                          className="bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: questionIndex * 0.05 }}
                        >
                          <button
                            onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                            className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-800/70 transition-colors"
                            aria-expanded={isOpen}
                          >
                            <h3 className="text-lg font-semibold pr-4">
                              {faq.question}
                            </h3>
                            <motion.div
                              animate={{ rotate: isOpen ? 45 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="flex-shrink-0"
                            >
                              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                              </svg>
                            </motion.div>
                          </button>
                          
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div className="px-6 pb-6">
                                  <div className="bg-gray-900/50 rounded-lg p-4 border-l-4 border-red-500">
                                    <p className="text-gray-300 leading-relaxed">
                                      {faq.answer}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-20 bg-gray-800/30">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our team is here to help with any additional questions you might have.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:info@tedxIIMT UNIVERSITY.com"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>📧</span>
                  <span>Email Us</span>
                </motion.a>
                
                <motion.a
                  href="tel:+91-9876543210"
                  className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>📞</span>
                  <span>Call Us</span>
                </motion.a>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-gray-400 mb-4">Quick Links</p>
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  <motion.a
                    href="/join-us/attendee"
                    className="text-red-400 hover:text-red-300 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    Get Tickets
                  </motion.a>
                  <motion.a
                    href="/schedule"
                    className="text-red-400 hover:text-red-300 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    Event Schedule
                  </motion.a>
                  <motion.a
                    href="/venue"
                    className="text-red-400 hover:text-red-300 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    Venue Details
                  </motion.a>
                  <motion.a
                    href="/speakers"
                    className="text-red-400 hover:text-red-300 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    Our Speakers
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQPage;