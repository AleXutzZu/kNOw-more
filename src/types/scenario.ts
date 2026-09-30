import type { LucideIcon } from 'lucide-react';

export interface ScenarioOption {
  id: string;
  label: string;
  text: string;
  strategyType: string;
  title: string;
  feedback: string;
  script: string;
  tagColor: string;
  badgeBg: string;
  icon: LucideIcon;
}

export interface Scenario {
  id: number;
  category: string;
  title: string;
  situation: string;
  options: ScenarioOption[];
}
