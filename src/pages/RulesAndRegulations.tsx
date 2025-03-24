import React, { useState } from 'react';

type RuleCategory = {
  title: string;
  icon: React.ReactNode;
  rules: {
    title: string;
    description: string;
  }[];
};

const SchoolRulesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  
  // Icons for categories
  const BookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
  
  const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
  
  const ShirtIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
  
  const DeviceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );
  
  const BuildingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
  
  // Rule categories with content
  const categories: RuleCategory[] = [
    {
      title: "Academic Integrity",
      icon: <BookIcon />,
      rules: [
        {
          title: "Plagiarism",
          description: "All work submitted must be original. Plagiarism of any kind will result in a failing grade for the assignment and possible disciplinary action."
        },
        {
          title: "Citation Requirements",
          description: "All research papers must include proper citations in the required format (MLA, APA, or Chicago style as specified by the instructor)."
        },
        {
          title: "Collaborative Work",
          description: "Group projects require equal participation from all members. Individual contributions must be clearly identified when submitting group work."
        }
      ]
    },
    {
      title: "Attendance Policy",
      icon: <ClockIcon />,
      rules: [
        {
          title: "Punctuality",
          description: "Students are expected to arrive on time for all classes. Three late arrivals will count as one absence."
        },
        {
          title: "Absences",
          description: "Students are permitted a maximum of three unexcused absences per semester. Medical absences require a doctor's note within 48 hours of return."
        },
        {
          title: "Make-up Work",
          description: "Make-up work for excused absences must be completed within one week of returning to school, unless otherwise specified by the instructor."
        }
      ]
    },
    {
      title: "Dress Code",
      icon: <ShirtIcon />,
      rules: [
        {
          title: "Uniform Requirements",
          description: "School uniform must be worn on all regular school days. Physical education uniform is required for PE classes only."
        },
        {
          title: "Casual Dress Days",
          description: "On designated casual dress days, students may wear appropriate casual attire. No offensive imagery or text is permitted."
        },
        {
          title: "Accessories",
          description: "Minimal jewelry is permitted. Facial piercings are limited to small, unobtrusive studs. Hair must be of natural color."
        }
      ]
    },
    {
      title: "Technology Use",
      icon: <DeviceIcon />,
      rules: [
        {
          title: "Mobile Devices",
          description: "Phones must be silenced and stored away during class hours unless explicitly permitted by the instructor for educational purposes."
        },
        {
          title: "School Computers",
          description: "School computers are for educational use only. Browsing non-academic websites or installing unauthorized software is prohibited."
        },
        {
          title: "Social Media",
          description: "Use of social media during school hours is not permitted. Representing the school on social media requires adherence to the school's code of conduct."
        }
      ]
    },
    {
      title: "Campus Facilities",
      icon: <BuildingIcon />,
      rules: [
        {
          title: "Library",
          description: "Library materials must be checked out properly. Quiet must be maintained in all library areas at all times."
        },
        {
          title: "Cafeteria",
          description: "Students are responsible for cleaning up after themselves in the cafeteria. Food is not permitted outside designated eating areas."
        },
        {
          title: "Laboratories",
          description: "Safety protocols must be followed in all laboratory settings. Protective equipment must be worn when required."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-indigo-900 mb-4">School Rules & Regulations</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our community thrives when we all adhere to these guidelines designed to foster a respectful, 
            safe, and productive learning environment.
          </p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Category Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 bg-indigo-600 text-white">
                <h2 className="text-xl font-bold">Categories</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`w-full text-left px-6 py-4 flex items-center space-x-3 hover:bg-indigo-50 transition duration-150 ${
                      activeCategory === index ? 'bg-indigo-100 font-medium text-indigo-700' : 'text-gray-600'
                    }`}
                  >
                    <span className={activeCategory === index ? 'text-indigo-600' : 'text-gray-400'}>
                      {category.icon}
                    </span>
                    <span>{category.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Content Area */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 bg-indigo-600 text-white flex items-center space-x-3">
                <span>{categories[activeCategory].icon}</span>
                <h2 className="text-xl font-bold">{categories[activeCategory].title}</h2>
              </div>
              
              <div className="p-6">
                <div className="grid gap-6">
                  {categories[activeCategory].rules.map((rule, index) => (
                    <div key={index} className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300">
                      <h3 className="text-lg font-semibold text-indigo-800 mb-2">{rule.title}</h3>
                      <p className="text-gray-600">{rule.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      

    </div>
  );
};

export default SchoolRulesPage;