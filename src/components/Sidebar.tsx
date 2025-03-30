import React from 'react';
import { Home, Compass, Bookmark, User, Settings, HelpCircle } from 'lucide-react';

interface SidebarProps {
  isDarkMode: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isDarkMode }) => {
  const navItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Compass, label: 'Explore', active: false },
    { icon: Bookmark, label: 'Saved', active: false },
    { icon: User, label: 'Profile', active: false },
    { icon: Settings, label: 'Settings', active: false },
    { icon: HelpCircle, label: 'Help', active: false },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-gray-200 dark:border-gray-800 h-screen sticky top-0 pt-16">
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-1">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center px-4 py-3 rounded-lg font-nunito font-medium transition duration-200 ${
                  item.active
                    ? 'bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                <item.icon className={`h-5 w-5 mr-3 ${item.active ? 'text-primary-600 dark:text-primary-400' : ''}`} />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-nunito font-medium py-2 px-4 rounded-lg transition duration-200">
          Create Prompt
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
