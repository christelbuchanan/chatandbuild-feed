import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import Feed from './components/Feed';
import TrendingSection from './components/TrendingSection';
import TrendingPrompts from './components/TrendingPrompts';
import Messages from './components/Messages';
import SavedPrompts from './components/SavedPrompts';
import LikedPrompts from './components/LikedPrompts';
import MyPrompts from './components/MyPrompts';
import PurchaseModal from './components/PurchaseModal';
import CreatePromptModal from './components/CreatePromptModal';
import { Post } from './types';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentView, setCurrentView] = useState<'feed' | 'trending' | 'messages' | 'saved' | 'liked' | 'my-prompts'>('feed');
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isCreatePromptModalOpen, setIsCreatePromptModalOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handlePurchase = (post: Post) => {
    setSelectedPost(post);
    setIsPurchaseModalOpen(true);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header 
          isDarkMode={isDarkMode} 
          toggleDarkMode={toggleDarkMode} 
          onCreatePrompt={() => setIsCreatePromptModalOpen(true)}
        />
        
        <div className="flex">
          <Sidebar 
            isDarkMode={isDarkMode} 
            currentView={currentView} 
            setCurrentView={setCurrentView} 
          />
          
          <main className="flex-1">
            {currentView === 'feed' && (
              <Feed 
                isDarkMode={isDarkMode} 
                onPurchase={handlePurchase}
              />
            )}
            
            {currentView === 'trending' && (
              <TrendingPrompts 
                isDarkMode={isDarkMode} 
              />
            )}
            
            {currentView === 'messages' && (
              <Messages 
                isDarkMode={isDarkMode} 
              />
            )}

            {currentView === 'saved' && (
              <SavedPrompts 
                isDarkMode={isDarkMode} 
              />
            )}

            {currentView === 'liked' && (
              <LikedPrompts 
                isDarkMode={isDarkMode} 
              />
            )}
            
            {currentView === 'my-prompts' && (
              <MyPrompts 
                isDarkMode={isDarkMode}
                onCreatePrompt={() => setIsCreatePromptModalOpen(true)}
                onPurchase={handlePurchase}
              />
            )}
          </main>
          
          {/* Trending section sidebar - only shown on feed view */}
          {currentView === 'feed' && (
            <TrendingSection 
              isDarkMode={isDarkMode} 
              setCurrentView={setCurrentView}
            />
          )}
        </div>
        
        <MobileNav 
          currentView={currentView} 
          setCurrentView={setCurrentView} 
        />
        
        {isPurchaseModalOpen && selectedPost && (
          <PurchaseModal 
            post={selectedPost} 
            onClose={() => setIsPurchaseModalOpen(false)} 
          />
        )}
        
        {isCreatePromptModalOpen && (
          <CreatePromptModal 
            onClose={() => setIsCreatePromptModalOpen(false)} 
          />
        )}
      </div>
    </div>
  );
}

export default App;
