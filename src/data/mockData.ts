import { Post, Author, Platform } from '../types';
import { createPermalinkFromHash } from '../utils/hashGenerator';

// Mock authors
const mockAuthors: Author[] = [
  {
    id: '101',
    name: 'Sarah Johnson',
    username: 'sarahdev',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    verified: true
  },
  {
    id: '102',
    name: 'Alex Chen',
    username: 'alexcodes',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    verified: true
  },
  {
    id: '103',
    name: 'Maya Patel',
    username: 'mayatech',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    verified: false
  },
  {
    id: '104',
    name: 'James Wilson',
    username: 'jameswdev',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    verified: true
  },
  {
    id: '105',
    name: 'Olivia Kim',
    username: 'oliviadev',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    verified: false
  },
  {
    id: '106',
    name: 'Michael Rodriguez',
    username: 'michaelr',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    verified: true
  },
  {
    id: '107',
    name: 'Emma Thompson',
    username: 'emmadev',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    verified: true
  }
];

// Generate random hashes for each post
const postHashes = [
  'a7bX9cD3eF',
  'g5hY2jK8lM',
  'n4pQ6rS1tU',
  'v3wX7yZ9aB',
  'c2dE8fG4hI',
  'j9kL1mN3oP',
  'q7rS5tU2vW',
  'x4yZ8aB6cD',
  'e3fG7hI9jK',
  'l1mN5oP2qR'
];

