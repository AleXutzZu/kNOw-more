import React from 'react';
import {GitBranch, Moon, Sun, Users} from 'lucide-react';
import {Link, NavLink} from 'react-router-dom';
import {useTheme} from '../../context/ThemeContext';

export const Header: React.FC = () => {
    const {isDark, toggleTheme} = useTheme();

    return (
        <header
            className="w-full py-3.5 px-4 sm:px-6 md:px-12 border-b border-header-border flex items-center justify-between backdrop-blur-md bg-header-bg sticky top-0 z-50 transition-colors duration-300">
            {/* Brand & Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
                <div
                    className="w-10 h-10 rounded-xl overflow-hidden shadow-md border border-blue-sky/40 bg-blue-sky flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <img
                        src="/logo.jpeg"
                        alt="kNOw MORE Logo"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h1 className="text-lg font-bold tracking-tight text-text-main flex items-center space-x-2">
                        <span className="group-hover:text-primary transition-colors">kNOw MORE</span>
                    </h1>
                    <p className="text-xs text-blue-sky font-medium tracking-wide hidden sm:block">
                        Work &amp; Boundary Decision Assistant
                    </p>
                </div>
            </Link>

            {/* Navigation Routes & Actions */}
            <div className="flex items-center space-x-2 sm:space-x-3">
                <nav className="flex items-center space-x-1 sm:space-x-1.5 mr-1 sm:mr-2">
                    <NavLink
                        to="/decision-tree"
                        className={({isActive}) =>
                            `flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                isActive
                                    ? 'bg-primary text-white shadow-xs'
                                    : 'text-text-muted hover:text-text-main hover:bg-surface-base'
                            }`
                        }
                    >
                        <GitBranch className="w-3.5 h-3.5"/>
                        <span>Decision Tree</span>
                    </NavLink>

                    <NavLink
                        to="/scenarios"
                        className={({isActive}) =>
                            `flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                isActive
                                    ? 'bg-primary text-white shadow-xs'
                                    : 'text-text-muted hover:text-text-main hover:bg-surface-base'
                            }`
                        }
                    >
                        <Users className="w-3.5 h-3.5"/>
                        <span>Scenarios</span>
                    </NavLink>
                </nav>

                {/* White / Dark Mode Toggle */}
                <button
                    type="button"
                    onClick={toggleTheme}
                    aria-label={isDark ? 'Switch to white mode' : 'Switch to dark mode'}
                    title={isDark ? 'Switch to White Mode' : 'Switch to Dark Mode'}
                    className="p-2 sm:px-2.5 sm:py-1.5 rounded-xl border border-surface-border bg-surface-base hover:bg-surface-hover text-text-main flex items-center space-x-1.5 transition-all cursor-pointer shadow-xs"
                >
                    {isDark ? (
                        <>
                            <Sun className="w-4 h-4 text-accent"/>
                            <span className="hidden lg:inline text-xs font-semibold">White Mode</span>
                        </>
                    ) : (
                        <>
                            <Moon className="w-4 h-4 text-primary"/>
                            <span className="hidden lg:inline text-xs font-semibold">Dark Mode</span>
                        </>
                    )}
                </button>
            </div>
        </header>
    );
};
