import React from 'react';
import { Home, TrendingUp, Search, Bookmark, User } from 'lucide-react';

interface MobileNavProps {
  isDarkMode: boolean;
  currentView: 'feed' | 'trending';
  setCurrentView: (view: 'feed' | 'trending') => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isDarkMode, currentView, setCurrentView }) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex justify-around items-center py-2 px-4 z-10">
      <button 
        onClick={() => setCurrentView('feed')}
        className={`flex flex-col items-center justify-center p-2 rounded-lg ${
          currentView === 'feed' 
            ? 'text-primary-600 dark:text-primary-400' 
            : 'text-gray-500 dark:text-gray-400'
        }`}
      >
        <Home size={20} />
        <span className="text-xs mt-1 font-nunito">Home</span>
      </button>
      
      <button 
        onClick={() => setCurrentView('trending')}
        className={`flex flex-col items-center justify-center p-2 rounded-lg ${
          currentView === 'trending' 
            ? 'text-primary-600 dark:text-primary-400' 
            : 'text-gray-500 dark:text-gray-400'
        }`}
      >
        <TrendingUp size={20} />
        <span className="text-xs mt-1 font-nunito">Trending</span>
      </button>
      
      <button className="flex flex-col items-center justify-center p-2 rounded-lg text-gray-500 dark:text-gray-400">
        <Search size={20} />
        <span className="text-xs mt-1 font-nunito">Explore</span>
      </button>
      
      <button className="flex flex-col items-center justify-center p-2 rounded-lg text-gray-500 dark:text-gray-400">
        <Bookmark size={20} />
        <span className="text-xs mt-1 font-nunito">Saved</span>
      </button>
      
      <button className="flex flex-col items-center justify-center p-2 rounded-lg text-gray-500 dark:text-gray-400">
        <User size={20} />
        <span className="text-xs mt-1 font-nunito">Profile</span>
      </button>
    </nav>
  );
};

export default MobileNav;
