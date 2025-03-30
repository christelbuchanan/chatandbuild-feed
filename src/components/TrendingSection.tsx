import React from 'react';
import { TrendingUp, ExternalLink } from 'lucide-react';

interface TrendingSectionProps {
  isDarkMode: boolean;
  setCurrentView?: (view: 'feed' | 'trending') => void;
}

const TrendingSection: React.FC<TrendingSectionProps> = ({ isDarkMode, setCurrentView }) => {
  const trendingTopics = [
    { name: 'React Dashboard', posts: 1243 },
    { name: 'AI Chatbot', posts: 982 },
    { name: 'Portfolio Website', posts: 756 },
    { name: 'E-commerce Store', posts: 621 },
    { name: 'Mobile App UI', posts: 543 },
  ];

  const suggestedUsers = [
    { 
      name: 'Emma Rodriguez', 
      username: 'emmadev', 
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      verified: true
    },
    { 
      name: 'David Kim', 
      username: 'davidcodes', 
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      verified: false
    },
    { 
      name: 'Sophia Chen', 
      username: 'sophiatech', 
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      verified: true
    },
  ];

  return (
    <div className="hidden lg:block w-80 p-4 space-y-6">
      {/* Trending topics */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700">
          <div className="flex items-center">
            <TrendingUp className="w-5 h-5 text-primary-500 mr-2" />
            <h3 className="font-nunito font-bold text-lg text-gray-900 dark:text-white">Trending Prompts</h3>
          </div>
          <button 
            onClick={() => {
              if (setCurrentView) {
                setCurrentView('trending');
              }
            }}
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            <ExternalLink size={16} />
          </button>
        </div>
        <ul className="p-2">
          {trendingTopics.map((topic, index) => (
            <li key={index}>
              <a href="#" className="block hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-lg transition duration-200">
                <p className="font-nunito font-semibold text-gray-800 dark:text-white">{topic.name}</p>
                <p className="font-nunito text-sm text-gray-500 dark:text-gray-400">{topic.posts} posts</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Suggested users */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="p-4 border-b border-gray-100 dark:border-gray-700">
          <h3 className="font-nunito font-bold text-lg text-gray-900 dark:text-white">Who to follow</h3>
        </div>
        <ul className="p-4 space-y-4">
          {suggestedUsers.map((user, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="font-nunito font-semibold text-gray-800 dark:text-white">{user.name}</p>
                  <p className="font-nunito text-sm text-gray-500 dark:text-gray-400">@{user.username}</p>
                </div>
              </div>
              <button className="font-nunito bg-primary-50 hover:bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold transition duration-200">
                Follow
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Footer links */}
      <div className="text-sm text-gray-500 dark:text-gray-400">
        <div className="flex flex-wrap gap-2 mb-2">
          <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 font-nunito">Terms of Service</a>
          <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 font-nunito">Privacy Policy</a>
          <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 font-nunito">Cookie Policy</a>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 font-nunito">Accessibility</a>
          <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 font-nunito">Ads Info</a>
          <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 font-nunito">More</a>
        </div>
        <p className="mt-2 font-nunito">© 2023 ChatAndBuild, Inc.</p>
      </div>
    </div>
  );
};

export default TrendingSection;
