import React, { useState } from 'react';

type Achievement = {
  id: number;
  student: string;
  title: string;
  description: string;
  category: 'academic' | 'sports' | 'arts' | 'community';
  date: string;
  imageUrl: string;
};

const StudentAchievementsPage: React.FC = () => {
  // Sample data - in a real application, this would come from an API or props
  const achievements: Achievement[] = [
    {
      id: 1,
      student: "Emma Johnson",
      title: "National Science Competition Winner",
      description: "First place in the national science competition with an innovative project on renewable energy solutions.",
      category: "academic",
      date: "February 15, 2025",
      imageUrl: "/api/placeholder/400/300"
    },
    {
      id: 2,
      student: "Michael Chen",
      title: "Regional Basketball Championship MVP",
      description: "Led the school team to victory and was named Most Valuable Player in the regional championship.",
      category: "sports",
      date: "January 28, 2025",
      imageUrl: "/api/placeholder/400/300"
    },
    {
      id: 3,
      student: "Sophia Rodriguez",
      title: "Young Artist Exhibition Feature",
      description: "Had artwork selected for display at the prestigious Young Artists Exhibition at the city gallery.",
      category: "arts",
      date: "March 5, 2025",
      imageUrl: "/api/placeholder/400/300"
    },
    {
      id: 4,
      student: "Jamal Williams",
      title: "Community Service Award",
      description: "Recognized for 200+ hours of volunteer work at the local homeless shelter and organizing donation drives.",
      category: "community",
      date: "February 20, 2025",
      imageUrl: "/api/placeholder/400/300"
    },
    {
      id: 5,
      student: "Aisha Patel",
      title: "National Debate Championship Finalist",
      description: "Reached the final round of the national debate championship, representing our school with distinction.",
      category: "academic",
      date: "March 10, 2025",
      imageUrl: "/api/placeholder/400/300"
    },
    {
      id: 6,
      student: "Carlos Mendez",
      title: "State Swimming Record",
      description: "Broke the state record for 100m freestyle and qualified for national championships.",
      category: "sports",
      date: "February 12, 2025",
      imageUrl: "/api/placeholder/400/300"
    }
  ];

  const [filter, setFilter] = useState<string>('all');
  
  const filteredAchievements = filter === 'all' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === filter);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'academic': return 'bg-blue-100 text-blue-800';
      case 'sports': return 'bg-green-100 text-green-800';
      case 'arts': return 'bg-purple-100 text-purple-800';
      case 'community': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modified Header Section with Reduced Height */}
      <div className="relative overflow-hidden h-64 md:h-96">
        {/* Fixed Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/api/placeholder/1920/1080')",
          }}
        ></div>
        
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/70 to-blue-900/80"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full -ml-48 -mb-48"></div>
        </div>
        
        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight text-center">
            <span className="block">Student Achievements</span>
          </h1>
          <div className="h-1 w-24 bg-white mt-4 rounded-full"></div>
          <p className="mt-4 max-w-2xl text-lg text-white text-center font-light">
            Celebrating excellence and remarkable accomplishments of our talented students.
          </p>
          
          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 z-10">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1 rounded-full font-medium transition-all duration-300 ${
                filter === 'all' 
                  ? 'bg-white text-indigo-600 shadow-lg' 
                  : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('academic')}
              className={`px-4 py-1 rounded-full font-medium transition-all duration-300 ${
                filter === 'academic' 
                  ? 'bg-white text-blue-600 shadow-lg' 
                  : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
              }`}
            >
              Academic
            </button>
            <button
              onClick={() => setFilter('sports')}
              className={`px-4 py-1 rounded-full font-medium transition-all duration-300 ${
                filter === 'sports' 
                  ? 'bg-white text-green-600 shadow-lg' 
                  : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
              }`}
            >
              Sports
            </button>
            <button
              onClick={() => setFilter('arts')}
              className={`px-4 py-1 rounded-full font-medium transition-all duration-300 ${
                filter === 'arts' 
                  ? 'bg-white text-purple-600 shadow-lg' 
                  : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
              }`}
            >
              Arts
            </button>
            <button
              onClick={() => setFilter('community')}
              className={`px-4 py-1 rounded-full font-medium transition-all duration-300 ${
                filter === 'community' 
                  ? 'bg-white text-orange-600 shadow-lg' 
                  : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
              }`}
            >
              Community
            </button>
          </div>
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAchievements.map((achievement) => (
            <div 
              key={achievement.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={achievement.imageUrl} 
                  alt={achievement.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${getCategoryColor(achievement.category)}`}>
                  {achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-500 mb-4">{achievement.student} • {achievement.date}</p>
                <p className="text-gray-700 mb-4">{achievement.description}</p>
                <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-indigo-50 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Achievement Highlights</h2>
            <div className="h-1 w-16 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-sm text-center overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-200 opacity-50 rounded-full -mr-12 -mt-12"></div>
              <p className="relative text-5xl font-bold text-indigo-600">42</p>
              <p className="relative text-lg font-medium text-gray-700 mt-2">National Awards</p>
            </div>
            <div className="relative bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl shadow-sm text-center overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-200 opacity-50 rounded-full -mr-12 -mt-12"></div>
              <p className="relative text-5xl font-bold text-green-600">87</p>
              <p className="relative text-lg font-medium text-gray-700 mt-2">Regional Championships</p>
            </div>
            <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-sm text-center overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-200 opacity-50 rounded-full -mr-12 -mt-12"></div>
              <p className="relative text-5xl font-bold text-purple-600">23</p>
              <p className="relative text-lg font-medium text-gray-700 mt-2">Scholarships Earned</p>
            </div>
            <div className="relative bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl shadow-sm text-center overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-200 opacity-50 rounded-full -mr-12 -mt-12"></div>
              <p className="relative text-5xl font-bold text-orange-600">156</p>
              <p className="relative text-lg font-medium text-gray-700 mt-2">Student Recognitions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAchievementsPage;