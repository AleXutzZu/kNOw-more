import React, { useState } from 'react';
import {
  INITIAL_QUESTION_ID,
  QUESTIONS,
  RESULTS,
  TOTAL_STEPS,
} from '../../data/decisionTreeData';
import type {
  DecisionStep,
  ResultNode,
  StepHistoryItem,
} from '../../types/decisionTree';
import { QuestionCard } from './QuestionCard';
import { ResultCard } from './ResultCard';
import { WelcomeCard } from './WelcomeCard';

export const DecisionTreeModule: React.FC = () => {
  const [step, setStep] = useState<DecisionStep>('welcome');
  const [currentNodeId, setCurrentNodeId] = useState<string>(INITIAL_QUESTION_ID);
  const [history, setHistory] = useState<StepHistoryItem[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [resultData, setResultData] = useState<ResultNode | null>(null);

  const currentQuestion = QUESTIONS[currentNodeId];

  const startAssessment = () => {
    setStep('question');
    setCurrentNodeId(INITIAL_QUESTION_ID);
    setHistory([]);
    setCurrentStepIndex(0);
    setResultData(null);
  };

  const handleAnswer = (isYes: boolean) => {
    if (!currentQuestion) return;

    setHistory((prev) => [...prev, { id: currentNodeId, answer: isYes }]);
    const nextId = isYes
      ? currentQuestion.onYes
      : currentQuestion.onNo || 'q3_vacuum';

    if (nextId.startsWith('result_')) {
      const outcome = RESULTS[nextId];
      if (outcome) {
        setResultData(outcome);
        setStep('result');
      }
    } else {
      setCurrentNodeId(nextId);
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (history.length === 0) return;
    const lastStep = history[history.length - 1];
    setHistory((prev) => prev.slice(0, -1));
    setCurrentNodeId(lastStep.id);
    setCurrentStepIndex((prev) => Math.max(0, prev - 1));
    setStep('question');
  };

  const resetAssessment = () => {
    setStep('welcome');
    setCurrentNodeId(INITIAL_QUESTION_ID);
    setHistory([]);
    setCurrentStepIndex(0);
    setResultData(null);
  };

  return (
    <div>
      {step === 'welcome' && <WelcomeCard onStart={startAssessment} />}

      {step === 'question' && currentQuestion && (
        <QuestionCard
          question={currentQuestion}
          stepIndex={currentStepIndex}
          totalSteps={TOTAL_STEPS}
          hasHistory={history.length > 0}
          onAnswer={handleAnswer}
          onPrevious={previousStep}
        />
      )}

      {step === 'result' && resultData && (
        <ResultCard result={resultData} onReset={resetAssessment} />
      )}
    </div>
  );
};
