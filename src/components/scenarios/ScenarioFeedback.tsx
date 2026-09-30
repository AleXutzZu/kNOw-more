import React from 'react';
import { ChevronRight, RotateCcw } from 'lucide-react';
import type { ScenarioOption } from '../../types/scenario';

interface ScenarioFeedbackProps {
  option: ScenarioOption;
  onBackToOptions: () => void;
  onTryAnother: () => void;
}

export const ScenarioFeedback: React.FC<ScenarioFeedbackProps> = ({
  option,
  onBackToOptions,
  onTryAnother,
}) => {
  const IconComponent = option.icon;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center space-x-2">
        <button
          type="button"
          onClick={onBackToOptions}
          className="text-xs text-slate-400 hover:text-white flex items-center space-x-1 transition-colors cursor-pointer"
        >
          <ChevronRight className="w-4 h-4 rotate-180" />
          <span>Back to Options</span>
        </button>
      </div>

      {/* Impact Analysis Header */}
      <div className="flex items-center space-x-4">
        <div
          className={`w-14 h-14 rounded-2xl shrink-0 flex items-center justify-center shadow-lg ${option.badgeBg}`}
        >
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        <div>
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-1 ${option.tagColor}`}
          >
            {option.strategyType}
          </span>
          <h3 className="text-xl font-extrabold text-white tracking-tight">
            {option.title}
          </h3>
        </div>
      </div>

      {/* Feedback Card */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5">
        <div>
          <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2">
            Psychological &amp; Career Impact
          </h4>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            {option.feedback}
          </p>
        </div>

        <div className="pt-4 border-t border-white/10">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Ready-to-Use Script:
          </h4>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 text-sm italic">
            {option.script}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <button
          type="button"
          onClick={onTryAnother}
          className="flex-1 py-4 px-6 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm transition-all border border-white/10 flex items-center justify-center space-x-2 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Try Another Scenario</span>
        </button>
      </div>
    </div>
  );
};
