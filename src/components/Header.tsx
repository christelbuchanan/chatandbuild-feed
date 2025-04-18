import React, { useState } from 'react';
import { Search, Bell, MessageSquare, Moon, Sun, Plus } from 'lucide-react';
import CreatePromptModal from './CreatePromptModal';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onCreatePrompt: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode, onCreatePrompt }) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleCreatePrompt = (promptData: any) => {
    console.log('New prompt created:', promptData);
    // Here you would typically send this data to your backend
    setIsCreateModalOpen(false);
    onCreatePrompt();
  };

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center">
            <img 
              src="https://placehold.co/32x32/5046e4/white?text=C&font=montserrat" 
              alt="ChatAndBuild Logo" 
              className="w-8 h-8 rounded-lg"
            />
            <span className="ml-2 font-nunito font-bold text-xl text-gray-900 dark:text-white hidden sm:inline-block">ChatAndBuild</span>
          </div>
          
          {/* Navigation buttons removed from here */}
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="relative hidden md:block">
            <input 
              type="text" 
              placeholder="Search prompts..." 
              className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full text-gray-900 dark:text-white font-nunito focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent w-64"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
          
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
            <Bell size={20} />
          </button>
          
          <button 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 relative"
          >
            <MessageSquare size={20} />
            <span className="absolute top-0 right-0 w-4 h-4 bg-primary-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
              2
            </span>
          </button>
          
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            onClick={() => setIsCreateModalOpen(true)}
            className="ml-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-nunito font-medium rounded-lg flex items-center"
          >
            <Plus size={18} className="mr-1" />
            <span className="hidden sm:inline">Create</span>
          </button>
          
          <button className="ml-2">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" 
              alt="Profile" 
              className="w-8 h-8 rounded-full object-cover border-2 border-white dark:border-gray-800"
            />
          </button>
        </div>
      </div>
      
      {isCreateModalOpen && (
        <CreatePromptModal 
          onClose={() => setIsCreateModalOpen(false)} 
          onCreatePrompt={handleCreatePrompt}
        />
      )}
    </header>
  );
};

export default Header;
