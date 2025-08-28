import React from 'react';
import { motion } from 'framer-motion';

const Mystery = () => {
  return (
    <section id="mystery" className="w-full px-6 py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          The <span className="text-red-500">Mystery</span> Awaits
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-red-500/10 to-transparent rounded-3xl p-12 border border-red-500/20 backdrop-blur-md">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-4 right-4 text-red-500/30 text-4xl"
            >
              ?
            </motion.div>
            
            <div className="space-y-8">
              <div className="text-8xl text-red-500/50 font-bold">?</div>
              
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Something Extraordinary is Coming
              </h3>
              
              <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                We're preparing something special that will challenge your perspective, 
                ignite your curiosity, and leave you questioning everything you thought you knew.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="bg-white/5 rounded-xl p-6 border border-white/10"
                >
                  <div className="text-3xl text-red-500 mb-4">🔍</div>
                  <h4 className="text-lg font-semibold mb-2">Discover</h4>
                  <p className="text-gray-400 text-sm">Uncover hidden truths and revolutionary ideas</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="bg-white/5 rounded-xl p-6 border border-white/10"
                >
                  <div className="text-3xl text-red-500 mb-4">🧩</div>
                  <h4 className="text-lg font-semibold mb-2">Connect</h4>
                  <p className="text-gray-400 text-sm">Piece together the puzzle of innovation</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="bg-white/5 rounded-xl p-6 border border-white/10"
                >
                  <div className="text-3xl text-red-500 mb-4">💡</div>
                  <h4 className="text-lg font-semibold mb-2">Transform</h4>
                  <p className="text-gray-400 text-sm">Experience ideas that change everything</p>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-12"
              >
                <p className="text-red-500 font-semibold text-lg">
                  Stay tuned for the revelation...
                </p>
                <div className="flex justify-center mt-4">
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-red-500 rounded-full mx-1"
                  />
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    className="w-2 h-2 bg-red-500 rounded-full mx-1"
                  />
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    className="w-2 h-2 bg-red-500 rounded-full mx-1"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mystery;