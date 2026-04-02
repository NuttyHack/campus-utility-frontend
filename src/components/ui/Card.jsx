import React from 'react';

export const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white shadow-md rounded-xl p-4 border border-gray-100 ${className}`}>
      {children}
    </div>
  );
};