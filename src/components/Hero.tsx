import React, { useState, useEffect, JSX } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideProps {
  bgImage: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  alignment: 'left' | 'center' | 'right';
}

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const slides: SlideProps[] = [
    {
      bgImage: './src/assets/banner1.jpg',
      title: 'Kairalee Nilayam Central School',
      subtitle: 'Welcome to',
      description: 'Sorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minime.',
      buttonText: 'admit now',
      alignment: 'left'
    },
    {
      bgImage: './src/assets/banner2.jpg',
      title: 'Kairalee Nilayam Central School',
      subtitle: 'Welcome to',
      description: 'Sorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minime.',
      buttonText: 'admit now',
      alignment: 'center'
    },
    {
      bgImage: './src/assets/banner3.jpg',
      title: 'Kairalee Nilayam Central School',
      subtitle: 'Welcome to',
      description: 'Sorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minime.',
      buttonText: 'admit now',
      alignment: 'left'
    }
  ];

  const nextSlide = (): void => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const prevSlide = (): void => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const renderSlideContent = (slide: SlideProps, index: number): JSX.Element => {
    const isActive = currentSlide === index;

    return (
      <div 
        className={`slider-content transition-all duration-500 transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{ transitionDelay: isActive ? '0.3s' : '0s' }}
      >
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="block text-2xl md:text-3xl mb-2">{slide.subtitle}</span>
          {slide.title}
        </h1>
        <p className="text-white text-base md:text-lg mb-6 max-w-xl">
          {slide.description}
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded uppercase font-medium transition-colors duration-300">
          <span className="btn-text">{slide.buttonText}</span>
        </button>
      </div>
    );
  };

  return (
    <div className="slider-area relative h-screen max-h-[800px] overflow-hidden">
      {/* Slider Navigation */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Slider Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 
              ${currentSlide === index ? 'bg-white scale-125' : 'bg-white bg-opacity-50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Slides */}
      <div className="slider-active h-full">
        {slides.map((slide, index) => {
          const isActive = currentSlide === index;
          const alignmentClasses = {
            left: 'md:ml-0',
            center: 'mx-auto text-center',
            right: 'md:ml-auto'
          };
          
          return (
            <div 
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 
                ${isActive ? 'opacity-100 z-1' : 'opacity-0 -z-10'}`}
              style={{
                backgroundImage: `url(${slide.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="container mx-auto px-4">
                <div className="row">
                  <div className={`w-full md:w-3/4 lg:w-2/3 ${alignmentClasses[slide.alignment]}`}>
                    {renderSlideContent(slide, index)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;