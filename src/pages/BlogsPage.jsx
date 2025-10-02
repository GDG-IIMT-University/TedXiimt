import React from "react";
import Header from '../components/Header';

// Sample blog data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "Announcing Our First Speaker: Dr. Elena Rodriguez",
    excerpt: "We are thrilled to announce that Dr. Elena Rodriguez, a renowned AI ethics researcher, will join us to explore the future of responsible technology.",
    publishDate: "2025-09-25",
    category: "Speaker Announcement",
    readTime: "4 min read",
    imageUrl: "/images/speaker-elena.jpg", // Remember to add alt text
  },
  {
    id: 2,
    title: "The Power of Small: A Theme Deep Dive",
    excerpt: "What does it mean to think big by starting small? Our curator breaks down the inspiration behind this year's theme and what to expect.",
    publishDate: "2025-09-18",
    category: "Event Updates",
    readTime: "5 min read",
    imageUrl: "/images/theme-deep-dive.jpg",
  },
  {
    id: 3,
    title: "Behind the Scenes: Our Venue Comes to Life",
    excerpt: "Take a sneak peek at how we're transforming the main auditorium into a space designed for connection and conversation.",
    publishDate: "2025-09-10",
    category: "Behind the Scenes",
    readTime: "3 min read",
    imageUrl: "/images/venue-setup.jpg",
  },
];

export default function BlogsPage() {
  return (
    <div className="min-h-dvh w-full overflow-x-hidden bg-gradient-to-br from-black via-[#1a1a1a] to-red-950 text-white">
      {/* Page Header */}
      <Header />
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Event Blog</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Your inside look at the ideas, speakers, and stories behind our event. Stay updated and dive deeper with us.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/30 transition-all duration-300 hover:transform hover:scale-[1.02]">
              {/* Post Image */}
              <div className="h-48 bg-gray-700 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={`Visual for ${post.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Post Content */}
              <div className="p-6">
                <div className="flex justify-between items-center text-sm text-white/60 mb-3">
                  <span className="bg-red-600/20 text-red-300 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold mb-3 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-white/70 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center text-sm">
                  <time className="text-white/50" dateTime={post.publishDate}>
                    {new Date(post.publishDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                  <button className="text-red-400 hover:text-red-300 font-medium transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More / Newsletter CTA */}
        <div className="text-center mt-16">
          <p className="text-white/70 mb-6">Stay connected with the latest updates from our event.</p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
            Load More Articles
          </button>
        </div>
      </section>
    </div>
  );
}