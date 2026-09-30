import React from 'react';
import { ChevronRight } from 'lucide-react';
import type { QuestionNode } from '../../types/decisionTree';

interface QuestionCardProps {
  question: QuestionNode;
  stepIndex: number;
  totalSteps: number;
  hasHistory: boolean;
  onAnswer: (isYes: boolean) => void;
  onPrevious: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  stepIndex,
  totalSteps,
  hasHistory,
  onAnswer,
  onPrevious,
}) => {
  const progressPercent = Math.min(100, ((stepIndex + 1) / totalSteps) * 100);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Progress Bar & Phase Header */}
      <div className="space-y-3">
        <div className="flex justify-between items-center text-xs font-semibold tracking-wider uppercase text-primary">
          <span>{question.phase}</span>
          <span className="text-text-subtle">{`Step ${stepIndex + 1} of ${totalSteps}`}</span>
        </div>
        <div className="w-full bg-progress-track h-2.5 rounded-full overflow-hidden border border-surface-border">
          <div
            className="bg-linear-to-r from-primary via-secondary to-accent h-full transition-all duration-500 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-surface-base border border-surface-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="inline-block px-3 py-1 rounded-full bg-card-bg text-primary text-xs font-semibold border border-surface-border shadow-xs">
          {question.tag}
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-text-main leading-snug">
          {question.text}
        </h3>
        <p className="text-sm text-text-muted italic">{question.context}</p>
      </div>

      {/* Yes / No Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <button
          type="button"
          onClick={() => onAnswer(false)}
          className="group flex items-center justify-center space-x-3 p-4 rounded-xl border border-btn-neutral-border bg-btn-neutral-bg hover:bg-btn-neutral-hover hover:border-blue-sky text-btn-neutral-text font-bold transition-all shadow-xs cursor-pointer"
        >
          <span className="w-8 h-8 rounded-lg bg-btn-neutral-badge text-btn-neutral-badge-text group-hover:bg-blue-sky/20 group-hover:text-primary flex items-center justify-center transition-colors text-xs font-bold">
            NO
          </span>
          <span className="text-base">No</span>
        </button>
        <button
          type="button"
          onClick={() => onAnswer(true)}
          className="group flex items-center justify-center space-x-3 p-4 rounded-xl border border-primary/40 hover:border-primary bg-linear-to-r from-primary/15 to-primary-dark/15 hover:from-primary/25 hover:to-primary-dark/25 text-text-main font-bold transition-all shadow-xs cursor-pointer"
        >
          <span className="w-8 h-8 rounded-lg bg-primary group-hover:bg-primary/90 text-white flex items-center justify-center transition-colors text-xs font-bold shadow-xs">
            YES
          </span>
          <span className="text-base">Yes</span>
        </button>
      </div>

      {/* Back Navigation */}
      <div className="flex justify-start pt-2">
        {hasHistory && (
          <button
            type="button"
            onClick={onPrevious}
            className="text-xs text-text-subtle hover:text-text-main flex items-center space-x-1 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            <span>Previous Question</span>
          </button>
        )}
      </div>
    </div>
  );
};
