import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full py-5 px-6 md:px-12 border-b border-blue-sky/20 flex items-center justify-between backdrop-blur-md bg-bg-dark/85 sticky top-0 z-50">
      <div className="flex items-center space-x-3.5">
        <div className="w-11 h-11 rounded-xl overflow-hidden shadow-lg shadow-bg-deep/60 border border-blue-sky/40 bg-blue-sky flex items-center justify-center shrink-0">
          <img
            src="/logo.jpeg"
            alt="The Overtime Filter Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-white flex items-center space-x-2">
            <span>The Overtime Filter</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/25 text-white border border-primary/40 font-semibold">
              Pro Edition
            </span>
          </h1>
          <p className="text-xs text-blue-sky font-medium tracking-wide">
            Strategic Work &amp; Boundary Blueprint for Women
          </p>
        </div>
      </div>
      <div className="hidden md:flex items-center space-x-2 text-xs text-white/80 bg-bg-surface/80 px-3.5 py-1.5 rounded-full border border-blue-sky/20">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-sm shadow-accent/50" />
        <span className="text-accent font-medium">Engine Active</span>
      </div>
    </header>
  );
};
