import { useState, useRef, useEffect } from "react";

// Type definitions
type Textbook = {
  id: number;
  title: string;
  subject: string;
  publisher: string;
  coverImage: string;
};

function TextBooks() {
  // State for active grade in textbooks section
  const [activeGrade, setActiveGrade] = useState<string>("grade-1");
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState<boolean>(true);
  
  // State for storing API data
  const [textbooks, setTextbooks] = useState<Textbook[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [, setError] = useState<string | null>(null);

  // Fixed grades (Pre-Nursery, LKG, UKG, and 1-10)
  const grades = [
    { id: "pre-nursery", name: "Pre-Nursery" },
    { id: "lkg", name: "LKG" },
    { id: "ukg", name: "UKG" },
    ...Array.from({ length: 10 }, (_, i) => ({
      id: `grade-${i + 1}`,
      name: `Grade ${i + 1}`
    }))
  ];

  // Fetch textbooks when active grade changes
  useEffect(() => {
    const fetchTextbooks = async () => {
      setLoading(true);
      try {
        // Replace with your actual API endpoint
        const response = await fetch(`/api/textbooks?gradeId=${activeGrade}`);
        if (!response.ok) {
          throw new Error('Failed to fetch textbooks');
        }
        const data = await response.json();
        setTextbooks(data);
      } catch (err) {
        setError('Failed to load textbooks. Please try again later.');
        // Log the error message to the console
        console.error('Failed to load textbooks. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTextbooks();
  }, [activeGrade]);

  // Handle scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const newPosition = scrollPosition - 300;
      setScrollPosition(Math.max(0, newPosition));
      scrollContainerRef.current.scrollTo({
        left: Math.max(0, newPosition),
        behavior: 'smooth'
      });
      setAutoScroll(false);
    }
  };

  // Handle scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const newPosition = scrollPosition + 300;
      setScrollPosition(Math.min(maxScroll, newPosition));
      container.scrollTo({
        left: Math.min(maxScroll, newPosition),
        behavior: 'smooth'
      });
      setAutoScroll(false);
    }
  };

  // Marquee effect
  useEffect(() => {
    let animationFrame: number;
    const speed = 0.5; // pixels per frame

    const doScroll = () => {
      if (!scrollContainerRef.current || !autoScroll) return;
      
      const container = scrollContainerRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      // Update scroll position
      setScrollPosition(prev => {
        let newPosition = prev + speed;
        
        // Reset to beginning when reached the end
        if (newPosition >= maxScroll) {
          newPosition = 0;
        }
        
        container.scrollLeft = newPosition;
        return newPosition;
      });
      
      animationFrame = requestAnimationFrame(doScroll);
    };

    animationFrame = requestAnimationFrame(doScroll);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [autoScroll]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    setAutoScroll(false);
  };

  // Resume auto-scroll on mouse leave
  const handleMouseLeave = () => {
    setAutoScroll(true);
  };

  return (
    <div>
      {/* Textbooks Section */}
      <div className="bg-white py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">CBSE Textbooks</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Browse through our comprehensive collection of CBSE textbooks for Pre-Nursery to Grade 10, 
            designed to support the curriculum and enhance learning outcomes.
          </p>
          
          {/* Error Message */}
          {/* {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 text-center">
              {error}
            </div>
          )} */}
          
          {/* Grade Selection Tabs */}
          <div className="flex flex-wrap justify-center mb-8">
            {grades.map((grade) => (
              <button
                key={grade.id}
                onClick={() => setActiveGrade(grade.id)}
                className={`px-4 py-1 m-1 rounded-full text-sm font-medium transition-colors 
                  ${activeGrade === grade.id 
                    ? 'bg-gray-800 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {grade.name}
              </button>
            ))}
          </div>
          
          {/* Loading State */}
          {loading ? (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-800"></div>
            </div>
          ) : (
            /* Textbooks Navigation and Display */
            <div className="relative">
              {/* Left Navigation Button */}
              <button 
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors focus:outline-none"
                aria-label="Scroll left"
                disabled={textbooks.length === 0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Right Navigation Button */}
              <button 
                onClick={scrollRight}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors focus:outline-none"
                aria-label="Scroll right"
                disabled={textbooks.length === 0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* No textbooks message */}
              {textbooks.length === 0 && !loading && (
                <div className="text-center py-16 text-gray-500">
                  No textbooks available for this grade.
                </div>
              )}
              
              {/* Scrollable Container */}
              <div 
                ref={scrollContainerRef}
                className="overflow-x-auto flex flex-nowrap pb-4 scrollbar-hide" 
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {textbooks.map((book) => (
                  <div 
                    key={book.id} 
                    className="flex-none w-48 mx-2 first:ml-0 bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200"
                  >
                    <div className="h-36 overflow-hidden">
                      <img 
                        src={book.coverImage} 
                        alt={book.title} 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="inline-block px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                          {book.subject}
                        </span>
                        <span className="text-xs text-gray-500">{book.publisher}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2">{book.title}</h3>
                      <button className="text-xs text-blue-600 font-medium hover:text-blue-800 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TextBooks;