import React, { useState } from 'react';
import { motion } from 'framer-motion';
import speakersData from '../data/speakersData';
import './Speakers.css';

const Speakers = ({ isHomepage = false }) => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const displaySpeakers = isHomepage ? speakersData.slice(0, 4) : speakersData;

  const handleSpeakerClick = (speaker) => {
    setSelectedSpeaker(speaker);
  };

  const closeModal = () => {
    setSelectedSpeaker(null);
  };

  return (
    <section className="speakers-section">
      <div className="speakers-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="speakers-header"
        >
          <h2 className="speakers-title">
            Our <span className="speakers-title-highlight">Speakers</span>
          </h2>
          <p className="speakers-subtitle">
            Meet the brilliant minds sharing their ideas at TEDxIIMT
          </p>
        </motion.div>

        {/* Speakers Grid */}
        <div className="speakers-grid">
          {displaySpeakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="speaker-card"
              onClick={() => handleSpeakerClick(speaker)}
            >
              {/* Image Container */}
              <div className="speaker-image-wrapper">
                <div className="speaker-image-container">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="speaker-image"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x400/000000/EB0028?text=' + speaker.name.split(' ').map(n => n[0]).join('');
                    }}
                  />
                  <div className="speaker-image-overlay"></div>
                </div>
              </div>

              {/* Info Container */}
              <div className="speaker-info">
                <h3 className="speaker-name">{speaker.name}</h3>
                <p className="speaker-designation">{speaker.designation}</p>
                <p className="speaker-bio">{speaker.shortBio}</p>
                <div className="speaker-quote">
                  <svg className="quote-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                  <p className="quote-text">{speaker.quote}</p>
                </div>
              </div>

              {/* Read More Indicator */}
              <div className="speaker-read-more">
                <span>Read More</span>
                <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button for Homepage */}
        {isHomepage && speakersData.length > 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="speakers-view-all"
          >
            <a href="/speakers" className="view-all-button">
              View All Speakers
              <svg className="button-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        )}
      </div>

      {/* Modal for Detailed View */}
      {selectedSpeaker && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="speaker-modal-overlay"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="speaker-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="modal-content">
              <div className="modal-image-container">
                <img
                  src={selectedSpeaker.image}
                  alt={selectedSpeaker.name}
                  className="modal-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400/000000/EB0028?text=' + selectedSpeaker.name.split(' ').map(n => n[0]).join('');
                  }}
                />
              </div>

              <div className="modal-info">
                <h3 className="modal-name">{selectedSpeaker.name}</h3>
                <p className="modal-designation">{selectedSpeaker.designation}</p>
                <div className="modal-divider"></div>
                <p className="modal-bio">{selectedSpeaker.detailedBio}</p>
                <div className="modal-quote">
                  <svg className="quote-icon-large" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                  <p className="quote-text-large">{selectedSpeaker.quote}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Speakers;
