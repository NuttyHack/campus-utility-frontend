import React from 'react';

export const Input = ({ label, type = "text", placeholder, value, onChange, name }) => {
  return (
    <div className="flex flex-col gap-1 w-full mb-4">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
      />
    </div>
  );
};