import { motion } from 'framer-motion';
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24">
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="mt-20 bg-white p-10 rounded-lg shadow-md text-xl"
      >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row mb-16">
          <div className="lg:w-7/12 mb-8 lg:mb-0">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome To KNCS!</h1>
              <p className="mb-4 text-gray-700">
                Sorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod temin cididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci tation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure repreh nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occcu idatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="mb-4 text-gray-700">
                Horem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod temin cididunt ut labore et dolore magna aliqua Ut enim ad minim veniam,quis nostrude
              </p>
              <button className="mt-5 px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition duration-300 border border-blue-600">
                <span>More...</span>
              </button>
            </div>
          </div>
          <div className="lg:w-5/12">
            <div className="mb-8">
              <img 
                src="/api/placeholder/600/400" 
                alt="About Sikkha" 
                className="w-full h-auto rounded shadow-lg"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Scholarship Facility</h3>
              <span className="text-4xl font-bold text-blue-600 opacity-50">01</span>
            </div>
            <div>
              <p className="text-gray-600">
                Sorem ipsum dolor sitcon sectet adipis icing elit sed do eiusmod tems. incididune.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Advance Advisor</h3>
              <span className="text-4xl font-bold text-blue-600 opacity-50">02</span>
            </div>
            <div>
              <p className="text-gray-600">
                Sorem ipsum dolor sitcon sectet adipis icing elit sed do eiusmod tems. incididune.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Sports & Gaming</h3>
              <span className="text-4xl font-bold text-blue-600 opacity-50">03</span>
            </div>
            <div>
              <p className="text-gray-600">
                Sorem ipsum dolor sitcon sectet adipis icing elit sed do eiusmod tems. incididune.
              </p>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;