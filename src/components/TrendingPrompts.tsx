import React, { useState } from 'react';
import { TrendingUp, Filter, ChevronDown, Clock, Flame, Star, BarChart2 } from 'lucide-react';
import { mockPosts } from '../data/mockData';
import PostCard from './PostCard';

interface TrendingPromptsProps {
  isDarkMode: boolean;
}

type SortOption = 'popular' | 'recent' | 'topRated' | 'mostUsed';
type TimeRange = 'today' | 'week' | 'month' | 'allTime';
type Category = 'all' | 'development' | 'design' | 'writing' | 'business' | 'productivity';

const TrendingPrompts: React.FC<TrendingPromptsProps> = ({ isDarkMode }) => {
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [timeRange, setTimeRange] = useState<TimeRange>('week');
  const [category, setCategory] = useState<Category>('all');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  // Sort posts based on selected criteria
  const getSortedPosts = () => {
    let sorted = [...mockPosts];
    
    // Apply category filter
    if (category !== 'all') {
      sorted = sorted.filter(post => {
        if (category === 'development') return post.tags?.includes('react') || post.tags?.includes('frontend');
        if (category === 'design') return post.tags?.includes('dashboard') || post.tags?.includes('ui');
        if (category === 'writing') return post.tags?.includes('writing') || post.tags?.includes('content');
        if (category === 'business') return post.tags?.includes('ecommerce') || post.tags?.includes('analytics');
        if (category === 'productivity') return post.tags?.includes('productivity') || post.tags?.includes('utility');
        return true;
      });
    }
    
    // Apply sorting
    if (sortBy === 'popular') {
      sorted.sort((a, b) => (b.likes + b.comments + b.shares) - (a.likes + a.comments + a.shares));
    } else if (sortBy === 'recent') {
      sorted.sort((a, b) => {
        // Simple sort based on timeAgo string for mock data
        // In a real app, you'd use actual timestamps
        const aTime = a.timeAgo.includes('h') ? parseInt(a.timeAgo) : parseInt(a.timeAgo) * 24;
        const bTime = b.timeAgo.includes('h') ? parseInt(b.timeAgo) : parseInt(b.timeAgo) * 24;
        return aTime - bTime;
      });
    } else if (sortBy === 'topRated') {
      sorted.sort((a, b) => b.likes - a.likes);
    } else if (sortBy === 'mostUsed') {
      sorted.sort((a, b) => b.shares - a.shares);
    }
    
    return sorted;
  };

  const sortedPosts = getSortedPosts();

  const getSortIcon = () => {
    switch (sortBy) {
      case 'popular': return <Flame size={16} />;
      case 'recent': return <Clock size={16} />;
      case 'topRated': return <Star size={16} />;
      case 'mostUsed': return <BarChart2 size={16} />;
      default: return <Flame size={16} />;
    }
  };

  const getTimeRangeLabel = () => {
    switch (timeRange) {
      case 'today': return 'Today';
      case 'week': return 'This Week';
      case 'month': return 'This Month';
      case 'allTime': return 'All Time';
      default: return 'This Week';
    }
  };

  const getCategoryLabel = () => {
    switch (category) {
      case 'all': return 'All Categories';
      case 'development': return 'Development';
      case 'design': return 'Design';
      case 'writing': return 'Writing';
      case 'business': return 'Business';
      case 'productivity': return 'Productivity';
      default: return 'All Categories';
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6">
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <TrendingUp className="w-6 h-6 text-primary-500 mr-2" />
          <h1 className="font-nunito font-bold text-2xl text-gray-900 dark:text-white">Trending Prompts</h1>
        </div>
        <p className="font-nunito text-gray-600 dark:text-gray-300">
          Discover the most popular and useful prompts from the ChatAndBuild community
        </p>
      </div>
      
      {/* Filters and sorting */}
      <div className="flex flex-wrap gap-3 mb-6">
        {/* Sort dropdown */}
        <div className="relative">
          <button 
            className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm text-gray-700 dark:text-gray-200 font-nunito"
            onClick={() => {
              setShowSortDropdown(!showSortDropdown);
              setShowTimeDropdown(false);
              setShowCategoryDropdown(false);
            }}
          >
            {getSortIcon()}
            <span className="mx-2">Sort by</span>
            <ChevronDown size={16} />
          </button>
          
          {showSortDropdown && (
            <div className="absolute z-10 mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
              <ul className="py-1">
                <li>
                  <button 
                    className={`flex items-center w-full px-4 py-2 text-left font-nunito ${sortBy === 'popular' ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                    onClick={() => {
                      setSortBy('popular');
                      setShowSortDropdown(false);
                    }}
                  >
                    <Flame size={16} className="mr-2" />
                    Popular
                  </button>
                </li>
                <li>
                  <button 
                    className={`flex items-center w-full px-4 py-2 text-left font-nunito ${sortBy === 'recent' ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                    onClick={() => {
                      setSortBy('recent');
                      setShowSortDropdown(false);
                    }}
                  >
                    <Clock size={16} className="mr-2" />
                    Recent
                  </button>
                </li>
                <li>
                  <button 
                    className={`flex items-center w-full px-4 py-2 text-left font-nunito ${sortBy === 'topRated' ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                    onClick={() => {
                      setSortBy('topRated');
                      setShowSortDropdown(false);
                    }}
                  >
                    <Star size={16} className="mr-2" />
                    Top Rated
                  </button>
                </li>
                <li>
                  <button 
                    className={`flex items-center w-full px-4 py-2 text-left font-nunito ${sortBy === 'mostUsed' ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                    onClick={() => {
                      setSortBy('mostUsed');
                      setShowSortDropdown(false);
                    }}
                  >
                    <BarChart2 size={16} className="mr-2" />
                    Most Used
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
        
        {/* Time range dropdown */}
        <div className="relative">
          <button 
            className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm text-gray-700 dark:text-gray-200 font-nunito"
            onClick={() => {
              setShowTimeDropdown(!showTimeDropdown);
              setShowSortDropdown(false);
              setShowCategoryDropdown(false);
            }}
          >
            <Clock size={16} />
            <span className="mx-2">{getTimeRangeLabel()}</span>
            <ChevronDown size={16} />
          </button>
          
          {showTimeDropdown && (
            <div className="absolute z-10 mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
              <ul className="py-1">
                <li>
                  <button 
                    className={`w-full px-4 py-2 text-left font-nunito ${timeRange === 'today' ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                    onClick={() => {
                      setTimeRange('today');
                      setShowTimeDropdown(false);
                    }}
                  >
                    Today
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full px-4 py-2 text-left font-nunito ${timeRange === 'week' ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                    onClick={() => {
                      setTimeRange('week');
                      setShowTimeDropdown(false);
                    }}
                  >
                    This Week
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full px-4 py-2 text-left font-nunito ${timeRange === 'month' ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                    onClick={() => {
                      setTimeRange('month');
                      setShowTimeDropdown(false);
                    }}
                  >
                    This Month
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full px-4 py-2 text-left font-nunito ${timeRange === 'allTime' ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                    onClick={() => {
                      setTimeRange('allTime');
                      setShowTimeDropdown(false);
                    }}
                  >
                    All Time
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
        
        {/* Category dropdown */}
        <div className="relative">
          <button 
            className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm text-gray-700 dark:text-gray-200 font-nunito"
            onClick={() => {
              setShowCategoryDropdown(!showCategoryDropdown);
              setShowSortDropdown(false);
              setShowTimeDropdown(false);
            }}
          >
            <Filter size={16} />
            <span className="mx-2">{getCategoryLabel()}</span>
            <ChevronDown size={16} />
          </button>
          
          {showCategoryDropdown && (
            <div className="absolute z-10 mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
              <ul className="py-1">
                <li>
                  <button 
                    className={`w-full px-4 py-2 text-left font-nunito ${category === 'all' ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                    onClick={() => {
                      setCategory('all');
                      setShowCategoryDropdown(false);
                    }}
                  >
                    All Categories
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full px-4 py-2 text-left font-nunito ${category === 'development' ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                    onClick={() => {
                      setCategory('development');
                      setShowCategoryDropdown(false);
                    }}
                  >
                    Development
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full px-4 py-2 text-left font-nunito ${category === 'design' ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                    onClick={() => {
                      setCategory('design');
                      setShowCategoryDropdown(false);
                    }}
                  >
                    Design
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full px-4 py-2 text-left font-nunito ${category === 'writing' ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                    onClick={() => {
                      setCategory('writing');
                      setShowCategoryDropdown(false);
                    }}
                  >
                    Writing
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full px-4 py-2 text-left font-nunito ${category === 'business' ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                    onClick={() => {
                      setCategory('business');
                      setShowCategoryDropdown(false);
                    }}
                  >
                    Business
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full px-4 py-2 text-left font-nunito ${category === 'productivity' ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                    onClick={() => {
                      setCategory('productivity');
                      setShowCategoryDropdown(false);
                    }}
                  >
                    Productivity
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      
      {/* Trending stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-4">
          <div className="flex items-center">
            <div className="p-2 bg-primary-100 dark:bg-primary-900/50 rounded-lg">
              <Flame className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            </div>
            <div className="ml-3">
              <p className="font-nunito text-sm text-gray-500 dark:text-gray-400">Most Popular</p>
              <p className="font-nunito font-bold text-gray-900 dark:text-white">Task Management App</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-4">
          <div className="flex items-center">
            <div className="p-2 bg-secondary-100 dark:bg-secondary-900/50 rounded-lg">
              <Star className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
            </div>
            <div className="ml-3">
              <p className="font-nunito text-sm text-gray-500 dark:text-gray-400">Highest Rated</p>
              <p className="font-nunito font-bold text-gray-900 dark:text-white">Portfolio Website</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-4">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-lg">
              <BarChart2 className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div className="ml-3">
              <p className="font-nunito text-sm text-gray-500 dark:text-gray-400">Most Used</p>
              <p className="font-nunito font-bold text-gray-900 dark:text-white">E-commerce Dashboard</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trending posts */}
      <div className="space-y-6">
        {sortedPosts.map(post => (
          <PostCard key={post.id} post={post} isDarkMode={isDarkMode} />
        ))}
      </div>
    </div>
  );
};

export default TrendingPrompts;
