import React from 'react';
import { Bookmark, Search, Filter } from 'lucide-react';
import PostCard from './PostCard';
import { mockPosts } from '../data/mockData';

interface SavedPromptsProps {
  isDarkMode: boolean;
}

const SavedPrompts: React.FC<SavedPromptsProps> = ({ isDarkMode }) => {
  // In a real app, you would fetch the user's saved prompts
  // For now, we'll use the first 3 mock posts as "saved" prompts
  const savedPosts = mockPosts.slice(0, 3);

  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mr-3">
            <Bookmark className="w-5 h-5 text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-2xl font-nunito font-bold text-gray-900 dark:text-white">Saved Prompts</h1>
        </div>
        
        <div className="flex w-full md:w-auto space-x-2">
          <div className="relative flex-grow md:w-64">
            <input 
              type="text" 
              placeholder="Search saved prompts..." 
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white font-nunito focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
          
          <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 font-nunito hover:bg-gray-50 dark:hover:bg-gray-700">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
        </div>
      </div>
      
      {savedPosts.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <Bookmark className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-xl font-nunito font-bold text-gray-900 dark:text-white mb-2">No saved prompts yet</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6">
            When you save prompts, they'll appear here for easy access. Start exploring to find prompts you want to save!
          </p>
          <button className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white font-nunito font-medium rounded-lg">
            Explore Prompts
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {savedPosts.map(post => (
            <PostCard 
              key={post.id} 
              post={post} 
              isDarkMode={isDarkMode} 
            />
          ))}
          
          <div className="text-center py-4">
            <button className="px-6 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-primary-600 dark:text-primary-400 font-nunito font-medium hover:bg-gray-50 dark:hover:bg-gray-700">
              Load More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedPrompts;