export const mockPosts: Post[] = [
  {
    id: postHashes[0],
    author: mockAuthors[0],
    content: "Just built this amazing task management app using ChatAndBuild! The AI understood exactly what I needed and generated the perfect code. Check out the prompt I used:",
    promptPreview: "A React-based task management app with drag-and-drop functionality, local storage, and dark mode support.",
    promptFull: "# Task Management App with Drag-and-Drop\n\n## Requirements\nCreate a React-based task management application with the following features:\n- Task creation, editing, and deletion\n- Drag-and-drop functionality for task reordering and status changes\n- Task categorization (To Do, In Progress, Done)\n- Task priority levels (Low, Medium, High)\n- Due date assignment and reminders\n- Local storage persistence\n- Dark/light mode toggle\n- Responsive design for mobile and desktop",
    promptTitle: "Task Management App with Drag-and-Drop",
    promptDescription: "A comprehensive prompt for building a React task management app with drag-and-drop functionality and modern features.",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    likes: 142,
    comments: 23,
    shares: 17,
    timeAgo: "2h ago",
    tags: ["react", "productivity", "frontend"],
    permalink: createPermalinkFromHash(postHashes[0]),
    demoUrl: "https://chatandbuild.com/demo/task-manager"
  },
  {
    id: postHashes[1],
    author: mockAuthors[1],
    content: "Created this e-commerce dashboard in just 30 minutes with ChatAndBuild! The AI generated all the components and even added animations. Here's the prompt:",
    promptPreview: "A comprehensive dashboard with sales analytics, inventory tracking, and customer insights using React, Chart.js, and Tailwind CSS.",
    promptFull: "# E-commerce Analytics Dashboard\n\n## Requirements\nCreate a comprehensive e-commerce analytics dashboard with the following features:\n- Sales overview with daily, weekly, monthly views\n- Revenue metrics and comparisons to previous periods\n- Inventory tracking with low stock alerts\n- Customer demographics and behavior analysis\n- Order status tracking and management\n- Interactive charts and graphs for data visualization\n- Responsive design for all device sizes",
    promptTitle: "E-commerce Analytics Dashboard",
    promptDescription: "A detailed prompt for creating a comprehensive e-commerce analytics dashboard with multiple data visualizations.",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    likes: 231,
    comments: 42,
    shares: 38,
    timeAgo: "5h ago",
    tags: ["dashboard", "ecommerce", "analytics"],
    permalink: createPermalinkFromHash(postHashes[1]),
    demoUrl: "https://chatandbuild.com/demo/ecommerce-dashboard"
  },
  {
    id: postHashes[2],
    author: mockAuthors[2],
    content: "This AI-powered recipe generator is a game-changer! Built it with ChatAndBuild in an afternoon. The prompt was simple but effective:",
    promptPreview: "A web app that generates recipes based on available ingredients, with filtering options for dietary restrictions and cuisine types.",
    promptFull: "# Recipe Generator with Ingredient Search\n\n## Requirements\nCreate a web application that helps users find recipes based on ingredients they already have:\n- Input field for users to add available ingredients\n- Recipe search algorithm that prioritizes recipes using the most available ingredients\n- Filters for dietary restrictions (vegetarian, vegan, gluten-free, etc.)\n- Filters for cuisine types (Italian, Mexican, Indian, etc.)\n- Detailed recipe view with ingredients, instructions, and nutritional information\n- Option to save favorite recipes\n- Responsive design for mobile and desktop",
    promptTitle: "Recipe Generator with Ingredient Search",
    promptDescription: "A prompt for building a web app that helps users find recipes based on ingredients they already have.",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    likes: 98,
    comments: 15,
    shares: 7,
    timeAgo: "1d ago",
    tags: ["food", "utility", "javascript"],
    permalink: createPermalinkFromHash(postHashes[2]),
    demoUrl: "https://chatandbuild.com/demo/recipe-finder"
  },
  {
    id: postHashes[3],
    author: mockAuthors[3],
    content: "Just launched my portfolio website created with ChatAndBuild! The AI helped me design a unique layout and even suggested animations. Here's the prompt I used:",
    promptPreview: "A modern, interactive portfolio website with project showcases, skill visualization, and contact form using React, Three.js, and GSAP animations.",
    promptFull: "# Creative Developer Portfolio\n\n## Requirements\nCreate a modern, interactive portfolio website with the following features:\n- Unique and creative homepage with interactive elements\n- Project showcase with detailed case studies and live demos\n- Skills section with visual representation of proficiency levels\n- About me section with personal story and professional journey\n- Contact form with validation and submission functionality\n- Smooth page transitions and scroll animations\n- 3D elements using Three.js for visual interest\n- Responsive design with mobile-first approach",
    promptTitle: "Creative Developer Portfolio",
    promptDescription: "A prompt for creating a modern, interactive portfolio website with unique design elements and animations.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    likes: 315,
    comments: 47,
    shares: 29,
    timeAgo: "2d ago",
    tags: ["portfolio", "threejs", "animation"],
    permalink: createPermalinkFromHash(postHashes[3]),
    demoUrl: "https://chatandbuild.com/demo/portfolio-showcase"
  },
  {
    id: postHashes[4],
    author: mockAuthors[4],
    content: "Built this meditation app with ChatAndBuild in just a few hours! The AI even helped me implement the audio player functionality. Check out the prompt:",
    promptPreview: "A React-based meditation app with timer, guided sessions, progress tracking, and ambient sounds using Howler.js and Tailwind CSS.",
    promptFull: "# Mindfulness Meditation App\n\n## Requirements\nCreate a meditation and mindfulness app with the following features:\n- Timer for unguided meditation sessions with customizable duration\n- Library of guided meditation sessions for different purposes (sleep, anxiety, focus, etc.)\n- Ambient sound mixer with nature sounds and binaural beats\n- Daily streaks and meditation statistics\n- User profiles with meditation history and favorites\n- Reminders and scheduling functionality\n- Journal feature for recording thoughts after meditation\n- Responsive design with a calming aesthetic",
    promptTitle: "Mindfulness Meditation App",
    promptDescription: "A prompt for building a meditation and mindfulness app with timers, guided sessions, and ambient sounds.",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    likes: 187,
    comments: 31,
    shares: 14,
    timeAgo: "3d ago",
    tags: ["wellness", "audio", "react"],
    permalink: createPermalinkFromHash(postHashes[4]),
    demoUrl: "https://chatandbuild.com/demo/meditation-app"
  },
  {
    id: postHashes[5],
    author: mockAuthors[5],
    content: "Just created this AI-powered content generator that helps with blog posts, social media, and more. The prompt was comprehensive:",
    promptPreview: "A content generation tool with templates for various formats, tone adjustment, and SEO optimization using React, OpenAI API, and Firebase.",
    promptFull: "# AI Content Generator\n\n## Requirements\nCreate a web application for AI-powered content generation with the following features:\n- Multiple content templates (blog posts, social media, emails, product descriptions)\n- Tone and style adjustment options (professional, casual, persuasive, etc.)\n- Length and format customization\n- SEO optimization suggestions\n- Grammar and readability checking\n- Content history and saved templates\n- Export options (Markdown, HTML, plain text)\n- User accounts with content library",
    promptTitle: "AI Content Generator",
    promptDescription: "A prompt for building a versatile AI-powered content generation tool with multiple templates and customization options.",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    likes: 276,
    comments: 53,
    shares: 41,
    timeAgo: "4d ago",
    tags: ["ai", "content", "productivity"],
    permalink: createPermalinkFromHash(postHashes[5]),
    demoUrl: "https://chatandbuild.com/demo/content-generator"
  },
  {
    id: postHashes[6],
    author: mockAuthors[6],
    content: "Created this interactive data visualization dashboard that makes complex data easy to understand. The prompt helped me implement all the charts:",
    promptPreview: "A data visualization dashboard with interactive charts, filters, and export options using D3.js, React, and CSV/JSON data import.",
    promptFull: "# Interactive Data Visualization Dashboard\n\n## Requirements\nCreate a data visualization dashboard with the following features:\n- Multiple chart types (bar, line, pie, scatter, heatmap)\n- Interactive elements (tooltips, zooming, panning)\n- Data filtering and sorting options\n- Responsive layout that adapts to different screen sizes\n- Data import from CSV, JSON, or API\n- Export charts as images or data as CSV\n- Dark/light mode toggle\n- Customizable color schemes and chart options",
    promptTitle: "Interactive Data Visualization Dashboard",
    promptDescription: "A prompt for building a flexible data visualization dashboard with multiple chart types and interactive features.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    likes: 198,
    comments: 29,
    shares: 22,
    timeAgo: "5d ago",
    tags: ["data", "visualization", "d3js"],
    permalink: createPermalinkFromHash(postHashes[6]),
    demoUrl: "https://chatandbuild.com/demo/data-dashboard"
  },
  {
    id: postHashes[7],
    author: mockAuthors[0],
    content: "Built this language learning app with spaced repetition and gamification elements. The prompt helped me implement the entire learning algorithm:",
    promptPreview: "A language learning app with spaced repetition, flashcards, progress tracking, and gamification using React Native and Firebase.",
    promptFull: "# Language Learning App with Spaced Repetition\n\n## Requirements\nCreate a language learning application with the following features:\n- Spaced repetition algorithm for optimal memorization\n- Flashcard system with text, images, and audio\n- Multiple learning modes (reading, writing, listening, speaking)\n- Progress tracking and statistics\n- Gamification elements (streaks, points, achievements)\n- Offline mode with sync capability\n- Multiple language support\n- Customizable learning paths based on user goals",
    promptTitle: "Language Learning App with Spaced Repetition",
    promptDescription: "A prompt for building an effective language learning app with spaced repetition algorithm and gamification elements.",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    likes: 245,
    comments: 37,
    shares: 19,
    timeAgo: "6d ago",
    tags: ["education", "language", "mobile"],
    permalink: createPermalinkFromHash(postHashes[7]),
    demoUrl: "https://chatandbuild.com/demo/language-app"
  },
  {
    id: postHashes[8],
    author: mockAuthors[1],
    content: "Just launched this project management tool with Kanban boards, time tracking, and team collaboration features. The prompt was detailed and helped me build it quickly:",
    promptPreview: "A project management application with Kanban boards, time tracking, team collaboration, and reporting using React, Redux, and Firebase.",
    promptFull: "# Project Management Tool with Kanban\n\n## Requirements\nCreate a comprehensive project management application with the following features:\n- Kanban board with customizable columns and card details\n- Task assignment, due dates, and priority levels\n- Time tracking and reporting\n- Team collaboration with comments and notifications\n- File attachments and document sharing\n- Sprint planning and backlog management\n- Dashboard with project metrics and charts\n- User roles and permissions system",
    promptTitle: "Project Management Tool with Kanban",
    promptDescription: "A prompt for building a full-featured project management application with Kanban boards and team collaboration features.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    likes: 312,
    comments: 58,
    shares: 47,
    timeAgo: "1w ago",
    tags: ["productivity", "management", "collaboration"],
    permalink: createPermalinkFromHash(postHashes[8]),
    demoUrl: "https://chatandbuild.com/demo/project-manager"
  },
  {
    id: postHashes[9],
    author: mockAuthors[2],
    content: "Created this real-time multiplayer quiz game that's perfect for virtual team building. The prompt helped me implement all the game mechanics:",
    promptPreview: "A real-time multiplayer quiz game with custom categories, leaderboards, and team modes using React, Socket.io, and Express.",
    promptFull: "# Real-time Multiplayer Quiz Game\n\n## Requirements\nCreate an interactive multiplayer quiz game with the following features:\n- Real-time gameplay with multiple participants\n- Custom quiz categories and difficulty levels\n- Question timer with visual countdown\n- Live leaderboard updates\n- Team mode and individual mode\n- Quiz creator for custom questions\n- Game lobby with room codes\n- Results screen with statistics and correct answers",
    promptTitle: "Real-time Multiplayer Quiz Game",
    promptDescription: "A prompt for building an engaging real-time multiplayer quiz game with custom categories and team modes.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1511213966740-24d719a0a814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    likes: 287,
    comments: 43,
    shares: 31,
    timeAgo: "2w ago",
    tags: ["game", "multiplayer", "socketio"],
    permalink: createPermalinkFromHash(postHashes[9]),
    demoUrl: "https://chatandbuild.com/demo/quiz-game"
  }
];

