import React, { useState } from 'react';

// Define TypeScript interfaces
interface SchoolFacility {
  id: number;
  name: string;
  description: string;
  image: string;
  features: string[];
  equipmentList?: string[];
}

const CampusTourPage: React.FC = () => {
  // School facilities data
  const facilities: SchoolFacility[] = [
    {
      id: 1,
      name: "Sports Complex",
      description: "Our state-of-the-art sports complex spans over 5 acres and includes facilities for various outdoor sports. It features well-maintained grounds that provide students with ample space to develop their athletic abilities and team-building skills.",
      image: "/api/placeholder/800/500",
      features: ["Football field with running track", "Basketball courts", "Tennis courts", "Cricket pitch", "Athletics facilities"],
      equipmentList: ["Sports equipment storage", "Changing rooms with lockers", "Spectator seating", "Drinking water stations"]
    },
    {
      id: 2,
      name: "Auditorium",
      description: "Our modern auditorium is designed to host a variety of events from school assemblies to dramatic performances and musical concerts. With excellent acoustics and comfortable seating, it provides the perfect venue for student showcases and community gatherings.",
      image: "/api/placeholder/800/500",
      features: ["500+ seating capacity", "Professional sound system", "Advanced lighting equipment", "Backstage area", "Orchestra pit"],
      equipmentList: ["Digital projector and screen", "Wireless microphones", "Sound mixing console", "Theatrical curtains", "Climate control system"]
    },
    {
      id: 3,
      name: "Indoor Sports Lab",
      description: "Our indoor sports lab provides students with opportunities to engage in physical activities regardless of weather conditions. This multi-purpose facility supports various sports and includes advanced training equipment for athletes.",
      image: "/api/placeholder/800/500",
      features: ["Badminton courts", "Table tennis area", "Gymnastics equipment", "Indoor basketball court", "Fitness assessment tools"],
      equipmentList: ["Training mats", "Exercise equipment", "Sports performance analyzers", "First aid station", "Video analysis system"]
    },
    {
      id: 4,
      name: "Library & Learning Center",
      description: "Our library is more than just a collection of books—it's a dynamic learning environment designed to inspire curiosity and support academic excellence. With digital and print resources, it serves as the intellectual heart of our campus.",
      image: "/api/placeholder/800/500",
      features: ["Extensive book collection", "Digital research databases", "Quiet study zones", "Collaborative learning spaces", "Multimedia center"],
      equipmentList: ["Computer workstations", "E-readers and tablets", "Printing and scanning facilities", "Reference materials", "Educational software"]
    },
    {
      id: 5,
      name: "Science Laboratories",
      description: "Our cutting-edge science laboratories provide hands-on learning environments for physics, chemistry, and biology. Each lab is equipped with the latest scientific instruments that allow students to experiment, observe, and analyze real-world phenomena.",
      image: "/api/placeholder/800/500",
      features: ["Physics lab", "Chemistry lab", "Biology lab", "Environmental science center", "Preparation rooms"],
      equipmentList: ["Microscopes", "Chemical analysis equipment", "Physics demonstration tools", "Specimen collections", "Safety equipment"]
    },
    {
      id: 6,
      name: "Technology Hub",
      description: "Our technology hub features the latest computing equipment and software to support digital literacy and computational thinking. This space encourages innovation and prepares students for a technology-driven future.",
      image: "/api/placeholder/800/500",
      features: ["Computer programming lab", "Robotics workshop", "3D printing station", "Digital media studio", "IT support center"],
      equipmentList: ["Desktop computers", "Robotics kits", "3D printers", "Digital cameras", "VR/AR equipment"]
    }
  ];

  const [activeFacility, setActiveFacility] = useState<SchoolFacility>(facilities[0]);
  const [activeTab, setActiveTab] = useState<'features' | 'equipment'>('features');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative h-80 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <img 
            src="../src/assets/class.jpg" 
            alt="School facilities overview" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Facilities</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Discover the exceptional facilities that support our students' academic, athletic, and creative pursuits.
          </p>
        </div>
      </div>

      {/* Facilities Navigation */}
      <div className="bg-white shadow-md sticky top-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 scrollbar-hide">
            {facilities.map((facility) => (
              <button
                key={facility.id}
                onClick={() => setActiveFacility(facility)}
                className={`whitespace-nowrap px-4 py-2 mx-2 rounded-lg font-medium transition-all duration-300 first:ml-0 ${
                  activeFacility.id === facility.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {facility.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-6xl mx-auto mb-16">
          {/* Facility Image */}
          <div className="h-96 relative">
            <img 
              src={activeFacility.image} 
              alt={activeFacility.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h2 className="text-3xl font-bold text-white">{activeFacility.name}</h2>
            </div>
          </div>
          
          {/* Facility Details */}
          <div className="p-6">
            <p className="text-gray-700 text-lg mb-8">{activeFacility.description}</p>
            
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-6">
              <button 
                onClick={() => setActiveTab('features')}
                className={`py-2 px-4 font-medium ${
                  activeTab === 'features' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Features
              </button>
              <button 
                onClick={() => setActiveTab('equipment')}
                className={`py-2 px-4 font-medium ${
                  activeTab === 'equipment' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Equipment & Resources
              </button>
            </div>
            
            {/* Tab Content */}
            <div className="mb-6">
              {activeTab === 'features' ? (
                <div className="grid md:grid-cols-2 gap-4">
                  {activeFacility.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 text-blue-600 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-4">
                  {activeFacility.equipmentList?.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 text-green-600 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
          </div>
        </div>
        
        {/* Facilities Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Explore All Facilities</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility) => (
              <div 
                key={facility.id}
                className={`bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-lg ${
                  activeFacility.id === facility.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setActiveFacility(facility)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{facility.name}</h3>
                  <p className="text-gray-600 line-clamp-2">{facility.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-500">{facility.features.length} features</span>
                    <span className="text-blue-600 hover:text-blue-800 text-sm font-medium">View Details</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
    </div>
  );
};

export default CampusTourPage;