import React, { useState } from 'react';
import { Check, Copy, RotateCcw } from 'lucide-react';
import type { ResultNode } from '../../types/decisionTree';

interface ResultCardProps {
  result: ResultNode;
  onReset: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({ result, onReset }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const IconComponent = result.icon;

  const copySummary = async () => {
    const text = `The Overtime Filter Outcome: ${result.title}\n\nVerdict: ${result.description}\n\nAction Script: ${result.script}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy to clipboard', err);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in text-center sm:text-left">
      <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-5">
        <div
          className={`w-16 h-16 rounded-2xl shrink-0 flex items-center justify-center shadow-lg ${result.badgeBg}`}
        >
          <IconComponent className="w-8 h-8" />
        </div>
        <div>
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 ${result.tagColor}`}
          >
            {result.phase}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {result.title}
          </h2>
        </div>
      </div>

      {/* Outcome Card */}
      <div className="bg-bg-surface/50 border border-blue-sky/20 rounded-2xl p-6 sm:p-8 space-y-4">
        <h4 className="text-sm font-semibold text-accent uppercase tracking-wider">
          Strategic Verdict
        </h4>
        <p className="text-white/90 text-base sm:text-lg leading-relaxed">
          {result.description}
        </p>

        <div className="pt-4 border-t border-blue-sky/20">
          <h5 className="text-xs font-bold text-blue-sky uppercase tracking-wider mb-2">
            Recommended Action Script / Next Step:
          </h5>
          <div className="p-4 rounded-xl bg-bg-deep/80 border border-blue-sky/30 text-accent text-sm italic">
            {result.script}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button
          type="button"
          onClick={onReset}
          className="flex-1 py-4 px-6 rounded-xl bg-bg-surface/80 hover:bg-bg-surface text-white font-bold text-sm transition-all border border-blue-sky/30 flex items-center justify-center space-x-2 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4 text-blue-sky" />
          <span>Evaluate Another Request</span>
        </button>
        <button
          type="button"
          onClick={copySummary}
          className="flex-1 py-4 px-6 rounded-xl bg-linear-to-r from-primary to-primary-dark hover:from-primary/90 hover:to-primary-dark/90 text-white font-bold text-sm shadow-lg shadow-primary/30 transition-all flex items-center justify-center space-x-2 cursor-pointer"
        >
          {copied ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? 'Copied to Clipboard!' : 'Copy Action Plan'}</span>
        </button>
      </div>
    </div>
  );
};
