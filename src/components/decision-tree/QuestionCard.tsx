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
        <div className="flex justify-between items-center text-xs font-semibold tracking-wider uppercase text-rose-400">
          <span>{question.phase}</span>
          <span>{`Step ${stepIndex + 1} of ${totalSteps}`}</span>
        </div>
        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
          <div
            className="bg-linear-to-r from-rose-500 to-amber-500 h-full transition-all duration-500 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-inner">
        <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-slate-300 text-xs font-semibold">
          {question.tag}
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
          {question.text}
        </h3>
        <p className="text-sm text-slate-400 italic">{question.context}</p>
      </div>

      {/* Yes / No Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <button
          type="button"
          onClick={() => onAnswer(false)}
          className="group flex items-center justify-center space-x-3 p-4 rounded-xl border border-white/10 bg-slate-900/60 hover:bg-slate-800 hover:border-slate-600 text-white font-bold transition-all shadow-sm cursor-pointer"
        >
          <span className="w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-rose-500/20 text-slate-400 group-hover:text-rose-400 flex items-center justify-center transition-colors">
            NO
          </span>
          <span className="text-base">No</span>
        </button>
        <button
          type="button"
          onClick={() => onAnswer(true)}
          className="group flex items-center justify-center space-x-3 p-4 rounded-xl border border-white/10 bg-linear-to-r from-rose-500/20 to-amber-500/20 hover:from-rose-500/30 hover:to-amber-500/30 border-rose-500/30 hover:border-rose-500 text-white font-bold transition-all shadow-sm cursor-pointer"
        >
          <span className="w-8 h-8 rounded-lg bg-rose-500/20 group-hover:bg-rose-500 text-rose-300 group-hover:text-white flex items-center justify-center transition-colors">
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
            className="text-xs text-slate-400 hover:text-white flex items-center space-x-1 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            <span>Previous Question</span>
          </button>
        )}
      </div>
    </div>
  );
};
