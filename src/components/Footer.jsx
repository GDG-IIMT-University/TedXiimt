import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* About Us */}
        <div>
          <h3 className="text-xl font-semibold text-red-500 mb-4">About Us</h3>
          <p className="text-gray-400 text-sm">
            TEDxIIMT is an independently organized TED event hosted at IIMT University, bringing together thinkers, creators, and changemakers to share ideas worth spreading.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-red-500 mb-4">Quick Links</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a href="/" className="hover:text-red-400 transition">Home</a></li>
            <li><a href="/mystery" className="hover:text-red-400 transition">Mystery</a></li>
            <li><a href="/team" className="hover:text-red-400 transition">Team</a></li>
            <li><a href="/gallery" className="hover:text-red-400 transition">Gallery</a></li>
            <li><a href="/sponsors" className="hover:text-red-400 transition">Sponsors</a></li>
            <li><a href="#contact" className="hover:text-red-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold text-red-500 mb-4">Contact Us</h3>
          <p className="text-gray-400 text-sm mb-2">
            Email: <a href="mailto:info@tedxiimtuniversity.com" className="hover:text-red-400">info@tedxiimtuniversity.com</a>
          </p>
          <p className="text-gray-400 text-sm">
            Phone: <a href="tel:+918923550415" className="hover:text-red-400">+91 89235 50415</a>
          </p>
        </div>

      </div>

      {/* Required TEDx License Text */}
      <div className="mt-12 text-center border-t border-white/10 pt-6 space-y-3">
        <p className="text-gray-400 text-sm font-medium">
          This independent TEDx event is operated under license from TED.
        </p>
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} TEDxIIMT. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
