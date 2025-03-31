import React from 'react';
import { Home, TrendingUp, Bookmark, MessageSquare, Heart } from 'lucide-react';

interface MobileNavProps {
  currentView: 'feed' | 'trending' | 'messages' | 'saved' | 'liked';
  setCurrentView: (view: 'feed' | 'trending' | 'messages' | 'saved' | 'liked') => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ currentView, setCurrentView }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 z-10">
      <div className="flex justify-around items-center h-16">
        <button 
          onClick={() => setCurrentView('feed')}
          className={`flex flex-col items-center justify-center w-full h-full ${
            currentView === 'feed' ? 'text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1 font-nunito">Home</span>
        </button>
        
        <button 
          onClick={() => setCurrentView('trending')}
          className={`flex flex-col items-center justify-center w-full h-full ${
            currentView === 'trending' ? 'text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          <TrendingUp className="w-6 h-6" />
          <span className="text-xs mt-1 font-nunito">Trending</span>
        </button>
        
        <button 
          onClick={() => setCurrentView('saved')}
          className={`flex flex-col items-center justify-center w-full h-full ${
            currentView === 'saved' ? 'text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          <Bookmark className="w-6 h-6" />
          <span className="text-xs mt-1 font-nunito">Saved</span>
        </button>
        
        <button 
          onClick={() => setCurrentView('liked')}
          className={`flex flex-col items-center justify-center w-full h-full ${
            currentView === 'liked' ? 'text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          <Heart className="w-6 h-6" />
          <span className="text-xs mt-1 font-nunito">Liked</span>
        </button>
        
        <button 
          onClick={() => setCurrentView('messages')}
          className={`flex flex-col items-center justify-center w-full h-full ${
            currentView === 'messages' ? 'text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          <MessageSquare className="w-6 h-6" />
          <span className="text-xs mt-1 font-nunito">Messages</span>
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
