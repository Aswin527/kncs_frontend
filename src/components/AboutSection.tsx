import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

// TypeScript interfaces for our data structures
interface NewsItem {
  id: number;
  title: string;
  date: string;
  content: string;
}

interface AboutData {
  id: number;
  about:string;
}

interface AboutResponse {
  data: AboutData[];
}

interface AboutSectionProps {
  // You can add props here if needed later
}

const AboutSection: React.FC<AboutSectionProps> = () => {
  // State for news items with proper typing
  const [newsItems, setNewsItems] = useState<NewsItem[]>([
    {
      id: 1,
      title: "Upcoming Open House Event",
      date: "February 28, 2025",
      content: "Join us for our spring open house event. Meet faculty, tour our facilities, and learn more about our programs."
    },
    {
      id: 2,
      title: "New STEM Program Launch",
      date: "February 15, 2025",
      content: "We're excited to announce our new advanced STEM curriculum starting next semester."
    },
    {
      id: 3,
      title: "Community Volunteer Day",
      date: "February 10, 2025",
      content: "Students and faculty participated in our annual community service event, helping local organizations."
    }
  ]);
  
  // State for about data
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [isLoadingNews, setIsLoadingNews] = useState<boolean>(false);
  const [isLoadingAbout, setIsLoadingAbout] = useState<boolean>(false);
  const [newsError, setNewsError] = useState<string | null>(null);
  const [aboutError, setAboutError] = useState<string | null>(null);

  // Function to fetch about data from API
  const fetchAboutData = async (): Promise<void> => {
    setIsLoadingAbout(true);
    setAboutError(null);
    try {
      const response = await fetch('http://localhost:1337/api/abouts?id=1');
      if (!response.ok) throw new Error('Failed to fetch about data');
      
      const data: AboutResponse = await response.json();
      if (data.data && data.data.length > 0) {
        setAboutData(data.data[0]);
      } else {
        throw new Error('No about data found');
      }
      
      setIsLoadingAbout(false);
    } catch (err) {
      setAboutError(err instanceof Error ? err.message : 'An unknown error occurred');
      setIsLoadingAbout(false);
    }
  };

  // Effect to fetch data when component mounts
  useEffect(() => {
    // Uncomment this when ready to integrate News API
    // fetchNews();
    
    // Fetch about data
    fetchAboutData();
  }, []);

  return (
    <section id="about" className="py-1">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="mt-12 bg-white p-10 rounded-lg shadow-md text-xl"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row mb-16">
            <div className="lg:w-7/12 mb-8 lg:mb-0">
              <div className="mb-8">
                {isLoadingAbout ? (
                  <div className="py-4">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Loading...</h1>
                    <p className="mb-4 text-gray-700">Loading about information...</p>
                  </div>
                ) : aboutError ? (
                  <div className="py-4">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Error</h1>
                    <p className="mb-4 text-red-500">{aboutError}</p>
                  </div>
                ) : aboutData ? (
                  <>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{"Welcome To KNCS!"}</h1>
                    <p className="mb-4 text-gray-700">
                      {aboutData.about}
                    </p>
                  </>
                ) : (
                  <>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome To KNCS!</h1>
                    <p className="mb-4 text-gray-700">
                      No about information is available at this time.
                    </p>
                  </>
                )}
                <button className="mt-5 px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition duration-300 border border-blue-600">
                  <span>More...</span>
                </button>
              </div>
            </div>
            <div className="lg:w-5/12 lg:pl-8">
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-blue-700">News & Announcements</h2>
                
                {isLoadingNews ? (
                  <div className="py-4 text-center">
                    <p>Loading news...</p>
                  </div>
                ) : newsError ? (
                  <div className="py-4 text-center text-red-500">
                    <p>{newsError}</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {newsItems.map((item, index) => (
                      <div 
                        key={item.id} 
                        className={`${index < newsItems.length - 1 ? 'border-b border-gray-200' : ''} pb-3`}
                      >
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.date}</p>
                        <p className="mt-1 text-gray-700">{item.content}</p>
                      </div>
                    ))}
                  </div>
                )}
                
                <button 
                  className="mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition duration-300 text-sm"
                  onClick={() => alert('View all news functionality will be implemented')}
                >
                  <span>View All News</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Scholarship Facility</h3>
                <span className="text-4xl font-bold text-blue-600 opacity-50">01</span>
              </div>
              <div>
                <p className="text-gray-600">
                  Sorem ipsum dolor sitcon sectet adipis icing elit sed do eiusmod tems. incididune.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Advance Advisor</h3>
                <span className="text-4xl font-bold text-blue-600 opacity-50">02</span>
              </div>
              <div>
                <p className="text-gray-600">
                  Sorem ipsum dolor sitcon sectet adipis icing elit sed do eiusmod tems. incididune.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Sports & Gaming</h3>
                <span className="text-4xl font-bold text-blue-600 opacity-50">03</span>
              </div>
              <div>
                <p className="text-gray-600">
                  Sorem ipsum dolor sitcon sectet adipis icing elit sed do eiusmod tems. incididune.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;