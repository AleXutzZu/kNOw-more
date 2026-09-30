import React from 'react';
import { Outlet } from 'react-router-dom';
import { TabNavigation } from '../../components/common/TabNavigation';

export const ScenariosLayout: React.FC = () => {
  return (
    <div className="w-full max-w-3xl bg-card-bg backdrop-blur-xl border border-card-border rounded-3xl shadow-xl p-6 sm:p-10 relative overflow-hidden transition-all duration-300">
      {/* Ambient Glow Effects */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-sky/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-cyan/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <TabNavigation />
        <Outlet />
      </div>
    </div>
  );
};

export default ScenariosLayout;
