import React from 'react';

export const Card = ({ children, className }) => {
  return (
    <div className={`rounded-2xl shadow-lg bg-white ${className}`}>{children}</div>
  );
};

export const CardContent = ({ children }) => {
  return <div className="p-4">{children}</div>;
};
