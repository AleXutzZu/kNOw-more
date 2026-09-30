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
        className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all text-center flex items-center justify-center space-x-2 ${
          activeTab === 'tree'
            ? 'bg-linear-to-r from-rose-500 to-amber-500 text-white shadow-lg'
            : 'text-slate-400 hover:text-white'
        }`}
      >
        <GitBranch className="w-4 h-4" />
        <span>Decision Tree Engine</span>
      </button>
      <button
        type="button"
        onClick={() => onTabChange('scenarios')}
        className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all text-center flex items-center justify-center space-x-2 ${
          activeTab === 'scenarios'
            ? 'bg-linear-to-r from-rose-500 to-amber-500 text-white shadow-lg'
            : 'text-slate-400 hover:text-white'
        }`}
      >
        <Users className="w-4 h-4" />
        <span>Scenario Role Play</span>
      </button>
    </div>
  );
};
