import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';


interface MenuItem {
  title: string;
  link: string;
}

const NavBar: React.FC = () => {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const menuItems: MenuItem[] = [
    {
      title: 'Home',
      link: '#home'
    },
    {
      title: 'About',
      link: '#about'
    },
    {
      title: 'Academics',
      link: '#about'
    },
    {
      title: 'Admissions',
      link: 'course_01.html'
    },
    {
      title: 'Events & Activities',
      link: 'events_01.html'
    },
    {
      title: 'Resources',
      link: '#resources'
    },
    {
      title: 'Disclosure',
      link: '#disclosure'
    },
    {
      title: 'Contact Us',
      link: 'contact_us.html'
    }
  ];

  return (
    <div className="header-bottom-area sticky top-0 bg-white shadow-sm transition-all duration-600 z-30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <div className="flex items-center py-4">
      <div className="logo mr-4">
        <a href="index.html">
          <img src="./src/assets/logo_h.png" alt="Logo" className="max-h-16" />
        </a>
      </div>
      
    </div>
          
          {/* Menu and Icons Area */}
          <div className="w-5/6 md:w-5/6">
            <div className="flex justify-end items-center">
              {/* Main Menu - Desktop */}
              <div className="main-menu hidden md:block">
                <nav>
                  <ul className="flex space-x-6">
                    {menuItems.map((item, index) => (
                      <li key={index} className="group relative">
                        <a 
                          href={item.link} 
                          className="py-6 px-2 font-medium hover:text-blue-950 transition-colors flex items-center"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              
              {/* Mobile Menu Button */}
              <div className="md:hidden ml-4">
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                  className="p-2 focus:outline-none"
                  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                >
                  {mobileMenuOpen ? 
                    <X className="w-6 h-6" /> : 
                    <Menu className="w-6 h-6" />
                  }
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`mobile-menu md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen pb-6' : 'max-h-0'}`}
          aria-hidden={!mobileMenuOpen}
        >
          <nav className="mt-2">
            <ul className="border-t border-gray-200">
              {menuItems.map((item, index) => (
                <li key={index} className="border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <a 
                      href={item.link} 
                      className="py-3 px-4 block font-medium"
                    >
                      {item.title}
                    </a>
                    
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;