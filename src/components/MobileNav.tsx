import React, { useState } from 'react';
import { Home, Search, PenSquare, Bell, User } from 'lucide-react';
import CreatePromptModal from './CreatePromptModal';

interface MobileNavProps {
  isDarkMode: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ isDarkMode }) => {
  const [showCreatePrompt, setShowCreatePrompt] = useState(false);

  const handleCreatePrompt = (promptData: any) => {
    console.log('New prompt created:', promptData);
    // Here you would typically send this data to your backend
    // and then update your state with the new prompt
  };

  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 z-10">
        <div className="flex justify-around items-center py-3">
          <button className="flex flex-col items-center text-primary-600 dark:text-primary-400">
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1 font-nunito">Home</span>
          </button>
          
          <button className="flex flex-col items-center text-gray-500 dark:text-gray-400">
            <Search className="h-6 w-6" />
            <span className="text-xs mt-1 font-nunito">Search</span>
          </button>
          
          <button 
            onClick={() => setShowCreatePrompt(true)}
            className="flex flex-col items-center text-gray-500 dark:text-gray-400"
          >
            <PenSquare className="h-6 w-6" />
            <span className="text-xs mt-1 font-nunito">Create</span>
          </button>
          
          <button className="flex flex-col items-center text-gray-500 dark:text-gray-400">
            <Bell className="h-6 w-6" />
            <span className="text-xs mt-1 font-nunito">Alerts</span>
          </button>
          
          <button className="flex flex-col items-center text-gray-500 dark:text-gray-400">
            <User className="h-6 w-6" />
            <span className="text-xs mt-1 font-nunito">Profile</span>
          </button>
        </div>
      </div>

      {showCreatePrompt && (
        <CreatePromptModal 
          onClose={() => setShowCreatePrompt(false)} 
          onCreatePrompt={handleCreatePrompt}
        />
      )}
    </>
  );
};

export default MobileNav;
