import React from 'react';
import { ArrowLeft, Compass, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="w-full max-w-lg bg-card-bg backdrop-blur-xl border border-card-border rounded-3xl shadow-xl p-8 sm:p-12 text-center space-y-6 animate-fade-in relative overflow-hidden transition-all duration-300">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-5">
        <div className="inline-flex p-4 rounded-2xl bg-tag-bg text-primary mb-2 border border-tag-border shadow-md">
          <Compass className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            404 Error
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-text-main tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-text-muted leading-relaxed">
            The pathway or boundary you are searching for doesn’t exist or has been relocated.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-linear-to-r from-primary to-primary-dark hover:from-primary/90 hover:to-primary-dark/90 text-white font-bold text-sm shadow-md shadow-primary/25 transition-all flex items-center justify-center space-x-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-xl bg-surface-base hover:bg-surface-hover text-text-main font-bold text-sm border border-surface-border transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-text-muted" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
