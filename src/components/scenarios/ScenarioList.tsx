import React from 'react';
import { ChevronRight } from 'lucide-react';
import type { Scenario } from '../../types/scenario';

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
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Real-World Workplace Scenarios
        </h2>
        <p className="text-white/80 text-sm sm:text-base max-w-md mx-auto">
          Select a common professional situation to test how different response strategies impact your career, bandwidth, and standing.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 pt-2">
        {scenarios.map((scenario) => (
          <div
            key={scenario.id}
            onClick={() => onSelectScenario(scenario)}
            className="group p-5 rounded-2xl bg-bg-surface/50 border border-blue-sky/20 hover:border-accent hover:bg-bg-surface/80 transition-all cursor-pointer flex items-center justify-between shadow-sm"
          >
            <div className="space-y-1.5 pr-4">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/25 text-white border border-primary/40">
                {scenario.category}
              </span>
              <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors">
                {scenario.title}
              </h3>
              <p className="text-xs text-blue-sky/80 line-clamp-2">
                {scenario.situation}
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-primary text-white/60 group-hover:text-white flex items-center justify-center shrink-0 transition-all">
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
