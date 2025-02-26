import React, { useState } from 'react';
import { Check, Award, Shield, Heart } from 'lucide-react';

interface FacilityProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  detailedDescription: string;
}

const FacilitiesCard: React.FC<FacilityProps> = ({ title, description, icon, detailedDescription }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative overflow-hidden rounded-lg shadow-lg bg-white transition-all duration-300 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon Section */}
      <div className="h-40 bg-blue-50 flex items-center justify-center">
        <div className="text-blue-600 p-6 rounded-full bg-white shadow-md">
          {icon}
        </div>
      </div>
      
      {/* Detailed Description Overlay - shows on hover */}
      <div 
        className={`absolute inset-0 bg-blue-800 bg-opacity-90 flex flex-col justify-center items-center p-6 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
        <p className="text-white text-center">{detailedDescription}</p>
      </div>
      
      {/* Info Section */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const FacilitiesSection: React.FC = () => {
  const pillars = [
    {
      title: "Quality Education",
      description: "Providing world-class education through innovative teaching methods",
      icon: <Award size={36} />,
      detailedDescription: "Our commitment to quality education ensures that every student receives personalized attention and access to cutting-edge learning resources to maximize their potential."
    },
    {
      title: "Student Wellbeing",
      description: "Supporting the holistic development of all students",
      icon: <Heart size={36} />,
      detailedDescription: "We believe in nurturing the whole student - mind, body, and spirit - through comprehensive wellness programs, counseling services, and community engagement opportunities."
    },
    {
      title: "Safe Environment",
      description: "Creating a secure and inclusive learning atmosphere",
      icon: <Shield size={36} />,
      detailedDescription: "Our institution prioritizes safety and inclusivity, maintaining a welcoming environment where diversity is celebrated and every student feels protected and valued."
    },
    {
      title: "Academic Excellence",
      description: "Fostering a culture of continuous improvement and achievement",
      icon: <Check size={36} />,
      detailedDescription: "Through rigorous academic standards and dedicated faculty, we strive for excellence in all educational endeavors, preparing students to become leaders in their chosen fields."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">
          Our Educational Policies
          </h2>
          <p className="text-gray-600">
            These core principles guide our institution's approach to education and student development, forming the foundation of our commitment to excellence.
          </p>
        </div>
        
        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <FacilitiesCard
              key={index}
              title={pillar.title}
              description={pillar.description}
              icon={pillar.icon}
              detailedDescription={pillar.detailedDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;