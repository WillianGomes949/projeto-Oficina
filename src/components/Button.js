
import React from 'react';

export default function Button ({ children, onClick, color = 'blue', className = '' }) {
  const colorSchemes = {
    red: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
    blue: 'bg-blue-800 hover:bg-blue-900 focus:ring-blue-500',
    green: 'bg-green-600 hover:bg-green-700 focus:ring-green-500',
    gray: 'bg-gray-500 hover:bg-gray-600 focus:ring-gray-400'
  };
  const baseClasses = 
    ' px-4 py-2 text-white  rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${colorSchemes[color]} ${className}`}
    >
      {children}
    </button>
  );
};

