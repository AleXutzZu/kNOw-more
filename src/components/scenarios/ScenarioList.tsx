import React from 'react';
import { ChevronRight } from 'lucide-react';
import type { Scenario } from '../../types/scenario';
import { ScenarioSubmissionForm } from './ScenarioSubmissionForm';

interface ScenarioListProps {
  scenarios: Scenario[];
  onSelectScenario: (scenario: Scenario) => void;
}

export const ScenarioList: React.FC<ScenarioListProps> = ({
  scenarios,
  onSelectScenario,
}) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main tracking-tight">
          Real-World Workplace Scenarios
        </h2>
        <p className="text-text-muted text-sm sm:text-base max-w-md mx-auto">
          Select a common professional situation to test how different response strategies impact your career.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 pt-2">
        {scenarios.map((scenario) => (
          <div
            key={scenario.id}
            onClick={() => onSelectScenario(scenario)}
            className="group p-5 rounded-2xl bg-btn-neutral-bg hover:bg-btn-neutral-hover border border-surface-border hover:border-primary transition-all cursor-pointer flex items-center justify-between shadow-xs"
          >
            <div className="space-y-1.5 pr-4">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-tag-bg text-tag-text border border-tag-border">
                {scenario.category}
              </span>
              <h3 className="text-lg font-bold text-text-main group-hover:text-primary transition-colors">
                {scenario.title}
              </h3>
              <p className="text-xs text-text-muted line-clamp-2">
                {scenario.situation}
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-btn-neutral-badge text-btn-neutral-badge-text group-hover:bg-primary group-hover:text-white flex items-center justify-center shrink-0 transition-all">
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
        ))}
      </div>

      {/* Scenario Submission Form for Community / Users */}
      <ScenarioSubmissionForm />
    </div>
  );
};
