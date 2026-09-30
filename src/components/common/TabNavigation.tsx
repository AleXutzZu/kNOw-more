import React from 'react';
import { GitBranch, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const TabNavigation: React.FC = () => {
  return (
    <div className="flex p-1.5 bg-nav-bg border border-surface-border rounded-2xl mb-8 relative z-10 transition-colors">
      <NavLink
        to="/decision-tree"
        className={({ isActive }) =>
          `flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all text-center flex items-center justify-center space-x-2 cursor-pointer ${
            isActive
              ? 'bg-linear-to-r from-primary to-primary-dark text-white shadow-md shadow-primary/25'
              : 'text-text-muted hover:text-text-main hover:bg-surface-hover/50'
          }`
        }
      >
        <GitBranch className="w-4 h-4" />
        <span>Decision Tree Assistant</span>
      </NavLink>
      <NavLink
        to="/scenarios"
        className={({ isActive }) =>
          `flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all text-center flex items-center justify-center space-x-2 cursor-pointer ${
            isActive
              ? 'bg-linear-to-r from-primary to-primary-dark text-white shadow-md shadow-primary/25'
              : 'text-text-muted hover:text-text-main hover:bg-surface-hover/50'
          }`
        }
      >
        <Users className="w-4 h-4" />
        <span>Scenario exercises</span>
      </NavLink>
    </div>
  );
};
