export interface Author {
  id: string;
  name: string;
  username: string;
  avatar: string;
  verified: boolean;
}

export interface Post {
  id: string;
  author: Author;
  content: string;
  promptPreview?: string;
  promptFull?: string;
  promptTitle?: string;
  promptDescription?: string;
  promptId?: string;
  price?: number;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timeAgo: string;
  tags?: string[];
  permalink?: string;
  demoUrl?: string;
}

export type Platform = 'chatandbuild' | 'windsurf' | 'cursor' | 'chatgpt';

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface Conversation {
  id: string;
  participants: string[];
  lastMessage: Message;
  unreadCount: number;
}
