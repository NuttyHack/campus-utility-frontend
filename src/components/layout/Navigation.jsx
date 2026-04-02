import React from 'react';
import { LayoutDashboard, MessageSquare, User } from 'lucide-react';

export const Navigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center shadow-lg">
      <button className="flex flex-col items-center text-blue-600">
        <LayoutDashboard size={24} />
        <span className="text-[10px] font-medium">Board</span>
      </button>
      <button className="flex flex-col items-center text-gray-400">
        <MessageSquare size={24} />
        <span className="text-[10px] font-medium">Feed</span>
      </button>
      <button className="flex flex-col items-center text-gray-400">
        <User size={24} />
        <span className="text-[10px] font-medium">Profile</span>
      </button>
    </nav>
  );
};