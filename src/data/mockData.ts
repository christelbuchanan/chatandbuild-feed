import { Post, Author, Platform } from '../types';

// Mock authors
export const mockAuthors: Author[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    username: 'sarahj',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    verified: true
  },
  {
    id: '2',
    name: 'Alex Chen',
    username: 'alexc',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    verified: true
  },
  {
    id: '3',
    name: 'Michael Rodriguez',
    username: 'mrodriguez',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    verified: false
  },
  {
    id: '4',
    name: 'Emily Wilson',
    username: 'emilyw',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    verified: true
  },
  {
    id: '5',
    name: 'David Kim',
    username: 'davidk',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    verified: false
  }
];

// Mock posts
export const mockPosts: Post[] = [
  {
    id: '1',
    author: mockAuthors[0],
    content: 'Just created a new prompt for generating a complete task management app with React and Firebase! 🚀 #webdev #react',
    promptTitle: 'Task Management App Generator',
    promptDescription: 'Creates a full React task management app with Firebase backend, authentication, and real-time updates.',
    promptPreview: 'Create a modern task management app using React and Firebase with the following features: user authentication, task creation, task categories, due dates, priority levels, and real-time updates.',
    promptId: 'task-app-123',
    price: 15,
    likes: 128,
    comments: 32,
    shares: 24,
    timeAgo: '2h',
    tags: ['react', 'firebase', 'productivity'],
    permalink: 'chatandbuild.com/chat/a1b2c3d4',
    demoUrl: 'https://example.com/demo/task-app'
  },
  {
    id: '2',
    author: mockAuthors[1],
    content: 'I built this dashboard UI in minutes using my new prompt! Check it out and let me know what you think. 💯',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    promptTitle: 'Dashboard UI Generator',
    promptDescription: 'Creates a customizable admin dashboard with charts, tables, and responsive design.',
    promptPreview: 'Design a modern admin dashboard with the following components: sidebar navigation, header with user profile, analytics overview with charts, data tables, and card-based widgets.',
    promptId: 'dashboard-ui-456',
    price: 20,
    likes: 256,
    comments: 48,
    shares: 64,
    timeAgo: '5h',
    tags: ['dashboard', 'ui', 'design'],
    permalink: 'chatandbuild.com/chat/e5f6g7h8',
    demoUrl: 'https://example.com/demo/dashboard'
  },
  {
    id: '3',
    author: mockAuthors[2],
    content: 'Created a prompt that generates a complete e-commerce site with product catalog, shopping cart, and checkout! 🛒',
    promptTitle: 'E-commerce Website Generator',
    promptDescription: 'Builds a full e-commerce website with product listings, cart functionality, and payment processing.',
    promptPreview: 'Create an e-commerce website with product catalog, categories, search functionality, shopping cart, user accounts, and checkout process with payment integration.',
    promptId: 'ecommerce-789',
    price: 25,
    likes: 192,
    comments: 56,
    shares: 42,
    timeAgo: '1d',
    tags: ['ecommerce', 'webdev', 'shopping'],
    permalink: 'chatandbuild.com/chat/i9j0k1l2',
    demoUrl: 'https://example.com/demo/ecommerce'
  },
  {
    id: '4',
    author: mockAuthors[3],
    content: 'My new portfolio website generator prompt is now available! Perfect for developers, designers, and creatives. 🎨',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    promptTitle: 'Portfolio Website Generator',
    promptDescription: 'Creates a customizable portfolio website with project showcase, about section, and contact form.',
    promptPreview: 'Design a professional portfolio website with a hero section, about me page, project showcase with filtering options, skills section, testimonials, and contact form.',
    promptId: 'portfolio-012',
    price: 18,
    likes: 320,
    comments: 75,
    shares: 96,
    timeAgo: '2d',
    tags: ['portfolio', 'design', 'frontend'],
    permalink: 'chatandbuild.com/chat/m3n4o5p6',
    demoUrl: 'https://example.com/demo/portfolio'
  },
  {
    id: '5',
    author: mockAuthors[4],
    content: 'Just released a prompt for generating a social media dashboard with analytics tracking and post scheduling! 📊',
    promptTitle: 'Social Media Dashboard',
    promptDescription: 'Creates a dashboard for managing social media accounts, tracking analytics, and scheduling posts.',
    promptPreview: 'Build a social media management dashboard with account connections, analytics overview, content calendar, post scheduling, and performance metrics for multiple platforms.',
    promptId: 'social-dash-345',
    price: 22,
    likes: 175,
    comments: 38,
    shares: 29,
    timeAgo: '3d',
    tags: ['social', 'analytics', 'dashboard'],
    permalink: 'chatandbuild.com/chat/q7r8s9t0',
    demoUrl: 'https://example.com/demo/social-dashboard'
  }
];

// Mock conversations for Messages component
export interface Message {
  text: string;
  timestamp: string;
  isSender: boolean;
}

export interface Conversation {
  id: string;
  user: {
    name: string;
    avatar: string;
    isOnline: boolean;
    lastSeen?: string;
  };
  lastMessage: string;
  time: string;
  unread: number;
  messages: Message[];
}

