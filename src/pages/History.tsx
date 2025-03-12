import React, { useState, useEffect } from 'react';

// Define TypeScript interfaces for our data structure
interface HistoricalEvent {
  id: number;
  year: number;
  title: string;
  description: string;
  imageUrl?: string;
}

interface HistorySection {
  id: number;
  title: string;
  description: string;
  events: HistoricalEvent[];
}

const SchoolHistoryPage: React.FC = () => {
  // State for storing history data that will come from API later
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [historySections, setHistorySections] = useState<HistorySection[]>([]);
  
  // Fetch data function - will be replaced with actual API call
  useEffect(() => {
    const fetchHistoryData = async () => {
      setIsLoading(true);
      try {
        // This is a placeholder for your actual API call
        // Replace with your actual endpoint when ready
        // const response = await fetch('/api/school-history');
        // const data = await response.json();
        
        // Temporary mock data
        const mockData: HistorySection[] = [
          {
            id: 1,
            title: "Founding Years",
            description: "The early days that shaped our school's foundation and values.",
            events: [
              {
                id: 1,
                year: 1950,
                title: "School Foundation",
                description: "Our school was established with a vision to provide quality education to all students regardless of background.",
                imageUrl: "/api/placeholder/600/400"
              },
              {
                id: 2,
                year: 1955,
                title: "First Graduating Class",
                description: "The inaugural class graduated, setting a standard of excellence for future generations.",
                imageUrl: "/api/placeholder/600/400"
              }
            ]
          },
          {
            id: 2,
            title: "Growth and Development",
            description: "A period of expansion and academic innovation.",
            events: [
              {
                id: 3,
                year: 1970,
                title: "New Campus",
                description: "The school moved to its current location, with modern facilities to support our growing community.",
                imageUrl: "/api/placeholder/600/400"
              },
              {
                id: 4,
                year: 1985,
                title: "Technology Program",
                description: "Pioneering technology curriculum introduced, setting our students apart in the digital age.",
                imageUrl: "/api/placeholder/600/400"
              }
            ]
          },
          {
            id: 3,
            title: "Modern Era",
            description: "Embracing contemporary challenges and opportunities in education.",
            events: [
              {
                id: 5,
                year: 2000,
                title: "Centennial Celebration",
                description: "A landmark celebration of our school's commitment to educational excellence for over 50 years.",
                imageUrl: "/api/placeholder/600/400"
              },
              {
                id: 6,
                year: 2015,
                title: "International Recognition",
                description: "Our school received international accreditation for its outstanding academic programs.",
                imageUrl: "/api/placeholder/600/400"
              }
            ]
          }
        ];
        
        setTimeout(() => {
          setHistorySections(mockData);
          setIsLoading(false);
        }, 1000); // Simulate network delay
      } catch (err) {
        setError("Failed to load school history. Please try again later.");
        setIsLoading(false);
      }
    };
    
    fetchHistoryData();
  }, []);
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg font-medium text-gray-700">Loading our history...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <svg className="w-16 h-16 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h2 className="mt-4 text-xl font-bold text-gray-800">Something went wrong</h2>
          <p className="mt-2 text-gray-600">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      {/* Hero Section with Enhanced Modern Aesthetics */}
<div className="relative h-[70vh] overflow-hidden">
  {/* Background image with parallax effect */}
  <div className="absolute inset-0 w-full h-full">
    <img 
      src="../src/assets/banner1.jpg" 
      alt="School Historical Building" 
      className="w-full h-full object-cover transform scale-105 transition-transform duration-10000 animate-subtle-zoom"
    />
  </div>
  
  {/* Modern gradient overlay with dynamic blend */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-800/60 to-transparent"></div>
  
  {/* Decorative elements */}
  <div className="absolute top-0 left-0 w-full h-full opacity-40">
    <div className="absolute top-10 right-10 w-60 h-60 rounded-full bg-purple-500/20 blur-3xl"></div>
    <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-blue-400/20 blur-3xl"></div>
  </div>
  
  {/* Content container with improved spacing and layout */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-start">
    <div className="max-w-2xl space-y-4">
      {/* Small pre-title with animated reveal */}
      <div className="overflow-hidden">
        <p className="text-blue-200 font-medium tracking-wider uppercase text-sm mb-3 transform translate-y-0 transition-transform duration-1000 ease-out animate-fade-in-up">
          Our Legacy • Our Pride
        </p>
      </div>
      
      {/* Main title with refined typography */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">Our School</span>
        <span className="block">History</span>
      </h1>
      
      {/* Description with improved readability */}
      <p className="mt-6 text-lg md:text-xl text-blue-100/90 max-w-xl leading-relaxed">
        Discover the extraordinary journey that shaped our institution and the enduring legacy we continue to build together.
      </p>
    </div>
  </div>
  
  {/* Stylish wave divider at the bottom with smoother transition */}
  <div className="absolute bottom-0 left-0 right-0 z-10">
    <svg viewBox="0 0 1440 120" fill="white" preserveAspectRatio="none" className="h-20 w-full">
      <path d="M0,96L60,85.3C120,75,240,53,360,53.3C480,53,600,75,720,74.7C840,75,960,53,1080,42.7C1200,32,1320,32,1380,32L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
    </svg>
  </div>
</div>
     
      
      {/* Timeline Content */}
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {historySections.map((section) => (
              <div key={section.id} className="relative">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                  <p className="mt-2 text-lg text-gray-600">{section.description}</p>
                </div>
                
                <div className="space-y-16">
                  {section.events.map((event, index) => (
                    <div key={event.id} className="relative">
                      <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} items-center`}>
                        <div className="md:w-1/2 p-4">
                          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                            {event.imageUrl && (
                              <div className="aspect-w-16 aspect-h-9">
                                <img 
                                  src={event.imageUrl} 
                                  alt={event.title}
                                  className="w-full object-cover"
                                />
                              </div>
                            )}
                            <div className="p-6">
                              <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full">
                                {event.year}
                              </div>
                              <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
                              <p className="mt-3 text-gray-600">{event.description}</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Timeline connector for desktop */}
                        <div className="hidden md:block w-1/2 p-4">
                          <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                            <div className="w-24 border-t-2 border-blue-500 mt-8"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Vertical line connectors for mobile */}
                      {index < section.events.length - 1 && (
                        <div className="absolute left-1/2 top-full h-16 w-px bg-blue-300 transform -translate-x-1/2 md:hidden"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="mt-24 bg-white rounded-2xl p-8 shadow-sm text-center">
            <h2 className="text-2xl font-bold text-gray-900">Become Part of Our History</h2>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
              Our school continues to write its story through the achievements of our students, faculty, and community.
            </p>
            <div className="mt-6">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Learn More About Enrollment
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SchoolHistoryPage;