import { Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useState, useEffect } from 'react';

const TopHeader = () => {
  const [marqueePosition, setMarqueePosition] = useState(100);
  
  // Simple marquee animation using React state
  useEffect(() => {
    const marqueeInterval = setInterval(() => {
      setMarqueePosition(prev => {
        if (prev <= -100) return 100;
        return prev - 0.2;
      });
    }, 20);
    
    return () => clearInterval(marqueeInterval);
  }, []);

  return (
    <div className="header-area">
      {/* header-top */}
      <div className="bg-blue-950 text-white py-2">
        <div className="container mx-auto px-4">
          {/* Mobile view (stacked) */}
          <div className="block sm:hidden">
            {/* Contact info */}
            <div className="flex justify-center mb-2">
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  <Phone className="w-3 h-3 mr-1" />
                  <p className="text-xs">080-25234313</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-3 h-3 mr-1" />
                  <p className="text-xs">info@kncs.edu.in</p>
                </div>
              </div>
            </div>
            
            {/* Marquee */}
            <div className="flex justify-center mb-2">
              <div className="overflow-hidden w-full text-center">
                <div 
                  className="whitespace-nowrap text-sm font-medium inline-block"
                  style={{ transform: `translateX(${marqueePosition}%)` }}
                >
                  <a 
                    href="#admissions" 
                    className="text-yellow-300 hover:text-yellow-100 transition duration-300"
                  >
                    Registrations for NURSERY to GRADE IX for the next academic year (2025 - 2026) are open now! Click here →
                  </a>
                </div>
              </div>
            </div>
            
            {/* Social icons */}
            <div className="flex justify-center">
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="hover:text-indigo-200 transition duration-300">
                    <Facebook className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-200 transition duration-300">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-200 transition duration-300">
                    <Youtube className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-200 transition duration-300">
                    <Instagram className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Tablet view (2-row layout) */}
          <div className="hidden sm:block md:hidden">
            <div className="flex justify-between mb-2">
              {/* Contact info */}
              <div className="flex items-center">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-1" />
                    <p className="text-sm">080-25234313</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-1" />
                    <p className="text-sm">info@kncs.edu.in</p>
                  </div>
                </div>
              </div>
              
              {/* Social icons */}
              <div>
                <ul className="flex space-x-3">
                  <li>
                    <a href="#" className="hover:text-indigo-200 transition duration-300">
                      <Facebook className="w-4 h-4" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-200 transition duration-300">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-200 transition duration-300">
                      <Youtube className="w-4 h-4" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-200 transition duration-300">
                      <Instagram className="w-4 h-4" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Marquee (second row) */}
            <div className="flex justify-center">
              <div className="overflow-hidden w-full text-center">
                <div 
                  className="whitespace-nowrap text-sm font-medium inline-block"
                  style={{ transform: `translateX(${marqueePosition}%)` }}
                >
                  <a 
                    href="#admissions" 
                    className="text-yellow-300 hover:text-yellow-100 transition duration-300"
                  >
                    Registrations for NURSERY to GRADE IX for the next academic year (2025 - 2026) are open now! Click here →
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop view (3-column layout) */}
          <div className="hidden md:flex justify-between">
            <div className="w-1/3">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <p className="text-sm">080-25234313</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <p className="text-sm">info@kncs.edu.in</p>
                </div>
              </div>
            </div>
            
            {/* Marquee section */}
            <div className="w-1/3 flex items-center justify-center">
              <div className="overflow-hidden w-full text-center">
                <div 
                  className="whitespace-nowrap font-medium inline-block"
                  style={{ transform: `translateX(${marqueePosition}%)` }}
                >
                  <a 
                    href="#admissions" 
                    className="text-yellow-300 hover:text-yellow-100 transition duration-300"
                  >
                    Registrations for NURSERY to GRADE IX for the next academic year (2025 - 2026) are open now! Click here →
                  </a>
                </div>
              </div>
            </div>
            
            <div className="w-1/3">
              <div className="flex justify-end">
                <ul className="flex space-x-4">
                  <li>
                    <a href="#" className="hover:text-indigo-200 transition duration-300">
                      <Facebook className="w-4 h-4" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-200 transition duration-300">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-200 transition duration-300">
                      <Youtube className="w-4 h-4" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-200 transition duration-300">
                      <Instagram className="w-4 h-4" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;