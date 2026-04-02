import React from 'react';
import { Card } from '../ui/Card';

export const UtilityCard = ({ title, status, lastUpdated, message }) => {
  const isOperational = status === 'operational';

  return (
    <Card className="mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{message}</p>
        </div>
        <div className="flex flex-col items-end">
          <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${
            isOperational ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {status}
          </span>
          <span className="text-[10px] text-gray-400 mt-2">Update: {lastUpdated}</span>
        </div>
      </div>
    </Card>
  );
};