import React, { useState } from 'react';
import {
  ACCEPT,
  DECLINE,
  NEXT,
  OUTCOME_LABEL,
  QUESTIONS,
  getExplanation,
} from '../../data/decisionTreeData';
import type {
  DecisionQuestion,
  DecisionTrailItem,
  OutcomeType,
} from '../../types/decisionTree';
import {
  ArrowLeft,
  CheckCircle2,
  ListTree,
  RotateCcw,
  Sparkles,
  XCircle,
} from 'lucide-react';

interface ResultState {
  outcome: OutcomeType;
  question: DecisionQuestion;
  answer: 'yes' | 'no';
}

export const DecisionTreeModule: React.FC = () => {
  const [view, setView] = useState<'walk' | 'map'>('walk');
  const [step, setStep] = useState<number>(0);
  const [result, setResult] = useState<ResultState | null>(null);
  const [trail, setTrail] = useState<DecisionTrailItem[]>([]);

  const q = QUESTIONS[step];

  const handleAnswer = (answerChoice: 'yes' | 'no') => {
    if (!q) return;
    const outcome = q[answerChoice];
    setTrail((prev) => [...prev, { id: q.id, answer: answerChoice }]);
    if (outcome === NEXT) {
      setStep((prev) => prev + 1);
    } else {
      setResult({
        outcome,
        question: q,
        answer: answerChoice,
      });
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
            {(() => {
              const accepted = result.outcome === ACCEPT;
              const explanation = getExplanation(
                result.question.id,
                result.answer
              );

              return (
                <div
                  className={`rounded-2xl p-6 sm:p-8 border shadow-md space-y-5 ${
                    accepted
                      ? 'bg-accent/15 border-accent/40 text-text-main'
                      : 'bg-primary/10 border-primary/30 text-text-main'
                  }`}
                  role="status"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        accepted
                          ? 'bg-accent/25 text-primary'
                          : 'bg-primary/20 text-primary'
                      }`}
                    >
                      {accepted ? (
                        <CheckCircle2 className="w-7 h-7 text-primary" />
                      ) : (
                        <XCircle className="w-7 h-7 text-primary" />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">
                        Decision outcome
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                        {accepted ? 'Accept the task' : 'Decline the task'}
                      </h2>
                    </div>
                  </div>

                  {/* Contextual Question Explanation */}
                  <div className="pt-3 border-t border-surface-border space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-text-main">
                      {explanation.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-text-muted">
                      {explanation.body}
                    </p>
                  </div>

                  {/* Useful Response Guidance */}
                  <div className="bg-surface-base/80 border border-surface-border rounded-xl p-4 sm:p-5 space-y-2 shadow-xs">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">
                      A useful response
                    </p>
                    <p className="text-xs sm:text-sm text-text-main font-medium italic leading-relaxed">
                      {explanation.guidance ||
                        (accepted
                          ? 'Before committing, confirm the scope, deadline, and what should happen to your existing priorities.'
                          : 'You can decline respectfully, or propose a trade-off, different deadline, smaller scope, or another person who could help.')}
                    </p>
                  </div>

                  <div className="pt-2">
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
              );
            })()}

            {/* Answer trail */}
            {trail.length > 0 && (
              <div className="bg-surface-base border border-surface-border rounded-2xl p-5 sm:p-6 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted">
                  Your answer trail
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
                <span className="text-primary font-bold">Priority assessment</span>
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

            {/* Back action */}
            {trail.length > 0 && (
              <button
                type="button"
                onClick={handleBack}
                className="text-xs text-text-muted hover:text-text-main flex items-center space-x-1.5 transition-colors cursor-pointer pt-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            )}
          </div>
        )
      ) : (
        /* Full Map View */
        <div className="space-y-4 animate-fade-in">
          <div className="p-4 rounded-xl bg-card-bg/60 border border-surface-border text-xs text-text-muted flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-primary shrink-0" />
            <span>
              All 15 priority criteria in decision order. Each question either routes directly to a verdict or advances to the next priority check.
            </span>
          </div>

          <ol className="space-y-3">
            {QUESTIONS.map((item) => (
              <li
                key={item.id}
                className="p-5 rounded-2xl bg-surface-base border border-surface-border shadow-xs space-y-3"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-sm sm:text-base font-bold text-text-main">
                    <span className="text-primary mr-2 font-black">
                      #{item.id}
                    </span>
                    {item.text}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1 border-t border-surface-border/60">
                  <div className="flex items-center space-x-2 py-1">
                    <span className="font-extrabold text-primary">YES:</span>
                    <span
                      className={`font-semibold ${
                        item.yes === ACCEPT
                          ? 'text-accent'
                          : item.yes === DECLINE
                          ? 'text-primary'
                          : 'text-text-muted'
                      }`}
                    >
                      &rarr; {OUTCOME_LABEL[item.yes]}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 py-1">
                    <span className="font-extrabold text-text-subtle">NO:</span>
                    <span
                      className={`font-semibold ${
                        item.no === ACCEPT
                          ? 'text-accent'
                          : item.no === DECLINE
                          ? 'text-primary'
                          : 'text-text-muted'
                      }`}
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
