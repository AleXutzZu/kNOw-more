import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface WelcomeCardProps {
  onStart: () => void;
}

export const WelcomeCard: React.FC<WelcomeCardProps> = ({ onStart }) => {
  return (
    <div className="text-center space-y-6 py-4 animate-fade-in">
      <div className="inline-flex p-3 rounded-2xl bg-rose-500/10 text-rose-400 mb-2 border border-rose-500/20">
        <Sparkles className="w-8 h-8" />
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
        Should You Take On That Extra Work?
      </h2>
      <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
        Navigate invisible labor, office housework, psychological traps, and strategic ROI with this advanced decision engine designed to protect your bandwidth and career trajectory.
      </p>
      <div className="pt-4">
        <button
          type="button"
          onClick={onStart}
          className="w-full sm:w-auto px-8 py-4 rounded-xl bg-linear-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-bold text-base shadow-lg shadow-rose-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2 mx-auto cursor-pointer"
        >
          <span>Start Assessment</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
      <div className="pt-6 border-t border-white/10 flex flex-wrap justify-center gap-6 text-xs text-slate-400">
        <span>✨ 4 Strategic Phases</span>
        <span>🛡️ Burnout Prevention</span>
        <span>⚡ Zero Ambiguity</span>
      </div>
    </div>
  );
};
