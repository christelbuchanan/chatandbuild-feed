import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import TrendingSection from './components/TrendingSection';
import MobileNav from './components/MobileNav';
import TrendingPrompts from './components/TrendingPrompts';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentView, setCurrentView] = useState<'feed' | 'trending'>('feed');
  
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} font-nunito`}>
      <Header 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
        currentView={currentView}
        setCurrentView={setCurrentView}
      />
      
      <div className="flex">
        <Sidebar 
          isDarkMode={isDarkMode} 
          currentView={currentView}
          setCurrentView={setCurrentView}
        />
        
        <main className="flex-1 pb-16 md:pb-0">
          {currentView === 'feed' ? (
            <div className="container mx-auto flex">
              <Feed isDarkMode={isDarkMode} />
              <TrendingSection 
                isDarkMode={isDarkMode} 
                setCurrentView={setCurrentView}
              />
            </div>
          ) : (
            <TrendingPrompts isDarkMode={isDarkMode} />
          )}
        </main>
      </div>
      
      <MobileNav 
        isDarkMode={isDarkMode} 
        currentView={currentView}
        setCurrentView={setCurrentView}
      />
    </div>
  );
}

export default App;
