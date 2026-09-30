import React from 'react';
import { ChevronRight } from 'lucide-react';
import type { Scenario, ScenarioOption } from '../../types/scenario';

interface ScenarioQuestionProps {
  scenario: Scenario;
  onSelectOption: (option: ScenarioOption) => void;
  onBack: () => void;
}

export const ScenarioQuestion: React.FC<ScenarioQuestionProps> = ({
  scenario,
  onSelectOption,
  onBack,
}) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center space-x-2">
        <button
          type="button"
          onClick={onBack}
          className="text-xs text-text-subtle hover:text-text-main flex items-center space-x-1 transition-colors cursor-pointer"
        >
          <ChevronRight className="w-4 h-4 rotate-180" />
          <span>Back to Scenarios</span>
        </button>
      </div>

      {/* Situation Card */}
      <div className="bg-surface-base border border-surface-border rounded-2xl p-6 sm:p-8 space-y-4">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-tag-bg text-tag-text border border-tag-border">
          {scenario.category}
        </span>
        <h3 className="text-xl font-bold text-text-main">{scenario.title}</h3>
        <p className="text-text-main text-sm sm:text-base leading-relaxed">
          {scenario.situation}
        </p>
      </div>

      {/* Options Prompt */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider">
          How do you respond? Choose an approach:
        </h4>
        <div className="space-y-3">
          {scenario.options.map((option) => (
            <button
              type="button"
              key={option.id}
              onClick={() => onSelectOption(option)}
              className="w-full text-left p-4 rounded-xl border border-btn-neutral-border bg-btn-neutral-bg hover:bg-btn-neutral-hover hover:border-primary text-btn-neutral-text font-medium text-sm transition-all flex items-start space-x-3 group cursor-pointer shadow-xs"
            >
              <span className="w-6 h-6 rounded-lg bg-btn-neutral-badge text-btn-neutral-badge-text group-hover:bg-primary group-hover:text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors">
                {option.label}
              </span>
              <span className="leading-snug">{option.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
