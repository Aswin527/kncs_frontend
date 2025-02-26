import React from 'react';

interface AchievementProps {
  imageUrl: string;
  authorImageUrl: string;
  category: string;
  title: string;
  description: string;
  participants: number;
  likes: number;
}

const AchievementCard: React.FC<AchievementProps> = ({
  imageUrl,
  authorImageUrl,
  category,
  title,
  description,
  participants,
  likes
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img 
          src={imageUrl || "/api/placeholder/400/250"} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute -bottom-4 left-4">
          <img 
            src={authorImageUrl || "/api/placeholder/80/80"} 
            alt="Award recipient" 
            className="w-16 h-16 rounded-full border-4 border-white shadow"
          />
        </div>
      </div>
      
      <div className="p-6 pt-8">
        <div className="mb-4">
          <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        
        <h2 className="text-xl font-bold mb-3">
          <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors">
            {title}
          </a>
        </h2>
        
        <p className="text-gray-600 mb-4">
          {description}
        </p>
      </div>
      
      <div className="border-t border-gray-100 px-6 py-3 flex items-center justify-between bg-gray-50">
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <span>{participants}</span>
          </div>
          
          <div className="flex items-center text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span>{likes}</span>
          </div>
        </div>
        
        <div>
          <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

const achievements = [
  {
    imageUrl: "/api/placeholder/400/250",
    authorImageUrl: "/api/placeholder/80/80",
    category: "Research",
    title: "Excellence in Innovation",
    description: "Recognized for outstanding contributions to innovation in educational technology research.",
    participants: 35,
    likes: 42
  },
  {
    imageUrl: "/api/placeholder/400/250",
    authorImageUrl: "/api/placeholder/80/80",
    category: "Academic",
    title: "Outstanding Teaching Award",
    description: "Honored for exceptional teaching methods and positive student outcomes.",
    participants: 28,
    likes: 35
  },
  {
    imageUrl: "/api/placeholder/400/250",
    authorImageUrl: "/api/placeholder/80/80",
    category: "Community",
    title: "Service Excellence",
    description: "Recognized for dedication to community engagement and service learning initiatives.",
    participants: 47,
    likes: 53
  },
  {
    imageUrl: "/api/placeholder/400/250",
    authorImageUrl: "/api/placeholder/80/80",
    category: "Leadership",
    title: "Distinguished Leadership",
    description: "Awarded for outstanding leadership in educational program development.",
    participants: 31,
    likes: 39
  }
];

const AchievementsSection: React.FC = () => {
  return (
    <section 
      id="achievements" 
      className="py-24 bg-gradient-to-b from-blue-800 to-blue-900 bg-cover bg-center"
      style={{ backgroundImage: "url('/api/placeholder/1900/800')" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Achievements & Awards</h2>
          <p className="text-gray-900 text-lg">
            Our commitment to excellence has been recognized through various prestigious awards and achievements,
            reflecting our dedication to innovation and quality in education.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={index}
              {...achievement}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;