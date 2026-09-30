import {
  AlertTriangle,
  Award,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  XCircle,
  Zap,
} from 'lucide-react';
import type { QuestionNode, ResultNode } from '../types/decisionTree';

export const INITIAL_QUESTION_ID = 'q1';
export const TOTAL_STEPS = 5;

export const QUESTIONS: Record<string, QuestionNode> = {
  q1: {
    phase: 'Phase 1: Nature of Work',
    tag: 'Revenue & Leadership',
    text: 'Is this task tied to core revenue generation, client acquisition, or a high-visibility leadership deliverable?',
    context: 'Focuses on direct business impact rather than peripheral tasks.',
    onYes: 'q2_revenue',
    onNo: 'q1_housework',
  },
  q1_housework: {
    phase: 'Phase 1: Nature of Work',
    tag: 'Office Housework',
    text: 'Is this task classified as "office housework" (e.g., event planning, note-taking, onboarding, mentoring, or admin cleanup) historically distributed disproportionately to women?',
    context: 'Invisible labor audit check.',
    onYes: 'result_invisible_labor',
    onNo: 'q1_senior',
  },
  q1_senior: {
    phase: 'Phase 1: Nature of Work',
    tag: 'Executive Priority',
    text: 'Is this task explicitly assigned by senior leadership as a strategic company priority where your contribution will be publicly credited?',
    context: 'Evaluating top-down sponsorship.',
    onYes: 'q2_revenue',
    onNo: 'result_decline_low_impact',
  },
  q2_revenue: {
    phase: 'Phase 2: Strategic Exchange',
    tag: 'Workload Trade-off',
    text: 'Does taking on this work require you to deprioritize, pause, or hand off another core project of equal or greater value?',
    context: 'Zero-sum capacity check.',
    onYes: 'q2_agreement',
    onNo: 'q4_capacity',
  },
  q2_agreement: {
    phase: 'Phase 2: Strategic Exchange',
    tag: 'Trade-off Agreement',
    text: 'Have you secured an explicit trade-off agreement with your manager (e.g., "I can take this if we deprioritize Project X")?',
    context: 'Preventing silent scope creep.',
    onYes: 'q4_capacity',
    onNo: 'q2_resources',
  },
  q2_resources: {
    phase: 'Phase 2: Strategic Exchange',
    tag: 'Protected Resources',
    text: 'Will you receive protected time, budget, or headcount to execute this effectively without working overtime?',
    context: 'Ensuring adequate resourcing.',
    onYes: 'q4_capacity',
    onNo: 'result_renegotiate_resources',
  },
  q3_vacuum: {
    phase: 'Phase 3: Psychological Drivers',
    tag: 'Peer Dynamics',
    text: 'Are you stepping up because a male colleague or peer safely opted out or ignored the request, leaving a vacuum you feel morally obligated to fill?',
    context: 'Checking for systemic gendered expectations.',
    onYes: 'result_let_vacuum',
    onNo: 'q3_imposter',
  },
  q3_imposter: {
    phase: 'Phase 3: Psychological Drivers',
    tag: 'Perfectionism Trap',
    text: 'Are you accepting this task because of an internal narrative that you must perform at 150% to prove your worth or equal competence?',
    context: 'Imposter syndrome pressure evaluation.',
    onYes: 'q3_consequences',
    onNo: 'q4_capacity',
  },
  q3_consequences: {
    phase: 'Phase 3: Psychological Drivers',
    tag: 'Professional Impact',
    text: 'Would declining this request result in severe, measurable professional consequences (e.g., performance review impact), rather than temporary discomfort or emotional guilt?',
    context: 'Distinguishing fear from actual risk.',
    onYes: 'q4_capacity',
    onNo: 'result_practice_no',
  },
  q4_capacity: {
    phase: 'Phase 4: Sustainable Capacity & ROI',
    tag: 'Baseline Burnout',
    text: 'Does your current workload already include regular after-hours or weekend work to maintain baseline standards?',
    context: 'Absolute capacity boundary check.',
    onYes: 'result_absolute_stop',
    onNo: 'q4_promotion',
  },
  q4_promotion: {
    phase: 'Phase 4: Sustainable Capacity & ROI',
    tag: 'Career ROI',
    text: 'Does taking this on have a direct, documented link to your next formal promotion cycle within the next 12 months?',
    context: 'Ensuring clear career return on investment.',
    onYes: 'result_strategic_accept',
    onNo: 'result_timebox_offer',
  },
};

