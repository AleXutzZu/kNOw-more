import React from 'react';
import { ArrowRight } from 'lucide-react';

interface WelcomeCardProps {
  onStart: () => void;
}

export const WelcomeCard: React.FC<WelcomeCardProps> = ({ onStart }) => {
  return (
    <div className="text-center space-y-6 py-4 animate-fade-in">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main tracking-tight">
        Should You Take On That Extra Work?
      </h2>
      <p className="text-text-muted text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
        Navigate invisible labor, office housework, psychological traps, and strategic ROI with this advanced decision engine designed to protect your bandwidth and career trajectory.
      </p>
      <div className="pt-4">
        <button
          type="button"
          onClick={onStart}
          className="w-full sm:w-auto px-8 py-4 rounded-xl bg-linear-to-r from-primary to-primary-dark hover:from-primary/90 hover:to-primary-dark/90 text-white font-bold text-base shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2 mx-auto cursor-pointer"
        >
          <span>Start Assessment</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
      <div className="pt-6 border-t border-footer-border flex flex-wrap justify-center gap-6 text-xs text-text-muted font-medium">
        <span>✨ 4 Strategic Phases</span>
        <span>🛡️ Burnout Prevention</span>
      </div>
    </div>
  );
};