export const platforms: { id: string; name: string; icon: string; description: string; url: string }[] = [
  {
    id: "chatandbuild",
    name: "ChatAndBuild",
    icon: "code",
    description: "Use this prompt directly in ChatAndBuild",
    url: "https://chatandbuild.com/prompts/"
  },
  {
    id: "windsurf",
    name: "Windsurf",
    icon: "wind",
    description: "Copy and use in Windsurf AI",
    url: "https://windsurf.ai/"
  },
  {
    id: "cursor",
    name: "Cursor",
    icon: "edit-3",
    description: "Copy and use in Cursor editor",
    url: "https://cursor.sh/"
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    icon: "message-square",
    description: "Copy and use in ChatGPT",
    url: "https://chat.openai.com/"
  }
];

export const promptContent = `
# Task Management App with Drag-and-Drop

## Requirements
Create a React-based task management application with the following features:
- Task creation, editing, and deletion
- Drag-and-drop functionality for task reordering and status changes
- Task categorization (To Do, In Progress, Done)
- Task priority levels (Low, Medium, High)
- Due date assignment and reminders
- Local storage persistence
- Dark/light mode toggle
- Responsive design for mobile and desktop

## Technical Specifications
- Use React with TypeScript
- Implement drag-and-drop with react-beautiful-dnd
- Style with Tailwind CSS
- Use date-fns for date manipulation
- Store data in localStorage
- Add subtle animations for user interactions

## UI Components
1. Header with app title and theme toggle
2. Task input form with title, description, priority, and due date
3. Board view with three columns (To Do, In Progress, Done)
4. Task cards with visual indicators for priority
5. Edit/Delete buttons for each task
6. Responsive layout that works on mobile

## Additional Notes
- Ensure accessibility compliance
- Add subtle sound effects for task completion
- Include a simple onboarding guide for first-time users
`;

