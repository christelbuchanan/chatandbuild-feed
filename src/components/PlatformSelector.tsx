import React, { useState } from 'react';
import { Copy, ExternalLink } from 'lucide-react';
import { availablePlatforms } from '../data/mockData';

interface PlatformSelectorProps {
  promptId: string;
  onClose: () => void;
}

// Define the platform data structure
interface PlatformInfo {
  id: Platform;
  name: string;
  icon: string;
  url: string;
}

// Sample prompt content for demonstration
const promptContent = `Create a modern task management app using React and Firebase with the following features:
- User authentication with email/password and social logins
- Task creation with title, description, due date, and priority
- Task categories and labels for organization
- Real-time updates using Firestore
- Responsive design for mobile and desktop
- Dark mode support
- Notification system for due dates`;

// Define platforms with their details
const platforms: PlatformInfo[] = [
  {
    id: 'chatandbuild',
    name: 'ChatAndBuild',
    icon: 'code',
    url: 'https://chatandbuild.com'
  },
  {
    id: 'windsurf',
    name: 'Windsurf',
    icon: 'wind',
    url: 'https://windsurf.ai'
  },
  {
    id: 'cursor',
    name: 'Cursor',
    icon: 'edit-3',
    url: 'https://cursor.sh'
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    icon: 'message-square',
    url: 'https://chat.openai.com'
  }
];

// Import Platform type
import { Platform } from '../types';

const PlatformSelector: React.FC<PlatformSelectorProps> = ({ promptId, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0].id);

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(promptContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenPlatform = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="p-6">
      <p className="font-nunito text-gray-600 dark:text-primary-300 mb-6">
        Choose where you'd like to use this prompt:
      </p>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        {platforms.map((platform) => (
          <button
            key={platform.id}
            onClick={() => setSelectedPlatform(platform.id)}
            className={`p-4 rounded-lg border ${
              selectedPlatform === platform.id
                ? 'border-secondary-500 bg-secondary-50 dark:bg-secondary-900/20 text-secondary-700 dark:text-secondary-400'
                : 'border-gray-200 dark:border-primary-700 hover:bg-gray-50 dark:hover:bg-primary-700/50'
            } flex flex-col items-center justify-center transition-colors duration-200`}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
              selectedPlatform === platform.id
                ? 'bg-secondary-100 dark:bg-secondary-800/30 text-secondary-600 dark:text-secondary-400'
                : 'bg-gray-100 dark:bg-primary-800 text-gray-600 dark:text-primary-400'
            }`}>
              {/* Use dynamic icon based on platform.icon */}
              {platform.icon === 'code' && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>}
              {platform.icon === 'wind' && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>}
              {platform.icon === 'edit-3' && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>}
              {platform.icon === 'message-square' && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>}
            </div>
            <span className="font-nunito font-medium text-gray-800 dark:text-white">{platform.name}</span>
          </button>
        ))}
      </div>
      
      <div className="bg-gray-50 dark:bg-primary-800/30 rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-nunito font-semibold text-gray-800 dark:text-white">Prompt</h3>
          <button 
            onClick={handleCopyPrompt}
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 flex items-center"
          >
            <Copy size={16} className="mr-1" />
            <span className="text-sm font-nunito">{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
        <div className="bg-white dark:bg-primary-900/50 rounded border border-gray-200 dark:border-primary-700 p-3 max-h-60 overflow-y-auto">
          <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 whitespace-pre-wrap">{promptContent}</pre>
        </div>
      </div>
      
      <div className="flex flex-col space-y-3">
        <button 
          onClick={() => handleOpenPlatform(platforms.find(p => p.id === selectedPlatform)?.url || '')}
          className="w-full bg-secondary-600 hover:bg-secondary-700 text-white font-nunito font-semibold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center"
        >
          <ExternalLink size={18} className="mr-2" />
          Open in {platforms.find(p => p.id === selectedPlatform)?.name}
        </button>
        
        <button 
          onClick={onClose}
          className="w-full bg-gray-100 dark:bg-primary-700 hover:bg-gray-200 dark:hover:bg-primary-600 text-gray-800 dark:text-white font-nunito font-semibold py-3 px-4 rounded-lg transition duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PlatformSelector;
