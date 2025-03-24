import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TopHeader from '../components/TopHeader';
import NavBar from '../components/NavBar';
import SubscribeAndFooter from '../components/SubscribeAndFooter';
import DottedLoader from '../components/DottedLoader';

interface LayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  hideTopComponents?: boolean;
  hideFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  hideTopComponents = false,
  hideFooter = false
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top when location changes
    window.scrollTo(0, 0);
    
    // Simulate page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust timing as needed
    
    // Reset loading state on route change
    return () => {
      clearTimeout(timer);
      setIsLoading(true);
    };
  }, [location.pathname]);
  
  return (
    <div className="flex flex-col min-h-screen relative">
      {!hideTopComponents && (
        <>
          <TopHeader />
          <NavBar />
        </>
      )}
      
      <main className="flex-grow w-full relative">
        {isLoading ? (
          <>
            {/* Placeholder content to maintain layout */}
            <div className="opacity-20 pointer-events-none">
              {children}
            </div>
            <DottedLoader />
          </>
        ) : (
          children
        )}
      </main>
      
      {!hideFooter && <SubscribeAndFooter />}
    </div>
  );
};

export default Layout;