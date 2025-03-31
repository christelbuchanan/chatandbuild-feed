import React from 'react';
import { Home, TrendingUp, Bookmark, Settings, User, MessageSquare, Zap, Heart } from 'lucide-react';

interface SidebarProps {
  isDarkMode: boolean;
  currentView: 'feed' | 'trending' | 'messages' | 'saved' | 'liked';
  setCurrentView: (view: 'feed' | 'trending' | 'messages' | 'saved' | 'liked') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isDarkMode, currentView, setCurrentView }) => {
  return (
    <aside className="hidden md:block w-64 border-r border-gray-200 dark:border-gray-700 p-4 sticky top-16 h-[calc(100vh-4rem)]">
      <nav className="space-y-1">
        <button 
          onClick={() => setCurrentView('feed')}
          className={`w-full flex items-center px-4 py-3 rounded-lg font-nunito font-medium ${
            currentView === 'feed' 
              ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' 
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          <Home className="w-5 h-5 mr-3" />
          Home
        </button>
        
        <button 
          onClick={() => setCurrentView('trending')}
          className={`w-full flex items-center px-4 py-3 rounded-lg font-nunito font-medium ${
            currentView === 'trending' 
              ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' 
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          <TrendingUp className="w-5 h-5 mr-3" />
          Trending
        </button>
        
        <button 
          onClick={() => setCurrentView('saved')}
          className={`w-full flex items-center px-4 py-3 rounded-lg font-nunito font-medium ${
            currentView === 'saved' 
              ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' 
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          <Bookmark className="w-5 h-5 mr-3" />
          Saved
        </button>
        
        <button 
          onClick={() => setCurrentView('liked')}
          className={`w-full flex items-center px-4 py-3 rounded-lg font-nunito font-medium ${
            currentView === 'liked' 
              ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' 
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          <Heart className="w-5 h-5 mr-3" />
          Liked
        </button>
        
        <button 
          onClick={() => setCurrentView('messages')}
          className={`w-full flex items-center px-4 py-3 rounded-lg font-nunito font-medium ${
            currentView === 'messages' 
              ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' 
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          <MessageSquare className="w-5 h-5 mr-3" />
          Messages
        </button>
      </nav>
      
      <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-4">
        <h3 className="font-nunito font-semibold text-gray-900 dark:text-white px-4 mb-2">Your Prompts</h3>
        <nav className="space-y-1">
          <button className="w-full flex items-center px-4 py-3 rounded-lg font-nunito font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
            <Zap className="w-5 h-5 mr-3" />
            My Prompts
          </button>
          
          <button className="w-full flex items-center px-4 py-3 rounded-lg font-nunito font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
            <User className="w-5 h-5 mr-3" />
            Profile
          </button>
          
          <button className="w-full flex items-center px-4 py-3 rounded-lg font-nunito font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </button>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
