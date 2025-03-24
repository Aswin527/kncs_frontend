import React, { useState } from 'react';

type Achievement = {
  id: number;
  title: string;
  description: string;
  year: number;
  category: string;
  image: string;
};

const SchoolAchievementsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  // Sample achievement data
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "National Science Competition Winners",
      description: "Our students won first place in the National Science Competition with their innovative project on renewable energy solutions.",
      year: 2024,
      category: "academic",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "State Basketball Champions",
      description: "Our varsity basketball team secured the state championship trophy after an undefeated season.",
      year: 2024,
      category: "sports",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Community Service Excellence Award",
      description: "Recognized for contributing over 5,000 hours of community service through various outreach programs.",
      year: 2023,
      category: "community",
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "International Math Olympiad Gold Medal",
      description: "Two of our students brought home gold medals from the International Math Olympiad, ranking among the top participants globally.",
      year: 2023,
      category: "academic",
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "National Choir Competition Winner",
      description: "Our school choir won the national championship with their exceptional performance of classical and contemporary pieces.",
      year: 2024,
      category: "arts",
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Eco-School Certification",
      description: "Awarded the prestigious Eco-School certification for our sustainable practices and environmental education initiatives.",
      year: 2023,
      category: "sustainability",
      image: "/api/placeholder/600/400"
    },
    {
      id: 7,
      title: "Regional Debate Tournament Champions",
      description: "Our debate team demonstrated exceptional rhetorical skills and critical thinking to win the regional championship.",
      year: 2024,
      category: "academic",
      image: "/api/placeholder/600/400"
    },
    {
      id: 8,
      title: "Young Entrepreneur Award",
      description: "The student business club received the Young Entrepreneur Award for their innovative startup project.",
      year: 2023,
      category: "academic",
      image: "/api/placeholder/600/400"
    },
    {
      id: 9,
      title: "State Track & Field Champions",
      description: "Our track and field team broke three state records and won the overall championship.",
      year: 2023,
      category: "sports",
      image: "/api/placeholder/600/400"
    }
  ];

  // Filter achievements based on category and search query
  const filteredAchievements = achievements.filter(achievement => {
    const matchesCategory = selectedCategory === "all" || achievement.category === selectedCategory;
    const matchesSearch = achievement.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          achievement.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get unique categories
  const categories = ["all", ...new Set(achievements.map(a => a.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-indigo-900 mb-3">Our Achievements</h1>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Celebrating excellence in academics, sports, arts, and community service. 
            Our students and faculty continue to reach new heights of achievement.
          </p>
        </header>

        {/* Featured Achievement */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl overflow-hidden shadow-xl">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="/api/placeholder/800/500" 
                  alt="National Science Competition Winners" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-white text-sm font-medium mb-4">
                  Featured Achievement
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Excellence in Education</h2>
                <p className="text-white text-opacity-90 mb-6">
                  Our school has been recognized among the top 5% nationally for academic excellence, 
                  innovative teaching methods, and exceptional student outcomes. This prestigious recognition 
                  highlights our commitment to providing quality education and nurturing the leaders of tomorrow.
                </p>
                <button className="bg-white text-indigo-600 font-medium px-6 py-2 rounded-lg hover:bg-opacity-90 transition duration-150 self-start">
                  Read the Full Story
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Filter and Search */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition duration-150 ${
                  selectedCategory === category 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-indigo-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          <div className="w-full md:w-64">
            <input
              type="text"
              placeholder="Search achievements..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        
        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAchievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                    {achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
                  </span>
                  <span className="text-gray-500 font-medium">{achievement.year}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{achievement.title}</h3>
                <p className="text-gray-600 mb-4">{achievement.description}</p>
                <button className="text-indigo-600 font-medium hover:text-indigo-800 transition duration-150 flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* No results message */}
        {filteredAchievements.length === 0 && (
          <div className="text-center py-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-medium text-gray-700 mb-2">No achievements found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
        
        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">Our Success by the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">45+</div>
              <p className="text-gray-600">Academic Awards</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">23</div>
              <p className="text-gray-600">Sports Championships</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">18</div>
              <p className="text-gray-600">Arts Recognitions</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">10k+</div>
              <p className="text-gray-600">Community Service Hours</p>
            </div>
          </div>
        </div>
        
    </div>
    </div>
  );
};

export default SchoolAchievementsPage;