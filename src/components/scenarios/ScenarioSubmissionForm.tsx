import React, { useState } from 'react';
import { CheckCircle2, MessageSquarePlus, Send } from 'lucide-react';

interface ScenarioSubmissionFormProps {
  onSubmitted?: () => void;
}

export const ScenarioSubmissionForm: React.FC<ScenarioSubmissionFormProps> = ({
  onSubmitted,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Office Housework & Culture');
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
    setCategory('Office Housework & Culture');
    setSituation('');
    setContext('');
    setSubmitted(false);
  };

  return (
    <div className="bg-surface-base border border-surface-border rounded-2xl p-6 sm:p-8 space-y-6 mt-8 transition-colors">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl bg-tag-bg text-primary flex items-center justify-center shrink-0 border border-tag-border">
          <MessageSquarePlus className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-text-main">
            Submit a Real-Life Scenario
          </h3>
          <p className="text-xs text-text-muted">
            Experienced an awkward boundary test or invisible task at work? Share it to help our development team craft new scenarios!
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
            Submit Another Scenario
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="scenario-title"
              className="block text-xs font-bold text-text-main uppercase tracking-wider mb-1.5"
            >
              Scenario Title *
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
              <option value="Office Housework & Culture">Office Housework &amp; Culture</option>
              <option value="Meeting Dynamics & Authority">Meeting Dynamics &amp; Authority</option>
              <option value="Scope Creep & Overtime">Scope Creep &amp; Overtime</option>
              <option value="Mentorship & Onboarding Load">Mentorship &amp; Onboarding Load</option>
              <option value="People-Pleasing & Imposter Syndrome">People-Pleasing &amp; Imposter Syndrome</option>
              <option value="Other">Other Workplace Dilemma</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="scenario-situation"
              className="block text-xs font-bold text-text-main uppercase tracking-wider mb-1.5"
            >
              What Happened? (The Situation) *
            </label>
            <textarea
              id="scenario-situation"
              required
              rows={3}
              value={situation}
              onChange={(e) => setSituation(e.target.value)}
              placeholder="Describe how the request was made, who asked, and what expectations were set..."
              className="w-full px-4 py-2.5 rounded-xl border border-btn-neutral-border bg-btn-neutral-bg text-text-main placeholder-text-subtle text-sm focus:outline-hidden focus:border-primary transition-colors resize-none"
            />
          </div>

          <div>
            <label
              htmlFor="scenario-context"
              className="block text-xs font-bold text-text-main uppercase tracking-wider mb-1.5"
            >
              How did you feel / How was it handled? (Optional)
            </label>
            <input
              id="scenario-context"
              type="text"
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="e.g., Felt pressured to say yes immediately, or tried to deflect with humor..."
              className="w-full px-4 py-2.5 rounded-xl border border-btn-neutral-border bg-btn-neutral-bg text-text-main placeholder-text-subtle text-sm focus:outline-hidden focus:border-primary transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-5 rounded-xl bg-linear-to-r from-primary to-primary-dark hover:from-primary/90 hover:to-primary-dark/90 text-white font-bold text-sm shadow-md shadow-primary/25 transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Send className="w-4 h-4 text-white" />
            <span>Send Scenario to Development Team</span>
          </button>
        </form>
      )}
    </div>
  );
};
