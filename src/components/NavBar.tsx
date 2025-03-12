import React, { useState } from 'react';
import { X, Menu, ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface MenuItem {
  title: string;
  link: string;
  isExternal?: boolean;
  isScrollTarget?: boolean;
  subMenu?: MenuItem[];
}

const NavBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const location = useLocation();

  const menuItems: MenuItem[] = [
    { 
      title: 'Home', 
      link: '/' 
    },
    { 
      title: 'About', 
      link: '/about',
      subMenu: [
        { title: 'Our History', link: '/about/history' },
        { title: 'Mission and Vision', link: '/about/mission_vision' },
        { title: 'Management', link: '/about/leadership' },
        { title: 'Campus Tour', link: '/about/campus-tour' },
        { title: 'School Achievements', link: '/under-maintenance' },
        { title: 'Additional Info', link: '/additional-info' }
      ]
    },
    { 
      title: 'Academics', 
      link: '', 
      subMenu: [
      { title: 'Curriculum Overview', link: '/curriculum' },
      { title: 'Pre-Primary', link: '/nursery' },
      // { title: 'Examination & Assessment', link: '/about/mission' },
      // { title: 'Teaching Methodology', link: '/about/mission' },
      { title: 'Academic Calendar', link: '/academic-calendar' },
      { title: 'Teachers', link: '/teachers' },
    ]},
    { 
      title: 'Admissions', 
      link: '/admission',
      subMenu: [
      { title: 'Admission Process', link: '/admission' },
      { title: 'Fee Structure', link: '/admission#fee-structure' },
      { title: 'Online Admission Form', link: '/admission_form' },
      { title: 'Prospectus Download', link: '/about/mission' },
    ]},
    { 
      title: 'Events & Activities', link: '',subMenu: [
      { title: 'Co-curricular Activities', link: '/cocurricular-activities' },
      { title: 'Clubs & Organizations', link: '/clubs-organizations' },
      { title: 'Sports & Fitness', link: '/about/mission' },
      { title: 'School Events & Competitions', link: '/about/mission' },
      { title: 'Student Achievements', link: '/about/mission' },
    ]},
    { title: "Student's Corner", link: '/student_showcase' },
    { title: 'Gallery', link: '/gallery' },
    { title: 'Disclosure', link: '/disclosure_page' },
    { title: 'Contact Us', link: '/contact-us' },
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenSubMenu(null);
  };

  const renderLink = (item: MenuItem, isMobile = false) => {
    const commonClasses = "py-3 px-2 font-medium hover:text-blue-950 transition-colors flex items-center"; // Reduced vertical padding
    const activeClasses = location.pathname === item.link
      ? "text-blue-600 font-semibold"
      : "text-gray-700";

    const linkContent = (
      <span className="flex items-center justify-between w-full">
        <span className="flex items-center">
          {item.title}
          {item.subMenu && !isMobile && (
            <ChevronDown className="ml-1 w-4 h-4" />
          )}
        </span>
        {item.subMenu && isMobile && (
          openSubMenu === item.title 
            ? <ChevronUp className="w-4 h-4" /> 
            : <ChevronRight className="w-4 h-4" />
        )}
      </span>
    );

    const baseProps = {
      className: `${commonClasses} ${activeClasses}`,
      onClick: isMobile && item.subMenu 
        ? () => setOpenSubMenu(openSubMenu === item.title ? null : item.title)
        : closeMobileMenu
    };

    if (item.isExternal) {
      return (
        <a
          href={item.link}
          {...baseProps}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkContent}
        </a>
      );
    }

    return (
      <Link
        to={item.link}
        {...baseProps}
      >
        {linkContent}
      </Link>
    );
  };

  const renderSubMenu = (subItems: MenuItem[], parentTitle: string) => {
    const isMobileOpen = openSubMenu === parentTitle;
    return (
      <ul className={`
        ${isMobileOpen ? 'block' : 'hidden'}
        lg:absolute lg:top-full lg:left-0 lg:min-w-[200px] lg:bg-white 
        lg:shadow-lg lg:rounded-b-md lg:block lg:opacity-0 lg:invisible 
        group-hover:lg:opacity-100 group-hover:lg:visible
      `}>
        {subItems.map((subItem, index) => (
          <li 
            key={index} 
            className="border-t border-gray-200 lg:border-none"
          >
            {renderLink(subItem, true)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="header-bottom-area sticky top-0 bg-white shadow-sm w-full z-30">
      <div className="max-w-screen-xl w-full mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center py-4">
            <div className="logo mr-4">
              <Link to="/">
                <img
                  src="../src/assets/logo_h.png"
                  alt="Logo"
                  className="max-h-16"
                />
              </Link>
            </div>
          </div>
          
          {/* Desktop Menu (Hidden on md and below) */}
          <div className="hidden lg:flex lg:w-5/6 justify-end">
            <nav>
              <ul className="flex space-x-1">
                {menuItems.map((item, index) => (
                  <li 
                    key={index} 
                    className="group relative"
                  >
                    {renderLink(item)}
                    {item.subMenu && renderSubMenu(item.subMenu, item.title)}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          {/* Mobile & Medium Menu Button (Shown on md and below) */}
          <div className="lg:hidden w-10 h-10 flex items-center justify-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile & Medium Menu (Expanded when clicked) */}
      <div
        className={`lg:hidden transition-all duration-300 absolute w-full bg-white 
          ${mobileMenuOpen ? 'h-auto opacity-100' : 'h-0 opacity-0 overflow-hidden'} 
          relative pb-10`} // Added bottom padding for scroll icon
      >
        <nav className="mt-2">
          <ul className="border-t border-gray-200">
            {menuItems.map((item, index) => (
              <li 
                key={index} 
                className="border-b border-gray-200 relative"
              >
                {renderLink(item, true)}
                {item.subMenu && openSubMenu === item.title && (
                  <ul>
                    {item.subMenu.map((subItem, subIndex) => (
                      <li 
                        key={subIndex} 
                        className="border-t border-gray-200"
                      >
                        {renderLink(subItem, true)}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        
      </div>
    </div>
  );
};

export default NavBar;