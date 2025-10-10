import React from 'react';
import { motion } from 'framer-motion';
import { getRecentPosts } from '../data/blogData';

const Blog = () => {
  const recentPosts = getRecentPosts(3);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="w-full px-6 py-16 bg-[#0f0f0f] text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest <span className="text-red-500">Stories</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with speaker announcements, inspiring TED Talks, behind-the-scenes content, 
            and the latest news from our TEDxIIMT community.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-colors overflow-hidden group cursor-pointer"
              onClick={() => window.location.href = `/blog/${post.slug}`}
            >
              {/* Post Image */}
              <div className="h-48 bg-gradient-to-br from-red-500/30 to-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 text-white/80 text-sm">
                  {post.readTime}
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-400">
                  <span>{formatDate(post.publishDate)}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-red-400 bg-red-500/10 px-2 py-1 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="text-xs text-gray-500">
                      +{post.tags.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="/blog"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors group"
          >
            View All Stories
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-red-500/20 to-transparent rounded-2xl p-8 border border-red-500/30 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Never Miss a Story
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest speaker announcements, event updates, 
            and inspiring content delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Blog;