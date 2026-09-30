import React from 'react';
import { GitBranch, Users } from 'lucide-react';
import type { ActiveTab } from '../../types/navigation';

interface TabNavigationProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="flex p-1.5 bg-nav-bg border border-surface-border rounded-2xl mb-8 relative z-10 transition-colors">
      <button
        type="button"
        onClick={() => onTabChange('tree')}
        className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all text-center flex items-center justify-center space-x-2 cursor-pointer ${
          activeTab === 'tree'
            ? 'bg-linear-to-r from-primary to-primary-dark text-white shadow-md shadow-primary/25'
            : 'text-text-muted hover:text-text-main hover:bg-surface-hover/50'
        }`}
      >
        <GitBranch className="w-4 h-4" />
        <span>Decision Tree Aid</span>
      </button>
      <button
        type="button"
        onClick={() => onTabChange('scenarios')}
        className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all text-center flex items-center justify-center space-x-2 cursor-pointer ${
          activeTab === 'scenarios'
            ? 'bg-linear-to-r from-primary to-primary-dark text-white shadow-md shadow-primary/25'
            : 'text-text-muted hover:text-text-main hover:bg-surface-hover/50'
        }`}
      >
        <Users className="w-4 h-4" />
        <span>Scenario Exercises</span>
      </button>
    </div>
  );
};
