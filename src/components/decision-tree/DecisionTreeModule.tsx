import React, { useState } from 'react';
import {
  ACCEPT,
  DECLINE,
  NEXT,
  OUTCOME_LABEL,
  QUESTIONS,
} from '../../data/decisionTreeData';
import type { DecisionTrailItem, OutcomeType } from '../../types/decisionTree';
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  ListTree,
  RotateCcw,
  Sparkles,
  XCircle,
} from 'lucide-react';

export const DecisionTreeModule: React.FC = () => {
  const [view, setView] = useState<'walk' | 'map'>('walk');
  const [step, setStep] = useState<number>(0);
  const [result, setResult] = useState<OutcomeType | null>(null);
  const [trail, setTrail] = useState<DecisionTrailItem[]>([]);

  const q = QUESTIONS[step];

  const handleAnswer = (answerChoice: 'yes' | 'no') => {
    if (!q) return;
    const outcome = q[answerChoice];
    setTrail((prev) => [...prev, { id: q.id, answer: answerChoice }]);
    if (outcome === NEXT) {
      setStep((prev) => prev + 1);
    } else {
      setResult(outcome);
    }
  };

  const handleBack = () => {
    setTrail((prev) => prev.slice(0, -1));
    if (result) {
      setResult(null);
    } else {
      setStep((prev) => Math.max(0, prev - 1));
    }
  };

  const handleRestart = () => {
    setStep(0);
    setResult(null);
    setTrail([]);
  };

  const progressPercent = Math.min(
    100,
    ((step + 1) / QUESTIONS.length) * 100
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top View Selector Tabs */}
      <div className="flex p-1.5 bg-surface-base border border-surface-border rounded-2xl shadow-xs transition-colors">
        <button
          type="button"
          aria-pressed={view === 'walk'}
          onClick={() => setView('walk')}
          className={`flex-1 py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer ${
            view === 'walk'
              ? 'bg-linear-to-r from-primary to-primary-dark text-white shadow-md shadow-primary/25'
              : 'text-text-muted hover:text-text-main hover:bg-surface-hover/60'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Walk through</span>
        </button>
        <button
          type="button"
          aria-pressed={view === 'map'}
          onClick={() => setView('map')}
          className={`flex-1 py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer ${
            view === 'map'
              ? 'bg-linear-to-r from-primary to-primary-dark text-white shadow-md shadow-primary/25'
              : 'text-text-muted hover:text-text-main hover:bg-surface-hover/60'
          }`}
        >
          <ListTree className="w-4 h-4" />
          <span>Full map</span>
        </button>
      </div>

      {view === 'walk' ? (
        result ? (
          /* Result View */
          <div className="space-y-6 animate-fade-in">
            <div
              className={`rounded-2xl p-6 sm:p-8 border shadow-md space-y-4 ${
                result === ACCEPT
                  ? 'bg-accent/15 border-accent/40 text-text-main'
                  : 'bg-primary/10 border-primary/30 text-text-main'
              }`}
              role="status"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    result === ACCEPT
                      ? 'bg-accent/25 text-primary'
                      : 'bg-primary/20 text-primary'
                  }`}
                >
                  {result === ACCEPT ? (
                    <CheckCircle2 className="w-7 h-7 text-primary" />
                  ) : (
                    <XCircle className="w-7 h-7 text-primary" />
                  )}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Decision Outcome
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    {result === ACCEPT ? 'Accept the task' : 'Decline the task'}
                  </h2>
                </div>
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-text-muted pt-2 border-t border-surface-border">
                {result === ACCEPT
                  ? 'You have a solid reason to say yes. Confirm scope, expectations, and timing before you commit.'
                  : "You don't have a solid reason to say yes. Decline kindly, or offer a clear counter-proposal."}
              </p>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="py-3 px-6 rounded-xl bg-linear-to-r from-primary to-primary-dark hover:from-primary/90 hover:to-primary-dark/90 text-white font-bold text-sm shadow-md shadow-primary/25 flex items-center space-x-2 cursor-pointer transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Start over</span>
                </button>
              </div>
            </div>

            {/* Answer trail */}
            {trail.length > 0 && (
              <div className="bg-surface-base border border-surface-border rounded-2xl p-5 sm:p-6 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted">
                  Your Answer Trail
                </h4>
                <ul className="space-y-2 text-sm" aria-label="Your answers">
                  {trail.map((t, idx) => {
                    const matchedQ = QUESTIONS.find((item) => item.id === t.id);
                    return (
                      <li
                        key={`${t.id}-${idx}`}
                        className="flex items-center justify-between py-2 border-b border-surface-border last:border-b-0 text-text-muted"
                      >
                        <span className="truncate pr-4 text-xs sm:text-sm">
                          <strong className="text-text-main mr-2">Q{t.id}:</strong>
                          {matchedQ?.text || `Question ${t.id}`}
                        </span>
                        <span
                          className={`font-black uppercase text-xs px-2.5 py-1 rounded-md shrink-0 ${
                            t.answer === 'yes'
                              ? 'bg-primary/15 text-primary'
                              : 'bg-btn-neutral-badge text-text-main'
                          }`}
                        >
                          {t.answer}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            <button
              type="button"
              onClick={handleBack}
              className="text-xs text-text-muted hover:text-text-main flex items-center space-x-1.5 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Change my last answer</span>
            </button>
          </div>
        ) : (
          /* Walkthrough Question View */
          <div className="space-y-6 animate-fade-in">
            {/* Progress indicator */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-xs font-semibold tracking-wider text-text-muted">
                <span className="text-primary font-bold">Priority Assessment</span>
                <span>{`Question ${q.id} of ${QUESTIONS.length}`}</span>
              </div>
              <div className="w-full bg-progress-track h-2 rounded-full overflow-hidden border border-surface-border">
                <div
                  className="bg-linear-to-r from-primary via-secondary to-accent h-full transition-all duration-300 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Question Box */}
            <div className="bg-surface-base border border-surface-border rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
              <span className="inline-block px-3 py-1 rounded-full bg-card-bg text-primary text-xs font-bold border border-surface-border">
                Priority #{q.id}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-text-main leading-snug">
                {q.text}
              </h2>
            </div>

            {/* Answer Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => handleAnswer('yes')}
                className="group p-5 rounded-2xl border border-primary/30 hover:border-primary bg-surface-base hover:bg-surface-hover text-left transition-all shadow-xs cursor-pointer flex flex-col justify-between space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-text-main group-hover:text-primary transition-colors">
                    Yes
                  </span>
                  <span className="w-7 h-7 rounded-lg bg-primary/15 text-primary flex items-center justify-center text-xs font-bold">
                    Y
                  </span>
                </div>
                <small className="text-xs text-text-muted font-normal">
                  &rarr; {OUTCOME_LABEL[q.yes]}
                </small>
              </button>

              <button
                type="button"
                onClick={() => handleAnswer('no')}
                className="group p-5 rounded-2xl border border-btn-neutral-border hover:border-primary/60 bg-btn-neutral-bg hover:bg-btn-neutral-hover text-left transition-all shadow-xs cursor-pointer flex flex-col justify-between space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-text-main group-hover:text-primary transition-colors">
                    No
                  </span>
                  <span className="w-7 h-7 rounded-lg bg-btn-neutral-badge text-btn-neutral-badge-text flex items-center justify-center text-xs font-bold">
                    N
                  </span>
                </div>
                <small className="text-xs text-text-muted font-normal">
                  &rarr; {OUTCOME_LABEL[q.no]}
                </small>
              </button>
            </div>

            {/* Back button */}
            {trail.length > 0 && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleBack}
                  className="text-xs text-text-muted hover:text-text-main flex items-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  <span>Previous question</span>
                </button>
              </div>
            )}
          </div>
        )
      ) : (
        /* Full Map View */
        <div className="space-y-4 animate-fade-in">
          <div className="bg-surface-base border border-surface-border rounded-2xl p-4 text-xs text-text-muted flex items-center justify-between">
            <span>
              All 15 questions listed in strict priority order with explicit YES / NO branching paths.
            </span>
          </div>

          <ol className="space-y-3">
            {QUESTIONS.map((item) => (
              <li
                key={item.id}
                className="bg-surface-base border border-surface-border rounded-2xl p-5 space-y-3 shadow-xs"
              >
                <div className="flex items-start space-x-3">
                  <span className="w-7 h-7 rounded-lg bg-tag-bg text-primary text-xs font-bold flex items-center justify-center shrink-0 border border-tag-border">
                    {item.id}
                  </span>
                  <h3 className="text-base font-bold text-text-main leading-snug">
                    {item.text}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm pl-10">
                  <div className="flex items-center space-x-2 text-text-muted">
                    <strong className="text-primary min-w-[2.8em]">YES:</strong>
                    <span
                      className={
                        item.yes === ACCEPT
                          ? 'text-primary font-semibold'
                          : item.yes === DECLINE
                          ? 'text-accent font-semibold'
                          : 'text-text-muted'
                      }
                    >
                      &rarr; {OUTCOME_LABEL[item.yes]}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-text-muted">
                    <strong className="text-text-subtle min-w-[2.8em]">NO:</strong>
                    <span
                      className={
                        item.no === ACCEPT
                          ? 'text-primary font-semibold'
                          : item.no === DECLINE
                          ? 'text-accent font-semibold'
                          : 'text-text-muted'
                      }
                    >
                      &rarr; {OUTCOME_LABEL[item.no]}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default DecisionTreeModule;
