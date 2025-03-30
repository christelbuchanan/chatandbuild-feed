import React from 'react';
import PostCard from './PostCard';
import { mockPosts } from '../data/mockData';

interface FeedProps {
  isDarkMode: boolean;
}

const Feed: React.FC<FeedProps> = ({ isDarkMode }) => {
  return (
    <div className="max-w-2xl mx-auto py-4 px-4 sm:px-6">
      <div className="mb-6">
        <h2 className="font-nunito font-bold text-2xl text-gray-900 dark:text-white">Latest Prompts</h2>
        <p className="font-nunito text-gray-600 dark:text-gray-300">Discover what creators are building with ChatAndBuild</p>
      </div>
      
      <div className="space-y-6">
        {mockPosts.map(post => (
          <PostCard key={post.id} post={post} isDarkMode={isDarkMode} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
