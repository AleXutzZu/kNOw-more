import React, { useState } from 'react';
import { SCENARIOS } from '../../data/scenariosData';
import type { Scenario, ScenarioOption } from '../../types/scenario';
import { ScenarioFeedback } from './ScenarioFeedback';
import { ScenarioList } from './ScenarioList';
import { ScenarioQuestion } from './ScenarioQuestion';

export const ScenarioRolePlayModule: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const [selectedOption, setSelectedOption] = useState<ScenarioOption | null>(null);

  const handleSelectScenario = (scenario: Scenario) => {
    setSelectedScenario(scenario);
    setSelectedOption(null);
  };

  const handleSelectOption = (option: ScenarioOption) => {
    setSelectedOption(option);
  };

  const handleBackToScenarios = () => {
    setSelectedScenario(null);
    setSelectedOption(null);
  };

  const handleBackToOptions = () => {
    setSelectedOption(null);
  };

  const handleTryAnother = () => {
    setSelectedScenario(null);
    setSelectedOption(null);
  };

  return (
    <div>
      {!selectedScenario && (
        <ScenarioList
          scenarios={SCENARIOS}
          onSelectScenario={handleSelectScenario}
        />
      )}

      {selectedScenario && !selectedOption && (
        <ScenarioQuestion
          scenario={selectedScenario}
          onSelectOption={handleSelectOption}
          onBack={handleBackToScenarios}
        />
      )}

      {selectedScenario && selectedOption && (
        <ScenarioFeedback
          option={selectedOption}
          onBackToOptions={handleBackToOptions}
          onTryAnother={handleTryAnother}
        />
      )}
    </div>
  );
};