// Add trending categories data
export const trendingCategories = [
  { id: 'development', name: 'Development', count: 1243, icon: 'code' },
  { id: 'design', name: 'Design', count: 982, icon: 'pen-tool' },
  { id: 'productivity', name: 'Productivity', count: 756, icon: 'clock' },
  { id: 'ai', name: 'AI & Machine Learning', count: 621, icon: 'cpu' },
  { id: 'mobile', name: 'Mobile Apps', count: 543, icon: 'smartphone' }
];

// Add trending prompts data
export const trendingPrompts = [
  {
    id: 'tp1',
    title: 'Task Management App',
    description: 'React-based task manager with drag-and-drop',
    author: mockAuthors[0],
    likes: 1243,
    price: 4.99,
    tags: ['react', 'productivity']
  },
  {
    id: 'tp2',
    title: 'Portfolio Website',
    description: 'Interactive developer portfolio with 3D elements',
    author: mockAuthors[3],
    likes: 982,
    price: 9.99,
    tags: ['portfolio', 'threejs']
  },
  {
    id: 'tp3',
    title: 'E-commerce Dashboard',
    description: 'Analytics dashboard for online stores',
    author: mockAuthors[1],
    likes: 756,
    price: 7.99,
    tags: ['dashboard', 'ecommerce']
  },
  {
    id: 'tp4',
    title: 'AI Content Generator',
    description: 'Multi-purpose content creation tool',
    author: mockAuthors[5],
    likes: 621,
    price: 12.99,
    tags: ['ai', 'content']
  },
  {
    id: 'tp5',
    title: 'Meditation App',
    description: 'Mindfulness app with guided sessions',
    author: mockAuthors[4],
    likes: 543,
    price: 5.99,
    tags: ['wellness', 'audio']
  }
];
