import React, { useState } from 'react';
import { Search, Edit, MoreVertical, Send, Paperclip, Smile, ChevronLeft, MessageSquare } from 'lucide-react';
import { mockConversations } from '../data/mockData';

interface MessagesProps {
  isDarkMode: boolean;
}

const Messages: React.FC<MessagesProps> = ({ isDarkMode }) => {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [messageText, setMessageText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter conversations based on search query
  const filteredConversations = mockConversations.filter(
    conversation => 
      conversation.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conversation.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get the selected conversation details
  const currentConversation = mockConversations.find(
    conversation => conversation.id === selectedConversation
  );

  const handleSendMessage = () => {
    if (messageText.trim() === '') return;
    
    // In a real app, you would send this message to your backend
    console.log('Sending message:', messageText);
    
    // Clear the input field
    setMessageText('');
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 max-w-6xl">
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
        <div className="flex h-[calc(100vh-12rem)]">
          {/* Conversation list - hidden on mobile when a conversation is selected */}
          <div className={`w-full md:w-1/3 border-r border-gray-200 dark:border-gray-700 ${selectedConversation ? 'hidden md:block' : 'block'}`}>
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="font-nunito font-bold text-xl text-gray-900 dark:text-white mb-4">Messages</h2>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search messages..." 
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full text-gray-900 dark:text-white font-nunito focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
            
            <div className="overflow-y-auto h-[calc(100%-5rem)]">
              {filteredConversations.length === 0 ? (
                <div className="p-4 text-center text-gray-500 dark:text-gray-400 font-nunito">
                  No conversations found
                </div>
              ) : (
                filteredConversations.map(conversation => (
                  <div 
                    key={conversation.id}
                    className={`p-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer ${
                      selectedConversation === conversation.id ? 'bg-primary-50 dark:bg-primary-900/30' : ''
                    }`}
                    onClick={() => setSelectedConversation(conversation.id)}
                  >
                    <div className="flex items-start">
                      <img 
                        src={conversation.user.avatar} 
                        alt={conversation.user.name} 
                        className="w-12 h-12 rounded-full object-cover mr-3"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline">
                          <h3 className="font-nunito font-semibold text-gray-900 dark:text-white truncate">
                            {conversation.user.name}
                          </h3>
                          <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap ml-2">
                            {conversation.time}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 truncate mt-1">
                          {conversation.lastMessage}
                        </p>
                        {conversation.unread > 0 && (
                          <span className="inline-flex items-center justify-center w-5 h-5 bg-primary-600 text-white text-xs font-bold rounded-full mt-1">
                            {conversation.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <button className="w-full flex items-center justify-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-nunito font-medium rounded-lg">
                <Edit size={18} className="mr-2" />
                New Message
              </button>
            </div>
          </div>
          
          {/* Conversation detail */}
          <div className={`w-full md:w-2/3 flex flex-col ${selectedConversation ? 'block' : 'hidden md:block'}`}>
            {selectedConversation && currentConversation ? (
              <>
                {/* Conversation header */}
                <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center">
                  <button 
                    className="md:hidden mr-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setSelectedConversation(null)}
                  >
                    <ChevronLeft size={20} className="text-gray-600 dark:text-gray-300" />
                  </button>
                  
                  <img 
                    src={currentConversation.user.avatar} 
                    alt={currentConversation.user.name} 
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-nunito font-semibold text-gray-900 dark:text-white">
                      {currentConversation.user.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {currentConversation.user.isOnline ? 'Online' : 'Last seen ' + currentConversation.user.lastSeen}
                    </p>
                  </div>
                  
                  <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300">
                    <MoreVertical size={20} />
                  </button>
                </div>
                
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-850">
                  {currentConversation.messages.map((message, index) => (
                    <div 
                      key={index}
                      className={`mb-4 flex ${message.isSender ? 'justify-end' : 'justify-start'}`}
                    >
                      {!message.isSender && (
                        <img 
                          src={currentConversation.user.avatar} 
                          alt={currentConversation.user.name} 
                          className="w-8 h-8 rounded-full object-cover mr-2 self-end"
                        />
                      )}
                      
                      <div 
                        className={`max-w-[70%] p-3 rounded-lg ${
                          message.isSender 
                            ? 'bg-primary-600 text-white rounded-br-none' 
                            : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-bl-none border border-gray-200 dark:border-gray-600'
                        }`}
                      >
                        <p className="font-nunito">{message.text}</p>
                        <p className={`text-xs mt-1 text-right ${
                          message.isSender ? 'text-primary-100' : 'text-gray-500 dark:text-gray-400'
                        }`}>
                          {formatTime(message.timestamp)}
                        </p>
                      </div>
                      
                      {message.isSender && (
                        <img 
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" 
                          alt="You" 
                          className="w-8 h-8 rounded-full object-cover ml-2 self-end"
                        />
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Message input */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 mr-1">
                      <Paperclip size={20} />
                    </button>
                    
                    <input 
                      type="text" 
                      placeholder="Type a message..." 
                      className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full text-gray-900 dark:text-white font-nunito focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleSendMessage();
                        }
                      }}
                    />
                    
                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 ml-1">
                      <Smile size={20} />
                    </button>
                    
                    <button 
                      className="p-2 ml-2 bg-primary-600 hover:bg-primary-700 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={handleSendMessage}
                      disabled={messageText.trim() === ''}
                    >
                      <Send size={20} />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-850">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare size={32} className="text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-nunito font-bold text-xl text-gray-900 dark:text-white mb-2">Your Messages</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center max-w-sm mb-4">
                  Select a conversation or start a new one to chat with other ChatAndBuild users
                </p>
                <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-nunito font-medium rounded-lg flex items-center">
                  <Edit size={18} className="mr-2" />
                  New Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
