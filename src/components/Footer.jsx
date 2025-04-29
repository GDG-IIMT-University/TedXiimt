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
            <li><a href="#events" className="hover:text-red-400 transition">Events</a></li>
            <li><a href="#speakers" className="hover:text-red-400 transition">Speakers</a></li>
            <li><a href="#about" className="hover:text-red-400 transition">About</a></li>
            <li><a href="#contact" className="hover:text-red-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold text-red-500 mb-4">Contact Us</h3>
          <p className="text-gray-400 text-sm mb-2">
            Email: <a href="mailto:tedxiimt@iimt.ac.in" className="hover:text-red-400">tedxiimt@iimt.ac.in</a>
          </p>
          <p className="text-gray-400 text-sm">
            Phone: <a href="tel:+911234567890" className="hover:text-red-400">+91 12345 67890</a>
          </p>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="mt-12 text-center text-gray-500 text-xs border-t border-white/10 pt-6">
        © {new Date().getFullYear()} TEDxIIMT. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
