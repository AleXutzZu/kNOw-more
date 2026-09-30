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

export interface OutcomeExplanation {
  title: string;
  body: string;
  guidance?: string;
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

/*
  These explanations and actionable scripts are attached to individual questions.
  When a question produces a final decision, we use the question
  that produced that decision to explain WHY the decision makes sense and
  offer a specific, tailored response script.
*/
export const OUTCOME_EXPLANATIONS: Record<
  number,
  Partial<Record<'yes' | 'no', OutcomeExplanation>>
> = {
  1: {
    yes: {
      title: 'This could be a worthwhile opportunity.',
      body:
        'Yes. This task has a clear potential benefit for you: it could help you develop a skill, build visibility, or demonstrate your work to people who can influence your career. Before accepting, make sure the expected outcome, deadline, and amount of work are clear.',
      guidance:
        '“I\'m excited to take this on as it aligns with my growth goals. Let\'s clarify the expected deliverables and timeline so I can carve out dedicated focus.”',
    },
  },

  2: {
    yes: {
      title: 'There is a clear reason to consider accepting.',
      body:
        'Yes. Because the request comes from someone who oversees your work, it is more directly connected to your responsibilities and priorities. It is reasonable to consider this part of your workload rather than treating it like an informal favor. You can still ask what should be deprioritized if the new task affects your existing commitments.',
      guidance:
        '“I can prioritize this. Let\'s review my current sprint deliverables to see what should be adjusted or deprioritized to make room for it.”',
    },
  },

  3: {
    yes: {
      title: 'You already have a competing priority.',
      body:
        'You have a tight deadline of your own, so taking on another task could put both pieces of work at risk. This is a reasonable situation to push back. Instead of simply saying no, you can explain your current deadline and ask whether the new task can wait or whether another priority should move.',
      guidance:
        '“I\'m fully focused on meeting my deadline for [Project] right now, so I won\'t have capacity to take this on. Could we revisit this next week or delegate it?”',
    },
  },

  4: {
    yes: {
      title: 'The task does not fit your available capacity.',
      body:
        'You already know that this would take more time than you can realistically give. That is an important reason to decline or renegotiate the request. Saying yes despite having no capacity can create stress, reduce the quality of your work, and make an unrealistic workload look sustainable.',
      guidance:
        '“Given the scope required to deliver high quality, I don\'t have enough capacity right now without compromising my core deliverables.”',
    },
  },

  5: {
    yes: {
      title: "The task has a clear connection to the team's goals.",
      body:
        'Yes. The task appears to contribute to something the organization is actually trying to accomplish. That makes it easier to justify spending your time on it. Before committing, clarify what is expected and how it fits alongside your existing priorities.',
      guidance:
        '“Since this is critical for team goals, I\'ll take it on. Can you confirm the primary deliverable so I can align it with upcoming milestones?”',
    },
  },

  6: {
    yes: {
      title: 'There is a concrete reason to take the request seriously.',
      body:
        'Yes. If declining would have a documented or measurable impact on your work, evaluation, or responsibilities, this is different from accepting simply because you feel guilty or uncomfortable saying no. Consider clarifying the expectation with your manager and agreeing on the scope or deadline.',
      guidance:
        '“Understood. Because of the direct impact on project outcomes, I will integrate this. Let\'s agree on the exact requirements and target completion date.”',
    },
  },

  7: {
    yes: {
      title: 'This is something you genuinely want to do.',
      body:
        'Yes. You are interested in the task, so accepting it can be a positive choice rather than an obligation. You have both a practical reason and a personal reason to spend your time on it. Just make sure your enthusiasm does not lead you to accept an unrealistic scope.',
      guidance:
        '“I\'d love to work on this! To make sure I do it justice without overextending, let\'s confirm the expected timeline and scope.”',
    },
  },

  8: {
    yes: {
      title: 'The task fits your role.',
      body:
        'Yes. Because this falls within your normal responsibilities, accepting it is generally consistent with what your role requires. You can still discuss priorities if the task competes with other work, but the request itself is not outside the scope of your position.',
      guidance:
        '“This falls right within my responsibilities. I\'ll slot it into my upcoming schedule—let me know if there are specific nuances to keep in mind.”',
    },
  },

  9: {
    no: {
      title: 'There is no obvious alternative person to take this on.',
      body:
        'Yes, this can be a reasonable task to accept if there is genuinely no one else available and the task is important. The key distinction is between helping because the team needs you and repeatedly becoming the default person for work that should be distributed more fairly.',
      guidance:
        '“Since no one else is currently available, I\'ll step in to help the team. Let\'s document the workflow so we can share or rotate this knowledge in the future.”',
    },
  },

  10: {
    yes: {
      title: 'This may be a pattern of "office housework".',
      body:
        'This is a reasonable place to push back. Administrative or support tasks are not automatically inappropriate, but they can become unfair when the same people are repeatedly expected to handle them without recognition or rotation. Consider asking whether the task can be shared, rotated, or formally recognized as part of someone\'s workload.',
      guidance:
        '“I\'ve handled organizing several times recently. In the interest of fairness, could we set up a rotating team roster or assign someone who hasn\'t taken a turn?”',
    },
  },

  11: {
    yes: {
      title: 'There is a reciprocal relationship here.',
      body:
        'Yes. Your teammate has supported you before, so accepting this request can be a reasonable way to maintain a collaborative working relationship. This does not mean you owe them unlimited help. Check that the request is still manageable and that the relationship is genuinely reciprocal.',
      guidance:
        '“You\'ve really helped me out in the past, so I\'m happy to help you with this! Let\'s sync briefly on what you need by when.”',
    },
  },

  12: {
    yes: {
      title: 'The urgency appears to be real.',
      body:
        'Yes. If the team genuinely needs this done soon, helping can be a reasonable priority. A useful next step is to clarify exactly what "urgent" means, what needs to be delivered, and which of your existing tasks should move if necessary.',
      guidance:
        '“Given the urgent blocker for the team, I can jump in to resolve this today. Which of my current tasks can we pause while I unblock this?”',
    },
  },

  13: {
    yes: {
      title: "There may be value in maintaining this working relationship.",
      body:
        'Yes. If this person is someone you regularly collaborate with or may reasonably need support from later, helping can strengthen a healthy professional relationship. The important distinction is cooperation versus obligation: you can be helpful without accepting every request they make.',
      guidance:
        '“I\'m glad to collaborate and support this. Let\'s define the key deliverables so we can keep the scope focused and efficient.”',
    },
  },

  14: {
    yes: {
      title: 'You may be taking on the task for the wrong reason.',
      body:
        'This is a good reason to pause or decline. If the main reason you are saying yes is to prove that you deserve your position or that you can work harder than everyone else, you may be accepting an unnecessary burden. Your value at work should not depend on constantly exceeding reasonable limits.',
      guidance:
        '“Thank you for thinking of me, but I need to focus on delivering high quality on my current commitments rather than taking on extra scope.”',
    },
  },

  15: {
    yes: {
      title: 'You have established a clear trade-off.',
      body:
        'Yes. This is a particularly useful way to accept additional work because the new task comes with an explicit adjustment to your existing workload. For example, agreeing to take this task while moving another deadline makes your capacity visible and prevents the extra work from simply being added on top of everything else.',
      guidance:
        '“I will take on this task since we agreed to adjust [Project X] to accommodate the time required.”',
    },
    no: {
      title: 'There is no agreed trade-off for the additional work.',
      body:
        'You do not currently have a clear reason to add this task to your workload. If accepting it means doing everything you already committed to plus this new request, it is reasonable to decline or negotiate a trade-off. You could say: "I can take this on, but I\'ll need to move X to next week. Which should take priority?"',
      guidance:
        '“I can only take this on if we push back [Project X] or reduce the scope of [Deliverable Y]. Which of those trade-offs works best for leadership?”',
    },
  },
};

export function getExplanation(
  questionId: number,
  answer: 'yes' | 'no'
): OutcomeExplanation {
  return (
    OUTCOME_EXPLANATIONS[questionId]?.[answer] || {
      title:
        answer === 'yes'
          ? 'There is a reasonable basis for accepting this task.'
          : 'There is a reasonable basis for reconsidering this task.',
      body:
        answer === 'yes'
          ? 'Your answer provides a practical reason to consider accepting the request. Before committing, make sure the scope, deadline, and impact on your existing work are clear.'
          : 'Your answer suggests that accepting may not be the best fit right now. Consider declining, asking for more information, or proposing a different arrangement.',
      guidance:
        answer === 'yes'
          ? 'Before committing, confirm the scope, deadline, and what should happen to your existing priorities.'
          : 'You can decline respectfully, or propose a trade-off, different deadline, smaller scope, or another person who could help.',
    }
  );
}
