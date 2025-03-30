import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import TrendingSection from './components/TrendingSection';
import MobileNav from './components/MobileNav';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} font-nunito`}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <div className="flex">
        <Sidebar isDarkMode={isDarkMode} />
        
        <main className="flex-1 pb-16 md:pb-0">
          <div className="container mx-auto flex">
            <Feed isDarkMode={isDarkMode} />
            <TrendingSection isDarkMode={isDarkMode} />
          </div>
        </main>
      </div>
      
      <MobileNav isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
