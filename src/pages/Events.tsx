import React, { useState } from 'react';


interface EventOrCompetition {
  id: string;
  name: string;
  title: string;
  description: string;
  highlights: string[];
  date: string;
  eventDate: Date;
  type: 'event' | 'competition';
  category: string; // Added category field
  gallery: string[];
}

const SchoolEventsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('annual');
  
  // Current date for filtering events
  const currentDate = new Date();
  
  // Combined array for both events and competitions
  const eventsAndCompetitions: EventOrCompetition[] = [
    // Events
    {
      id: 'annual',
      name: 'Annual Day',
      title: 'Annual Day Celebration',
      description: 'Our schools flagship event showcasing the talents and achievements of our students through dance, drama, music, and award ceremonies.',
      highlights: [
        'Spectacular cultural performances',
        'Academic excellence awards',
        'Special performances by alumni',
        'Exhibition of student projects'
      ],
      date: 'December 15-16, 2024',
      eventDate: new Date('2024-12-15'),
      type: 'event',
      category: 'Cultural',
      gallery: [
        'Annual_1', 'Annual_2', 'Annual_3', 'Annual_4', 'Annual_5', 'Annual_6'
      ]
    },
    {
      id: 'children',
      name: 'Children\'s Day',
      title: 'Children\'s Day Festivities',
      description: 'A day dedicated to celebrating childhood with fun activities, games, and special programs organized by teachers for students.',
      highlights: [
        'Special performances by teachers',
        'Fun games and activities',
        'Movie screenings',
        'Special lunch and treats'
      ],
      date: 'November 14, 2024',
      eventDate: new Date('2024-11-14'),
      type: 'event',
      category: 'Celebration',
      gallery: [
        'Children_1', 'Children_2', 'Children_3', 'Children_4'
      ]
    },
    {
      id: 'independence',
      name: 'Independence Day',
      title: 'Independence Day Celebration',
      description: 'Commemorating our nation\'s independence with patriotic fervor through flag hoisting, cultural programs, and patriotic performances.',
      highlights: [
        'Flag hoisting ceremony',
        'Patriotic song competition',
        'Speech competition',
        'March past by NCC cadets'
      ],
      date: 'August 15, 2024',
      eventDate: new Date('2024-08-15'),
      type: 'event',
      category: 'National',
      gallery: [
        'Independence_1', 'Independence_2', 'Independence_3', 'Independence_4', 'Independence_5'
      ]
    },
    {
      id: 'republic',
      name: 'Republic Day',
      title: 'Republic Day Ceremony',
      description: 'Celebrating the adoption of our constitution with a special assembly, flag hoisting ceremony, and cultural presentations.',
      highlights: [
        'Flag hoisting ceremony',
        'Constitutional awareness quiz',
        'Patriotic dance performances',
        'Special assembly'
      ],
      date: 'January 26, 2025',
      eventDate: new Date('2025-01-26'),
      type: 'event',
      category: 'National',
      gallery: [
        'Republic_1', 'Republic_2', 'Republic_3'
      ]
    },
    {
      id: 'talent',
      name: 'Talent Show',
      title: 'Annual Talent Show',
      description: 'A platform for students to showcase their unique talents and abilities across various performing arts categories.',
      highlights: [
        'Singing and dancing competitions',
        'Stand-up comedy',
        'Magic shows',
        'Instrumental performances'
      ],
      date: 'October 10-11, 2024',
      eventDate: new Date('2024-10-10'),
      type: 'event',
      category: 'Cultural',
      gallery: [
        'Talent_1', 'Talent_2', 'Talent_3', 'Talent_4', 'Talent_5'
      ]
    },
    
    // Competitions
    {
      id: 'spellbee',
      name: 'Spell Bee',
      title: 'International Spell Bee Competition',
      description: 'A prestigious spelling competition to enhance vocabulary, language skills, and promote healthy competition among students.',
      highlights: [
        'Multiple rounds of competition',
        'Age-appropriate word challenges',
        'International final rounds',
        'Certificates for winners'
      ],
      date: 'July 25, 2024',
      eventDate: new Date('2024-07-25'),
      type: 'competition',
      category: 'Academic',
      gallery: [
        'SpellBee_1', 'SpellBee_2', 'SpellBee_3', 'SpellBee_4', 'SpellBee_5'
      ]
    },
    {
      id: 'sciencefair',
      name: 'Science Fair',
      title: 'Annual Science & Innovation Fair',
      description: 'A platform for budding scientists to showcase their innovative ideas and experiments across various scientific disciplines.',
      highlights: [
        'Project exhibitions',
        'Live demonstrations',
        'Expert judging panel',
        'Prizes for top innovations'
      ],
      date: 'September 18-20, 2024',
      eventDate: new Date('2024-09-18'),
      type: 'competition',
      category: 'STEM',
      gallery: [
        'Science_1', 'Science_2', 'Science_3', 'Science_4'
      ]
    },
    {
      id: 'mathsolympiad',
      name: 'Math Olympiad',
      title: 'International Mathematics Olympiad',
      description: 'A challenging mathematics competition designed to identify and nurture mathematical talent among school students.',
      highlights: [
        'Challenging problem sets',
        'Logical reasoning questions',
        'Individual and team rounds',
        'Scholarships for winners'
      ],
      date: 'August 28, 2024',
      eventDate: new Date('2024-08-28'),
      type: 'competition',
      category: 'STEM',
      gallery: [
        'Math_1', 'Math_2', 'Math_3'
      ]
    },
    {
      id: 'debatecomp',
      name: 'Debate Competition',
      title: 'Inter-School Debate Championship',
      description: 'A platform for students to develop their public speaking skills, critical thinking, and articulation of ideas on contemporary topics.',
      highlights: [
        'Engaging contemporary topics',
        'Structured debate format',
        'Professional judging panel',
        'Awards for best speakers'
      ],
      date: 'October 25, 2024',
      eventDate: new Date('2024-10-25'),
      type: 'competition',
      category: 'Literary',
      gallery: [
        'Debate_1', 'Debate_2', 'Debate_3', 'Debate_4'
      ]
    },
    {
      id: 'sportsday',
      name: 'Sports Meet',
      title: 'Annual Inter-House Sports Meet',
      description: 'A grand sporting event celebrating athleticism, sportsmanship, and physical fitness across various individual and team sports.',
      highlights: [
        'Track and field events',
        'Team sports tournaments',
        'House championship trophy',
        'Awards for outstanding athletes'
      ],
      date: 'November 28-30, 2024',
      eventDate: new Date('2024-11-28'),
      type: 'competition',
      category: 'Sports',
      gallery: [
        'Sports_1', 'Sports_2', 'Sports_3', 'Sports_4', 'Sports_5'
      ]
    },
    {
      id: 'artcomp',
      name: 'Art Competition',
      title: 'Creative Arts Competition',
      description: 'A celebration of creativity and artistic expression across various mediums including painting, sketching, and digital art.',
      highlights: [
        'Multiple art categories',
        'Theme-based challenges',
        'Exhibition of selected works',
        'Prizes for different age groups'
      ],
      date: 'September 8, 2024',
      eventDate: new Date('2024-09-08'),
      type: 'competition',
      category: 'Arts',
      gallery: [
        'Art_1', 'Art_2', 'Art_3', 'Art_4'
      ]
    }
  ];

  // Filter to get only upcoming events and competitions
  const upcomingItems = eventsAndCompetitions
    .filter(item => item.eventDate >= currentDate)
    .sort((a, b) => a.eventDate.getTime() - b.eventDate.getTime()); // Sort by date, soonest first
  
  // Get the next 3 upcoming events/competitions for the featured timeline
  const nextUpcomingItems = upcomingItems.slice(0, 3);

  const activeItem = eventsAndCompetitions.find(item => item.id === activeTab);

  

  // Function to format the date for the timeline display
  const formatTimelineDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Get background and text colors based on category
  const getCategoryColors = (category: string) => {
    switch(category) {
      case 'Cultural': 
        return { bg: 'bg-pink-100', text: 'text-pink-800' };
      case 'STEM': 
        return { bg: 'bg-green-100', text: 'text-green-800' };
      case 'Sports': 
        return { bg: 'bg-orange-100', text: 'text-orange-800' };
      case 'Academic': 
        return { bg: 'bg-indigo-100', text: 'text-indigo-800' };
      case 'Literary': 
        return { bg: 'bg-yellow-100', text: 'text-yellow-800' };
      case 'Arts': 
        return { bg: 'bg-red-100', text: 'text-red-800' };
      case 'National': 
        return { bg: 'bg-blue-100', text: 'text-blue-800' };
      case 'Celebration': 
        return { bg: 'bg-purple-100', text: 'text-purple-800' };
      default: 
        return { bg: 'bg-gray-100', text: 'text-gray-800' };
    }
  };

  // Component to display when there are no upcoming events/competitions
  const NoUpcomingEventsMessage: React.FC = () => {
    return (
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
        <h3 className="text-xl font-medium text-gray-700 mb-2">No Upcoming Activities</h3>
        <p className="text-gray-500">There are no upcoming activities at this time. Please check back later for updates.</p>
        <button 
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          onClick={() => setActiveTab('annual')} // Default to viewing the Annual Day event
        >
          View Past Activities
        </button>
      </div>
    );
  };

  return (
    <div className="max-w mx-auto p-4 bg-gray-50">
      {/* Hero Section */}
      <div className="relative rounded-lg overflow-hidden mb-8">
        <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
        <img 
          src="./src/assets/20241005_120330.jpg" 
          alt="School events banner" 
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
          <h1 className="text-4xl font-bold mb-2 text-center">School Events & Competitions</h1>
          <p className="text-xl max-w-2xl text-center">Explore our exciting upcoming activities that foster growth, creativity, and excellence</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {eventsAndCompetitions.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              activeTab === item.id 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50'
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Event/Competition Display */}
      {activeItem && (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={`/api/placeholder/600/400?text=${activeItem.name}`} 
                alt={activeItem.name} 
                className="w-full h-64 object-cover" 
              />
            </div>
            <div className="md:w-1/2 p-6">
              <div className="flex items-center mb-2 flex-wrap gap-2">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                  {activeItem.date}
                </div>
                <div className="inline-block px-3 py-1 rounded-full text-sm font-semibold">
                  {activeItem.type === 'event' ? (
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Event</span>
                  ) : (
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Competition</span>
                  )}
                </div>
                {/* Category Tag */}
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColors(activeItem.category).bg} ${getCategoryColors(activeItem.category).text}`}>
                  {activeItem.category}
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-3">{activeItem.title}</h2>
              <p className="text-gray-700 mb-4">{activeItem.description}</p>
              
              <h3 className="font-semibold text-lg mb-2">Highlights:</h3>
              <ul className="space-y-1 mb-6">
                {activeItem.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              
              {activeItem.eventDate < currentDate && activeItem.gallery && activeItem.gallery.length > 0 && (
                <div className="mt-4">
                  <a 
                    href={`/gallery/${activeItem.id}`} 
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    View Event Photos
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Featured Upcoming Events Timeline */}
      <div className="mt-12" id="upcoming-events-section">
        <h2 className="text-2xl font-bold mb-6 text-center">Next Up On Our Calendar</h2>
        
        {nextUpcomingItems.length > 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-6 relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-200 hidden md:block"></div>
            
            {/* Timeline events */}
            <div className="space-y-8">
              {nextUpcomingItems.map((item) => (
                <div key={item.id} className="md:flex items-start group">
                  {/* Date circle */}
                  <div className="md:w-16 mb-4 md:mb-0 flex md:justify-center md:relative z-10">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                      item.type === 'event' ? 'bg-blue-600' : 'bg-purple-600'
                    } shadow-md group-hover:scale-110 transition-transform`}>
                      {formatTimelineDate(item.eventDate).split(' ')[1]}
                    </div>
                  </div>
                  
                  {/* Content card */}
                  <div className="md:ml-8 bg-gray-50 rounded-lg p-4 shadow-sm border border-gray-100 w-full
                                  hover:shadow-md transition-shadow relative">
                    {/* Month label */}
                    <div className="absolute top-0 left-0 transform -translate-y-1/2 md:-translate-x-full md:left-0 px-2 py-1 rounded text-xs font-medium hidden md:block" style={{marginLeft: "-8px"}}>
                      {formatTimelineDate(item.eventDate).split(' ')[0]}
                    </div>
                    
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex flex-wrap gap-1 mb-2">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                            item.type === 'event' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-purple-100 text-purple-800'
                          }`}>
                            {item.type === 'event' ? 'Event' : 'Competition'}
                          </span>
                          {/* Category Tag */}
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColors(item.category).bg} ${getCategoryColors(item.category).text}`}>
                            {item.category}
                          </span>
                        </div>
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                      </div>
                      <button 
                        onClick={() => setActiveTab(item.id)}
                        className={`px-3 py-1 rounded text-white text-sm font-medium ${
                          item.type === 'event' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-purple-600 hover:bg-purple-700'
                        } transition-colors`}
                      >
                        Details
                      </button>
                    </div>
                    <p className="text-gray-700 text-sm line-clamp-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <NoUpcomingEventsMessage />
        )}
      </div>

      

      {/* Photo Gallery */}
      <div className="mt-12 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Event Memories</h2>
          <a 
            href="/gallery" 
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Browse All Photos
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <img 
                src={`/api/placeholder/300/200?text=Memory ${index}`} 
                alt={`Event memory ${index}`} 
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SchoolEventsPage;