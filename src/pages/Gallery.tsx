import React, { useState, useEffect } from 'react';

// Types
type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  date: string;
};

// Sample data
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/api/placeholder/800/600",
    alt: "School sports day competition",
    category: "Sports",
    title: "Annual Sports Day 2025",
    description: "Students competing in various track and field events during our annual sports day.",
    date: "March 5, 2025"
  },
  {
    id: 2,
    src: "/api/placeholder/800/600",
    alt: "Science fair exhibit",
    category: "Academics",
    title: "Science Fair Exhibition",
    description: "Innovative projects displayed at our annual science fair showcasing student creativity.",
    date: "February 15, 2025"
  },
  {
    id: 3,
    src: "/api/placeholder/800/600",
    alt: "Cultural dance performance",
    category: "Arts",
    title: "Cultural Festival",
    description: "Students performing traditional dances during the cultural festival celebration.",
    date: "January 25, 2025"
  },
  {
    id: 4,
    src: "/api/placeholder/800/600", 
    alt: "Graduation ceremony",
    category: "Events",
    title: "Graduation Ceremony 2024",
    description: "Celebrating our graduating class's achievements and future endeavors.",
    date: "December 10, 2024"
  },
  {
    id: 5,
    src: "/api/placeholder/800/600",
    alt: "Robotics competition",
    category: "Technology",
    title: "Robotics Club Showcase",
    description: "Our robotics team demonstrating their latest innovations and competition entries.",
    date: "February 28, 2025"
  },
  {
    id: 6,
    src: "/api/placeholder/800/600",
    alt: "Art exhibition",
    category: "Arts",
    title: "Student Art Exhibition",
    description: "Stunning artwork created by our talented art students on display in the main hall.",
    date: "March 1, 2025"
  },
  {
    id: 7,
    src: "/api/placeholder/800/600",
    alt: "Debate competition",
    category: "Academics",
    title: "Inter-School Debate Competition",
    description: "Our debate team participating in the regional debate championship.",
    date: "January 18, 2025"
  },
  {
    id: 8,
    src: "/api/placeholder/800/600",
    alt: "Music concert",
    category: "Arts",
    title: "Spring Music Concert",
    description: "Students showcasing their musical talents in our annual spring concert.",
    date: "March 8, 2025"
  }
];

// Get unique categories from images
const allCategories = ["All", ...new Set(galleryImages.map(img => img.category))];

const SchoolGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(galleryImages);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // Filter images when category changes
  useEffect(() => {
    setIsLoading(true);
    
    // Small delay to allow for transition effect
    setTimeout(() => {
      if (selectedCategory === "All") {
        setFilteredImages(galleryImages);
      } else {
        setFilteredImages(galleryImages.filter(img => img.category === selectedCategory));
      }
      setIsLoading(false);
    }, 300);
  }, [selectedCategory]);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Handle opening modal with selected image
  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    
    // Small delay to enable animation
    setTimeout(() => {
      setModalOpen(true);
    }, 10);
  };

  // Handle closing modal
  const closeModal = () => {
    setModalOpen(false);
    
    // Wait for animation to complete before removing from DOM
    setTimeout(() => {
      setSelectedImage(null);
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }, 300);
  };

  if (isLoading && !filteredImages.length) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg text-gray-700">Loading our beautiful memories...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header with animation */}
        <div className="text-center mb-12 transition-all duration-700 ease-in-out transform hover:scale-105">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 mb-4">
            School Memories Gallery
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto transition-all duration-500 ease-in-out">
            Explore our vibrant collection of memories and achievements from throughout the school year.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-500 ease-in-out ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow hover:shadow-md hover:transform hover:scale-102'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid with staggered animation */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-opacity duration-500 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out hover:transform hover:scale-105"
              onClick={() => openModal(image)}
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out flex items-end">
                  <div className="p-4 text-white transform translate-y-4 hover:translate-y-0 transition-transform duration-500 ease-in-out">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                    <p className="text-sm">{image.date}</p>
                  </div>
                </div>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-purple-500 text-white text-xs font-medium py-1 px-2 rounded-full transition-all duration-300 ease-in-out hover:bg-purple-600">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredImages.length === 0 && !isLoading && (
          <div className="text-center py-16 animate-fadeIn transition-all duration-500 ease-in-out">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No images found</h3>
            <p className="mt-1 text-gray-500">Try selecting a different category.</p>
          </div>
        )}
      </div>

      {/* Image Modal with entrance/exit animations */}
      {selectedImage && (
        <div 
          className={`fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-in-out ${
            modalOpen ? 'opacity-100' : 'opacity-0'
          }`} 
          onClick={closeModal}
        >
          <div 
            className={`bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-auto transition-all duration-500 ease-in-out ${
              modalOpen ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95'
            }`}
            onClick={e => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full h-auto transition-all duration-500 ease-in-out"
              />
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black transition-colors duration-300 ease-in-out hover:rotate-90 transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold text-gray-900">{selectedImage.title}</h2>
                <span className="bg-purple-500 text-white text-xs font-medium py-1 px-3 rounded-full transition-all duration-300 ease-in-out hover:bg-purple-600">
                  {selectedImage.category}
                </span>
              </div>
              <p className="text-gray-500 mb-4">{selectedImage.date}</p>
              <p className="text-gray-700">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CSS animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default SchoolGallery;