export const mockConversations: Conversation[] = [
  {
    id: 'conv1',
    user: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      isOnline: true
    },
    lastMessage: 'Thanks for sharing your prompt! It works great.',
    time: '10:42 AM',
    unread: 2,
    messages: [
      {
        text: 'Hey, I saw your task management app prompt. Looks interesting!',
        timestamp: '2023-06-15T10:30:00',
        isSender: false
      },
      {
        text: 'Thanks! I spent a lot of time refining it.',
        timestamp: '2023-06-15T10:32:00',
        isSender: true
      },
      {
        text: 'Would you mind sharing how you implemented the Firebase integration?',
        timestamp: '2023-06-15T10:35:00',
        isSender: false
      },
      {
        text: 'Not at all! I used Firebase Auth for user management and Firestore for the database. The prompt includes all the configuration steps.',
        timestamp: '2023-06-15T10:38:00',
        isSender: true
      },
      {
        text: 'Thanks for sharing your prompt! It works great.',
        timestamp: '2023-06-15T10:42:00',
        isSender: false
      }
    ]
  },
  {
    id: 'conv2',
    user: {
      name: 'Alex Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      isOnline: true
    },
    lastMessage: 'I just purchased your dashboard UI generator!',
    time: '9:15 AM',
    unread: 0,
    messages: [
      {
        text: "Hello! I'm interested in your dashboard UI generator prompt.",
        timestamp: '2023-06-15T09:05:00',
        isSender: false
      },
      {
        text: "Hi Alex! Thanks for your interest. It's one of my most popular prompts.",
        timestamp: '2023-06-15T09:07:00',
        isSender: true
      },
      {
        text: 'Does it include dark mode support?',
        timestamp: '2023-06-15T09:10:00',
        isSender: false
      },
      {
        text: 'Yes, it has both light and dark mode with smooth transitions!',
        timestamp: '2023-06-15T09:12:00',
        isSender: true
      },
      {
        text: 'I just purchased your dashboard UI generator!',
        timestamp: '2023-06-15T09:15:00',
        isSender: false
      }
    ]
  },
  {
    id: 'conv3',
    user: {
      name: 'Emily Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      isOnline: false,
      lastSeen: '2 hours ago'
    },
    lastMessage: 'Could you help me customize the portfolio colors?',
    time: 'Yesterday',
    unread: 0,
    messages: [
      {
        text: 'Hi there! I bought your portfolio generator yesterday.',
        timestamp: '2023-06-14T14:20:00',
        isSender: false
      },
      {
        text: "That's great! How are you finding it so far?",
        timestamp: '2023-06-14T14:25:00',
        isSender: true
      },
      {
        text: "It's amazing! I've already got most of my projects set up.",
        timestamp: '2023-06-14T14:30:00',
        isSender: false
      },
      {
        text: 'Glad to hear that! Let me know if you need any help.',
        timestamp: '2023-06-14T14:35:00',
        isSender: true
      },
      {
        text: 'Could you help me customize the portfolio colors?',
        timestamp: '2023-06-14T16:45:00',
        isSender: false
      }
    ]
  },
  {
    id: 'conv4',
    user: {
      name: 'Michael Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      isOnline: false,
      lastSeen: '3 hours ago'
    },
    lastMessage: 'The e-commerce prompt is fantastic! Just what I needed.',
    time: 'Yesterday',
    unread: 0,
    messages: [
      {
        text: "Hey, I'm looking for an e-commerce solution. Is your prompt suitable for a small clothing store?",
        timestamp: '2023-06-14T11:05:00',
        isSender: false
      },
      {
        text: "Absolutely! It's designed to be scalable for businesses of all sizes.",
        timestamp: '2023-06-14T11:10:00',
        isSender: true
      },
      {
        text: 'Great! Does it include inventory management?',
        timestamp: '2023-06-14T11:15:00',
        isSender: false
      },
      {
        text: 'Yes, it has full inventory tracking, low stock alerts, and product variants.',
        timestamp: '2023-06-14T11:20:00',
        isSender: true
      },
      {
        text: 'The e-commerce prompt is fantastic! Just what I needed.',
        timestamp: '2023-06-14T18:30:00',
        isSender: false
      }
    ]
  },
  {
    id: 'conv5',
    user: {
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      isOnline: true
    },
    lastMessage: 'Do you have any prompts for building a blog platform?',
    time: '2 days ago',
    unread: 0,
    messages: [
      {
        text: "Hello! I'm new to ChatAndBuild.",
        timestamp: '2023-06-13T13:40:00',
        isSender: false
      },
      {
        text: 'Welcome, David! How can I help you today?',
        timestamp: '2023-06-13T13:45:00',
        isSender: true
      },
      {
        text: "I'm looking for prompts to help me build web applications faster.",
        timestamp: '2023-06-13T13:50:00',
        isSender: false
      },
      {
        text: "You've come to the right place! I have several prompts for different types of applications. What kind of project are you working on?",
        timestamp: '2023-06-13T13:55:00',
        isSender: true
      },
      {
        text: 'Do you have any prompts for building a blog platform?',
        timestamp: '2023-06-13T14:00:00',
        isSender: false
      }
    ]
  }
];

// Available platforms
export const availablePlatforms: Platform[] = [
  'chatandbuild',
  'windsurf',
  'cursor',
  'chatgpt'
];
