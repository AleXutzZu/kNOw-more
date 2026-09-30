import React from 'react';
import { Compass } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="w-full py-6 px-6 md:px-12 border-b border-white/10 flex items-center justify-between backdrop-blur-md bg-dark/80 sticky top-0 z-50">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
          <Compass className="w-6 h-6 text-dark" />
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-white flex items-center space-x-2">
            <span>The Overtime Filter</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30">
              Pro Edition
            </span>
          </h1>
          <p className="text-xs text-highlight font-medium tracking-wide">
            Strategic Work &amp; Boundary Blueprint for Women
          </p>
        </div>
      </div>
      <div className="hidden md:flex items-center space-x-2 text-xs text-white/70 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="text-accent/90 font-medium">Engine Active</span>
      </div>
    </header>
  );
};
