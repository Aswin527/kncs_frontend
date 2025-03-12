import React from 'react';
import { Sparkles, BookOpen, Users, MapPin, Award, Calendar, Music, Palette, Activity, ChevronDown, ChevronUp } from 'lucide-react';

const CoCurricularActivitiesPage = () => {
  type Section = 'cultural' | 'sports' | 'workshops' | 'competitions';

  const [expandedSections, setExpandedSections] = React.useState<Record<Section, boolean>>({
    cultural: true,
    sports: true,
    workshops: true,
    competitions: true
  });

  

  const toggleSection = (section: Section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Co-Curricular Activities</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover a wide range of activities designed to complement academic learning and foster holistic development.
        </p>
      </div>

      {/* Cultural Activities Section */}
      <section className="mb-24">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-purple-800 flex items-center">
            <Music className="w-8 h-8 mr-3" />
            Cultural Activities
          </h2>
          <button 
            onClick={() => toggleSection('cultural')}
            className="text-purple-600 hover:text-purple-800"
          >
            {expandedSections.cultural ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        
        {expandedSections.cultural && (
          <>
            <p className="text-lg text-gray-700 mb-8">
              Our cultural activities program aims to nurture artistic expression and appreciation for diverse art forms.
              Students engage in various creative pursuits that enable them to explore and showcase their talents.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative overflow-hidden rounded-xl shadow-lg h-64">
                <img 
                  src="/api/placeholder/800/400" 
                  alt="Annual Cultural Fest" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900 p-6">
                  <h3 className="text-white text-xl font-bold">Annual Cultural Fest</h3>
                  <p className="text-purple-100">A week-long celebration of performances</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Classical Arts Program",
                    description: "Traditional dance, music and folk arts",
                    schedule: "Weekends (Throughout the year)",
                    icon: <Music className="w-5 h-5 text-purple-600" />
                  },
                  {
                    title: "Theater & Drama",
                    description: "Drama workshops and productions",
                    schedule: "Wednesdays and Fridays",
                    icon: <Users className="w-5 h-5 text-purple-600" />
                  },
                  {
                    title: "Art & Craft Exhibition",
                    description: "Showcase of student artwork",
                    schedule: "November (Second Week)",
                    icon: <Palette className="w-5 h-5 text-purple-600" />
                  }
                ].map((activity, idx) => (
                  <div key={idx} className="p-4 border-b border-r border-purple-100">
                    <div className="flex items-center mb-2">
                      {activity.icon}
                      <h3 className="ml-2 text-base font-semibold text-purple-800">{activity.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{activity.schedule}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </section>

      {/* Sports Activities Section */}
      <section className="mb-24">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-emerald-800 flex items-center">
            <Activity className="w-8 h-8 mr-3" />
            Sports & Games
          </h2>
          <button 
            onClick={() => toggleSection('sports')}
            className="text-emerald-600 hover:text-emerald-800"
          >
            {expandedSections.sports ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        
        {expandedSections.sports && (
          <>
            <p className="text-lg text-gray-700 mb-8">
              Our comprehensive sports program aims to develop physical fitness, team spirit, and sportsmanship.
              We offer a wide range of sporting activities catering to different interests and skill levels.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Annual Sports Meet",
                  description: "Multi-day sports event featuring track and field competitions",
                  schedule: "December (First Week)",
                  icon: <Activity className="w-5 h-5 text-emerald-600" />,
                  image: "/api/placeholder/400/300"
                },
                {
                  title: "Intramural Tournaments",
                  description: "Regular tournaments in various sports",
                  schedule: "Throughout academic year",
                  icon: <Award className="w-5 h-5 text-emerald-600" />,
                  image: "/api/placeholder/400/300"
                },
                {
                  title: "Yoga & Fitness",
                  description: "Regular yoga sessions and fitness activities",
                  schedule: "Daily Morning Sessions",
                  icon: <Users className="w-5 h-5 text-emerald-600" />,
                  image: "/api/placeholder/400/300"
                },
                {
                  title: "Adventure Sports",
                  description: "Outdoor activities including trekking and camping",
                  schedule: "Quarterly (School Breaks)",
                  icon: <MapPin className="w-5 h-5 text-emerald-600" />,
                  image: "/api/placeholder/400/300"
                }
              ].map((activity, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden border border-emerald-100 hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      {activity.icon}
                      <h3 className="ml-2 text-lg font-semibold text-emerald-800">{activity.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{activity.description}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{activity.schedule}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      {/* Workshops Section */}
      <section className="mb-24">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-blue-800 flex items-center">
            <Users className="w-8 h-8 mr-3" />
            Workshops & Seminars
          </h2>
          <button 
            onClick={() => toggleSection('workshops')}
            className="text-blue-600 hover:text-blue-800"
          >
            {expandedSections.workshops ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        
        {expandedSections.workshops && (
          <>
            <p className="text-lg text-gray-700 mb-8">
              Our workshops and seminars provide students with hands-on learning experiences and exposure to diverse fields.
              These sessions are designed to complement classroom learning with practical knowledge and skills.
            </p>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg mb-8">
              <img 
                src="/api/placeholder/1200/400" 
                alt="Workshop Sessions" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center">
                <div className="px-8 py-6 max-w-lg">
                  <h3 className="text-white text-2xl font-bold mb-2">Interactive Learning</h3>
                  <p className="text-blue-100">
                    Our workshops feature hands-on sessions led by industry experts and professionals
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Career Guidance Workshops",
                  description: "Interactive sessions with professionals from various fields to provide career insights.",
                  schedule: "Monthly",
                  icon: <Users className="w-5 h-5 text-blue-600" />
                },
                {
                  title: "Skill Development Programs",
                  description: "Practical workshops on public speaking, leadership, and digital skills.",
                  schedule: "Bi-weekly",
                  icon: <Sparkles className="w-5 h-5 text-blue-600" />
                },
                {
                  title: "Environmental Awareness",
                  description: "Workshops on sustainability, conservation, and eco-friendly practices.",
                  schedule: "Monthly",
                  icon: <MapPin className="w-5 h-5 text-blue-600" />
                },
                {
                  title: "Media & Communication",
                  description: "Training in journalism, photography, and digital content creation.",
                  schedule: "Thursdays",
                  icon: <BookOpen className="w-5 h-5 text-blue-600" />
                }
              ].map((activity, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        {activity.icon}
                      </div>
                      <h3 className="ml-3 text-lg font-semibold text-blue-800">{activity.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-4">{activity.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{activity.schedule}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      {/* Competitions Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-rose-800 flex items-center">
            <Award className="w-8 h-8 mr-3" />
            Competitions & Events
          </h2>
          <button 
            onClick={() => toggleSection('competitions')}
            className="text-rose-600 hover:text-rose-800"
          >
            {expandedSections.competitions ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        
        {expandedSections.competitions && (
          <>
            <p className="text-lg text-gray-700 mb-8">
              We encourage students to participate in various competitions that challenge their abilities and provide
              platforms to showcase their talents. These events foster a healthy competitive spirit and excellence.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="bg-rose-50 rounded-xl p-6 h-full">
                  <h3 className="text-xl font-bold text-rose-800 mb-4">Upcoming Events</h3>
                  <ul className="space-y-4">
                    {[
                      { name: "Science Fair", date: "April 15-17" },
                      { name: "Interschool Debate", date: "May 10" },
                      { name: "Math Olympiad", date: "June 5" },
                      { name: "Creative Writing Contest", date: "July 20" }
                    ].map((event, idx) => (
                      <li key={idx} className="flex justify-between items-center border-b border-rose-200 pb-2">
                        <span className="font-medium text-gray-700">{event.name}</span>
                        <span className="bg-rose-200 text-rose-800 px-2 py-1 rounded text-xs">{event.date}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Inter-School Competitions",
                      description: "Participation in various competitions with other schools at district, state and national levels.",
                      schedule: "Throughout academic year",
                      icon: <Award className="w-5 h-5 text-rose-600" />
                    },
                    {
                      title: "Olympiads & Academic Contests",
                      description: "Participation in subject-specific olympiads, quizzes, and knowledge competitions.",
                      schedule: "As per event calendar",
                      icon: <BookOpen className="w-5 h-5 text-rose-600" />
                    },
                    {
                      title: "Exhibition & Fairs",
                      description: "Science fairs, book exhibitions, and innovative project displays.",
                      schedule: "Quarterly",
                      icon: <Sparkles className="w-5 h-5 text-rose-600" />
                    },
                    {
                      title: "Cultural Festivals",
                      description: "Annual cultural events featuring music, dance, and drama performances.",
                      schedule: "December",
                      icon: <Music className="w-5 h-5 text-rose-600" />
                    }
                    ].map((activity, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden border border-rose-100 hover:shadow-lg transition-shadow duration-300">
                            <div className="p-6">
                            <div className="flex items-center mb-4">
                                <div className="bg-rose-100 p-3 rounded-full">
                                {activity.icon}
                                </div>
                                <h3 className="ml-3 text-lg font-semibold text-rose-800">{activity.title}</h3>
                            </div>
                            <p className="text-gray-700 mb-4">{activity.description}</p>
                            <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span>{activity.schedule}</span>
                            </div>
                            </div>
                        </div>
                        ))}
                </div>
                </div>  
            </div>
            </>
        )}
        </section>
    </div>
    );
}


export default CoCurricularActivitiesPage;