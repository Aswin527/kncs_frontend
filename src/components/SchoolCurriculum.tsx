import React from 'react';

const SchoolCurriculum: React.FC = () => {
  const curriculumData = {
    terms: [
      { name: "First Term", period: "June to October" },
      { name: "Second Term", period: "November to March" }
    ],
    classes: [
      {
        range: "1st to 3rd Std",
        core: ["Mathematics", "Environmental Studies"],
        languages: ["English", "Hindi", "Kannada"],
        other: ["Computer Science", "General Knowledge", "Drawing / Art", "Value Education", "SUPW / craft", "Physical Education", "Music/dance"]
      },
      {
        range: "4th to 10th Std",
        core: ["Science", "Mathematics", "Social Science"],
        languages: ["English", "Hindi (2nd or 3rd language)", "Kannada (2nd or 3rd language)", "Sanskrit (3rd language)"],
        other: ["Computer Science", "General Knowledge", "Drawing / Art", "Value Education", "SUPW / Craft", "Physical Education", "Health Education", "Yoga", "Music / dance"]
      }
    ],
    additional: [
      "Regular Parent Teacher Meeting (PTM)",
      "Remedial coaching for needed students",
      "Special attention for slow learners"
    ]
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 relative pb-3">
        The Curriculum
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600"></span>
      </h1>

      <div className="mb-8">
        <p className="text-gray-700 text-lg mb-4">
          The academic session consists of two terms:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {curriculumData.terms.map((term, index) => (
            <div key={index} className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
              <h3 className="font-semibold text-blue-800">{term.name}:</h3>
              <p className="text-gray-700">{term.period}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-700 mt-4">
          The academic year for school commences from the month of June and extends up to March 31st of the following year.
        </p>
      </div>

      {curriculumData.classes.map((classGroup, index) => (
        <div key={index} className="mb-8 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Class {classGroup.range}</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Core subjects:
              </h3>
              <p className="ml-4 text-gray-700">{classGroup.core.join(", ")}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Languages offered:
              </h3>
              <p className="ml-4 text-gray-700">{classGroup.languages.join(", ")}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Other subjects:
              </h3>
              <p className="ml-4 text-gray-700">{classGroup.other.join(", ")}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="bg-blue-600 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Additional Features</h2>
        <ul className="space-y-2">
          {curriculumData.additional.map((item, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SchoolCurriculum;