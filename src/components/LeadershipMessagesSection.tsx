import React, { useState } from 'react';
import { Quote } from 'lucide-react';

interface LeaderMessageProps {
  name: string;
  position: string;
  image: string;
  message: string;
  extendedMessage: string;
}

const LeaderMessageCard: React.FC<LeaderMessageProps> = ({ 
  name, 
  position, 
  image, 
  message, 
  extendedMessage 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-col">
        {/* Image section - now at the top */}
        <div className="w-full">
          <img 
            src={image || "/api/placeholder/400/500"} 
            alt={name} 
            className="w-full h-64 object-cover"
          />
        </div>
        
        {/* Content section - now below the image */}
        <div className="p-6">
          <div className="mb-3 flex items-center text-blue-600">
            <Quote size={24} />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
          <p className="text-blue-600 font-medium mb-4">{position}</p>
          
          <div className="relative">
            <p className="text-gray-700">
              {isExpanded ? extendedMessage : message}
            </p>
            
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const LeadershipMessagesSection: React.FC = () => {
  const leaderMessages = [
    {
      name: "Mrs. Sudha Vineethan",
      position: "Principal",
      image: "/api/placeholder/400/500",
      message: "As the Principal of Sikkha, I am committed to creating an environment where every student can thrive academically and personally. Our institution strives for excellence in education...",
      extendedMessage: "As the Principal of Sikkha, I am committed to creating an environment where every student can thrive academically and personally. Our institution strives for excellence in education while nurturing well-rounded individuals. We believe in providing not just knowledge from textbooks, but also life skills and values that will help our students become responsible citizens. Our dedicated faculty works tirelessly to ensure that each student receives personalized attention and guidance. Together, we are building a community of lifelong learners who will make significant contributions to society. I invite you to join us on this exciting educational journey and experience the difference that quality education can make."
    },
    {
      name: "Sri. P K Sudhish",
      position: "Secretary",
      image: "/api/placeholder/400/500",
      message: "The administrative backbone of our institution remains committed to providing seamless support services to our students, faculty, and parents. We continuously work to improve processes...",
      extendedMessage: "The administrative backbone of our institution remains committed to providing seamless support services to our students, faculty, and parents. We continuously work to improve processes and create systems that enhance the educational experience. Our office ensures that all administrative procedures are efficient, transparent, and user-friendly. We take pride in maintaining excellent communication channels between all stakeholders and resolving issues promptly. Additionally, we actively seek feedback to improve our services and implement innovative solutions to administrative challenges. Our goal is to create a supportive infrastructure that allows our educational mission to flourish without hindrance."
    },
    {
      name: "Sri. Sudhakaran Ramanthali",
      position: "President",
      image: "/api/placeholder/400/500",
      message: "Our vision for Sikkha is to be a beacon of educational innovation and excellence. As we move forward, we are expanding our horizons to incorporate cutting-edge teaching methodologies...",
      extendedMessage: "Our vision for Sikkha is to be a beacon of educational innovation and excellence. As we move forward, we are expanding our horizons to incorporate cutting-edge teaching methodologies and technologies. The rapidly changing global landscape demands that we prepare our students not just for today's challenges, but for the unforeseen challenges of tomorrow. Our strategic initiatives focus on sustainable growth, global partnerships, and continuous quality improvement. We are investing in research, faculty development, and infrastructure to create a world-class educational institution. Our commitment to diversity, equity, and inclusion remains unwavering as we strive to create opportunities for students from all backgrounds. Together, we are building an institution that will stand as a testament to the transformative power of education."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">
            Messages From Our Leadership
          </h2>
          <p className="text-gray-600">
            Hear directly from our institution's leaders about our vision, mission, and commitment to educational excellence.
          </p>
        </div>
        
        {/* Leadership Messages in a grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaderMessages.map((leader, index) => (
            <LeaderMessageCard
              key={index}
              name={leader.name}
              position={leader.position}
              image={leader.image}
              message={leader.message}
              extendedMessage={leader.extendedMessage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipMessagesSection;