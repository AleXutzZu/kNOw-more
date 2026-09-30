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
          className="text-xs text-text-subtle hover:text-text-main flex items-center space-x-1 transition-colors cursor-pointer"
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
          <IconComponent className="w-6 h-6" />
        </div>
        <div>
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-1 ${option.tagColor}`}
          >
            {option.strategyType}
          </span>
          <h3 className="text-xl font-extrabold text-text-main tracking-tight">
            {option.title}
          </h3>
        </div>
      </div>

      {/* Feedback Card */}
      <div className="bg-surface-base border border-surface-border rounded-2xl p-6 sm:p-8 space-y-5">
        <div>
          <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
            Psychological &amp; Career Impact
          </h4>
          <p className="text-text-main text-sm sm:text-base leading-relaxed">
            {option.feedback}
          </p>
        </div>

        <div className="pt-4 border-t border-surface-border">
          <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2">
            Ready-to-Use Script:
          </h4>
          <div className="p-4 rounded-xl bg-script-bg border border-script-border text-script-text text-sm italic shadow-xs">
            {option.script}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <button
          type="button"
          onClick={onTryAnother}
          className="flex-1 py-4 px-6 rounded-xl bg-linear-to-r from-primary to-primary-dark hover:from-primary/90 hover:to-primary-dark/90 text-white font-bold text-sm shadow-lg shadow-primary/30 transition-all flex items-center justify-center space-x-2 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4 text-white" />
          <span>Try Another Scenario</span>
        </button>
      </div>
    </div>
  );
};
