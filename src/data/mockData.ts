import { Post, Author, Platform } from '../types';

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
  }
];

export const mockPosts: Post[] = [
  {
    id: '1',
    author: mockAuthors[0],
    content: "Just built this amazing task management app using ChatAndBuild! The AI understood exactly what I needed and generated the perfect code. Check out the prompt I used:",
    promptPreview: "A React-based task management app with drag-and-drop functionality, local storage, and dark mode support.",
    promptFull: "# Task Management App with Drag-and-Drop\n\n## Requirements\nCreate a React-based task management application with the following features:\n- Task creation, editing, and deletion\n- Drag-and-drop functionality for task reordering and status changes\n- Task categorization (To Do, In Progress, Done)\n- Task priority levels (Low, Medium, High)\n- Due date assignment and reminders\n- Local storage persistence\n- Dark/light mode toggle\n- Responsive design for mobile and desktop",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    likes: 142,
    comments: 23,
    shares: 17,
    timeAgo: "2h ago",
    tags: ["react", "productivity", "frontend"]
  },
  {
    id: '2',
    author: mockAuthors[1],
    content: "Created this e-commerce dashboard in just 30 minutes with ChatAndBuild! The AI generated all the components and even added animations. Here's the prompt:",
    promptPreview: "A comprehensive dashboard with sales analytics, inventory tracking, and customer insights using React, Chart.js, and Tailwind CSS.",
    promptFull: "# E-commerce Analytics Dashboard\n\n## Requirements\nCreate a comprehensive e-commerce analytics dashboard with the following features:\n- Sales overview with daily, weekly, monthly views\n- Revenue metrics and comparisons to previous periods\n- Inventory tracking with low stock alerts\n- Customer demographics and behavior analysis\n- Order status tracking and management\n- Interactive charts and graphs for data visualization\n- Responsive design for all device sizes",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    likes: 231,
    comments: 42,
    shares: 38,
    timeAgo: "5h ago",
    tags: ["dashboard", "ecommerce", "analytics"]
  },
  {
    id: '3',
    author: mockAuthors[2],
    content: "This AI-powered recipe generator is a game-changer! Built it with ChatAndBuild in an afternoon. The prompt was simple but effective:",
    promptPreview: "A web app that generates recipes based on available ingredients, with filtering options for dietary restrictions and cuisine types.",
    promptFull: "# Recipe Generator with Ingredient Search\n\n## Requirements\nCreate a web application that helps users find recipes based on ingredients they already have:\n- Input field for users to add available ingredients\n- Recipe search algorithm that prioritizes recipes using the most available ingredients\n- Filters for dietary restrictions (vegetarian, vegan, gluten-free, etc.)\n- Filters for cuisine types (Italian, Mexican, Indian, etc.)\n- Detailed recipe view with ingredients, instructions, and nutritional information\n- Option to save favorite recipes\n- Responsive design for mobile and desktop",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    likes: 98,
    comments: 15,
    shares: 7,
    timeAgo: "1d ago",
    tags: ["food", "utility", "javascript"]
  },
  {
    id: '4',
    author: mockAuthors[3],
    content: "Just launched my portfolio website created with ChatAndBuild! The AI helped me design a unique layout and even suggested animations. Here's the prompt I used:",
    promptPreview: "A modern, interactive portfolio website with project showcases, skill visualization, and contact form using React, Three.js, and GSAP animations.",
    promptFull: "# Creative Developer Portfolio\n\n## Requirements\nCreate a modern, interactive portfolio website with the following features:\n- Unique and creative homepage with interactive elements\n- Project showcase with detailed case studies and live demos\n- Skills section with visual representation of proficiency levels\n- About me section with personal story and professional journey\n- Contact form with validation and submission functionality\n- Smooth page transitions and scroll animations\n- 3D elements using Three.js for visual interest\n- Responsive design with mobile-first approach",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    likes: 315,
    comments: 47,
    shares: 29,
    timeAgo: "2d ago",
    tags: ["portfolio", "threejs", "animation"]
  },
  {
    id: '5',
    author: mockAuthors[4],
    content: "Built this meditation app with ChatAndBuild in just a few hours! The AI even helped me implement the audio player functionality. Check out the prompt:",
    promptPreview: "A React-based meditation app with timer, guided sessions, progress tracking, and ambient sounds using Howler.js and Tailwind CSS.",
    promptFull: "# Mindfulness Meditation App\n\n## Requirements\nCreate a meditation and mindfulness app with the following features:\n- Timer for unguided meditation sessions with customizable duration\n- Library of guided meditation sessions for different purposes (sleep, anxiety, focus, etc.)\n- Ambient sound mixer with nature sounds and binaural beats\n- Daily streaks and meditation statistics\n- User profiles with meditation history and favorites\n- Reminders and scheduling functionality\n- Journal feature for recording thoughts after meditation\n- Responsive design with a calming aesthetic",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    likes: 187,
    comments: 31,
    shares: 14,
    timeAgo: "3d ago",
    tags: ["wellness", "audio", "react"]
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
