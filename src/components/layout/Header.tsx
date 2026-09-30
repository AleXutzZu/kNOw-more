import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="w-full py-5 px-6 md:px-12 border-b border-blue-sky/20 flex items-center justify-between backdrop-blur-md bg-bg-dark/85 sticky top-0 z-50">
            <div className="flex items-center space-x-3.5">
                <div className="w-11 h-11 rounded-xl overflow-hidden shadow-lg shadow-bg-deep/60 border border-blue-sky/40 bg-blue-sky flex items-center justify-center shrink-0">
                    <img
                        src="/logo.jpeg"
                        alt="kNOw MORE Logo"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h1 className="text-lg font-bold tracking-tight text-white flex items-center space-x-2">
                        <span>kNOw MORE</span>
                    </h1>
                    <p className="text-xs text-blue-sky font-medium tracking-wide">
                        Strategic work &amp; boundary blueprint
                    </p>
                </div>
            </div>
        </header>
    );
};
