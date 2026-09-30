import type { LucideIcon } from 'lucide-react';

export type DecisionStep = 'welcome' | 'question' | 'result';

export interface QuestionNode {
  phase: string;
  tag: string;
  text: string;
  context: string;
  onYes: string;
  onNo?: string;
}

export interface ResultNode {
  phase: string;
  title: string;
  description: string;
  script: string;
  tagColor: string;
  badgeBg: string;
  icon: LucideIcon;
}

export interface StepHistoryItem {
  id: string;
  answer: boolean;
}
