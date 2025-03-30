import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Check, ShoppingCart, Link2, ExternalLink } from 'lucide-react';
import { Post } from '../types';
import PurchaseModal from './PurchaseModal';
import { createPermalinkFromHash } from '../utils/hashGenerator';

interface PostCardProps {
  post: Post;
  isDarkMode: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ post, isDarkMode }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [showShareTooltip, setShowShareTooltip] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  const handleBuyPrompt = () => {
    setShowPurchaseModal(true);
  };

  const handleShare = () => {
    // Generate permalink if it doesn't exist
    const permalink = post.permalink || createPermalinkFromHash(post.id);
    
    // Copy to clipboard
    navigator.clipboard.writeText(permalink);
    
    // Show tooltip
    setShowShareTooltip(true);
    setTimeout(() => setShowShareTooltip(false), 2000);
  };

  const handleTryApp = () => {
    // Open the demo app in a new tab
    if (post.demoUrl) {
      window.open(post.demoUrl, '_blank');
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
        {/* Post header */}
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="ml-3">
              <div className="flex items-center">
                <h3 className="font-nunito font-semibold text-gray-900 dark:text-white">{post.author.name}</h3>
                {post.author.verified && (
                  <span className="ml-1 bg-primary-500 text-white rounded-full p-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                )}
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span className="font-nunito">@{post.author.username}</span>
                <span className="mx-1">·</span>
                <span className="font-nunito">{post.timeAgo}</span>
              </div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
        
        {/* Post content */}
        <div className="px-4 pb-2">
          <p className="font-nunito text-gray-800 dark:text-gray-200 mb-3">{post.content}</p>
          
          {post.promptPreview && (
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-3 border border-gray-200 dark:border-gray-600">
              <p className="font-nunito text-gray-800 dark:text-gray-200 font-medium mb-2">Prompt Preview:</p>
              <p className="font-nunito text-gray-600 dark:text-gray-300 text-sm">{post.promptPreview}</p>
              <div className="mt-3 flex items-center justify-between">
                <button 
                  onClick={() => setShowPurchaseModal(true)}
                  className="text-sm font-nunito font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                >
                  View full prompt →
                </button>
                {post.price && (
                  <button
                    onClick={handleBuyPrompt}
                    className="flex items-center bg-secondary-600 hover:bg-secondary-700 text-white px-3 py-1 rounded-full text-sm font-nunito font-medium transition-colors duration-200"
                  >
                    <ShoppingCart className="w-3 h-3 mr-1" />
                    Buy for ${post.price}
                  </button>
                )}
              </div>
            </div>
          )}
          
          {post.image && (
            <div className="mt-3 mb-3 rounded-lg overflow-hidden">
              <img 
                src={post.image} 
                alt="Post attachment" 
                className="w-full h-auto object-cover"
              />
            </div>
          )}
          
          {/* Try App Button */}
          {post.demoUrl && (
            <div className="mb-3">
              <button
                onClick={handleTryApp}
                className="w-full flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-nunito font-medium transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Try This App
              </button>
            </div>
          )}
          
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="font-nunito text-xs bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {/* Post actions */}
        <div className="border-t border-gray-100 dark:border-gray-700 px-4 py-2 flex justify-between">
          <button 
            onClick={handleLike}
            className={`flex items-center text-gray-500 hover:text-primary-500 ${liked ? 'text-primary-500' : ''}`}
          >
            <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
            <span className="ml-2 text-xs font-nunito">{post.likes + (liked ? 1 : 0)}</span>
          </button>
          
          <button className="flex items-center text-gray-500 hover:text-primary-500">
            <MessageCircle className="w-5 h-5" />
            <span className="ml-2 text-xs font-nunito">{post.comments}</span>
          </button>
          
          <div className="relative">
            <button 
              onClick={handleShare}
              className="flex items-center text-gray-500 hover:text-primary-500"
            >
              <Share2 className="w-5 h-5" />
              <span className="ml-2 text-xs font-nunito">{post.shares}</span>
            </button>
            
            {showShareTooltip && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-md whitespace-nowrap">
                <div className="flex items-center">
                  <Link2 className="w-3 h-3 mr-1" />
                  Permalink copied!
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
              </div>
            )}
          </div>
          
          <button 
            onClick={handleSave}
            className={`flex items-center text-gray-500 hover:text-primary-500 ${saved ? 'text-primary-500' : ''}`}
          >
            <Bookmark className={`w-5 h-5 ${saved ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {showPurchaseModal && (
        <PurchaseModal 
          post={post} 
          onClose={() => setShowPurchaseModal(false)} 
        />
      )}
    </>
  );
};

export default PostCard;
