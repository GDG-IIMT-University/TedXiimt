import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getPostBySlug, blogPosts } from '../data/blogData';

const BlogPost = ({ slug }) => {
  // Get the post by slug from URL or props
  const postSlug = slug || window.location.pathname.split('/').pop();
  const post = getPostBySlug(postSlug);
  
  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post?.category && p.id !== post?.id)
    .slice(0, 3);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!post) {
    return (
      <div className="bg-black text-white font-sans min-h-screen">
        <Header />
        <main className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">

            <h1 className="text-3xl font-bold text-gray-400 mb-4">Story Not Found</h1>
            <p className="text-gray-500 mb-8">The story you're looking for doesn't exist or has been moved.</p>
            <a 
              href="/blog" 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Back to Stories
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Article Header */}
        <section className="relative w-full px-6 py-16 bg-gradient-to-br from-black via-[#1a1a1a] to-red-950/20">
          <div className="max-w-4xl mx-auto">
            
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <a href="/" className="hover:text-red-400 transition-colors">Home</a>
                <span>/</span>
                <a href="/blog" className="hover:text-red-400 transition-colors">Stories</a>
                <span>/</span>
                <span className="text-gray-300">{post.title}</span>
              </div>
            </motion.nav>

            {/* Category and Featured Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="bg-red-600 text-white text-sm px-4 py-2 rounded-full font-medium">
                {post.category}
              </span>
              {post.featured && (
                <span className="bg-yellow-500 text-black text-sm px-3 py-1 rounded-full font-bold">
                  Featured
                </span>
              )}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
            >
              {post.title}
            </motion.h1>

            {/* Meta Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-8"
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{formatDate(post.publishDate)}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{post.readTime}</span>
              </div>
            </motion.div>

            {/* Excerpt */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 leading-relaxed italic border-l-4 border-red-500 pl-6"
            >
              {post.excerpt}
            </motion.p>
          </div>
        </section>

        {/* Article Content */}
        <section className="w-full px-6 py-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12 pt-8 border-t border-gray-800"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-red-400 bg-red-500/10 hover:bg-red-500/20 px-3 py-2 rounded-lg cursor-pointer transition-colors"
                    onClick={() => window.location.href = `/blog?search=${tag}`}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Share Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8 pt-8 border-t border-gray-800"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Share this story</h3>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                  Twitter
                </button>
                <button className="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                  Facebook
                </button>
                <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="w-full px-6 py-16 bg-gradient-to-br from-red-500/5 to-transparent">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-bold mb-12 text-center"
              >
                More <span className="text-red-500">Stories</span>
              </motion.h2>
              
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    className="bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-colors overflow-hidden group cursor-pointer"
                    onClick={() => window.location.href = `/blog/${relatedPost.slug}`}
                  >
                    <div className="h-32 bg-gradient-to-br from-red-500/30 to-gray-800 relative">
                      <div className="absolute top-3 left-3">
                        <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="mt-3 text-xs text-gray-500">
                        {formatDate(relatedPost.publishDate)} • {relatedPost.readTime}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;