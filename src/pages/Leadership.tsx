import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Define leadership and management member interface
interface CommitteeMember {
  name: string;
  position: string;
  image: string;
  message?: string;
}

// Define props interface
interface LeadershipProps {
  leadershipMembers?: {
    chairman?: CommitteeMember;
    dean?: CommitteeMember;
    viceChairperson?: CommitteeMember;
  };
  trustInfo?: {
    name: string;
    description: string;
    foundedYear?: number;
    mission?: string;
    images?: string[];
  };
  managementCommittee?: CommitteeMember[];
}

const Leadership: React.FC<LeadershipProps> = ({
  leadershipMembers = {
    chairman: {
      name: "Mrs. Sudha Vineethan",
      position: "Principal",
      image: "/img/leadership/chairman.jpg",
      message: "Few things have greater importance to parents than the education of their children. Every parent looks for academic excellence, good values, and discipline for their children. Choosing the right school for them is therefore a crucial decision. NPS provides high standards for educational excellence to their students. We stimulate creativity and develop problem-solving capability in each student. As a family-oriented school, we believe that partnership between the family and school is the foundation of a student's fulfillment and success in later life. All the dynamic institutions in the world today look forward to introducing and affecting a creative approach in the educational curriculum. Teachers play a major role in implementing and supporting the students to gain competence in their efforts."
    },
    dean: {
      name: "Mr. P K Sudhish",
      position: "Secretary & Correspondent",
      image: "/img/leadership/dean.jpg",
      message: "Our commitment to educational excellence goes beyond traditional learning. We focus on holistic development, nurturing not just academic skills but also critical thinking, creativity, and character building. Our curriculum is designed to prepare students for the challenges of a rapidly changing world."
    },
    viceChairperson: {
      name: "Mr. Sudhakaran Ramanthali",
      position: "President",
      image: "/img/leadership/vice-chairperson.jpg",
      message: "We believe in creating an environment that encourages innovation, collaboration, and personal growth. Our leadership team is dedicated to providing resources, support, and guidance that empowers both our students and staff to reach their full potential."
    }
  },
  trustInfo = {
    name: "Kairalee Kala Samithi (Regd)",
    description: "Kairalee Kala Samithi (Regd) is a charitable society registered under the Karnataka Societies Registration Act, Vide Regn. No. 154/64-65. The land on which the school is running is leased to Kairalee Kala Samithi (Regd) by Hindustan Aeronautics Ltd. Kairalee Nilayam Central School is built in 1 acre plot leased to us by HAL management, this plot is within the limits of Bruhut Bangalore Mahanagara Palike (Greater Bangalore City Muncipal Corporation). Many hands have toiled and many hearts have cared to make Kairalee Kala Samithi to build this institutions what is today. Countless number of children have left the portals of the institutions well equipped to face the challenges of everyday life and have become successful. Kairalee Kala Samithi is a society formed by a team of dynamic people who started this with focus in imparting quality education for varied social, cultural and economic background in the year 1954 . The focus is mainly thrust upon academic, cultural and sports for all children from the deserving to the needy. Kairalee Kala Samithi committed to provide world class learning atmosphere to students. Every institution run by the trust is equipped by state of the infrastructure. We have spacious buildings with well-furnished class rooms, store rooms, assembly area, and facility of sports and games . The backbone of any academic institution is its team of faculty members, we are proud to have some of the eminent educationist in our panel. The students are given education at an affordable cost, free education for the needy and scholarships and sponsors for the deserving students. The members of Society is fond of nurturing and inculcating passion for excellence. The committee members are from diversified vocations who spent their time, effort and funds for the society. The society has undergone many incarnations to reach its present form. Many hands have toiled and many hearts have cared to make Kairalee Kala Samithi, a well - renowned institution in Bangalore. The institution was started in a small scale, and achieved a remarkable growth because we have never forgotten the noble ideals of fostering strong values, mutual understanding and respect to our culture. Countless number of children have left the portals of the institution of the Samithi, well equipped to face the challenges of everyday life.",
    foundedYear: 1985,
    mission: "To provide high-quality, inclusive, and innovative education that empowers students to reach their full potential, foster lifelong learning, and make a positive impact on society.",
    images: [
      "../src/assets/kks.jpg",
      "/img/trust/trust-image-2.jpg",
      "/img/trust/trust-image-3.jpg",
      "/img/trust/trust-image-4.jpg"
    ]
  },
  managementCommittee = [
    {
      name: "Sarah Williams",
      position: "Academic Director",
      image: "/img/management/academic-director.jpg"
    },
    {
      name: "Robert Lee",
      position: "Administrative Manager",
      image: "/img/management/admin-manager.jpg"
    },
    {
      name: "Priya Patel",
      position: "Head of Student Affairs",
      image: "/img/management/student-affairs.jpg"
    },
    {
      name: "David Rodriguez",
      position: "Finance Director",
      image: "/img/management/finance-director.jpg"
    }
  ]
}) => {
  const [activeTab, setActiveTab] = useState<keyof typeof leadershipMembers>('chairman');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState<boolean>(false);

  // const renderLeadershipMember = (member: CommitteeMember) => (
  //   <motion.div 
  //     initial={{ opacity: 0 }}
  //     animate={{ opacity: 1 }}
  //     transition={{ duration: 0.5 }}
  //     className="grid md:grid-cols-2 gap-8 items-center"
  //   >
  //     <div className="flex justify-center">
  //       <img 
  //         src={member.image} 
  //         alt={member.name} 
  //         className="w-64 h-64 object-cover rounded-lg shadow-lg"
  //       />
  //     </div>
  //     <div>
  //       <h2 className="text-3xl font-bold text-gray-800 mb-4">{member.name}</h2>
  //       <h3 className="text-xl text-gray-600 mb-6">{member.position}</h3>
  //       {member.message && <p className="text-gray-700 leading-relaxed">{member.message}</p>}
  //     </div>
  //   </motion.div>
  // );

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Leadership Section */}
      {/* <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800">Our Guiding Light</h1>
        <p className="text-gray-600 mt-4">Leadership that inspires and drives educational excellence</p>
      </div> */}

      {/* Tabs */}
      {/* <div className="flex justify-center mb-12">
        {(Object.keys(leadershipMembers) as Array<keyof typeof leadershipMembers>).map((role) => (
          <button
            key={role}
            onClick={() => setActiveTab(role)}
            className={`px-6 py-3 mx-2 rounded-lg transition-colors ${
              activeTab === role 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {leadershipMembers[role]?.position}
          </button>
        ))}
      </div> */}

      {/* Leadership Content */}
      {/* <div className="mb-16">
        {activeTab && renderLeadershipMember(leadershipMembers[activeTab]!)}
      </div> */}

      {/* Trust Information Section */}
      
      <div 
        className="text-center mb-8 py-12 px-4 rounded-lg bg-cover bg-center"
        style={{
          backgroundImage: 'url("../src/assets/kalasamithi.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        {/* Add an overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        
        {/* Content positioned above the overlay */}
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4">{trustInfo.name}</h2>
          {trustInfo.foundedYear && (
            <p className="text-white text-lg">
              Established in {trustInfo.foundedYear}
            </p>
          )}
        </div>
      </div>
        
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Trust Description */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {showFullDescription 
                ? trustInfo.description 
                : `${trustInfo.description.substring(0, 660)}...`}
            </p>
            <button 
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition duration-300 border border-blue-600"
            >
              <span>{showFullDescription ? 'Show Less' : 'More...'}</span>
            </button>
            {trustInfo.mission && (
              <div className="border-l-4 border-blue-500 pl-4 italic mt-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
                <p className="text-gray-700">
                  {trustInfo.mission}
                </p>
              </div>
            )}
          </div>
            
          {/* Trust Image Gallery */}
          <div>
            {trustInfo.images && trustInfo.images.length > 0 && (
              <div className="relative w-[400px] h-[400px] ml-32">
                {/* Main Image */}
                <motion.img
                  key={activeImageIndex}
                  src={trustInfo.images[activeImageIndex]}
                  alt={`Trust Image ${activeImageIndex + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
                />

                {/* Image Navigation */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {trustInfo.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === activeImageIndex ? 'bg-blue-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      

      {/* Management Committee Section */}
      <div className="text-center mb-12 mt-12">
        <h2 className="text-4xl font-bold text-gray-800">Management Committee</h2>
        <p className="text-gray-600 mt-4">The team that drives our institutional excellence</p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {managementCommittee.map((member, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="mb-4">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-gray-600">{member.position}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-12 mt-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Institutions Owned and Managed by Kairalee Kala Samithi (Regd)
          </h2>
          <p className="text-gray-600 mt-4">
            A network of educational excellence and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {institutions.map((institution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              {institution.logo && (
                <div className="mb-6 flex justify-center">
                  <img
                    src={institution.logo}
                    alt={`${institution.name} Logo`}
                    className="w-32 h-32 object-contain"
                  />
                </div>
              )}
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {institution.name}
              </h3>
              {institution.established && (
                <p className="text-gray-600 mb-4">
                  Established in {institution.established}
                </p>
              )}
              <p className="text-gray-700 leading-relaxed">
                {institution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Define institutions array
const institutions = [
  {
    name: " Kairalee Nilayam English Higher Primary School",
    established: 1990,
    description: "Description of Institution 1",
    logo: "/img/institutions/institution1.jpg"
  },
  {
    name: "Institution 2",
    established: 1995,
    description: "Kairalee Nilayam High School",
    logo: "/img/institutions/institution2.jpg"
  },
  {
    name: "Kairalee Computer Academy",
    established: 2000,
    description: "Kairalee Computer Academy",
    logo: "/img/institutions/institution3.jpg"
  },
  {
    name: "Kairalee Academy of Arts & Music",
    established: 2000,
    description: "Kairalee Academy of Arts & Music",
    logo: "/img/institutions/institution3.jpg"
  }
];

export default Leadership;

