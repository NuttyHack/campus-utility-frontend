import React from 'react';
import { Card } from '../ui/Card';

export const PostCard = ({ content, location, timestamp, category }) => {
  return (
    <Card className="mb-3 border-l-4 border-l-blue-500">
      <div className="flex justify-between mb-2">
        <span className="text-xs font-bold text-blue-600 uppercase">{category}</span>
        <span className="text-xs text-gray-400">{timestamp}</span>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">{content}</p>
      <div className="mt-3 pt-2 border-t border-gray-50 flex items-center gap-1">
        <span className="text-[11px] font-medium text-gray-500">📍 {location}</span>
      </div>
    </Card>
  );
};