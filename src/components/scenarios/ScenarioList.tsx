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
        <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto">
          Select a common professional situation to test how different response strategies impact your career, bandwidth, and standing.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 pt-2">
        {scenarios.map((scenario) => (
          <div
            key={scenario.id}
            onClick={() => onSelectScenario(scenario)}
            className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-rose-500/50 hover:bg-white/10 transition-all cursor-pointer flex items-center justify-between shadow-sm"
          >
            <div className="space-y-1 pr-4">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                {scenario.category}
              </span>
              <h3 className="text-lg font-bold text-white group-hover:text-rose-400 transition-colors">
                {scenario.title}
              </h3>
              <p className="text-xs text-slate-400 line-clamp-2">
                {scenario.situation}
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-rose-500 text-slate-400 group-hover:text-white flex items-center justify-center shrink-0 transition-all">
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
