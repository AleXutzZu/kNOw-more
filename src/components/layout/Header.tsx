import React, { useState } from 'react';
import { GitBranch, Home, Menu, Moon, Sun, Users, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

export const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="w-full border-b border-header-border backdrop-blur-md bg-header-bg sticky top-0 z-50 transition-colors duration-300">
      <div className="py-3 px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Brand & Logo */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center space-x-2.5 sm:space-x-3 group min-w-0"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-md border border-blue-sky/40 bg-blue-sky flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <img
              src="/logo.jpeg"
              alt="kNOw MORE logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="truncate">
            <h1 className="text-base sm:text-lg font-bold tracking-tight text-text-main flex items-center space-x-2">
              <span className="group-hover:text-primary transition-colors">kNOw MORE</span>
            </h1>
            <p className="text-[11px] sm:text-xs text-blue-sky font-medium tracking-wide hidden sm:block truncate">
              Work &amp; boundary decision assistant
            </p>
          </div>
        </Link>

        {/* Right Section: Desktop Navigation + Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Desktop Nav (hidden on mobile, visible on sm and up) */}
          <nav className="hidden sm:flex items-center space-x-1 sm:space-x-1.5 mr-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-primary text-white shadow-xs'
                    : 'text-text-muted hover:text-text-main hover:bg-surface-base'
                }`
              }
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/decision-tree"
              className={({ isActive }) =>
                `flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-primary text-white shadow-xs'
                    : 'text-text-muted hover:text-text-main hover:bg-surface-base'
                }`
              }
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>Decision tree</span>
            </NavLink>

            <NavLink
              to="/scenarios"
              className={({ isActive }) =>
                `flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-primary text-white shadow-xs'
                    : 'text-text-muted hover:text-text-main hover:bg-surface-base'
                }`
              }
            >
              <Users className="w-3.5 h-3.5" />
              <span>Scenarios</span>
            </NavLink>
          </nav>

          {/* White / Dark Mode Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to white mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to white mode' : 'Switch to dark mode'}
            className="p-2 sm:px-2.5 sm:py-1.5 rounded-xl border border-surface-border bg-surface-base hover:bg-surface-hover text-text-main flex items-center space-x-1.5 transition-all cursor-pointer shadow-xs"
          >
            {isDark ? (
              <>
                <Sun className="w-4 h-4 text-accent" />
                <span className="hidden lg:inline text-xs font-semibold">White mode</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-primary" />
                <span className="hidden lg:inline text-xs font-semibold">Dark mode</span>
              </>
            )}
          </button>

          {/* Burger Menu Button (visible on mobile < sm) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="sm:hidden p-2 rounded-xl border border-surface-border bg-surface-base hover:bg-surface-hover text-text-main transition-all cursor-pointer shadow-xs"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-header-border bg-card-bg/95 backdrop-blur-xl px-4 py-3 space-y-1 animate-fade-in shadow-lg">
          <NavLink
            to="/"
            end
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              `flex items-center space-x-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-primary text-white shadow-xs font-bold'
                  : 'text-text-muted hover:text-text-main hover:bg-surface-base'
              }`
            }
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/decision-tree"
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              `flex items-center space-x-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-primary text-white shadow-xs font-bold'
                  : 'text-text-muted hover:text-text-main hover:bg-surface-base'
              }`
            }
          >
            <GitBranch className="w-4 h-4" />
            <span>Decision tree</span>
          </NavLink>

          <NavLink
            to="/scenarios"
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              `flex items-center space-x-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-primary text-white shadow-xs font-bold'
                  : 'text-text-muted hover:text-text-main hover:bg-surface-base'
              }`
            }
          >
            <Users className="w-4 h-4" />
            <span>Scenarios</span>
          </NavLink>
        </div>
      )}
    </header>
  );
};
