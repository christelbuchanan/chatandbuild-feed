import React from 'react';
import { Home, TrendingUp, Bookmark, MessageSquare, Zap, Heart } from 'lucide-react';

interface MobileNavProps {
  currentView: 'feed' | 'trending' | 'messages' | 'saved' | 'liked' | 'my-prompts';
  setCurrentView: (view: 'feed' | 'trending' | 'messages' | 'saved' | 'liked' | 'my-prompts') => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ currentView, setCurrentView }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 z-10">
      <div className="grid grid-cols-5 h-16">
        <button
          onClick={() => setCurrentView('feed')}
          className={`flex flex-col items-center justify-center ${
            currentView === 'feed' ? 'text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </button>
        
        <button
          onClick={() => setCurrentView('trending')}
          className={`flex flex-col items-center justify-center ${
            currentView === 'trending' ? 'text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          <TrendingUp className="w-6 h-6" />
          <span className="text-xs mt-1">Trending</span>
        </button>
        
        <button
          onClick={() => setCurrentView('my-prompts')}
          className={`flex flex-col items-center justify-center ${
            currentView === 'my-prompts' ? 'text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          <Zap className="w-6 h-6" />
          <span className="text-xs mt-1">My Prompts</span>
        </button>
        
        <button
          onClick={() => setCurrentView('saved')}
          className={`flex flex-col items-center justify-center ${
            currentView === 'saved' ? 'text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          <Bookmark className="w-6 h-6" />
          <span className="text-xs mt-1">Saved</span>
        </button>
        
        <button
          onClick={() => setCurrentView('messages')}
          className={`flex flex-col items-center justify-center ${
            currentView === 'messages' ? 'text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          <MessageSquare className="w-6 h-6" />
          <span className="text-xs mt-1">Messages</span>
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
