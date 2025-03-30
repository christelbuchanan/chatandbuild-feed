import React from 'react';
import { Search, Bell, MessageSquare, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400 font-nunito">ChatAndBuild</h1>
        </div>
        
        {/* Search */}
        <div className="hidden md:flex relative mx-4 flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search prompts, creators..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        
        {/* Navigation */}
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <Bell className="h-6 w-6" />
          </button>
          <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <MessageSquare className="h-6 w-6" />
          </button>
          <button 
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </button>
          <button className="hidden md:block bg-primary-600 hover:bg-primary-700 text-white font-nunito font-medium py-2 px-4 rounded-full transition duration-200">
            Create Prompt
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
