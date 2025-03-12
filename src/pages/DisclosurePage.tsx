import React, { useState } from 'react';

// TypeScript interfaces
interface DisclosureDocument {
  id: string;
  title: string;
  category: 'Safety' | 'Legal' | 'Infrastructure' | 'Academic';
  issueDate: string;
  expiryDate: string;
  issuingAuthority: string;
  documentUrl: string;
  status: 'Valid' | 'Expired' | 'Pending Renewal';
}

const CBSEDisclosurePage: React.FC = () => {
  // Sample disclosure documents data
  const [documents, setDocuments] = useState<DisclosureDocument[]>([
    {
      id: '1',
      title: 'Fire Safety Certificate',
      category: 'Safety',
      issueDate: '2024-05-10',
      expiryDate: '2025-05-09',
      issuingAuthority: 'Municipal Fire Department',
      documentUrl: '/documents/fire-safety-certificate.pdf',
      status: 'Valid',
    },
    {
      id: '2',
      title: 'CBSE Affiliation Certificate',
      category: 'Legal',
      issueDate: '2022-04-15',
      expiryDate: '2027-04-14',
      issuingAuthority: 'Central Board of Secondary Education',
      documentUrl: '/documents/cbse-affiliation.pdf',
      status: 'Valid',
    },
    {
      id: '3',
      title: 'Trust Affidavit',
      category: 'Legal',
      issueDate: '2020-07-22',
      expiryDate: '2030-07-21',
      issuingAuthority: 'Education Trust',
      documentUrl: '/documents/trust-affidavit.pdf',
      status: 'Valid',
    },
    {
      id: '4',
      title: 'Building Safety Certificate',
      category: 'Safety',
      issueDate: '2023-11-30',
      expiryDate: '2025-11-29',
      issuingAuthority: 'Public Works Department',
      documentUrl: '/documents/building-safety.pdf',
      status: 'Valid',
    },
    {
      id: '5',
      title: 'Water & Sanitation Certificate',
      category: 'Infrastructure',
      issueDate: '2024-01-15',
      expiryDate: '2026-01-14',
      issuingAuthority: 'Public Health Department',
      documentUrl: '/documents/sanitation-certificate.pdf',
      status: 'Valid',
    },
    {
      id: '6',
      title: 'NOC from Education Department',
      category: 'Legal',
      issueDate: '2021-08-05',
      expiryDate: '2031-08-04',
      issuingAuthority: 'State Education Department',
      documentUrl: '/documents/education-noc.pdf',
      status: 'Valid',
    },
    {
      id: '7',
      title: 'Teaching Staff Qualification Compliance',
      category: 'Academic',
      issueDate: '2024-02-28',
      expiryDate: '2025-02-27',
      issuingAuthority: 'CBSE',
      documentUrl: '/documents/staff-compliance.pdf',
      status: 'Valid',
    }
  ]);

  // Filter state
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Animation state for header
  const [isHeaderLoaded, setIsHeaderLoaded] = useState<boolean>(false);
  
  // Animation state for content
  const [isContentVisible, setIsContentVisible] = useState<boolean>(false);

  // Categories for filter
  const categories = ['All', 'Safety', 'Legal', 'Infrastructure', 'Academic'];

  // Filter documents based on selected category
  const filteredDocuments = selectedCategory === 'All' 
    ? documents 
    : documents.filter(doc => doc.category === selectedCategory);

  // Format date to display in a readable format
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  // Get status color class based on document status
  const getStatusColorClass = (status: string): string => {
    switch (status) {
      case 'Valid':
        return 'bg-green-100 text-green-800';
      case 'Expired':
        return 'bg-red-100 text-red-800';
      case 'Pending Renewal':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  // Set animations after component mounts
  React.useEffect(() => {
    // Trigger header animation after a small delay
    setTimeout(() => {
      setIsHeaderLoaded(true);
    }, 100);
    
    // Trigger content animation after header loads
    setTimeout(() => {
      setIsContentVisible(true);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Background Image and Overlay */}
      <header className={`relative transition-opacity duration-1000 ease-out ${isHeaderLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-700 ease-in-out" 
          style={{ 
            backgroundImage: "url('./src/assets/banner1.jpg')",
            filter: isHeaderLoaded ? "brightness(0.6)" : "brightness(0.3)",
            transform: isHeaderLoaded ? "scale(1)" : "scale(1.05)"
          }}
        ></div>
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-indigo-900/80 z-10 transition-opacity duration-700 ease-in-out"></div>
        
        {/* Content */}
        <div className="relative z-20 container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className={`mb-6 md:mb-0 transition-all duration-1000 ease-out ${isHeaderLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Kairalee Nilayam Central School</h1>
              <div className={`mt-3 flex items-center transition-all duration-700 delay-200 ease-out ${isHeaderLoaded ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'}`}>
                <div className="h-1 w-16 bg-blue-400 rounded mr-3 transition-all duration-500 ease-out"></div>
                <p className="text-blue-200 font-medium">Excellence in Education</p>
              </div>
              <p className={`mt-4 max-w-xl text-gray-200 text-sm transition-all duration-700 delay-300 ease-out ${isHeaderLoaded ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'}`}>
                Empowering minds, shaping futures. Committed to providing quality education since 1995.
              </p>
            </div>
            <div className={`bg-white/15 backdrop-blur-md rounded-lg p-4 shadow-xl border border-white/20 transition-all duration-1000 ease-out ${isHeaderLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p className="text-lg font-medium text-white">CBSE Affiliation No: XXXXXXXX</p>
              <p className="mt-1 text-sm text-blue-100">Mandatory Public Disclosures</p>
              <div className="mt-2 pt-2 border-t border-white/20">
                <p className="text-xs text-blue-200">As per CBSE Affiliation Bye-Laws</p>
              </div>
            </div>
          </div>
          
          <div className={`mt-8 flex flex-wrap gap-6 text-sm text-white transition-all duration-1000 delay-500 ease-out ${isHeaderLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            <div className="flex items-center transition-all duration-300 hover:text-blue-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>123 Education Street, City Name</span>
            </div>
            <div className="flex items-center transition-all duration-300 hover:text-blue-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 1234567890</span>
            </div>
            <div className="flex items-center transition-all duration-300 hover:text-blue-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>contact@schoolname.edu</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={`container mx-auto px-4 py-8 transition-all duration-1000 ease-out ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 transition-all duration-500 hover:shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mandatory Disclosures</h2>
          <p className="text-gray-600 mb-6">
            As per CBSE Affiliation Bye-Laws, the following documents are mandatory to be displayed 
            publicly for transparency and compliance purposes. All documents can be downloaded for 
            verification.
          </p>

          {/* Category Filter */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Category:
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ease-in-out ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 50}ms` 
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Documents Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Document
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Issue Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Expiry Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredDocuments.map((document, index) => (
                  <tr 
                    key={document.id} 
                    className="hover:bg-gray-50 transition-all duration-200"
                    style={{ 
                      animation: `fadeIn 0.3s ease-out forwards`,
                      animationDelay: `${index * 100}ms`,
                      opacity: 0
                    }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900 transition-all duration-200">{document.title}</div>
                      <div className="text-sm text-gray-500">Issued by: {document.issuingAuthority}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 transition-all duration-300 hover:bg-blue-200">
                        {document.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(document.issueDate)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(document.expiryDate)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full transition-all duration-300 ${getStatusColorClass(document.status)}`}>
                        {document.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <a
                        href={document.documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium transition-all duration-200 hover:underline"
                      >
                        View Document
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-500 delay-300 hover:shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="transition-all duration-500 ease-out hover:bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Contact Information</h3>
              <p className="text-gray-600 transition-all duration-200 hover:text-gray-800">School Address: [School Full Address]</p>
              <p className="text-gray-600 transition-all duration-200 hover:text-gray-800">Phone: [School Phone Number]</p>
              <p className="text-gray-600 transition-all duration-200 hover:text-gray-800">Email: [School Email]</p>
              <p className="text-gray-600 transition-all duration-200 hover:text-gray-800">Website: [School Website]</p>
            </div>
            <div className="transition-all duration-500 ease-out hover:bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-2">School Management</h3>
              <p className="text-gray-600 transition-all duration-200 hover:text-gray-800">Principal: [Principal Name]</p>
              <p className="text-gray-600 transition-all duration-200 hover:text-gray-800">Chairman: [Chairman Name]</p>
              <p className="text-gray-600 transition-all duration-200 hover:text-gray-800">Manager: [Manager Name]</p>
              <p className="text-gray-600 transition-all duration-200 hover:text-gray-800">Trust/Society: [Trust/Society Name]</p>
            </div>
          </div>
        </div>
      </main>

      {/* CSS Animation for table rows */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CBSEDisclosurePage;