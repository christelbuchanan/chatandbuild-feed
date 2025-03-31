import React from 'react';
import { Heart, Search, Filter, Calendar } from 'lucide-react';
import PostCard from './PostCard';
import { mockPosts } from '../data/mockData';

interface LikedPromptsProps {
  isDarkMode: boolean;
}

const LikedPrompts: React.FC<LikedPromptsProps> = ({ isDarkMode }) => {
  // In a real app, you would fetch the user's liked prompts
  // For now, we'll use the last 3 mock posts as "liked" prompts
  const likedPosts = mockPosts.slice(2, 5);
  
  // Filter options
  const [activeFilter, setActiveFilter] = React.useState<'all' | 'recent' | 'popular'>('all');

  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mr-3">
            <Heart className="w-5 h-5 text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-2xl font-nunito font-bold text-gray-900 dark:text-white">Liked Prompts</h1>
        </div>
        
        <div className="flex w-full md:w-auto space-x-2">
          <div className="relative flex-grow md:w-64">
            <input 
              type="text" 
              placeholder="Search liked prompts..." 
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
      
      <div className="mb-6 flex space-x-2 overflow-x-auto pb-2">
        <button 
          className={`px-4 py-2 rounded-full font-nunito font-medium ${
            activeFilter === 'all' 
              ? 'bg-primary-600 text-white' 
              : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300'
          }`}
          onClick={() => setActiveFilter('all')}
        >
          All Likes
        </button>
        
        <button 
          className={`px-4 py-2 rounded-full font-nunito font-medium ${
            activeFilter === 'recent' 
              ? 'bg-primary-600 text-white' 
              : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300'
          }`}
          onClick={() => setActiveFilter('recent')}
        >
          <Calendar className="w-4 h-4 inline-block mr-1" />
          Recent
        </button>
        
        <button 
          className={`px-4 py-2 rounded-full font-nunito font-medium ${
            activeFilter === 'popular' 
              ? 'bg-primary-600 text-white' 
              : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300'
          }`}
          onClick={() => setActiveFilter('popular')}
        >
          <Heart className="w-4 h-4 inline-block mr-1" />
          Most Liked
        </button>
      </div>
      
      {likedPosts.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-xl font-nunito font-bold text-gray-900 dark:text-white mb-2">No liked prompts yet</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6">
            When you like prompts, they'll appear here. Start exploring to find prompts you love!
          </p>
          <button className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white font-nunito font-medium rounded-lg">
            Explore Prompts
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {likedPosts.map(post => (
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

export default LikedPrompts;
