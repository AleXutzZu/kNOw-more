import React, { useState } from 'react';
import { SCENARIOS } from '../../data/scenariosData';
import {
  RESPONSE_LABELS,
  type ResponseId,
} from '../../types/scenario';
import {
  AlertCircle,
  ArrowLeft,
  Brain,
  CheckCircle2,
  ChevronRight,
  Compass,
  CornerDownRight,
  HelpCircle,
  LayoutGrid,
  RotateCcw,
  Sparkles,
  TrendingUp,
  XCircle,
} from 'lucide-react';
import { ScenarioSubmissionForm } from './ScenarioSubmissionForm';

export const ScenarioRolePlayModule: React.FC = () => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState<number | null>(0);
  const [selectedResponse, setSelectedResponse] = useState<ResponseId | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(SCENARIOS.map((s) => s.category)))];

  const currentScenario =
    selectedScenarioIndex !== null ? SCENARIOS[selectedScenarioIndex] : null;

  const handleSelectScenario = (index: number) => {
    setSelectedScenarioIndex(index);
    setSelectedResponse(null);
  };

  const handleNextScenario = () => {
    setSelectedResponse(null);
    if (selectedScenarioIndex !== null) {
      if (selectedScenarioIndex < SCENARIOS.length - 1) {
        setSelectedScenarioIndex(selectedScenarioIndex + 1);
      } else {
        setSelectedScenarioIndex(0);
      }
    }
  };

  const handlePreviousScenario = () => {
    setSelectedResponse(null);
    if (selectedScenarioIndex !== null) {
      if (selectedScenarioIndex > 0) {
        setSelectedScenarioIndex(selectedScenarioIndex - 1);
      } else {
        setSelectedScenarioIndex(SCENARIOS.length - 1);
      }
    }
  };

  const getBadgeStyle = (responseId: ResponseId) => {
    switch (responseId) {
      case 'accept':
        return 'bg-accent/20 text-text-main border-accent/40';
      case 'decline':
        return 'bg-primary/20 text-primary border-primary/40';
      case 'delegate':
        return 'bg-blue-sky/25 text-text-main border-blue-sky/40';
    }
  };

  const getHeaderIcon = (responseId: ResponseId) => {
    switch (responseId) {
      case 'accept':
        return <CheckCircle2 className="w-4 h-4 text-accent" />;
      case 'decline':
        return <XCircle className="w-4 h-4 text-primary" />;
      case 'delegate':
        return <Compass className="w-4 h-4 text-blue-sky" />;
    }
  };

  const filteredScenarios =
    categoryFilter === 'all'
      ? SCENARIOS
      : SCENARIOS.filter((s) => s.category === categoryFilter);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Header / View Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2 border-b border-surface-border">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-text-main tracking-tight">
            Workplace scenarios
          </h1>
          <p className="text-xs sm:text-sm text-text-muted">
            Realistic workplace situations to practice strategic boundary responses and avoid burnout.
          </p>
        </div>

        {/* View toggle / Scenarios catalog link */}
        <div className="flex items-center space-x-2">
          {selectedScenarioIndex !== null ? (
            <button
              type="button"
              onClick={() => {
                setSelectedScenarioIndex(null);
                setSelectedResponse(null);
              }}
              className="px-3.5 py-1.5 rounded-xl bg-surface-base hover:bg-surface-hover text-text-main text-xs font-semibold border border-surface-border flex items-center space-x-1.5 transition-all cursor-pointer shadow-xs"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-primary" />
              <span>Browse all {SCENARIOS.length} scenarios</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => handleSelectScenario(0)}
              className="px-3.5 py-1.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-xs font-semibold flex items-center space-x-1.5 transition-all cursor-pointer shadow-xs"
            >
              <span>Start walkthrough</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Case pills for quick navigation when viewing a scenario */}
      {selectedScenarioIndex !== null && (
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 text-xs">
          {SCENARIOS.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => handleSelectScenario(idx)}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
                idx === selectedScenarioIndex
                  ? 'bg-primary text-white shadow-xs'
                  : 'bg-surface-base hover:bg-surface-hover text-text-muted border border-surface-border'
              }`}
            >
              Case {s.id}
            </button>
          ))}
        </div>
      )}

      {/* VIEW 1: Catalog Grid (when browsing all) */}
      {selectedScenarioIndex === null && (
        <div className="space-y-6 animate-fade-in">
          {/* Category Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 text-xs">
            <span className="text-text-subtle text-[11px] font-semibold uppercase tracking-wider shrink-0">
              Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer shrink-0 capitalize ${
                  categoryFilter === cat
                    ? 'bg-primary text-white shadow-xs'
                    : 'bg-surface-base hover:bg-surface-hover text-text-muted border border-surface-border'
                }`}
              >
                {cat === 'all' ? 'All cases' : cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredScenarios.map((scenario) => {
              const originalIndex = SCENARIOS.findIndex((s) => s.id === scenario.id);
              return (
                <div
                  key={scenario.id}
                  onClick={() => handleSelectScenario(originalIndex)}
                  className="group p-5 rounded-2xl bg-surface-base hover:bg-surface-hover border border-surface-border hover:border-primary transition-all cursor-pointer flex flex-col justify-between space-y-3 shadow-xs"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-tag-bg text-primary border border-tag-border">
                        {scenario.category}
                      </span>
                      <span className="text-[11px] font-bold text-text-subtle">
                        Case #{scenario.id}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-text-main group-hover:text-primary transition-colors leading-snug">
                      {scenario.title}
                    </h3>
                    <p className="text-xs text-text-muted line-clamp-2 leading-relaxed">
                      {scenario.context}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs text-primary font-semibold border-t border-surface-border/50">
                    <span>Try scenario</span>
                    <div className="w-7 h-7 rounded-lg bg-btn-neutral-badge text-btn-neutral-badge-text group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW 2: Active Scenario Detail (Walkthrough) */}
      {currentScenario && !selectedResponse && (
        <div className="space-y-6 animate-fade-in">
          {/* Header row with index and navigation */}
          <div className="flex items-center justify-between text-xs text-text-muted">
            <span className="inline-block px-3 py-1 rounded-full bg-tag-bg text-primary text-xs font-bold border border-tag-border">
              Case {currentScenario.id} of {SCENARIOS.length} &bull; {currentScenario.category}
            </span>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={handlePreviousScenario}
                className="hover:text-text-main transition-colors cursor-pointer"
                title="Previous scenario"
              >
                &larr; Prev
              </button>
              <span>|</span>
              <button
                type="button"
                onClick={handleNextScenario}
                className="hover:text-text-main transition-colors cursor-pointer"
                title="Next scenario"
              >
                Next &rarr;
              </button>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main tracking-tight">
            {currentScenario.title}
          </h2>

          {/* Situation Box */}
          <div className="bg-surface-base border border-surface-border rounded-2xl p-5 sm:p-6 space-y-2 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">
              Situation
            </h3>
            <p className="text-sm sm:text-base text-text-main leading-relaxed">
              {currentScenario.context}
            </p>
          </div>

          {/* The Request Box */}
          <div className="bg-card-bg/90 border-l-4 border-l-primary border border-surface-border rounded-2xl p-5 sm:p-6 space-y-2 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary">
              The Request
            </h3>
            <p className="text-sm sm:text-base text-text-main leading-relaxed">
              {currentScenario.request}
            </p>
          </div>

          {/* Prompt and Response Choices */}
          <div className="space-y-3 pt-2">
            <h3 className="text-base sm:text-lg font-bold text-text-main flex items-center space-x-2">
              <HelpCircle className="w-5 h-5 text-primary" />
              <span>How would you respond professionally?</span>
            </h3>

            <div className="grid grid-cols-1 gap-3.5">
              {currentScenario.responses.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setSelectedResponse(option.id)}
                  className="group p-5 rounded-2xl border border-surface-border hover:border-primary bg-surface-base hover:bg-surface-hover text-left transition-all shadow-xs cursor-pointer space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <strong className="text-sm sm:text-base font-bold text-text-main group-hover:text-primary transition-colors">
                      {option.label}
                    </strong>
                    <span className="w-7 h-7 rounded-lg bg-btn-neutral-badge text-btn-neutral-badge-text group-hover:bg-primary group-hover:text-white flex items-center justify-center text-xs font-bold transition-colors">
                      &rarr;
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-muted italic leading-relaxed">
                    {option.text}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <p className="text-xs text-text-subtle italic">
            Think about your current workload, the importance of the request, who is asking, whether the task belongs to your role, and whether someone else could reasonably take it on.
          </p>

          <div className="pt-2 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setSelectedScenarioIndex(null)}
              className="text-xs text-text-muted hover:text-text-main flex items-center space-x-1 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all scenarios</span>
            </button>
            <button
              type="button"
              onClick={handleNextScenario}
              className="py-2.5 px-4 rounded-xl bg-surface-base hover:bg-surface-hover text-text-muted hover:text-text-main font-semibold text-xs border border-surface-border flex items-center space-x-1.5 transition-all cursor-pointer"
            >
              <span>Skip to next scenario</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* VIEW 3: Response Feedback & Tri-Factor Impact */}
      {currentScenario && selectedResponse && (
        <div className="space-y-6 animate-fade-in">
          {/* Choice Header */}
          <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-surface-border">
            <div className="flex items-center space-x-2 text-xs text-text-muted">
              <span>Your response choice:</span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center space-x-1.5 ${getBadgeStyle(
                  selectedResponse
                )}`}
              >
                {getHeaderIcon(selectedResponse)}
                <span>{RESPONSE_LABELS[selectedResponse]}</span>
              </span>
            </div>
            <span className="text-xs text-text-subtle">
              Case #{currentScenario.id}: {currentScenario.title}
            </span>
          </div>

          {/* Script Quote */}
          {(() => {
            const choice = currentScenario.responses.find(
              (r) => r.id === selectedResponse
            );
            if (!choice) return null;

            return (
              <>
                <div className="bg-surface-base border border-surface-border rounded-2xl p-5 sm:p-6 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-text-muted flex items-center space-x-1.5">
                    <CornerDownRight className="w-3.5 h-3.5 text-primary" />
                    <span>What you said:</span>
                  </span>
                  <blockquote className="text-base sm:text-lg font-medium text-text-main italic">
                    {choice.text}
                  </blockquote>
                </div>

                {/* Impact Breakdown Cards */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-primary">
                    What this choice could mean
                  </h3>

                  {/* Psychological Impact */}
                  <div className="bg-surface-base border border-surface-border rounded-2xl p-5 sm:p-6 space-y-2">
                    <div className="flex items-center space-x-2 text-text-main font-bold text-sm sm:text-base">
                      <Brain className="w-4 h-4 text-primary shrink-0" />
                      <span>Psychological impact</span>
                    </div>
                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed pl-6">
                      {choice.impact.psychological}
                    </p>
                  </div>

                  {/* Career Impact */}
                  <div className="bg-surface-base border border-surface-border rounded-2xl p-5 sm:p-6 space-y-2">
                    <div className="flex items-center space-x-2 text-text-main font-bold text-sm sm:text-base">
                      <TrendingUp className="w-4 h-4 text-blue-sky shrink-0" />
                      <span>Potential career impact</span>
                    </div>
                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed pl-6">
                      {choice.impact.career}
                    </p>
                  </div>

                  {/* Decision-Tree Reflection */}
                  <div className="bg-surface-base border-l-4 border-l-primary border border-surface-border rounded-2xl p-5 sm:p-6 space-y-2">
                    <div className="flex items-center space-x-2 text-text-main font-bold text-sm sm:text-base">
                      <Sparkles className="w-4 h-4 text-primary shrink-0" />
                      <span>Decision-tree reflection</span>
                    </div>
                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed pl-6">
                      {choice.impact.reflection}
                    </p>
                  </div>
                </div>

                {/* Balanced Context Note */}
                <div className="p-4 rounded-xl bg-card-bg/60 border border-surface-border text-xs text-text-subtle flex items-start space-x-2.5">
                  <AlertCircle className="w-4 h-4 text-text-subtle shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    There is not always one universally correct response. Context, workload, team norms, role expectations, and the consequences of saying no can all change what is reasonable.
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedResponse(null)}
                    className="flex-1 py-3 px-5 rounded-xl bg-btn-neutral-bg hover:bg-btn-neutral-hover border border-btn-neutral-border text-btn-neutral-text font-bold text-xs sm:text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-xs"
                  >
                    <RotateCcw className="w-4 h-4 text-primary" />
                    <span>Try another response</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNextScenario}
                    className="flex-1 py-3 px-5 rounded-xl bg-linear-to-r from-primary to-primary-dark hover:from-primary/90 hover:to-primary-dark/90 text-white font-bold text-xs sm:text-sm shadow-md shadow-primary/25 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>
                      {selectedScenarioIndex === SCENARIOS.length - 1
                        ? 'Restart from Case 1'
                        : 'Next scenario'}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedScenarioIndex(null);
                      setSelectedResponse(null);
                    }}
                    className="py-3 px-4 rounded-xl bg-surface-base hover:bg-surface-hover text-text-muted hover:text-text-main text-xs font-semibold border border-surface-border flex items-center justify-center space-x-1.5 transition-all cursor-pointer"
                  >
                    <LayoutGrid className="w-4 h-4" />
                    <span className="hidden sm:inline">All cases</span>
                  </button>
                </div>
              </>
            );
          })()}
        </div>
      )}

      {/* Scenario Submission Form for Community / Users */}
      <ScenarioSubmissionForm />
    </div>
  );
};

export default ScenarioRolePlayModule;
