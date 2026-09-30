import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="w-full py-4 px-6 md:px-12 border-b border-header-border flex items-center justify-between backdrop-blur-md bg-header-bg sticky top-0 z-50 transition-colors duration-300">
      <div className="flex items-center space-x-3.5">
        <div className="w-11 h-11 rounded-xl overflow-hidden shadow-md border border-blue-sky/40 bg-blue-sky flex items-center justify-center shrink-0">
          <img
            src="/logo.jpeg"
            alt="The Overtime Filter Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-text-main flex items-center space-x-2">
            <span>The Overtime Filter</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-tag-bg text-tag-text border border-tag-border font-semibold">
              Pro Edition
            </span>
          </h1>
          <p className="text-xs text-blue-sky font-medium tracking-wide">
            Strategic Work &amp; Boundary Blueprint for Women
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        {/* White / Dark Mode Toggle in Navigation Bar */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? 'Switch to white mode' : 'Switch to dark mode'}
          title={isDark ? 'Switch to White Mode' : 'Switch to Dark Mode'}
          className="p-2 sm:px-3 sm:py-1.5 rounded-xl border border-surface-border bg-surface-base hover:bg-surface-hover text-text-main flex items-center space-x-2 transition-all cursor-pointer shadow-xs"
        >
          {isDark ? (
            <>
              <Sun className="w-4 h-4 text-accent" />
              <span className="hidden sm:inline text-xs font-semibold">White Mode</span>
            </>
          ) : (
            <>
              <Moon className="w-4 h-4 text-primary" />
              <span className="hidden sm:inline text-xs font-semibold">Dark Mode</span>
            </>
          )}
        </button>

        {/* Engine Status */}
        <div className="hidden md:flex items-center space-x-2 text-xs text-text-muted bg-surface-base px-3.5 py-1.5 rounded-full border border-surface-border">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-sm shadow-accent/50" />
          <span className="text-text-main font-medium">Engine Active</span>
        </div>
      </div>
    </header>
  );
};
