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
          className="text-xs text-white/60 hover:text-white flex items-center space-x-1 transition-colors cursor-pointer"
        >
          <ChevronRight className="w-4 h-4 rotate-180" />
          <span>Back to Scenarios</span>
        </button>
      </div>

      {/* Situation Card */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/25 text-accent border border-primary/40">
          {scenario.category}
        </span>
        <h3 className="text-xl font-bold text-white">{scenario.title}</h3>
        <p className="text-white/90 text-sm sm:text-base leading-relaxed">
          {scenario.situation}
        </p>
      </div>

      {/* Options Prompt */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold text-white/60 uppercase tracking-wider">
          How do you respond? Choose an approach:
        </h4>
        <div className="space-y-3">
          {scenario.options.map((option) => (
            <button
              type="button"
              key={option.id}
              onClick={() => onSelectOption(option)}
              className="w-full text-left p-4 rounded-xl border border-white/10 bg-dark/60 hover:bg-dark hover:border-accent text-white font-medium text-sm transition-all flex items-start space-x-3 group cursor-pointer"
            >
              <span className="w-6 h-6 rounded-lg bg-white/10 group-hover:bg-primary text-accent group-hover:text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors">
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
