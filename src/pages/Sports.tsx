import React from 'react';

type Achievement = {
  id: number;
  title: string;
  description: string;
  year: string;
};

type Sport = {
  id: number;
  name: string;
  description: string;
  coachName: string;
  schedule: string;
  achievements: Achievement[];
};

type Tournament = {
  id: number;
  name: string;
  date: string;
  description: string;
  location: string;
  results?: string;
};

const SportsPage: React.FC = () => {
  // Sample data
  const sports: Sport[] = [
    {
      id: 1,
      name: "Basketball",
      description: "Our basketball program focuses on teamwork, skill development, and competitive play. Open to all students from grades 6-12.",
      coachName: "Coach Johnson",
      schedule: "Practice: Mon, Wed, Fri 3:30-5:30 PM",
      achievements: [
        {
          id: 1,
          title: "State Champions",
          description: "Varsity boys team won the state championship",
          year: "2023"
        },
        {
          id: 2,
          title: "Regional Finalists",
          description: "Girls varsity team reached regional finals",
          year: "2024"
        }
      ]
    },
    {
      id: 2,
      name: "Track & Field",
      description: "Our track and field program develops speed, strength, and endurance through various athletic events including sprints, jumps, and throws.",
      coachName: "Coach Martinez",
      schedule: "Practice: Tue, Thu 3:30-5:00 PM, Sat 10:00 AM-12:00 PM",
      achievements: [
        {
          id: 3,
          title: "National Qualifier",
          description: "Sarah Johnson qualified for nationals in 400m",
          year: "2024"
        }
      ]
    },
    {
      id: 3,
      name: "Swimming",
      description: "Our swimming program develops water safety, stroke technique, and competitive racing skills in our Olympic-sized pool.",
      coachName: "Coach Williams",
      schedule: "Practice: Mon-Fri 6:00-7:30 AM",
      achievements: [
        {
          id: 4,
          title: "Conference Champions",
          description: "Boys swim team won conference championship",
          year: "2024"
        }
      ]
    }
  ];

  const tournaments: Tournament[] = [
    {
      id: 1,
      name: "Annual Interschool Basketball Tournament",
      date: "April 15-18, 2025",
      description: "A competitive basketball tournament featuring 12 schools from our district.",
      location: "Main Gymnasium",
      results: "Registration open"
    },
    {
      id: 2,
      name: "Regional Track & Field Championship",
      date: "May 10, 2025",
      description: "Regional qualification event for state championships.",
      location: "Athletic Field",
      results: "Coming soon"
    },
    {
      id: 3,
      name: "Winter Swimming Invitational",
      date: "December 5-6, 2024",
      description: "Annual swimming competition hosting 15 schools from across the state.",
      location: "Aquatic Center",
      results: "Champions 2023, 2022"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="relative h-96 rounded-xl overflow-hidden">
          <img src="/api/placeholder/1200/500" alt="Students playing sports" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center">
            <div className="p-8 max-w-lg">
              <h1 className="text-4xl font-bold text-white mb-4">Excellence Through Athletics</h1>
              <p className="text-white text-lg">Developing champions in sports and in life through dedication, teamwork, and perseverance.</p>
            </div>
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-blue-50 rounded-lg p-6 shadow-md">
            <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">15+ Sports Programs</h3>
            <p className="text-gray-700">Our school offers a wide variety of sports programs for students of all skill levels and interests.</p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6 shadow-md">
            <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M12 2v6.5"></path>
                <path d="M4.5 12 2 12"></path>
                <path d="M21.5 12 22 12"></path>
                <path d="m18.5 5.5-4 4"></path>
                <path d="m5.5 18.5 4-4"></path>
                <path d="m5.5 5.5 4 4"></path>
                <path d="m18.5 18.5-4-4"></path>
                <path d="M12 15.5 12 22"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">State-of-the-Art Facilities</h3>
            <p className="text-gray-700">Our modern facilities include a gymnasium, Olympic-sized pool, athletic fields, and indoor training centers.</p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6 shadow-md">
            <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M18 2c-2 0-3.5 1.5-4 4a4 4 0 0 0 4 4c0-.5.1-3 .1-3l-1.1 1l-1-1Z"></path>
                <path d="m16.1 11.5-3.6 3.6a4 4 0 0 0 0 5.6l.1.1a4 4 0 0 0 5.6 0l3.6-3.6c-1.1 1.2-2.7 1.9-4.4 1.9-3.3 0-6-2.7-6-6 0-1.7.8-3.3 1.9-4.4Z"></path>
                <path d="M19.2 15.1c.7-.1 1.3-.5 1.7-1 .9-.9.8-2.9-.1-3.9L17.4 7a2 2 0 0 1 0-2.9"></path>
                <path d="M7.1 4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3.1"></path>
                <path d="m11 12.5-1 1"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Experienced Coaches</h3>
            <p className="text-gray-700">Our dedicated coaching staff includes former professional athletes and certified trainers.</p>
          </div>
        </div>
        
        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At Westfield Academy, we believe that athletics and physical education are essential components of a well-rounded education. Our sports programs aim to develop not only physical skills but also character, leadership, and teamwork.
            </p>
            <p className="text-gray-700">
              We are committed to providing inclusive opportunities for all students to participate in sports, regardless of their skill level or experience. Through our diverse offerings, state-of-the-art facilities, and experienced coaching staff, we strive to help each student discover their athletic potential.
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden">
            <img src="/api/placeholder/600/400" alt="School athletics" className="w-full h-full object-cover" />
          </div>
        </div>
        
        {/* Recent Achievements Section */}
        <div className="bg-blue-800 rounded-xl p-8 text-white mt-16">
          <h2 className="text-2xl font-bold mb-4">Recent Achievements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-4 rounded-lg">
              <span className="text-blue-300 text-sm">2024</span>
              <h3 className="font-bold text-lg mb-2">State Basketball Champions</h3>
              <p className="text-sm">Boys varsity basketball team won the state championship for the second consecutive year.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <span className="text-blue-300 text-sm">2024</span>
              <h3 className="font-bold text-lg mb-2">Swimming National Qualifiers</h3>
              <p className="text-sm">Three students qualified for the national swimming championships.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <span className="text-blue-300 text-sm">2023</span>
              <h3 className="font-bold text-lg mb-2">Regional Track & Field Champions</h3>
              <p className="text-sm">Our track team won 8 gold medals at the regional championships.</p>
            </div>
          </div>
        </div>
        
        {/* Sports Programs Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">Our Sports Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {sports.map(sport => (
              <div key={sport.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src={`/api/placeholder/600/300?text=${sport.name}`} alt={sport.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-800">{sport.name}</h3>
                  <p className="text-gray-700 mb-4">{sport.description}</p>
                  <div className="mb-4">
                    <span className="font-semibold text-gray-800">Coach:</span> {sport.coachName}
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold text-gray-800">Schedule:</span> {sport.schedule}
                  </div>
                  {sport.achievements.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Recent Achievements:</h4>
                      <ul className="list-disc pl-5 text-gray-700">
                        {sport.achievements.map(achievement => (
                          <li key={achievement.id}>{achievement.title} ({achievement.year})</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tournaments Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">Upcoming Tournaments</h2>
          <div className="space-y-6">
            {tournaments.map(tournament => (
              <div key={tournament.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/3 h-48 md:h-auto">
                  <img src={`/api/placeholder/400/300?text=${tournament.name}`} alt={tournament.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold mb-2 text-blue-800">{tournament.name}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {tournament.date}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{tournament.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="font-semibold text-gray-800">Location:</span>
                      <p className="text-gray-700">{tournament.location}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800">Results:</span>
                      <p className="text-gray-700">{tournament.results || "TBD"}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Achievements Timeline Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">School Athletic Achievements</h2>
          
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-0 w-1 bg-blue-200 -ml-1.5"></div>
            
            <div className="space-y-12">
              <div className="relative pl-8">
                <div className="absolute left-0 -ml-3 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-white"></div>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-800">2024 Season</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">Basketball</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Boys Varsity - State Champions</li>
                        <li>Girls Varsity - Regional Finalists</li>
                        <li>JV Boys - District Champions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">Swimming</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Boys Team - Conference Champions</li>
                        <li>3 National Qualifiers</li>
                        <li>8 Regional Records Broken</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">Track & Field</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Sarah Johnson - National Qualifier (400m)</li>
                        <li>Boys Relay Team - State Champions</li>
                        <li>5 Athletes Named All-State</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">Soccer</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Girls Varsity - State Semi-Finalists</li>
                        <li>Boys Varsity - District Champions</li>
                        <li>2 Players Selected for Elite Camp</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-0 -ml-3 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-white"></div>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-800">2023 Season</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">Basketball</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Boys Varsity - State Champions</li>
                        <li>Girls Varsity - District Champions</li>
                        <li>Michael Brown - All-State First Team</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">Track & Field</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Regional Champions - Boys Team</li>
                        <li>State Runner-Up - Girls Team</li>
                        <li>8 Gold Medals at Regionals</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">Swimming</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Winter Invitational Champions</li>
                        <li>2 State Records Broken</li>
                        <li>Jessica Andrews - Swimmer of the Year</li>
                      </ul>
                    </div>
                    <div className="rounded-lg bg-blue-50 p-4">
                      <h4 className="font-semibold mb-2 text-blue-800">School Awards</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>District Athletic Program of the Year</li>
                        <li>3 Coaches Named "Coach of the Year"</li>
                        <li>85% Athletic Participation Rate</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SportsPage;