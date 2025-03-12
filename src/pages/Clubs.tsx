import React, { useState } from 'react';

type HouseDetails = {
  name: string;
  color: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  description: string;
  teacher: string;
  captain: string;
  achievements: string[];
  activities: string[];
  photos: { url: string; caption?: string }[];
};

type ClubDetails = {
  name: string;
  description: string;
  meetingDay: string;
  incharge: string;
  image: string;
  clubGallery: { url: string; caption?: string }[];
}

const HouseActivitiesPage: React.FC = () => {
  const [activeHouse, setActiveHouse] = useState<string | null>("Yellow");
  const [activeTab, setActiveTab] = useState<'houses' | 'clubs'>('houses');

  const houses: HouseDetails[] = [
    {
        name: "Yellow",
        color: "yellow",
        bgColor: "bg-yellow-50",
        textColor: "text-yellow-800",
        borderColor: "border-yellow-400",
        description: "The Yellow House stands for energy, enthusiasm, and creativity. Members are known for their innovative thinking and vibrant participation in school activities.",
        teacher: "Ms. Sarah Johnson",
        captain: "Aisha Patel",
        achievements: [
            "First place in Annual Sports Day 2024",
            "Winners of the Inter-House Debate Competition",
            "Outstanding performance in Cultural Fest"
        ],
        activities: [
            "Weekly leadership workshops",
            "Community service initiatives",
            "Creative arts competitions"
        ],
        photos: []
    },
    {
        name: "Green",
        color: "green",
        bgColor: "bg-green-50",
        textColor: "text-green-800",
        borderColor: "border-green-400",
        description: "The Green House represents growth, harmony, and sustainability. Members excel in eco-initiatives and collaborative projects that promote teamwork.",
        teacher: "Mr. David Chen",
        captain: "Michael Rodriguez",
        achievements: [
            "Winners of the Eco-Innovation Challenge",
            "Second place in Annual Sports Day 2024",
            "Best House Garden Award"
        ],
        activities: [
            "Environmental conservation projects",
            "Organic gardening initiatives",
            "Nature photography contests"
        ],
        photos: []
    },
    {
        name: "Red",
        color: "red",
        bgColor: "bg-red-50",
        textColor: "text-red-800",
        borderColor: "border-red-400",
        description: "The Red House embodies passion, courage, and determination. Members are recognized for their competitive spirit and excellence in sports and debates.",
        teacher: "Ms. Priya Sharma",
        captain: "Thomas Wilson",
        achievements: [
            "Champions of Inter-House Cricket Tournament",
            "Winners of Science Exhibition Competition",
            "Outstanding House Spirit Award"
        ],
        activities: [
            "Sports training programs",
            "Public speaking workshops",
            "Leadership development sessions"
        ],
        photos: []
    },
    {
        name: "Blue",
        color: "blue",
        bgColor: "bg-blue-50",
        textColor: "text-blue-800",
        borderColor: "border-blue-400",
        description: "The Blue House symbolizes wisdom, trust, and loyalty. Members are known for their academic excellence and thoughtful contributions to school life.",
        teacher: "Mr. James Williams",
        captain: "Emma Thompson",
        achievements: [
            "Highest Academic Performance Award",
            "Winners of the Literary Fest",
            "Best House Collaboration Award"
        ],
        activities: [
            "Reading circles and book clubs",
            "Peer tutoring programs",
            "Critical thinking competitions"
        ],
        photos: []
    },
  ];

  const clubs: ClubDetails[] = [
    {
        name: "Yoga Club",
        description: "Promoting physical and mental wellbeing through ancient yoga practices adapted for students of all ages and abilities.",
        meetingDay: "Monday and Thursday",
        incharge: "Ms. Lisa Patel",
        image: "/api/placeholder/300/200",
        clubGallery: [
            { url: "/api/placeholder/300/200", caption: "Yoga Club Session" },
            { url: "/api/placeholder/300/200", caption: "Meditation Workshop" },
            { url: "/api/placeholder/300/200", caption: "Yoga Retreat" }
        ]
    },
    {
        name: "Home Science Club",
        description: "Developing practical life skills in cooking, nutrition, textile design, and home management through hands-on activities.",
        meetingDay: "Tuesday",
        incharge: "Mrs. Anna Johnson",
        image: "/api/placeholder/300/200",
        clubGallery: [
          { url: "/api/placeholder/300/200", caption: "Yoga Club Session" },
          { url: "/api/placeholder/300/200", caption: "Meditation Workshop" },
          { url: "/api/placeholder/300/200", caption: "Yoga Retreat" }
      ]
    },
    {
        name: "Coding Club",
        description: "Exploring computer programming and digital creation through exciting projects and collaborative learning.",
        meetingDay: "Wednesday",
        incharge: "Mr. Robert Lee",
        image: "/api/placeholder/300/200",
        clubGallery: [
          { url: "/api/placeholder/300/200", caption: "Yoga Club Session" },
          { url: "/api/placeholder/300/200", caption: "Meditation Workshop" },
          { url: "/api/placeholder/300/200", caption: "Yoga Retreat" }
      ]
    },
    {
        name: "Arts & Crafts Club",
        description: "Fostering creativity through various artistic mediums, from painting and sculpture to digital design.",
        meetingDay: "Friday",
        incharge: "Ms. Elena Rodriguez",
        image: "/api/placeholder/300/200",
        clubGallery: [
          { url: "/api/placeholder/300/200", caption: "Yoga Club Session" },
          { url: "/api/placeholder/300/200", caption: "Meditation Workshop" },
          { url: "/api/placeholder/300/200", caption: "Yoga Retreat" }
      ]
    }
  ];

  const getHouseStyle = (houseName: string) => {
    const house = houses.find(h => h.name === houseName);
    return {
      active: house?.borderColor || "border-gray-300",
      bg: house?.bgColor || "bg-gray-50",
      text: house?.textColor || "text-gray-800"
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden">
  <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white py-12">
    {/* Elegant collage background */}
    <div className="absolute inset-0 overflow-hidden">
      {/* Main large image that spans full width */}
      <div className="absolute inset-0 opacity-20">
        <img src="./src/assets/banner1.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      
      {/* Collage overlay with multiple images */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-1 opacity-40">
        <div className="col-span-1 row-span-1">
          <img src="./src/assets/banner2.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 row-span-2">
          <img src="./src/assets/banner3.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-2 row-span-1">
          <img src="./src/assets/about.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 row-span-1">
          <img src="/api/placeholder/300/300" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-2 row-span-2">
          <img src="/api/placeholder/600/600" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 row-span-1">
          <img src="/api/placeholder/300/300" alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      
      {/* Gradient overlay for improved readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 via-violet-800 to-purple-900 opacity-70"></div>
    </div>
    
    <div className="container mx-auto px-4 relative z-10">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">House Activities</span>
      </h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto text-center font-light leading-relaxed text-indigo-100">
        Fostering leadership, teamwork, and school spirit through our vibrant house system
      </p>
      
      <div className="flex justify-center mt-6">
        <div className="flex space-x-8">
          {houses.map((house) => (
            <div
              key={house.name}
              className="flex flex-col items-center opacity-90 transition-all duration-300 hover:opacity-100 hover:transform hover:scale-110"
            >
              <div
                className={`w-10 h-10 rounded-full ${
                  house.name === 'Yellow' ? 'bg-yellow-400' :
                  house.name === 'Green' ? 'bg-green-500' :
                  house.name === 'Red' ? 'bg-red-500' : 'bg-blue-500'
                } shadow-lg`}
              ></div>
              <span className="mt-2 text-xs font-medium text-white">{house.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
      {/* Stylish Navigation Tabs */}
      <div className="container mx-auto px-4 pt-6 pb-20">
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-full shadow-lg p-1 inline-flex">
            <button
              onClick={() => setActiveTab('houses')}
              className={`px-8 py-2 rounded-full font-medium text-base transition-all duration-300 ${
                activeTab === 'houses' 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'text-gray-700 hover:bg-indigo-50'
              }`}
            >
              Houses
            </button>
            <button
              onClick={() => setActiveTab('clubs')}
              className={`px-8 py-2 rounded-full font-medium text-base transition-all duration-300 ${
                activeTab === 'clubs' 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'text-gray-700 hover:bg-indigo-50'
              }`}
            >
              Clubs
            </button>
          </div>
        </div>

        {/* Houses Section */}
        {activeTab === 'houses' && (
          <div>
            <div className="max-w-3xl mx-auto mb-16">
              <p className="text-lg text-gray-600 leading-relaxed text-center font-light">
                Our students are divided into four vibrant houses: Yellow, Green, Red, and Blue. Each house has a dedicated teacher in charge and a student house captain who work together to conduct various activities, fostering team spirit and leadership qualities.
              </p>
            </div>

            {/* House Selection Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {houses.map((house) => (
                <button
                  key={house.name}
                  onClick={() => setActiveHouse(house.name)}
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeHouse === house.name
                      ? `${house.bgColor} ${house.textColor} border-2 ${house.borderColor} shadow-md transform scale-105`
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  {house.name} House
                </button>
              ))}
            </div>

            {/* Active House Details - Redesigned */}
            {activeHouse && (
            <div className="max-w-6xl mx-auto">
                {houses.filter(house => house.name === activeHouse).map((house) => (
                <div 
                    key={house.name}
                    className={`${house.bgColor} rounded-3xl overflow-hidden shadow-xl transition-all duration-500 transform hover:shadow-2xl`}
                >
                    <div className="p-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/3 flex justify-center">
                        <div className={`w-64 h-64 rounded-full flex items-center justify-center ${
                            house.name === 'Yellow' ? 'bg-gradient-to-br from-yellow-300 to-yellow-500' : 
                            house.name === 'Green' ? 'bg-gradient-to-br from-green-400 to-green-600' : 
                            house.name === 'Red' ? 'bg-gradient-to-br from-red-400 to-red-600' : 
                            'bg-gradient-to-br from-blue-400 to-blue-600'
                        } text-white shadow-lg transform transition-transform hover:scale-105 duration-300`}>
                            <h2 className="text-5xl font-bold">{house.name}</h2>
                        </div>
                        </div>
                        <div className="w-full md:w-2/3">
                        <h2 className={`text-3xl font-bold mb-4 ${house.textColor}`}>{house.name} House</h2>
                        <p className="text-lg mb-8 leading-relaxed">{house.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-sm rounded-xl p-4 shadow-md">
                            <h3 className="text-xl font-semibold mb-3">Leadership</h3>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                                    house.name === 'Yellow' ? 'bg-yellow-100 text-yellow-700' : 
                                    house.name === 'Green' ? 'bg-green-100 text-green-700' : 
                                    house.name === 'Red' ? 'bg-red-100 text-red-700' : 
                                    'bg-blue-100 text-blue-700'
                                }`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <div>
                                    <p className="text-sm text-gray-500">House Teacher</p>
                                    <p className="font-medium">{house.teacher}</p>
                                </div>
                                </div>
                                <div className="flex items-center">
                                <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                                    house.name === 'Yellow' ? 'bg-yellow-100 text-yellow-700' : 
                                    house.name === 'Green' ? 'bg-green-100 text-green-700' : 
                                    house.name === 'Red' ? 'bg-red-100 text-red-700' : 
                                    'bg-blue-100 text-blue-700'
                                }`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <div>
                                    <p className="text-sm text-gray-500">House Captain</p>
                                    <p className="font-medium">{house.captain}</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-sm rounded-xl p-4 shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Achievements</h3>
                        <ul className="list-disc list-inside">
                            {house.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-gray-600">{achievement}</li>
                            ))}
                        </ul>
                        </div>
                        <div className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-sm rounded-xl p-4 shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Activities</h3>
                        <ul className="list-disc list-inside">
                            {house.activities.map((activity, idx) => (
                            <li key={idx} className="text-gray-600">{activity}</li>
                            ))}
                        </ul>
                        </div>
                    </div>
                    
                    {/* New Photo Gallery Section */}
                    <div className="mt-12">
                        <h3 className="text-2xl font-semibold mb-6">Photo Gallery</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {house.photos && house.photos.map((photo, idx) => (
                            <div 
                            key={idx} 
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                            <div className="aspect-w-16 aspect-h-9 w-full">
                                <img 
                                src={photo.url} 
                                alt={photo.caption || `${house.name} House - Photo ${idx + 1}`}
                                className="w-full h-48 object-cover"
                                />
                            </div>
                            {photo.caption && (
                                <div className="p-3">
                                <p className="text-sm text-gray-700">{photo.caption}</p>
                                </div>
                            )}
                            </div>
                        ))}
                        
                        {/* Show placeholder if no photos */}
                        {(!house.photos || house.photos.length === 0) && (
                            <div className="col-span-full text-center p-8 bg-white bg-opacity-70 backdrop-filter backdrop-blur-sm rounded-xl">
                            <p className="text-gray-500">No photos available for {house.name} House</p>
                            </div>
                        )}
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            )}
            </div>
        )}
            
            {/* Clubs Section */}
            {activeTab === 'clubs' && (
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed text-center font-light">
                Our school offers a variety of clubs and organizations that cater to diverse interests and passions. Students can join these clubs to develop new skills, pursue hobbies, and engage in creative projects.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {clubs.map((club) => (
                  <div
                    key={club.name}
                    className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-sm rounded-xl p-6 shadow-md"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-semibold">{club.name}</h2>
                      <span className="text-sm font-medium text-gray-500">{club.meetingDay}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{club.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500">Incharge: {club.incharge}</span>
                      <img
                        src={club.image}
                        alt={club.name}
                        className="w-16 h-16 rounded-full object-cover shadow-md"
                      />
                    </div>
                    
                    {/* Photo Gallery for each club */}
                    {club.clubGallery && club.clubGallery.length > 0 && (
                      <div className="mt-4">
                        <h3 className="text-md font-medium mb-3">Club Gallery</h3>
                        <div className="grid grid-cols-3 gap-2">
                          {club.clubGallery.map((photo, idx) => (
                            <div key={idx} className="relative group">
                              <img 
                                src={photo.url} 
                                alt={photo.caption || `${club.name} - Photo ${idx + 1}`}
                                className="w-full h-24 object-cover rounded-lg transition-all duration-300 group-hover:opacity-90"
                              />
                              {photo.caption && (
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-1 text-xs rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  {photo.caption}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Featured Club Activities Gallery */}
              <div className="mt-16">
                <h2 className="text-2xl font-semibold text-center mb-8">Featured Club Activities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {clubs.flatMap(club => 
                    club.clubGallery ? club.clubGallery.map(photo => ({
                      ...photo,
                      clubName: club.name
                    })) : []
                  ).map((photo, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="aspect-w-16 aspect-h-9 w-full">
                        <img 
                          src={photo.url} 
                          alt={photo.caption || `Club Activity - Photo ${idx + 1}`}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      {photo.caption && (
                        <div className="p-3">
                          <p className="text-sm text-gray-700">{photo.caption}</p>
                          {photo.clubName && (
                            <p className="text-xs text-gray-500 mt-1">{photo.clubName}</p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {/* Show placeholder if no photos */}
                  {clubs.flatMap(club => club.clubGallery || []).length === 0 && (
                    <div className="col-span-full text-center p-8 bg-white bg-opacity-70 backdrop-filter backdrop-blur-sm rounded-xl">
                      <p className="text-gray-500">No featured activities available</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
            </div>
            </div>
    );
};

export default HouseActivitiesPage;