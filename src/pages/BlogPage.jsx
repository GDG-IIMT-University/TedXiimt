import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogPosts, blogCategories, getPostsByCategory } from '../data/blogData';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPosts = getPostsByCategory(selectedCategory).filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative w-full px-6 py-16 bg-gradient-to-br from-black via-[#1a1a1a] to-red-950/20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              TEDxIIMT UNIVERSITY <span className="text-red-500">Stories</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
            >
              Discover the stories behind our speakers, explore inspiring TED Talks, 
              and get exclusive behind-the-scenes updates as we prepare for an 
              unforgettable event celebrating ideas worth spreading.
            </motion.p>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="w-full px-6 py-8 bg-[#0f0f0f]">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {blogCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full lg:w-80">
                <input
                  type="text"
                  placeholder="Search stories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 pr-10 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                />
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-gray-400 text-sm">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'story' : 'stories'} found
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="w-full px-6 py-8 bg-[#0f0f0f]">
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
   
                <h3 className="text-2xl font-semibold text-gray-400 mb-2">No stories found</h3>
                <p className="text-gray-500">Try adjusting your search or category filter</p>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300 overflow-hidden group cursor-pointer hover:transform hover:scale-105"
                    onClick={() => window.location.href = `/blog/${post.slug}`}
                  >
                    {/* Post Image */}
                    <div className="h-48 bg-gradient-to-br from-red-500/30 to-gray-800 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                          {post.category}
                        </span>
                      </div>
                      
                      {/* Featured Badge */}
                      {post.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-bold">
                             Featured
                          </span>
                        </div>
                      )}
                      
                      {/* Read Time */}
                      <div className="absolute bottom-4 right-4 text-white/80 text-sm font-medium">
                        {post.readTime}
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="p-6">
                      {/* Meta Info */}
                      <div className="flex items-center gap-2 mb-3 text-sm text-gray-400">
                        <span>{formatDate(post.publishDate)}</span>
                        <span>•</span>
                        <span>{post.author}</span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                        {post.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-red-400 bg-red-500/10 px-2 py-1 rounded-md hover:bg-red-500/20 transition-colors"
                          >
                            #{tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="text-xs text-gray-500">
                            +{post.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="w-full px-6 py-16 bg-gradient-to-br from-red-500/10 to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-semibold text-white mb-4">
                Stay in the Loop
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Get the latest stories, speaker announcements, and event updates 
                delivered directly to your inbox. Be part of the TEDxIIMT UNIVERSITY community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                />
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;