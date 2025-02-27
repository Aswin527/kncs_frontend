import React, { useState, useEffect } from 'react';

// Define TypeScript interfaces
interface Testimonial {
  id: number;
  content: string;
  name: string;
  designation: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  autoplayInterval?: number; // milliseconds
}

const TestimonialsSlider: React.FC<TestimonialsProps> = ({ 
  testimonials, 
  autoplayInterval = 5000 
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-advance slides
  useEffect(() => {
    if (testimonials.length <= 1) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, autoplayInterval);
    
    return () => clearInterval(interval);
  }, [testimonials.length, autoplayInterval]);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="flex overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" 
             style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="w-full flex-shrink-0 p-4"
            >
              <div className="bg-gray-50 p-6 rounded-md shadow-sm h-full flex flex-col">
                <blockquote>
                  <p className="text-gray-700 italic leading-relaxed mb-4">
                    {testimonial.content}
                  </p>
                </blockquote>
                <div className="mt-auto">
                  <div className="w-full h-px bg-blue-400 my-4"></div>
                  <div>
                    <p className="font-medium text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation buttons */}
      <button 
        onClick={prevTestimonial}
        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-5 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors z-10"
        aria-label="Previous testimonial"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextTestimonial}
        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-5 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors z-10"
        aria-label="Next testimonial"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Indicator dots */}
      {testimonials.length > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-8 rounded-full transition-colors ${
                index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Example usage
const TestimonialsExample: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      content: "Very good experience, teachers and Principal were very cooperative, caring. I sincerely thank each teacher and principal for their suggestions and guidance.",
      name: "Parents of Swasti Prabhakar",
      designation: "(MONTESSORI A)"
    },
    {
      id: 2,
      content: "NPS has been a wonderful thing for our child. Over the years we have seen his education, participation in activities, and overall experience develop. We couldn't be happier with the experience.",
      name: "Parents of Rishi Kumar",
      designation: "(1 A)"
    },
    {
      id: 3,
      content: "We appreciate the dedicated teachers who have helped our daughter grow academically and personally. The school's holistic approach to education has been excellent for her development.",
      name: "Parents of Anika Sharma",
      designation: "(MONTESSORI B)"
    },
    {
      id: 4,
      content: "The school has provided a nurturing environment where our son has thrived. We particularly value the individual attention given to students and the regular communication with parents.",
      name: "Parents of Arjun Mehta",
      designation: "(2 B)"
    }
  ];

  return (
    <div className="py-12 px-4">
      <h2 className="text-2xl font-medium text-center mb-8">Testimonials</h2>
      <TestimonialsSlider testimonials={testimonials} />
    </div>
  );
};

export default TestimonialsExample;