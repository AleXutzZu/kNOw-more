export const NEXT = 'next' as const;
export const ACCEPT = 'accept' as const;
export const DECLINE = 'decline' as const;

export type OutcomeType = typeof NEXT | typeof ACCEPT | typeof DECLINE;

export interface DecisionQuestion {
  id: number;
  text: string;
  yes: OutcomeType;
  no: OutcomeType;
}

export const OUTCOME_LABEL: Record<OutcomeType, string> = {
  [NEXT]: 'Next question.',
  [ACCEPT]: 'Accept the task.',
  [DECLINE]: 'Decline the task.',
};

/*
  Questions are listed in priority order (1 = most important).
  `yes` / `no` say where each answer leads: NEXT (the following question
  in this array), ACCEPT or DECLINE (final decisions).
*/
export const QUESTIONS: DecisionQuestion[] = [
  {
    id: 1,
    text: 'Would this help you grow, or earn you visible credit at a senior level?',
    yes: ACCEPT,
    no: NEXT,
  },
  {
    id: 2,
    text: 'Is this coming from your manager or someone who oversees your work?',
    yes: ACCEPT,
    no: NEXT,
  },
  {
    id: 3,
    text: 'Are you up against a tight deadline of your own right now?',
    yes: DECLINE,
    no: NEXT,
  },
  {
    id: 4,
    text: 'Would this take more time than you can realistically give?',
    yes: DECLINE,
    no: NEXT,
  },
  {
    id: 5,
    text: "Does this really matter for the company's goals?",
    yes: ACCEPT,
    no: NEXT,
  },
  {
    id: 6,
    text: 'If you say no, would there be real, measurable consequences, like a documented review impact, beyond feeling awkward or guilty?',
    yes: ACCEPT,
    no: NEXT,
  },
  {
    id: 7,
    text: 'Are you genuinely looking forward to doing this?',
    yes: ACCEPT,
    no: NEXT,
  },
  {
    id: 8,
    text: 'Does this sit within your role and responsibilities?',
    yes: ACCEPT,
    no: NEXT,
  },
  {
    id: 9,
    text: 'Is there someone else who could take this on?',
    yes: NEXT,
    no: ACCEPT,
  },
  {
    id: 10,
    text: 'Is this "office housework" (event planning, note-taking, onboarding, admin cleanup) that too often lands on the same people?',
    yes: DECLINE,
    no: NEXT,
  },
  {
    id: 11,
    text: 'Has this person really been there for you before?',
    yes: ACCEPT,
    no: NEXT,
  },
  {
    id: 12,
    text: 'Is this truly urgent for the team, not just for the person asking?',
    yes: ACCEPT,
    no: NEXT,
  },
  {
    id: 13,
    text: "Might you need this person's support down the road?",
    yes: ACCEPT,
    no: NEXT,
  },
  {
    id: 14,
    text: 'Are you saying yes to prove yourself, as if you must give 150% to earn your place?',
    yes: DECLINE,
    no: NEXT,
  },
  {
    id: 15,
    text: 'Have you agreed on a trade-off? (e.g. "I\'ll take this if we move Project X back.")',
    yes: ACCEPT,
    no: DECLINE,
  },
];
