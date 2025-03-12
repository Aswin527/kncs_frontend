import React from 'react';
import { 
  BookOpen, 
  Monitor, 
  Trophy, 
  Utensils, 
  Mail, 
  Phone, 
  MapPin, 
} from 'lucide-react';

// Types
interface Achievement {
  id: number;
  title: string;
  description: string;
  year: string;
}

interface Facility {
  id: number;
  name: string;
  description: string;
  iconName: string;
}

interface StaffMember {
  id: number;
  name: string;
  position: string;
}

interface SchoolInfo {
  name: string;
  fullName: string;
  established: string;
  address: string;
  email: string;
  phone: string;
  mission: string;
  vision: string;
  achievements: Achievement[];
  facilities: Facility[];
  staffMembers: StaffMember[];
}

// Data
const schoolInfoData: SchoolInfo = {
  name: "KNC School",
  fullName: "Kairalee Nilayam Central School (45307)",
  established: "2004",
  address: "Kairalee Nilayam Campus, Bangalore – 560017",
  email: "kncentralschool@gmail.com",
  phone: "080-25234313",
  mission: "To provide quality education that nurtures critical thinking and creativity.",
  vision: "To be a leading educational institution that empowers students to become responsible global citizens.",
  achievements: [
    { id: 1, title: "CBSE Affiliation", description: "Successfully affiliated with CBSE since 2010.", year: "2010" },
    { id: 2, title: "Academic Excellence", description: "Outstanding results in board examinations.", year: "2023" },
    { id: 3, title: "Sports Championship", description: "Won the inter-school sports trophy.", year: "2022" },
    { id: 4, title: "Science Exhibition", description: "First prize in state-level science exhibition.", year: "2021" },
    { id: 5, title: "Eco-Friendly Campus", description: "Recognized for sustainable practices.", year: "2020" }
  ],
  facilities: [
    { id: 1, name: "Digital Classrooms", description: "Smart classrooms with interactive boards.", iconName: "Monitor" },
    { id: 2, name: "Science Labs", description: "Well-equipped laboratories for practical learning.", iconName: "Flask" },
    { id: 2, name: "Science Labs", description: "Well-equipped laboratories for practical learning.", iconName: "Monitor" },
    { id: 4, name: "Sports Complex", description: "Indoor and outdoor sports facilities.", iconName: "Trophy" },
    { id: 5, name: "Cafeteria", description: "Serves nutritious meals for students.", iconName: "Utensils" }
  ],
  staffMembers: [
    { id: 1, name: "Dr. Anil Kumar", position: "Principal" },
    { id: 2, name: "Mrs. Sudha Vineethan", position: "Vice Principal" },
    { id: 3, name: "Mr. Rajesh P", position: "Senior Math Teacher" },
    { id: 4, name: "Ms. Anjali S", position: "Science Coordinator" },
    { id: 5, name: "Mr. Thomas K", position: "Physical Education" }
  ]
};

// Icon mapping
const IconMap = {
  BookOpen,
  Monitor,
  Trophy,
  Utensils
};

// Component for facility icons
const FacilityIcon: React.FC<{ name: string }> = ({ name }) => {
  const IconComponent = IconMap[name as keyof typeof IconMap] || BookOpen;
  return <IconComponent className="h-5 w-5 text-indigo-600" />;
};

// Contact information display component
const ContactItem: React.FC<{ icon: React.ReactNode, text: string }> = ({ icon, text }) => (
  <div className="flex items-center gap-2 text-indigo-100">
    {icon}
    <span>{text}</span>
  </div>
);

// Year badge component
const YearBadge: React.FC<{ year: string }> = ({ year }) => (
  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
    {year}
  </span>
);

// Section Title component
const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <div className="bg-gradient-to-r from-indigo-700 to-indigo-600 text-white py-3 px-4 rounded-t-lg">
    <h2 className="text-xl font-bold">{title}</h2>
  </div>
);

// Main Component
const SchoolInfoPage: React.FC = () => {
  const { 
    name, 
    fullName, 
    established, 
    address, 
    email, 
    phone, 
    mission, 
    vision, 
    facilities, 
    achievements, 
    staffMembers 
  } = schoolInfoData;

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}       
        <div 
        className="bg-gradient-to-r from-indigo-800/90 to-indigo-900/90 text-white py-12 relative"
        style={{
            backgroundImage: "url('/path/to/your/image.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}
        >         
        {/* Dark overlay to ensure text remains readable */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="container mx-auto px-4 relative z-10">           
            <div className="max-w-4xl mx-auto text-center">             
            <h1 className="text-4xl font-bold mb-3">{fullName}</h1>             
            <p className="text-xl mb-6">Empowering Futures Since {established}</p>             
            <div className="bg-indigo-900/50 p-4 rounded-lg inline-block backdrop-blur-sm">               
                <div className="flex flex-col md:flex-row md:items-center gap-4 justify-center">                 
                <ContactItem icon={<MapPin size={18} />} text={address} />                 
                <ContactItem icon={<Mail size={18} />} text={email} />                 
                <ContactItem icon={<Phone size={18} />} text={phone} />               
                </div>             
            </div>           
            </div>         
        </div>       
        </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-8">

          {/* Facilities Section */}
          <div className="rounded-lg shadow-md overflow-hidden">
            <SectionTitle title="Additional Information  " />
            <div className="p-6 bg-white">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  {/* <thead className="bg-indigo-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-indigo-800 uppercase tracking-wider">
                        Facility
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-indigo-800 uppercase tracking-wider">
                        Description
                      </th>
                    </tr>
                  </thead> */}
                  <tbody className="bg-white divide-y divide-gray-200">
                    {facilities.map((facility) => (
                      <tr key={facility.id} className="hover:bg-indigo-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            <div className="bg-indigo-100 p-2 rounded-full">
                              <FacilityIcon name={facility.iconName} />
                            </div>
                            <span className="font-medium text-indigo-800">{facility.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {facility.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="rounded-lg shadow-md overflow-hidden">
            <SectionTitle title="Our Achievements" />
            <div className="p-6 bg-white">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-indigo-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-indigo-800 uppercase tracking-wider">
                        Achievement
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-indigo-800 uppercase tracking-wider">
                        Description
                      </th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-indigo-800 uppercase tracking-wider">
                        Year
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {achievements.map((achievement) => (
                      <tr key={achievement.id} className="hover:bg-indigo-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-indigo-800">
                          {achievement.title}
                        </td>
                        <td className="px-6 py-4">
                          {achievement.description}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <YearBadge year={achievement.year} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Staff Section */}
          <div className="rounded-lg shadow-md overflow-hidden">
            <SectionTitle title="Our Staff" />
            <div className="p-6 bg-white">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-indigo-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-indigo-800 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-indigo-800 uppercase tracking-wider">
                        Position
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {staffMembers.map((member) => (
                      <tr key={member.id} className="hover:bg-indigo-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-indigo-800">
                          {member.name}
                        </td>
                        <td className="px-6 py-4">
                          {member.position}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolInfoPage;