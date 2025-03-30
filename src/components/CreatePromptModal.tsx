import React, { useState, useRef } from 'react';
import { X, Image, Tag, Hash, DollarSign, Upload, Wand2, AlertCircle, Check, Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { Platform } from '../types';
import { generateRandomHash } from '../utils/hashGenerator';
import { parseChatJson } from '../utils/chatJsonParser';

interface CreatePromptModalProps {
  onClose: () => void;
  onCreatePrompt: (promptData: any) => void;
}

const CreatePromptModal: React.FC<CreatePromptModalProps> = ({ onClose, onCreatePrompt }) => {
  const [step, setStep] = useState<'details' | 'preview'>('details');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [promptText, setPromptText] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>(['chatgpt']);
  const [isPublic, setIsPublic] = useState(true);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  
  // Magic Mode states
  const [isMagicMode, setIsMagicMode] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [uploadMessage, setUploadMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTogglePlatform = (platform: Platform) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform));
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
  };

  const handleSubmit = () => {
    // Generate a random hash for the permalink
    const hash = generateRandomHash();
    
    const promptData = {
      id: hash,
      title,
      content,
      promptText,
      description,
      price: price ? parseFloat(price) : 0,
      tags,
      platforms: selectedPlatforms,
      isPublic,
      image: previewImage,
      permalink: `https://chatandbuild.com/chat/${hash}`
    };
    
    onCreatePrompt(promptData);
    onClose();
  };

  // Magic Mode functions
  const toggleMagicMode = () => {
    setIsMagicMode(!isMagicMode);
    if (!isMagicMode) {
      // Reset upload status when enabling magic mode
      setUploadStatus('idle');
      setUploadMessage('');
    }
  };

  const handleChatJsonUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadStatus('loading');
    setUploadMessage('Processing your chat.json file...');

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const jsonString = event.target?.result as string;
        const extractedData = parseChatJson(jsonString);
        
        if (extractedData) {
          // Populate form fields with extracted data
          setTitle(extractedData.title);
          setPromptText(extractedData.promptText);
          setDescription(extractedData.description);
          setTags(extractedData.tags);
          
          // Set a default post content
          setContent(`I created this with ChatAndBuild! Here's the prompt I used to build it.`);
          
          // Set compatible platforms
          setSelectedPlatforms(['chatandbuild', 'chatgpt']);
          
          setUploadStatus('success');
          setUploadMessage('Successfully extracted information from your chat!');
        } else {
          throw new Error('Failed to extract data from chat.json');
        }
      } catch (error) {
        console.error('Error parsing chat.json:', error);
        setUploadStatus('error');
        setUploadMessage('Failed to parse the chat.json file. Please make sure it\'s a valid JSON file.');
      }
    };

    reader.onerror = () => {
      setUploadStatus('error');
      setUploadMessage('Error reading the file. Please try again.');
    };

    reader.readAsText(file);
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  // Checkmark SVG for verification badge
  const CheckmarkSvg = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="12" 
      height="12" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  // Shopping bag SVG for buy button
  const ShoppingBagSvg = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="12" 
      height="12" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="mr-1"
    >
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center sticky top-0 bg-white dark:bg-gray-800 z-10">
          <h2 className="font-nunito font-bold text-xl text-gray-900 dark:text-white">
            {step === 'details' ? 'Create New Prompt' : 'Preview Prompt'}
          </h2>
          <div className="flex items-center space-x-2">
            {step === 'details' && (
              <button
                onClick={() => setStep('preview')}
                className="px-3 py-1 text-sm font-nunito font-medium text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-full"
              >
                Preview
              </button>
            )}
            {step === 'preview' && (
              <button
                onClick={() => setStep('details')}
                className="px-3 py-1 text-sm font-nunito font-medium text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-full"
              >
                Edit
              </button>
            )}
            <button 
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-300"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        
        {step === 'details' ? (
          <div className="p-6">
            {/* Magic Mode Toggle */}
            <div className="mb-6">
              <button
                onClick={toggleMagicMode}
                className={`w-full flex items-center justify-center px-4 py-3 rounded-lg border ${
                  isMagicMode 
                    ? 'bg-primary-50 dark:bg-primary-900/30 border-primary-500 text-primary-700 dark:text-primary-300' 
                    : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'
                } transition-colors duration-200`}
              >
                <Wand2 className={`w-5 h-5 mr-2 ${isMagicMode ? 'text-primary-600 dark:text-primary-400' : ''}`} />
                <span className="font-nunito font-medium">
                  {isMagicMode ? 'Magic Mode Enabled' : 'Enable Magic Mode'}
                </span>
              </button>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 font-nunito">
                Magic Mode lets you upload a chat.json file from ChatAndBuild to automatically fill in the prompt details.
              </p>
            </div>

            {/* Magic Mode Upload Section */}
            {isMagicMode && (
              <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                <h3 className="font-nunito font-medium text-gray-800 dark:text-gray-200 mb-3">
                  Upload your chat.json file
                </h3>
                
                <div className="flex flex-col items-center">
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept=".json"
                    onChange={handleChatJsonUpload}
                    className="hidden"
                  />
                  
                  <button
                    onClick={triggerFileUpload}
                    className={`w-full flex items-center justify-center px-4 py-3 rounded-lg border border-dashed ${
                      uploadStatus === 'error' 
                        ? 'border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20' 
                        : uploadStatus === 'success'
                          ? 'border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20'
                          : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'
                    } hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200`}
                    disabled={uploadStatus === 'loading'}
                  >
                    {uploadStatus === 'loading' ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="font-nunito">Processing...</span>
                      </div>
                    ) : uploadStatus === 'success' ? (
                      <div className="flex items-center text-green-600 dark:text-green-400">
                        <Check className="w-5 h-5 mr-2" />
                        <span className="font-nunito">Upload Successful</span>
                      </div>
                    ) : uploadStatus === 'error' ? (
                      <div className="flex items-center text-red-600 dark:text-red-400">
                        <AlertCircle className="w-5 h-5 mr-2" />
                        <span className="font-nunito">Upload Failed - Try Again</span>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Upload className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
                        <span className="font-nunito text-gray-700 dark:text-gray-300">Click to upload chat.json</span>
                      </div>
                    )}
                  </button>
                  
                  {uploadMessage && (
                    <p className={`mt-2 text-sm font-nunito ${
                      uploadStatus === 'error' 
                        ? 'text-red-600 dark:text-red-400' 
                        : uploadStatus === 'success'
                          ? 'text-green-600 dark:text-green-400'
                          : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {uploadMessage}
                    </p>
                  )}
                </div>
              </div>
            )}

            <div className="space-y-6">
              {/* Post Content */}
              <div>
                <label className="block font-nunito font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Post Content
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Share something about this prompt..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-nunito focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  rows={3}
                />
              </div>
              
              {/* Prompt Title */}
              <div>
                <label className="block font-nunito font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Prompt Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="E.g., Advanced React Component Generator"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-nunito focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              {/* Prompt Text */}
              <div>
                <label className="block font-nunito font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Prompt Text
                </label>
                <textarea
                  value={promptText}
                  onChange={(e) => setPromptText(e.target.value)}
                  placeholder="Paste your full prompt here..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-nunito focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-mono text-sm"
                  rows={8}
                />
              </div>
              
              {/* Prompt Description */}
              <div>
                <label className="block font-nunito font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Short Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="A brief description of what this prompt does..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-nunito focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  rows={2}
                />
              </div>
              
              {/* Price */}
              <div>
                <label className="block font-nunito font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Price (leave empty for free)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <DollarSign size={16} className="text-gray-400" />
                  </div>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="0.00"
                    className="w-full pl-10 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-nunito focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              {/* Tags */}
              <div>
                <label className="block font-nunito font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Tags
                </label>
                <div className="flex items-center">
                  <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Hash size={16} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={currentTag}
                      onChange={(e) => setCurrentTag(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Add a tag and press Enter"
                      className="w-full pl-10 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-nunito focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleAddTag}
                    className="ml-2 px-4 py-3 bg-primary-500 hover:bg-primary-600 text-white font-nunito font-medium rounded-lg"
                  >
                    Add
                  </button>
                </div>
                
                {tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-nunito font-medium bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                      >
                        #{tag}
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(tag)}
                          className="ml-1.5 text-primary-500 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-200"
                        >
                          <X size={14} />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Image Upload */}
              <div>
                <label className="block font-nunito font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Image (optional)
                </label>
                <div className="mt-1 flex items-center">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Image size={24} className="text-gray-400 mb-2" />
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 font-nunito">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-nunito">
                        PNG, JPG or GIF (max. 2MB)
                      </p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </label>
                </div>
                
                {previewImage && (
                  <div className="mt-3 relative">
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => setPreviewImage(null)}
                      className="absolute top-2 right-2 p-1 bg-gray-800 bg-opacity-70 rounded-full text-white hover:bg-opacity-100"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}
              </div>
              
              {/* Compatible Platforms */}
              <div>
                <label className="block font-nunito font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Compatible Platforms
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {(['chatandbuild', 'windsurf', 'cursor', 'chatgpt'] as Platform[]).map((platform) => (
                    <button
                      key={platform}
                      type="button"
                      onClick={() => handleTogglePlatform(platform)}
                      className={`px-4 py-2 rounded-lg border ${
                        selectedPlatforms.includes(platform)
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                          : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'
                      } font-nunito font-medium text-sm`}
                    >
                      {platform === 'chatandbuild' && 'ChatAndBuild'}
                      {platform === 'cursor' && 'Cursor'}
                      {platform === 'windsurf' && 'Windsurf'}
                      {platform === 'chatgpt' && 'ChatGPT'}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Visibility */}
              <div>
                <label className="block font-nunito font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Visibility
                </label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-primary-600 focus:ring-primary-500"
                      name="visibility"
                      checked={isPublic}
                      onChange={() => setIsPublic(true)}
                    />
                    <span className="ml-2 font-nunito text-gray-700 dark:text-gray-300">Public</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-primary-600 focus:ring-primary-500"
                      name="visibility"
                      checked={!isPublic}
                      onChange={() => setIsPublic(false)}
                    />
                    <span className="ml-2 font-nunito text-gray-700 dark:text-gray-300">Private</span>
                  </label>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-nunito font-medium rounded-lg mr-3 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-nunito font-medium rounded-lg"
                disabled={!title || !promptText}
              >
                Create Prompt
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
              {/* Preview header */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                  <div className="ml-3">
                    <div className="flex items-center">
                      <h3 className="font-nunito font-semibold text-gray-900 dark:text-white">Your Name</h3>
                      <span className="ml-1 bg-primary-500 text-white rounded-full p-0.5">
                        <CheckmarkSvg />
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-nunito">@yourusername</span>
                      <span className="mx-1">·</span>
                      <span className="font-nunito">Just now</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Preview content */}
              <div className="px-4 pb-2">
                <p className="font-nunito text-gray-800 dark:text-gray-200 mb-3">{content || "Share something about this prompt..."}</p>
                
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-3 border border-gray-200 dark:border-gray-600">
                  <p className="font-nunito text-gray-800 dark:text-gray-200 font-medium mb-2">Prompt Preview:</p>
                  <p className="font-nunito text-gray-600 dark:text-gray-300 text-sm">{description || "A brief description of what this prompt does..."}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <button className="text-sm font-nunito font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
                      View full prompt →
                    </button>
                    {price && (
                      <button className="flex items-center bg-secondary-600 hover:bg-secondary-700 text-white px-3 py-1 rounded-full text-sm font-nunito font-medium transition-colors duration-200">
                        <ShoppingBagSvg />
                        Buy for ${parseFloat(price).toFixed(2)}
                      </button>
                    )}
                  </div>
                </div>
                
                {previewImage && (
                  <div className="mt-3 mb-3 rounded-lg overflow-hidden">
                    <img 
                      src={previewImage} 
                      alt="Post attachment" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}
                
                {/* Tags */}
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {tags.map((tag, index) => (
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
              
              {/* Preview actions */}
              <div className="border-t border-gray-100 dark:border-gray-700 px-4 py-2 flex justify-between">
                <button className="flex items-center text-gray-500">
                  <Heart size={20} />
                  <span className="ml-2 text-xs font-nunito">0</span>
                </button>
                
                <button className="flex items-center text-gray-500">
                  <MessageCircle size={20} />
                  <span className="ml-2 text-xs font-nunito">0</span>
                </button>
                
                <button className="flex items-center text-gray-500">
                  <Share2 size={20} />
                  <span className="ml-2 text-xs font-nunito">0</span>
                </button>
                
                <button className="flex items-center text-gray-500">
                  <Bookmark size={20} />
                </button>
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={() => setStep('details')}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-nunito font-medium rounded-lg mr-3 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Back to Edit
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-nunito font-medium rounded-lg"
                disabled={!title || !promptText}
              >
                Create Prompt
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatePromptModal;
