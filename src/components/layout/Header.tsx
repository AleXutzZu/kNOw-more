import React from 'react';
import { Compass } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="w-full py-6 px-6 md:px-12 border-b border-white/10 flex items-center justify-between backdrop-blur-md bg-slate-900/60 sticky top-0 z-50">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-rose-500 to-amber-500 flex items-center justify-center shadow-lg shadow-rose-500/20">
          <Compass className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-white flex items-center space-x-2">
            <span>The Overtime Filter</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
              Pro Edition
            </span>
          </h1>
          <p className="text-xs text-rose-300 font-medium tracking-wide">
            Strategic Work &amp; Boundary Blueprint for Women
          </p>
        </div>
      </div>
      <div className="hidden md:flex items-center space-x-2 text-xs text-slate-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Engine Active</span>
      </div>
    </header>
  );
};
