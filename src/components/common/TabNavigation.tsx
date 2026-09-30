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
    <div className="flex p-1 bg-white/5 border border-white/10 rounded-2xl mb-8 relative z-10">
      <button
        type="button"
        onClick={() => onTabChange('tree')}
        className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all text-center flex items-center justify-center space-x-2 cursor-pointer ${
          activeTab === 'tree'
            ? 'bg-linear-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30'
            : 'text-white/60 hover:text-white hover:bg-white/5'
        }`}
      >
        <GitBranch className="w-4 h-4" />
        <span>Decision Tree Engine</span>
      </button>
      <button
        type="button"
        onClick={() => onTabChange('scenarios')}
        className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all text-center flex items-center justify-center space-x-2 cursor-pointer ${
          activeTab === 'scenarios'
            ? 'bg-linear-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30'
            : 'text-white/60 hover:text-white hover:bg-white/5'
        }`}
      >
        <Users className="w-4 h-4" />
        <span>Scenario Role Play</span>
      </button>
    </div>
  );
};
