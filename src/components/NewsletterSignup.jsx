import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !name) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');
    setName('');

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const benefits = [
    { text: "Event updates and announcements" },
    { text: "Early access to tickets" },
    { text: "Exclusive content and insights" },
    { text: "Special offers and discounts" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Stay <span className="text-red-500">Connected</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join our newsletter and be the first to know about upcoming events, speaker announcements, 
              and exclusive content from the TEDxIIMT community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-red-400">What You'll Get</h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ x: 5, backgroundColor: "rgba(55, 65, 81, 0.7)" }}
                  >
                    
                    <p className="text-gray-300">{benefit.text}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8 p-6 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl border border-red-500/30"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <h4 className="font-bold text-red-300">Join 5,000+ Subscribers</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Be part of a growing community of innovators, entrepreneurs, and change-makers 
                  who are passionate about ideas worth spreading.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-900/70 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-900/70 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isLoading || !email || !name}
                      className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                        isLoading || !email || !name
                          ? 'bg-gray-600 cursor-not-allowed'
                          : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-xl hover:shadow-2xl'
                      }`}
                      whileHover={(!isLoading && email && name) ? { scale: 1.02, y: -2 } : {}}
                      whileTap={(!isLoading && email && name) ? { scale: 0.98 } : {}}
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Subscribing...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <span>Subscribe to Newsletter</span>
                        </div>
                      )}
                    </motion.button>

                    <p className="text-xs text-gray-400 text-center">
                      By subscribing, you agree to our privacy policy. Unsubscribe at any time.
                    </p>
                  </form>
                ) : (
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-green-400">Welcome to the Community!</h3>
                    <p className="text-gray-300">
                      Thank you for subscribing! Check your email for a confirmation message and 
                      get ready for exciting updates from TEDxIIMT.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default NewsletterSignup;