import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="py-6 px-4 text-center text-xs text-footer-text border-t border-footer-border transition-colors">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>
          kNOw MORE • Built for empowering professional growth, invisible labor awareness, and sustainable boundaries.
        </p>
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-text-main transition-colors">
            Home
          </Link>
          <Link to="/decision-tree" className="hover:text-text-main transition-colors">
            Decision tree
          </Link>
          <Link to="/scenarios" className="hover:text-text-main transition-colors">
            Scenarios
          </Link>
          <Link to="/roadmap" className="hover:text-text-main transition-colors">
            Roadmap guide
          </Link>
        </div>
      </div>
    </footer>
  );
};
