import React from 'react';
import SchoolCurriculum from '../components/SchoolCurriculum';
import TextBooks from '../components/TextBooks';

const AcademicsPage: React.FC = () => {
 

  return (
    <div className="font-sans">
      {/* Hero Section with Background Image - No blue background */}
      <div className="relative py-16">
        {/* Background Image - Replace with actual image in production */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('/api/placeholder/1920/1080')" }}
        />
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="flex flex-col items-center text-center">
            {/* CBSE Logo Image Placeholder with proper sizing */}
            <div className="w-28 h-28 mb-6 bg-white overflow-hidden flex items-center justify-center">
              <img 
                src="./src/assets/cbse_logo.png" 
                alt="CBSE Logo" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            {/* Description */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Central Board of Secondary Education</h1>
              <p className="text-xl max-w-3xl mx-auto text-gray-600">
              The school follows CBSE syllabus. Students are monitored and evaluated on a regular basis. We integrate various teaching methods into a traditional board based curriculum with a multi-model approach and focus not only on basics but also on a higher level of thinking skills. Besides these, assignments and projects are given to the students on a regular basis to assess the students.
              </p>
            </div>
          </div>
        </div>
      </div>
    
    <SchoolCurriculum/>
    <TextBooks/>
      
    </div>
  );
};

export default AcademicsPage;