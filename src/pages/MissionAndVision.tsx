import React from 'react';
import { motion } from 'framer-motion';

// Define an interface for the component's props
interface AboutProps {
  fullWidthImage?: string;
  fullWidthImageText?: string;
  institutionName?: string;
  aboutUsTitle?: string;
  aboutUsDescription?: string;
  aboutUsImage?: string;
  visionTitle?: string;
  visionDescription?: string;
  missionTitle?: string;
  missionDescription?: string;
}

const About: React.FC<AboutProps> = ({
  fullWidthImage = "../src/assets/banner2.jpg",
  fullWidthImageText = "Transforming Knowledge, Inspiring Futures",
  institutionName = "Academic Excellence Institute",
  aboutUsTitle = "Our Legacy",
  aboutUsDescription = "Founded on the principles of academic rigor and holistic development, our institution has been a beacon of educational excellence for decades. We believe in nurturing not just scholars, but visionary leaders who will shape the future of our global society.",
  aboutUsImage = "../src/assets/20241005_121134.jpg",
  visionTitle = "Our Vision",
  visionDescription = "To be a world-renowned center of transformative education, driving innovation, critical thinking, and global understanding through cutting-edge research and comprehensive learning experiences.",
  missionTitle = "Our Mission",
  missionDescription = "Empowering students with comprehensive, interdisciplinary education that cultivates intellectual curiosity, critical reasoning, and the skills necessary to address complex global challenges."
}) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative w-full h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={fullWidthImage} 
            alt="Campus Background" 
            className="w-full h-full object-cover filter brightness-50"
          />
        </div>
        <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight mb-4">
            {institutionName}
          </h1>
          <h2 className="text-white text-2xl md:text-4xl font-light">
            {fullWidthImageText}
          </h2>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* About Us Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-blue-900 relative">
              {aboutUsTitle}
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-500"></span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {aboutUsDescription}
            </p>
          </div>
          <div className="group relative">
            <div className="absolute -inset-2 bg-blue-200 rounded-lg opacity-25 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img 
                src={aboutUsImage} 
                alt="About Us" 
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </motion.div>

        {/* Vision and Mission */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden border-t-4 border-blue-600 hover:shadow-2xl transition-shadow"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-300"></div>
            <h3 className="text-3xl font-bold text-blue-900 mb-6">
              {visionTitle}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {visionDescription}
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden border-t-4 border-purple-600 hover:shadow-2xl transition-shadow"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-300"></div>
            <h3 className="text-3xl font-bold text-blue-900 mb-6">
              {missionTitle}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {missionDescription}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;