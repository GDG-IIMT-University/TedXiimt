import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const FormComponent = ({ formType, title, description, fields }) => {
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      const templateParams = {
        form_type: formType,
        to_email: 'adityarajvmc133@gmail.com',
        ...formData,
        message: `New ${formType} application:\n\n${Object.entries(formData).map(([key, value]) => `${key}: ${value}`).join('\n')}`
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // You'll need to replace this with actual EmailJS service ID
        'YOUR_TEMPLATE_ID', // You'll need to replace this with actual EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // You'll need to replace this with actual EmailJS public key
      );

      setSubmitStatus('success');
      setFormData({});
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">
          {title}
        </h2>
        <p className="text-gray-300 text-center mb-8">
          {description}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {fields.map((field, index) => (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleInputChange}
                  required={field.required}
                  placeholder={field.placeholder}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                />
              ) : field.type === 'select' ? (
                <select
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleInputChange}
                  required={field.required}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                >
                  <option value="">Select {field.label}</option>
                  {field.options.map(option => (
                    <option key={option} value={option} className="bg-black">
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleInputChange}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                />
              )}
            </motion.div>
          ))}

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-red-500 hover:bg-red-600 disabled:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </motion.button>
        </form>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center"
          >
            Thank you! Your application has been submitted successfully.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center"
          >
            Sorry, there was an error submitting your application. Please try again.
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default FormComponent;