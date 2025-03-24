import { useState, useEffect } from 'react';

const UnderMaintenancePage = () => {
  const [dots, setDots] = useState('.');
  
  // Animate the loading dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prevDots => prevDots.length >= 3 ? '.' : prevDots + '.');
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md text-center">
        <div className="mb-6">
          {/* Gear icon */}
          <svg 
            className="w-20 h-20 mx-auto text-blue-500 animate-spin-slow" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Under Maintenance</h1>
        
        <p className="text-gray-600 mb-6">
          We're currently performing some scheduled maintenance on our website. 
          We'll be back up and running shortly.
        </p>
        
        <div className="bg-blue-50 p-4 rounded-md mb-6">
          <p className="text-blue-700 font-medium flex items-center justify-center">
            Working on improvements{dots}
          </p>
        </div>
        
        <div className="text-sm text-gray-500">
          <p className="mb-2">Thank you for your patience.</p>
          <p>If you need immediate assistance, please contact 
            <a href="mailto:support@example.com" className="text-blue-500 hover:underline ml-1">
              support@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

// Add this to your CSS or create a new @keyframes in your Tailwind config
// If using tailwind.config.js, add:
// theme: { 
//   extend: { 
//     animation: {
//       'spin-slow': 'spin 3s linear infinite',
//     }
//   }
// }

export default UnderMaintenancePage;