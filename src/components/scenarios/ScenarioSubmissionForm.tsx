import React, { useState } from 'react';
import { CheckCircle2, MessageSquarePlus, Send } from 'lucide-react';

interface ScenarioSubmissionFormProps {
  onSubmitted?: () => void;
}

export const ScenarioSubmissionForm: React.FC<ScenarioSubmissionFormProps> = ({
  onSubmitted,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Office housework');
  const [situation, setSituation] = useState('');
  const [context, setContext] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim() || !situation.trim()) return;

    // Simulate saving / submitting
    const submissions = JSON.parse(
      localStorage.getItem('know_more_user_scenarios') || '[]'
    );
    submissions.push({
      id: Date.now(),
      title: title.trim(),
      category,
      situation: situation.trim(),
      context: context.trim(),
      submittedAt: new Date().toISOString(),
    });
    localStorage.setItem('know_more_user_scenarios', JSON.stringify(submissions));

    setSubmitted(true);
    if (onSubmitted) onSubmitted();
  };

  const handleReset = () => {
    setTitle('');
    setCategory('Office housework');
    setSituation('');
    setContext('');
    setSubmitted(false);
  };

  return (
    <div className="bg-surface-base border border-surface-border rounded-2xl p-6 sm:p-8 mt-12 space-y-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-primary font-bold text-sm tracking-wide uppercase">
            <MessageSquarePlus className="w-4 h-4" />
            <span>Community contributions</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-text-main">
            Submit a real workplace dilemma
          </h3>
          <p className="text-xs sm:text-sm text-text-muted max-w-xl">
            Have you faced an unfair or ambiguous task request? Share it anonymously with our developers to help us add new scenarios.
          </p>
        </div>
      </div>

      {submitted ? (
        <div className="bg-card-bg border border-blue-sky/30 rounded-xl p-6 text-center space-y-3 animate-fade-in">
          <div className="w-12 h-12 rounded-full bg-accent/20 text-accent mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-primary" />
          </div>
          <h4 className="text-base font-bold text-text-main">Thank you for contributing!</h4>
          <p className="text-xs text-text-muted max-w-md mx-auto">
            Your scenario has been logged for our research and development team. We review submissions regularly to craft new decision paths and scripts.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 rounded-xl bg-surface-base hover:bg-surface-hover text-text-main font-semibold text-xs border border-surface-border transition-colors cursor-pointer"
          >
            Submit another scenario
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="scenario-title"
              className="block text-xs font-bold text-text-main uppercase tracking-wider mb-1.5"
            >
              Scenario title *
            </label>
            <input
              id="scenario-title"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Asked to organize the team retreat off-hours"
              className="w-full px-4 py-2.5 rounded-xl border border-btn-neutral-border bg-btn-neutral-bg text-text-main placeholder-text-subtle text-sm focus:outline-hidden focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="scenario-category"
              className="block text-xs font-bold text-text-main uppercase tracking-wider mb-1.5"
            >
              Category
            </label>
            <select
              id="scenario-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-btn-neutral-border bg-btn-neutral-bg text-text-main text-sm focus:outline-hidden focus:border-primary transition-colors"
            >
              <option value="Office housework">Office housework</option>
              <option value="Workload & deadlines">Workload &amp; deadlines</option>
              <option value="Growth & opportunities">Growth &amp; opportunities</option>
              <option value="Other workplace dilemma">Other workplace dilemma</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="scenario-situation"
              className="block text-xs font-bold text-text-main uppercase tracking-wider mb-1.5"
            >
              The situation &amp; request *
            </label>
            <textarea
              id="scenario-situation"
              required
              rows={3}
              value={situation}
              onChange={(e) => setSituation(e.target.value)}
              placeholder="Describe what was asked, by whom, and what the expectations were..."
              className="w-full px-4 py-2.5 rounded-xl border border-btn-neutral-border bg-btn-neutral-bg text-text-main placeholder-text-subtle text-sm focus:outline-hidden focus:border-primary transition-colors resize-none"
            />
          </div>

          <div>
            <label
              htmlFor="scenario-context"
              className="block text-xs font-bold text-text-main uppercase tracking-wider mb-1.5"
            >
              Outcome or personal reflection (Optional)
            </label>
            <textarea
              id="scenario-context"
              rows={2}
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="How did you respond? What was the career or psychological consequence?"
              className="w-full px-4 py-2.5 rounded-xl border border-btn-neutral-border bg-btn-neutral-bg text-text-main placeholder-text-subtle text-sm focus:outline-hidden focus:border-primary transition-colors resize-none"
            />
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-linear-to-r from-primary to-primary-dark hover:from-primary/90 hover:to-primary-dark/90 text-white font-bold text-xs sm:text-sm shadow-md shadow-primary/25 transition-all flex items-center space-x-2 cursor-pointer"
            >
              <span>Submit scenario</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