export const RESULTS: Record<string, ResultNode> = {
  result_invisible_labor: {
    phase: 'Phase 1 Verdict',
    title: 'Classic Invisible Labor Trap',
    description:
      'You have identified classic "office housework." Taking this on without credit or compensation reinforces inequitable labor distribution. This should be rotated across the team or politely declined.',
    script:
      '"I would love to support the team here, but given my current focus on [Core Project], I won\'t be able to take on this coordination. Can we establish a rotating schedule or look at who handled this last?"',
    tagColor: 'bg-tag-bg text-tag-text border border-tag-border',
    badgeBg: 'bg-primary text-white',
    icon: AlertTriangle,
  },
  result_decline_low_impact: {
    phase: 'Phase 1 Verdict',
    title: 'Low-Impact Work: Decline',
    description:
      'This task is not tied to revenue, leadership visibility, or executive priorities. Absorbing it will drain your energy with zero career return.',
    script:
      '"Thanks for thinking of me for this. My capacity is fully committed to my primary deliverables this quarter, so I won\'t be able to take this on."',
    tagColor: 'bg-blue-sky/20 text-text-main border border-blue-sky/40',
    badgeBg: 'bg-blue-sky text-slate-950',
    icon: XCircle,
  },
  result_renegotiate_resources: {
    phase: 'Phase 2 Verdict',
    title: 'Renegotiate Scope or Resources',
    description:
      'While the work has merit, absorbing it without headcount, budget, or timeline adjustments guarantees burnout. Do not accept it as pure overflow.',
    script:
      '"I am excited about this initiative. To ensure I can deliver at a high standard without compromising my current projects, we will need to reallocate [Project X] or adjust our timeline by two weeks."',
    tagColor: 'bg-secondary/20 text-text-main border border-secondary/40',
    badgeBg: 'bg-secondary text-white',
    icon: Zap,
  },
  result_let_vacuum: {
    phase: 'Phase 3 Verdict',
    title: 'Let the Vacuum Exist',
    description:
      'You are stepping in because someone else opted out. Rescuing the system masks the missing resource and places the penalty on you. Let the vacuum exist so the organization recognizes the gap.',
    script:
      '"I notice this task is unassigned. Since our team capacity is stretched, let\'s bring this to our next sync to discuss proper resourcing rather than picking it up ad-hoc."',
    tagColor: 'bg-secondary/20 text-text-main border border-secondary/40',
    badgeBg: 'bg-secondary text-white',
    icon: HelpCircle,
  },
  result_practice_no: {
    phase: 'Phase 3 Verdict',
    title: 'Emotional Guilt Override',
    description:
      'Your hesitation is driven by discomfort or guilt rather than genuine professional risk. Practice delivering a calm, professional "no" without over-explaining or apologizing.',
    script:
      '"Thanks for asking! I won\'t be able to take this on right now. Wishing you the best in getting it sorted!"',
    tagColor: 'bg-tag-bg text-tag-text border border-tag-border',
    badgeBg: 'bg-primary text-white',
    icon: ShieldCheck,
  },
  result_absolute_stop: {
    phase: 'Phase 4 Verdict',
    title: 'Absolute Stop: Decline Immediately',
    description:
      'You are already relying on overtime to maintain baseline standards. Adding any extra work will tip you into burnout. Protect your health and capacity.',
    script:
      '"Due to my current workload and ongoing commitments, I have zero bandwidth for additional projects right now. I cannot take this on."',
    tagColor: 'bg-primary-dark/20 text-text-main border border-primary-dark/40',
    badgeBg: 'bg-primary-dark text-accent border border-accent/40',
    icon: XCircle,
  },
  result_strategic_accept: {
    phase: 'Phase 4 Verdict',
    title: 'Strategic Go with Documentation',
    description:
      'All conditions are met: clear career ROI, capacity confirmed, and high impact. Take on the work, but ensure the agreement and expectations are locked in writing with your manager.',
    script:
      '"I\'m aligned on taking this on as discussed. I\'ll document our trade-offs and send a recap so we are aligned on success metrics for my upcoming review cycle."',
    tagColor: 'bg-blue-cyan/25 text-text-main border border-blue-cyan/40',
    badgeBg: 'bg-blue-cyan text-slate-950',
    icon: CheckCircle2,
  },
  result_timebox_offer: {
    phase: 'Phase 4 Verdict',
    title: 'Counter-Offer with Time-Boxed Contribution',
    description:
      'This is moderately useful but lacks direct promotion ROI. Do not take on full ownership; offer a minimal, time-boxed contribution instead.',
    script:
      '"I can spend a maximum of 2 hours this week consulting on this, but I cannot own the deliverable. Let me know if that support helps!"',
    tagColor: 'bg-blue-sky/20 text-text-main border border-blue-sky/40',
    badgeBg: 'bg-blue-sky text-slate-950',
    icon: Award,
  },
};
