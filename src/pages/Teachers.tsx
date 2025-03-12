import React, { useState } from 'react';

// Define teacher type with the requested fields
type Teacher = {
  id: number;
  name: string;
  gender: 'male' | 'female';
  position: string;
  department: string;
  designation: string;
  dateOfJoining: string;
  trainingStatus: 'Trained' | 'Untrained';
  employmentStatus: 'Probation' | 'Confirmed';
  contractType: 'Full-time' | 'Part-time' | 'Adhoc';
};

// Sample data with new fields
const teachersData: Teacher[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    gender: "female",
    position: "Science Department Head",
    department: "Science",
    designation: "Senior Teacher",
    dateOfJoining: "2015-08-15",
    trainingStatus: "Trained",
    employmentStatus: "Confirmed",
    contractType: "Full-time"
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    gender: "male",
    position: "Mathematics Teacher",
    department: "Mathematics",
    designation: "Assistant Professor",
    dateOfJoining: "2018-03-10",
    trainingStatus: "Trained",
    employmentStatus: "Confirmed",
    contractType: "Full-time"
  },
  {
    id: 3,
    name: "Ms. Emily Rodriguez",
    gender: "female",
    position: "English Teacher",
    department: "Humanities",
    designation: "Junior Teacher",
    dateOfJoining: "2021-07-20",
    trainingStatus: "Trained",
    employmentStatus: "Probation",
    contractType: "Full-time"
  },
  {
    id: 4,
    name: "Mr. David Wilson",
    gender: "male",
    position: "History Teacher",
    department: "Humanities",
    designation: "Associate Professor",
    dateOfJoining: "2017-01-05",
    trainingStatus: "Trained",
    employmentStatus: "Confirmed",
    contractType: "Full-time"
  },
  {
    id: 5,
    name: "Dr. Amara Okafor",
    gender: "female",
    position: "Computer Science Teacher",
    department: "Technology",
    designation: "Senior Lecturer",
    dateOfJoining: "2019-11-12",
    trainingStatus: "Trained",
    employmentStatus: "Confirmed",
    contractType: "Full-time"
  },
  {
    id: 6,
    name: "Mr. James Thompson",
    gender: "male",
    position: "Physical Education Teacher",
    department: "Athletics",
    designation: "Sports Coach",
    dateOfJoining: "2022-02-28",
    trainingStatus: "Trained",
    employmentStatus: "Probation",
    contractType: "Part-time"
  },
  {
    id: 7,
    name: "Mrs. Lisa Kumar",
    gender: "female",
    position: "Art Teacher",
    department: "Arts",
    designation: "Instructor",
    dateOfJoining: "2023-01-10",
    trainingStatus: "Untrained",
    employmentStatus: "Probation",
    contractType: "Adhoc"
  },
  {
    id: 8,
    name: "Mr. Robert Patel",
    gender: "male",
    position: "Music Teacher",
    department: "Arts",
    designation: "Visiting Faculty",
    dateOfJoining: "2022-08-15",
    trainingStatus: "Trained",
    employmentStatus: "Confirmed",
    contractType: "Part-time"
  }
];

// Format date to DD/MM/YYYY
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};

// Main component
const TeachersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  // Get unique departments
  const departments = ["All", ...Array.from(new Set(teachersData.map(teacher => teacher.department)))];
  
  // Filter teachers based on department and search query
  const filteredTeachers = teachersData.filter(teacher => 
    (selectedDepartment === "All" || teacher.department === selectedDepartment) &&
    (teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     teacher.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
     teacher.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
     teacher.designation.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced stylish header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute -bottom-24 left-0 right-0 h-80 bg-gradient-to-b from-transparent to-indigo-900 transform rotate-2 scale-125"></div>
          <div className="absolute -top-24 left-0 right-0 h-80 bg-gradient-to-t from-transparent to-indigo-900 transform -rotate-2 scale-125"></div>
        </div>
        <div className="container relative mx-auto px-6 py-12">
          <div className="max-w-2xl">
            <h1 className="font-extrabold text-4xl sm:text-5xl mb-4 tracking-tight">
              <span className="block">Meet Our</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400">
                Exceptional Faculty
              </span>
            </h1>
            <p className="text-lg opacity-80 max-w-lg">
              The dedicated educators who inspire and guide our students toward excellence.
            </p>
          </div>
        </div>
      </div>
      
      {/* Filters section - simplified */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <div className="inline-flex items-center">
            <select 
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="p-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="All">All Departments</option>
              {departments.filter(dept => dept !== "All").map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
          
          <div className="w-full sm:w-64">
            <input
              type="text"
              placeholder="Search teachers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        
        {/* Teachers grid - smaller tiles with the requested details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredTeachers.map((teacher) => (
            <div 
              key={teacher.id} 
              className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col"
            >
              <div className="p-4 flex items-center border-b border-gray-100">
                <div className="w-12 h-12 flex-shrink-0 mr-3 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
                  {teacher.gender === 'female' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a3 3 0 0 0-3 3c0 1.7 1.3 3 3 3s3-1.3 3-3a3 3 0 0 0-3-3z"></path>
                      <path d="M15 9H9a3 3 0 0 0-3 3v6h12v-6a3 3 0 0 0-3-3z"></path>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a3 3 0 0 0-3 3c0 1.7 1.3 3 3 3s3-1.3 3-3a3 3 0 0 0-3-3z"></path>
                      <path d="M12 8v14"></path>
                      <path d="M9 15h6"></path>
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-800 line-clamp-1">{teacher.name}</h3>
                  <p className="text-xs text-indigo-600 line-clamp-1">{teacher.position}</p>
                </div>
              </div>
              
              <div className="p-3 flex-grow text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Designation:</span>
                  <span className="font-medium text-gray-700">{teacher.designation}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-500">Joined:</span>
                  <span className="font-medium text-gray-700">{formatDate(teacher.dateOfJoining)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-500">Status:</span>
                  <span className="font-medium text-gray-700">{teacher.trainingStatus}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-500">Employment:</span>
                  <span className="font-medium text-gray-700">{teacher.employmentStatus}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-500">Contract:</span>
                  <span className="font-medium text-gray-700">{teacher.contractType}</span>
                </div>
              </div>
              
              <div className="p-3 pt-0">
                <span className="inline-block bg-gray-100 px-2 py-1 rounded-full text-xs text-gray-600">
                  {teacher.department}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty state - simplified */}
        {filteredTeachers.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No teachers found</h3>
            <p className="mt-1 text-xs text-gray-500">Try adjusting your search</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeachersPage;