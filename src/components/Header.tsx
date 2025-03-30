import React, { useState } from 'react';
import { Search, Bell, MessageSquare, Moon, Sun, PenSquare } from 'lucide-react';
import CreatePromptModal from './CreatePromptModal';

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, setIsDarkMode }) => {
  const [showCreatePrompt, setShowCreatePrompt] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleCreatePrompt = (promptData: any) => {
    console.log('New prompt created:', promptData);
    // Here you would typically send this data to your backend
    // and then update your state with the new prompt
  };

  return (
    <>
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="text-primary-600 dark:text-primary-400 font-bold text-2xl font-nunito">
                ChatAndBuild
              </div>
            </div>
            
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search prompts..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowCreatePrompt(true)}
                className="hidden md:flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-nunito font-medium transition-colors duration-200"
              >
                <PenSquare className="w-4 h-4 mr-2" />
                Create Prompt
              </button>
              
              <button className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 p-1">
                <Bell className="h-6 w-6" />
              </button>
              
              <button className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 p-1">
                <MessageSquare className="h-6 w-6" />
              </button>
              
              <button 
                onClick={toggleDarkMode}
                className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 p-1"
              >
                {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
              </button>
              
              <div className="h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center text-primary-600 dark:text-primary-300 font-nunito font-bold cursor-pointer">
                U
              </div>
            </div>
          </div>
        </div>
      </header>

      {showCreatePrompt && (
        <CreatePromptModal 
          onClose={() => setShowCreatePrompt(false)} 
          onCreatePrompt={handleCreatePrompt}
        />
      )}
    </>
  );
};

export default Header;
