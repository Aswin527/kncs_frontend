import React from 'react';

const DottedLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <div className="mb-6 flex items-center justify-center">
          {/* Replace with your actual logo import/path */}
          <img 
            src="/src/assets/logo.png" 
            alt="Company Logo" 
            className="h-26 w-auto opacity-70 animate-pulse"
          />
        </div>
        <div className="flex space-x-3">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-100"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-200"></div>
        </div>
        <p className="mt-4 text-gray-500 text-sm animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default DottedLoader;