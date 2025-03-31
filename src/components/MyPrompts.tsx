import React, { useState } from 'react';
import { Post } from '../types';
import PostCard from './PostCard';
import { mockPosts } from '../data/mockData';
import { Plus, Filter, ArrowDownAZ, TrendingUp, DollarSign } from 'lucide-react';

interface MyPromptsProps {
  isDarkMode: boolean;
  onCreatePrompt: () => void;
  onPurchase?: (post: Post) => void;
}

const MyPrompts: React.FC<MyPromptsProps> = ({ isDarkMode, onCreatePrompt, onPurchase }) => {
  // For demo purposes, we'll filter the mock posts to simulate user's own prompts
  // In a real app, this would come from an API call or user state
  const myPrompts = mockPosts.filter((_, index) => index % 2 === 0); // Just a sample filter
  
  const [sortOption, setSortOption] = useState<'recent' | 'popular' | 'revenue'>('recent');
  const [filterOption, setFilterOption] = useState<'all' | 'published' | 'draft'>('all');
  
  // Sort prompts based on selected option
  const sortedPrompts = [...myPrompts].sort((a, b) => {
    if (sortOption === 'recent') {
      // Sort by most recent (using timeAgo as a proxy)
      return a.timeAgo.localeCompare(b.timeAgo);
    } else if (sortOption === 'popular') {
      // Sort by popularity (likes)
      return b.likes - a.likes;
    } else {
      // Sort by revenue (price as proxy)
      return (b.price || 0) - (a.price || 0);
    }
  });

  // Filter prompts based on selected option
  // For demo, we'll just use the full list for now
  const filteredPrompts = sortedPrompts;

  return (
    <div className="max-w-4xl mx-auto py-4 px-4 sm:px-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="font-nunito font-bold text-2xl text-gray-900 dark:text-white">My Prompts</h2>
          <p className="font-nunito text-gray-600 dark:text-gray-300">
            Manage and track your published prompts
          </p>
        </div>
        <button
          onClick={onCreatePrompt}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Prompt
        </button>
      </div>

      {/* Stats overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mr-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Views</p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">12.5K</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 mr-4">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Revenue</p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">$1,245</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Prompts Created</p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">{myPrompts.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and sorting */}
      <div className="flex flex-col sm:flex-row justify-between mb-6 space-y-3 sm:space-y-0">
        <div className="flex items-center space-x-2">
          <div className="relative inline-block text-left">
            <select
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              value={filterOption}
              onChange={(e) => setFilterOption(e.target.value as any)}
            >
              <option value="all">All Prompts</option>
              <option value="published">Published</option>
              <option value="draft">Drafts</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <Filter className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">Sort by:</span>
          <div className="relative inline-block text-left">
            <select
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as any)}
            >
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
              <option value="revenue">Highest Revenue</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ArrowDownAZ className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Prompts list */}
      {filteredPrompts.length > 0 ? (
        <div className="space-y-6">
          {filteredPrompts.map(post => (
            <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
              <PostCard 
                post={post} 
                isDarkMode={isDarkMode} 
                onPurchase={onPurchase}
              />
              <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Published
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.price ? `$${post.price}` : 'Free'}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="inline-flex items-center px-3 py-1 border border-gray-300 dark:border-gray-600 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                      Edit
                    </button>
                    <button className="inline-flex items-center px-3 py-1 border border-gray-300 dark:border-gray-600 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                      Analytics
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No prompts</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Get started by creating a new prompt.</p>
          <div className="mt-6">
            <button
              onClick={onCreatePrompt}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <Plus className="w-5 h-5 mr-2" />
              New Prompt
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPrompts;
