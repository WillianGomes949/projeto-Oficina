
import React from 'react';

export default function Button ({ children, onClick, color = 'blue', className = '' }) {
  const colorSchemes = {
    red: 'bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-4 focus:outline-none',
    blue: 'bg-blue-950 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300',
    green: 'bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-4 focus:outline-none',
    gray: 'bg-gray-500 hover:bg-gray-600 focus:ring-gray-400 focus:ring-4 focus:outline-none'
  };
  const baseClasses = 
    'px-4 py-2 text-sm font-medium text-white text-center rounded-2xl transition-colors duration-150 uppercase text-white';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${colorSchemes[color]} ${className}`}
    >
      {children}
    </button>
  );
};

