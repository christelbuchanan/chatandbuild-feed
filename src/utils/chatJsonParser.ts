/**
 * Utility functions for parsing chat.json files from ChatAndBuild
 */

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: string;
}

interface ChatJson {
  messages: ChatMessage[];
  metadata?: {
    title?: string;
    created_at?: string;
    model?: string;
    [key: string]: any;
  };
}

/**
 * Extracts a potential title from the chat
 * @param chatJson The parsed chat.json object
 * @returns A potential title string or null if none found
 */
export const extractTitle = (chatJson: ChatJson): string | null => {
  // Try to get title from metadata first
  if (chatJson.metadata?.title) {
    return chatJson.metadata.title;
  }

  // Look for the first short user message that might be a title
  const userMessages = chatJson.messages.filter(msg => 
    msg.role === 'user' && msg.content.length < 100
  );
  
  if (userMessages.length > 0) {
    return userMessages[0].content;
  }

  return null;
};

/**
 * Extracts the main prompt content from the chat
 * @param chatJson The parsed chat.json object
 * @returns The main prompt text or null if none found
 */
export const extractPromptText = (chatJson: ChatJson): string | null => {
  // Look for substantial user messages that might contain a prompt
  const promptCandidates = chatJson.messages
    .filter(msg => 
      msg.role === 'user' && 
      msg.content.length > 200 &&
      (
        msg.content.includes('Create') || 
        msg.content.includes('Build') || 
        msg.content.includes('Develop') ||
        msg.content.includes('Generate') ||
        msg.content.includes('Make')
      )
    )
    .sort((a, b) => b.content.length - a.content.length);
  
  if (promptCandidates.length > 0) {
    return promptCandidates[0].content;
  }

  // If no clear prompt is found, use the longest user message
  const longestUserMessage = chatJson.messages
    .filter(msg => msg.role === 'user')
    .sort((a, b) => b.content.length - a.content.length)[0];
  
  return longestUserMessage?.content || null;
};

/**
 * Extracts a short description from the prompt text
 * @param promptText The full prompt text
 * @returns A short description
 */
export const extractDescription = (promptText: string): string => {
  if (!promptText) return '';
  
  // Try to get the first paragraph or sentence
  const firstParagraph = promptText.split('\n')[0];
  
  // If the first paragraph is too long, truncate it
  if (firstParagraph.length > 150) {
    return firstParagraph.substring(0, 147) + '...';
  }
  
  return firstParagraph;
};

/**
 * Extracts potential tags from the chat content
 * @param chatJson The parsed chat.json object
 * @returns An array of potential tags
 */
export const extractTags = (chatJson: ChatJson): string[] => {
  // Common tech terms that might be relevant as tags
  const techTerms = [
    'React', 'JavaScript', 'TypeScript', 'Node.js', 'Vue', 'Angular',
    'CSS', 'HTML', 'Tailwind', 'Bootstrap', 'API', 'Frontend', 'Backend',
    'Full-stack', 'Mobile', 'Web', 'Database', 'SQL', 'NoSQL', 'MongoDB',
    'Firebase', 'AWS', 'Azure', 'UI', 'UX', 'Design', 'Animation',
    'Game', 'App', 'Dashboard', 'E-commerce', 'Social', 'Chat', 'AI',
    'Machine Learning', 'Analytics', 'Visualization', 'Chart', 'Graph'
  ];
  
  // Combine all message content to search for tech terms
  const allContent = chatJson.messages
    .map(msg => msg.content)
    .join(' ');
  
  // Find matches and convert to lowercase for consistency
  const extractedTags = techTerms
    .filter(term => 
      new RegExp(`\\b${term}\\b`, 'i').test(allContent)
    )
    .map(tag => tag.toLowerCase());
  
  // Deduplicate and return
  return [...new Set(extractedTags)];
};

/**
 * Parses a chat.json file and extracts relevant information
 * @param jsonString The JSON string from the chat.json file
 * @returns An object with extracted information or null if parsing fails
 */
export const parseChatJson = (jsonString: string): {
  title: string;
  promptText: string;
  description: string;
  tags: string[];
} | null => {
  try {
    const chatJson = JSON.parse(jsonString) as ChatJson;
    
    if (!chatJson.messages || !Array.isArray(chatJson.messages)) {
      throw new Error('Invalid chat.json format: messages array not found');
    }
    
    const promptText = extractPromptText(chatJson) || '';
    
    return {
      title: extractTitle(chatJson) || 'Untitled Prompt',
      promptText,
      description: extractDescription(promptText),
      tags: extractTags(chatJson)
    };
  } catch (error) {
    console.error('Error parsing chat.json:', error);
    return null;
  }
};
