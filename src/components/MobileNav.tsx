import React from 'react';
import { Home, Compass, PlusCircle, Bookmark, User } from 'lucide-react';

interface MobileNavProps {
  isDarkMode: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ isDarkMode }) => {
  const navItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Compass, label: 'Explore', active: false },
    { icon: PlusCircle, label: 'Create', active: false },
    { icon: Bookmark, label: 'Saved', active: false },
    { icon: User, label: 'Profile', active: false },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 z-10">
      <div className="flex justify-around">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex flex-col items-center py-3 px-2 ${
              item.active
                ? 'text-primary-600 dark:text-primary-400'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            <item.icon className={`h-6 w-6 ${item.active ? 'text-primary-600 dark:text-primary-400' : ''}`} />
            <span className="text-xs mt-1 font-nunito">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
