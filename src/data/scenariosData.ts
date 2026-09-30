import {
  AlertTriangle,
  Award,
  CheckCircle2,
  XCircle,
  Zap,
} from 'lucide-react';
import type { Scenario } from '../types/scenario';

export const SCENARIOS: Scenario[] = [
  {
    id: 1,
    category: 'Office Housework & Culture',
    title: 'The Holiday Party & Culture Committee Request',
    situation:
      'Your manager casually mentions during a 1:1: "The team really needs someone organized to head up the annual holiday party planning and culture committee this year. You always bring great energy—would you take the lead?"',
    options: [
      {
        id: 'a',
        label: 'A',
        text: 'Say yes enthusiastically because you want to be viewed as a team player and fear being labeled uncooperative.',
        strategyType: 'People-Pleasing Trap',
        title: 'Absorbing Invisible Office Housework',
        feedback:
          'This choice traps you in uncompensated administrative labor that does not factor into performance reviews or promotions, while taking time away from core revenue-generating projects.',
        script:
          '"Sure, I can take that on!" (Leads to 15+ hours of uncredited event coordination on top of regular work).',
        tagColor: 'bg-tag-bg text-tag-text border border-tag-border',
        badgeBg: 'bg-primary text-white',
        icon: AlertTriangle,
      },
      {
        id: 'b',
        label: 'B',
        text: 'Politely decline, stating you have no time.',
        strategyType: 'Blunt Rejection',
        title: 'Direct Refusal (Without Pivot)',
        feedback:
          'While it protects your time, a flat refusal without context can sometimes trigger unfair pushback or create friction if not framed around business priorities.',
        script:
          '"Thanks, but I am too busy to do this." (Can feel slightly abrupt without framing).',
        tagColor: 'bg-secondary/20 text-text-main border border-secondary/40',
        badgeBg: 'bg-secondary text-white',
        icon: XCircle,
      },
      {
        id: 'c',
        label: 'C',
        text: 'Redirect toward a rotating team schedule or suggest leadership formalize a budget for an external event planner.',
        strategyType: 'Systemic Solution & Boundary',
        title: 'Deflecting Invisible Labor Equitably',
        feedback:
          'Excellent move. You shift the burden off yourself while highlighting that office housework should be shared or resourced properly by the company.',
        script:
          '"I appreciate you thinking of me! Given my focus on [Project], I can\'t lead this. Since culture committee work benefits everyone, could we establish a rotating team schedule or hire event support?"',
        tagColor: 'bg-blue-cyan/25 text-text-main border border-blue-cyan/40',
        badgeBg: 'bg-blue-cyan text-slate-950',
        icon: CheckCircle2,
      },
    ],
  },
  {
    id: 2,
    category: 'Meeting Dynamics & Expertise',
    title: 'Taking Notes in a Technical Strategy Meeting',
    situation:
      'You are the senior technical expert in a high-stakes client strategy meeting. As the meeting starts, a male peer turns to you and says, "Hey, could you grab the whiteboard notes and type up the meeting minutes for everyone?"',
    options: [
      {
        id: 'a',
        label: 'A',
        text: 'Silently take notes and agree to circulate them to avoid awkwardness.',
        strategyType: 'The Secretary Trap',
        title: 'Reinforcing Stereotyped Support Roles',
        feedback:
          'Stepping into the secretarial role when you are a senior technical contributor diminishes your perceived authority in front of clients and stakeholders.',
        script:
          '"Sure, no problem." (Takes notes, acting as scribe while peers lead the strategic discussion).',
        tagColor: 'bg-tag-bg text-tag-text border border-tag-border',
        badgeBg: 'bg-primary text-white',
        icon: AlertTriangle,
      },
      {
        id: 'b',
        label: 'B',
        text: 'Calmly redirect note-taking responsibilities to someone else or suggest rotating the task.',
        strategyType: 'Assertive Delegation',
        title: 'Preserving Technical Authority',
        feedback:
          'This establishes that your primary value in the room is technical strategy and expertise, not administrative transcription.',
        script:
          '"Let\'s rotate meeting note-taking so everyone can stay fully engaged in the strategy discussion. Who wants to take notes today?"',
        tagColor: 'bg-blue-cyan/25 text-text-main border border-blue-cyan/40',
        badgeBg: 'bg-blue-cyan text-slate-950',
        icon: CheckCircle2,
      },
      {
        id: 'c',
        label: 'C',
        text: 'Quietly ignore the request and start presenting your technical points without acknowledging the comment.',
        strategyType: 'Strategic Pivot',
        title: 'Ignoring the Distraction',
        feedback:
          'By bypassing the distraction and immediately diving into high-level content, you re-anchor your role as an expert speaker.',
        script:
          '(Begins slide presentation directly on technical metrics without commenting on note-taking).',
        tagColor: 'bg-blue-sky/20 text-text-main border border-blue-sky/40',
        badgeBg: 'bg-blue-sky text-slate-950',
        icon: Zap,
      },
    ],
  },
  {
    id: 3,
    category: 'Scope Creep & Overflow',
    title: 'The Uncompensated Project Extension',
    situation:
      'Your project lead hands you an additional major deliverable right before the weekend, saying: "We need this extra client report added to your scope. I know it wasn\'t originally budgeted, but you always deliver incredible quality!"',
    options: [
      {
        id: 'a',
        label: 'A',
        text: 'Accept it and work through the weekend to make sure it is flawless.',
        strategyType: 'Over-Compensating Burnout',
        title: 'Silent Overtime & Burnout Spiral',
        feedback:
          'Rewarding poor planning with your personal time teaches management that scope creep has no negative consequences, paving the way for chronic burnout.',
        script:
          '"I\'ll work on this over the weekend and have it ready!" (Sacrifices rest and personal boundaries).',
        tagColor: 'bg-tag-bg text-tag-text border border-tag-border',
        badgeBg: 'bg-primary text-white',
        icon: XCircle,
      },
      {
        id: 'b',
        label: 'B',
        text: 'Require a trade-off discussion before agreeing to absorb the new deliverable.',
        strategyType: 'Strategic Trade-off Negotiation',
        title: 'Zero-Sum Resource Management',
        feedback:
          'Professional and powerful. You protect your baseline hours by forcing the manager to choose what gets deprioritized.',
        script:
          '"I\'m happy to take this on, but since my plate is full, which of our current deliverables should we deprioritize or hand off to accommodate this new report?"',
        tagColor: 'bg-blue-cyan/25 text-text-main border border-blue-cyan/40',
        badgeBg: 'bg-blue-cyan text-slate-950',
        icon: CheckCircle2,
      },
      {
        id: 'c',
        label: 'C',
        text: 'Propose a highly time-boxed, minimal version of the report with zero extra hours.',
        strategyType: 'Time-Boxed Compromise',
        title: 'Minimum Viable Output',
        feedback:
          'Limits the damage by offering a restricted contribution that matches your actual available bandwidth.',
        script:
          '"I can put together a high-level summary by Tuesday, but I won\'t have time for the deep-dive analysis. Let me know if that summary works!"',
        tagColor: 'bg-blue-sky/20 text-text-main border border-blue-sky/40',
        badgeBg: 'bg-blue-sky text-slate-950',
        icon: Award,
      },
    ],
  },
  {
    id: 4,
    category: 'Mentorship & Onboarding Load',
    title: 'The Default Onboarding Mentor',
    situation:
      'Your department hires three new junior employees. Without asking your preference, your director announces in a team meeting: "You are so thorough with processes, so you will be mentoring all three newcomers this quarter!"',
    options: [
      {
        id: 'a',
        label: 'A',
        text: 'Smile, accept all three mentees, and squeeze mentoring sessions into your lunch breaks and evenings.',
        strategyType: 'Invisible Burden Trap',
        title: 'Absorbing Heavy Invisible Mentorship',
        feedback:
          'Mentoring is critical, but taking on three mentees simultaneously without workload reduction or formal recognition leads to severe cognitive and emotional drain.',
        script:
          '"Of course, I\'m happy to help them get settled!" (Silently absorbs 10+ weekly hours of mentoring).',
        tagColor: 'bg-tag-bg text-tag-text border border-tag-border',
        badgeBg: 'bg-primary text-white',
        icon: AlertTriangle,
      },
      {
        id: 'b',
        label: 'B',
        text: 'Accept mentoring only one person, or negotiate formal recognition and peer distribution for the others.',
        strategyType: 'Capped Mentorship & Recognition',
        title: 'Strategic Mentorship Boundaries',
        feedback:
          'This ensures mentorship is valued and distributed rather than quietly piling onto one person because of their perceived helpfulness.',
        script:
          '"I would love to mentor one new team member this quarter to ensure they get quality support. Let\'s distribute the other two mentees across the rest of the senior team."',
        tagColor: 'bg-blue-cyan/25 text-text-main border border-blue-cyan/40',
        badgeBg: 'bg-blue-cyan text-slate-950',
        icon: CheckCircle2,
      },
      {
        id: 'c',
        label: 'C',
        text: 'Ask for this leadership contribution to be formally documented for your promotion packet.',
        strategyType: 'Leveraging Leadership Recognition',
        title: 'Converting Housework to Career Recognition',
        feedback:
          'If you must take on citizenship work, ensure it directly counts toward your leadership evaluation and promotion criteria.',
        script:
          '"I am glad to support onboarding. Let\'s make sure this mentorship role is officially documented in my goals as a core leadership deliverable for my upcoming review."',
        tagColor: 'bg-blue-sky/20 text-text-main border border-blue-sky/40',
        badgeBg: 'bg-blue-sky text-slate-950',
        icon: Zap,
      },
    ],
  },
];
