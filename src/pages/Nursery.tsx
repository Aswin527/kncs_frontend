import React, { useState } from 'react';

interface TestimonialProps {
  text: string;
  author: string;
}

interface ActivityProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface TextbookProps {
  title: string;
  subject: string;
  publisher: string;
  description: string;
  coverImage: string;
}

const NurseryPage: React.FC = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState('pre-kg');

  // Sample testimonial data
  const testimonials: TestimonialProps[] = [
    {
      text: "My child loves coming to school every day! The teachers are caring and the activities are engaging.",
      author: "Parent of Aadi, Age 4"
    },
    {
      text: "The nurturing environment has helped my daughter become more confident and independent.",
      author: "Parent of Meera, Age 3"
    },
    {
      text: "The playful learning approach makes education fun for my son. He's always excited to share what he learned.",
      author: "Parent of Rohan, Age 4"
    }
  ];

  // Sample activities
  const activities: ActivityProps[] = [
    {
      title: "Creative Arts",
      description: "Children explore colors, shapes, and textures through painting, drawing, and crafts.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: "Storytime",
      description: "Interactive storytelling sessions that develop listening skills and imagination.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Music & Movement",
      description: "Fun activities that develop coordination, rhythm, and musical appreciation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      )
    },
    {
      title: "Outdoor Play",
      description: "Physical activities that promote gross motor skills and social interaction.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    }
  ];

  // Sample textbooks data organized by grade level
  const textbooksByGrade = {
    'pre-kg': [
      {
        title: "My First ABC",
        subject: "English",
        publisher: "Little Stars Publishing",
        description: "A colorful introduction to alphabets with fun illustrations that help children associate letters with familiar objects.",
        coverImage: "/api/placeholder/300/400"
      },
      {
        title: "Counting Adventures",
        subject: "Mathematics",
        publisher: "Learn & Play Publications",
        description: "Interactive approach to teaching numbers 1-10 with engaging activities and counting exercises.",
        coverImage: "/api/placeholder/300/400"
      },
      {
        title: "My Colorful World",
        subject: "Art & Colors",
        publisher: "Creative Kids Press",
        description: "Introduces primary colors through art activities and simple projects.",
        coverImage: "/api/placeholder/300/400"
      },
      {
        title: "First Steps in Science",
        subject: "Environmental Awareness",
        publisher: "Green Sprouts Educational",
        description: "Basic introduction to nature, animals, and plants with colorful illustrations.",
        coverImage: "/api/placeholder/300/400"
      }
    ],
    'lkg': [
      {
        title: "Phonics Fun",
        subject: "English",
        publisher: "Little Stars Publishing",
        description: "Introduction to letter sounds and basic phonics with interactive exercises and stories.",
        coverImage: "/api/placeholder/300/400"
      },
      {
        title: "Number Magic",
        subject: "Mathematics",
        publisher: "Learn & Play Publications",
        description: "Covers numbers 1-20, basic shapes, and simple patterns with hands-on activities.",
        coverImage: "/api/placeholder/300/400"
      },
      {
        title: "Art Explorer",
        subject: "Art & Craft",
        publisher: "Creative Kids Press",
        description: "Introduces secondary colors, basic art techniques, and simple craft projects.",
        coverImage: "/api/placeholder/300/400"
      },
      {
        title: "Our Natural World",
        subject: "Environmental Science",
        publisher: "Green Sprouts Educational",
        description: "Explores weather, seasons, and simple environmental concepts through observation and activities.",
        coverImage: "/api/placeholder/300/400"
      }
    ],
    'ukg': [
      {
        title: "Reading Adventures",
        subject: "English",
        publisher: "Little Stars Publishing",
        description: "Introduces sight words, simple sentences, and reading comprehension through engaging stories and activities.",
        coverImage: "/api/placeholder/300/400"
      },
      {
        title: "Math Explorers",
        subject: "Mathematics",
        publisher: "Learn & Play Publications",
        description: "Covers numbers up to 50, basic addition, subtraction concepts, and more complex patterns and shapes.",
        coverImage: "/api/placeholder/300/400"
      },
      {
        title: "Creative Expression",
        subject: "Art & Music",
        publisher: "Creative Kids Press",
        description: "Advanced art techniques, music appreciation, and creative projects that integrate multiple skills.",
        coverImage: "/api/placeholder/300/400"
      },
      {
        title: "Science Discoverers",
        subject: "Science",
        publisher: "Green Sprouts Educational",
        description: "Introduction to simple scientific concepts, experimentation, and observation skills with hands-on projects.",
        coverImage: "/api/placeholder/300/400"
      }
    ]
  };

  // Testimonial component
  const Testimonial: React.FC<TestimonialProps> = ({ text, author }) => (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="text-yellow-500 mb-4">
        {/* Stars for rating */}
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
      </div>
      <p className="text-gray-600 italic mb-4">"{text}"</p>
      <p className="font-semibold text-indigo-600">{author}</p>
    </div>
  );

  // Activity card component
  const ActivityCard: React.FC<ActivityProps> = ({ title, description, icon }) => (
    <div className="bg-white rounded-xl p-6 shadow-lg border-b-4 border-indigo-500 hover:transform hover:scale-105 transition-transform duration-300">
      <div className="text-indigo-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-indigo-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  // Textbook component
  const TextbookCard: React.FC<TextbookProps> = ({ title, subject, publisher, description, coverImage }) => (
    <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="md:w-1/3 bg-indigo-50">
        <img src={coverImage} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="md:w-2/3 p-6">
        <div className="mb-1 text-sm font-medium text-pink-500">{subject}</div>
        <h3 className="text-xl font-bold mb-2 text-indigo-800">{title}</h3>
        <div className="mb-3 flex items-center">
          <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span className="text-indigo-600 font-medium">Publisher: {publisher}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );

  // Tab component for grade levels
  const GradeTab: React.FC<{id: string, label: string, active: boolean, onClick: () => void}> = ({ id, label, active, onClick }) => (
    <button
      onClick={onClick}
      className={`px-6 py-3 font-medium rounded-t-lg transition-colors duration-300 ${
        active 
          ? 'bg-white text-indigo-700 border-t-2 border-l-2 border-r-2 border-indigo-500 shadow-sm'
          : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="bg-gradient-to-b from-sky-100 to-purple-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-pink-300 opacity-70 blur-xl"></div>
          <div className="absolute right-20 top-20 h-24 w-24 rounded-full bg-blue-300 opacity-70 blur-xl"></div>
          <div className="absolute left-40 bottom-20 h-40 w-40 rounded-full bg-yellow-300 opacity-70 blur-xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 mb-6">
            Welcome to KNCS Pre-Primary
          </h1>
          <p className="text-xl text-indigo-900 max-w-3xl mx-auto mb-8">
            Where little minds explore, discover, and grow in a safe, nurturing, and playful environment
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#about" 
              className="px-8 py-4 bg-white text-indigo-700 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Colorful divider */}
      <div className="flex justify-center my-12">
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-full bg-red-400"></div>
          <div className="w-6 h-6 rounded-full bg-yellow-400"></div>
          <div className="w-6 h-6 rounded-full bg-green-400"></div>
          <div className="w-6 h-6 rounded-full bg-blue-400"></div>
          <div className="w-6 h-6 rounded-full bg-purple-400"></div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-800 mb-2">Our Pre-Primary Program</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our pre-primary program is designed to provide a strong foundation for your child's educational journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-8 border-pink-500">
            <h3 className="text-2xl font-bold text-pink-600 mb-4">Our Philosophy</h3>
            <p className="text-gray-700 mb-4">
              We believe that every child is unique and deserves a nurturing environment where they can develop at their own pace. Our play-based learning approach helps children develop crucial skills while having fun.
            </p>
            <p className="text-gray-700">
              Our curriculum is designed to develop the whole child – socially, emotionally, physically, and intellectually. We focus on building confidence, independence, and a love for learning that will last a lifetime.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-8 border-blue-500">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">What Sets Us Apart</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Low teacher-to-child ratio for personalized attention</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Experienced and qualified early childhood educators</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Safe, secure, and stimulating learning environment</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Regular communication with parents about child's progress</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Curriculum Section with Tabs */}
      <section id="curriculum" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-800 mb-2">Our Curriculum</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our carefully selected textbooks and learning materials make learning fun and engaging
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 md:p-10 rounded-3xl shadow-md mb-10">
          <div className="flex items-center justify-center mb-8">
            <svg className="w-10 h-10 text-purple-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h3 className="text-2xl font-bold text-purple-800">Textbooks & Learning Materials</h3>
          </div>
          
          {/* Tabs for different grade levels */}
          <div className="flex flex-wrap gap-2 mb-6">
            <GradeTab 
              id="pre-kg" 
              label="Pre-KG" 
              active={activeTab === 'pre-kg'} 
              onClick={() => setActiveTab('pre-kg')} 
            />
            <GradeTab 
              id="lkg" 
              label="LKG" 
              active={activeTab === 'lkg'} 
              onClick={() => setActiveTab('lkg')} 
            />
            <GradeTab 
              id="ukg" 
              label="UKG" 
              active={activeTab === 'ukg'} 
              onClick={() => setActiveTab('ukg')} 
            />
          </div>
          
          {/* Tab content */}
          <div className="space-y-6">
            {textbooksByGrade[activeTab as keyof typeof textbooksByGrade].map((book, index) => (
              <TextbookCard key={index} {...book} />
            ))}
          </div>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg">
          <h3 className="text-2xl font-bold text-center text-indigo-800 mb-6">Our Curriculum Approach</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
              <h4 className="text-xl font-bold text-green-700 mb-3">Play-Based Learning</h4>
              <p className="text-gray-700">
                Our curriculum incorporates play as a fundamental learning tool. Through structured and free play activities, children develop essential cognitive, social, and emotional skills.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Thematic Learning</h4>
              <p className="text-gray-700">
                Each month explores a different theme, connecting all subjects and activities to create a comprehensive learning experience that sparks curiosity and builds knowledge.
              </p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
              <h4 className="text-xl font-bold text-yellow-700 mb-3">Multisensory Approach</h4>
              <p className="text-gray-700">
                Our activities engage all senses to enhance learning retention and make education more accessible for different learning styles and abilities.
              </p>
            </div>
            
            <div className="bg-pink-50 p-6 rounded-xl border-l-4 border-pink-500">
              <h4 className="text-xl font-bold text-pink-700 mb-3">Individualized Learning</h4>
              <p className="text-gray-700">
                We recognize each child's unique pace and style of learning. Our curriculum allows for customization to meet individual needs while achieving developmental milestones.
              </p>
            </div>
          </div>
        </div>
      </section>
    
    {/* Examination & Assessment Section */}
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-indigo-800 mb-2">Examination & Assessment</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Our gentle assessment approach helps track your child's progress while keeping learning enjoyable
        </p>
    </div>

    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Term Schedule Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 py-6 px-8">
        <h3 className="text-2xl font-bold text-white">Academic Terms Schedule</h3>
        <p className="text-indigo-100">LKG and UKG students have three academic terms throughout the year</p>
        </div>

        {/* Term Schedule Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        <div className="bg-indigo-50 rounded-xl p-6 border-t-4 border-indigo-400 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
            <div className="h-10 w-10 rounded-full bg-indigo-400 flex items-center justify-center mr-3">
                <span className="font-bold text-white">I</span>
            </div>
            <h4 className="text-xl font-semibold text-indigo-800">Term I</h4>
            </div>
            <p className="text-gray-700 mb-2">June to August</p>
            <p className="text-sm text-gray-600">Beginning of the academic journey with focus on adaptation and foundational skills</p>
        </div>

        <div className="bg-purple-50 rounded-xl p-6 border-t-4 border-purple-400 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
            <div className="h-10 w-10 rounded-full bg-purple-400 flex items-center justify-center mr-3">
                <span className="font-bold text-white">II</span>
            </div>
            <h4 className="text-xl font-semibold text-purple-800">Term II</h4>
            </div>
            <p className="text-gray-700 mb-2">September to December</p>
            <p className="text-sm text-gray-600">Building on fundamentals with increasing complexity in activities and exercises</p>
        </div>

        <div className="bg-pink-50 rounded-xl p-6 border-t-4 border-pink-400 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
            <div className="h-10 w-10 rounded-full bg-pink-400 flex items-center justify-center mr-3">
                <span className="font-bold text-white">III</span>
            </div>
            <h4 className="text-xl font-semibold text-pink-800">Term III</h4>
            </div>
            <p className="text-gray-700 mb-2">January to March</p>
            <p className="text-sm text-gray-600">Final term focusing on reinforcement and preparation for the next grade level</p>
        </div>
        </div>

        {/* Assessment Approach */}
        <div className="px-8 pb-8">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-l-4 border-yellow-500">
            <h4 className="text-xl font-bold text-yellow-700 mb-4">Our Assessment Approach</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h5 className="font-semibold text-orange-700 mb-2">For LKG Students</h5>
                <ul className="space-y-2">
                <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Continuous observation-based assessment</span>
                </li>
                <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Activity-based evaluations through games and puzzles</span>
                </li>
                <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Informal verbal assessments for language development</span>
                </li>
                <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Pictorial worksheets for basic concept understanding</span>
                </li>
                </ul>
            </div>
            <div>
                <h5 className="font-semibold text-orange-700 mb-2">For UKG Students</h5>
                <ul className="space-y-2">
                <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Structured but gentle written assessments</span>
                </li>
                <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Oral recitation and reading evaluations</span>
                </li>
                <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Project-based assessments for creativity and comprehension</span>
                </li>
                <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Simple number and letter recognition tests</span>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </div>

        {/* Progress Reports */}
        <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
        
        <div className="text-gray-700">
            <p className="mt-4">Regular parent-teacher meetings are scheduled after each term's assessment to discuss your child's progress and address any concerns.</p>
        </div>
        </div>
    </div>
    </section>

      {/* Activities Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-800 mb-2">Our Learning Activities</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a variety of engaging activities that promote holistic development
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))}
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-800 mb-2">Glimpses of Nursery Life</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See our little ones engaged in fun learning activities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden">
            <img src="/api/placeholder/400/400" alt="Children painting" className="w-full h-full object-cover transform hover:scale-110 transition duration-500" />
          </div>
          <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden">
            <img src="/api/placeholder/400/400" alt="Outdoor play" className="w-full h-full object-cover transform hover:scale-110 transition duration-500" />
          </div>
          <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden">
            <img src="/api/placeholder/400/400" alt="Story time" className="w-full h-full object-cover transform hover:scale-110 transition duration-500" />
          </div>
          <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden">
            <img src="/api/placeholder/400/400" alt="Group activity" className="w-full h-full object-cover transform hover:scale-110 transition duration-500" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-800 mb-2">What Parents Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our happy parents about their children's experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </section>


     
    </div>
  );
};

export default NurseryPage;