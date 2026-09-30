import type { Scenario } from '../types/scenario';

export const SCENARIOS: Scenario[] = [
  {
    id: 1,
    category: 'Office housework',
    title: 'The Holiday Party & Culture Committee Request',
    context:
      'You are an early-career contributor known for being organized and reliable. Your manager pulls you aside during your 1:1 sync.',
    request:
      '“The team really needs someone organized to head up the annual holiday party planning and culture committee this year. You always bring great energy—would you take the lead?” This would take 15+ hours of uncredited coordination on top of your existing deliverables.',
    responses: [
      {
        id: 'accept',
        label: 'Accept the task',
        text:
          '“Sure, I can take that on! I\'ll make sure the event and committee are fully organized.”',
        impact: {
          psychological:
            'You may feel helpful and appreciated in the moment, but taking on 15+ hours of uncredited event coordination can trigger resentment when your core work begins piling up. Consistently agreeing to social organizing can cement an expectation that you will always handle non-promotable tasks.',
          career:
            'Office housework rarely factors into promotion packets or technical performance reviews. While it builds casual goodwill, it displaces focus from core deliverables that drive career advancement.',
          reflection:
            'The decision tree specifically flags recurring "office housework" that disproportionately lands on the same people. Without formal recognition or workload trade-offs, this carries high cost with minimal career return.',
        },
      },
      {
        id: 'decline',
        label: 'Decline because of workload',
        text:
          '“Thanks for thinking of me, but given my current focus on core deliverables, I won\'t have the capacity to take on event planning this year.”',
        impact: {
          psychological:
            'You might feel a brief pang of guilt or worry about seeming unhelpful. However, protecting your bandwidth prevents burnout and reinforces that your time is valuable.',
          career:
            'Declining professionally keeps your focus on high-impact projects. Framing your answer around existing capacity makes it a business decision rather than a personal refusal.',
          reflection:
            'Following the tree\'s questions on role alignment and capacity, declining low-visibility tasks is essential for protecting your core output.',
        },
      },
      {
        id: 'delegate',
        label: 'Suggest rotating the task',
        text:
          '“I appreciate you thinking of me! Given my focus on upcoming deliverables, I can\'t lead this alone. Could we establish a rotating schedule across the team, or look into event planning support?”',
        impact: {
          psychological:
            'You remove the pressure of solitary ownership while offering a constructive solution that treats the team equitably.',
          career:
            'You show leadership by proposing a sustainable system rather than either silently absorbing the burden or creating a vacuum.',
          reflection:
            'The tree asks whether someone else can take this on. Proposing a team rotation solves the systemic problem for everyone, not just yourself.',
        },
      },
    ],
  },

  {
    id: 2,
    category: 'Office housework',
    title: 'Taking Notes in a Technical Strategy Meeting',
    context:
      'You are the senior technical expert in a high-stakes strategy meeting with stakeholders and clients.',
    request:
      'As the meeting starts, a peer turns to you and says: “Hey, could you grab the whiteboard notes and type up the meeting minutes for everyone?”',
    responses: [
      {
        id: 'accept',
        label: 'Accept the task',
        text:
          '“Sure, no problem. I\'ll take the notes and email them out after.”',
        impact: {
          psychological:
            'You avoid immediate social friction or awkwardness in the room. However, being occupied as the scribe prevents you from speaking up and commanding authority during strategic discussions.',
          career:
            'Stepping into an administrative support role during high-stakes meetings can diminish how external clients and leaders perceive your senior technical expertise.',
          reflection:
            'The decision tree asks whether this sits within your role and responsibilities and whether it provides visible credit. Administrative scribing during strategy sessions dilutes your technical visibility.',
        },
      },
      {
        id: 'decline',
        label: 'Decline and stay focused on strategy',
        text:
          '“I need to stay fully focused on presenting the technical architecture and answering client questions today, so I won\'t be able to scribe.”',
        impact: {
          psychological:
            'Asserting your primary role in the room can feel bold, but it immediately anchors your confidence and self-respect.',
          career:
            'Clients and executives see that your primary value is technical strategy, not administrative transcription.',
          reflection:
            'The tree stresses matching tasks to your core role and evaluating whether saying yes comes at the expense of your actual accountability.',
        },
      },
      {
        id: 'delegate',
        label: 'Suggest rotating note-taking',
        text:
          '“Let\'s rotate note-taking so everyone has a turn while others drive the technical strategy. Who can grab notes today?”',
        impact: {
          psychological:
            'Defuses the awkward moment calmly without taking on the task or singling out the requester.',
          career:
            'Establishes a team norm of fairness while preserving your focus on technical leadership.',
          reflection:
            'Redirecting recurring administrative chores ensures they don\'t default to the same people every time.',
        },
      },
    ],
  },

  {
    id: 3,
    category: 'Workload & deadlines',
    title: 'The Uncompensated Project Extension',
    context:
      'Your project lead approaches you late Friday afternoon before a busy sprint deadline.',
    request:
      '“We need this extra client report added to your scope. I know it wasn\'t originally budgeted, but you always deliver incredible quality! Can you get it done over the weekend?”',
    responses: [
      {
        id: 'accept',
        label: 'Accept the task',
        text:
          '“Sure, I\'ll work on this over the weekend and make sure it\'s ready by Monday morning.”',
        impact: {
          psychological:
            'You may feel an initial burst of pride from being relied upon, but sacrificing your weekend for unbudgeted scope leads directly to chronic exhaustion and resentment.',
          career:
            'Absorbing unbudgeted overflow teaches management that poor planning has no consequences, creating an expectation of constant uncompensated overtime.',
          reflection:
            'The decision tree identifies whether taking on work takes more time than you can give and whether you are sacrificing your personal time without agreed trade-offs.',
        },
      },
      {
        id: 'decline',
        label: 'Decline because of weekend boundary',
        text:
          '“I don\'t have capacity to work over the weekend. I can look at this first thing Monday morning to see where it fits into next week\'s schedule.”',
        impact: {
          psychological:
            'Guards your weekend and mental health. Helps you decouple your self-worth from emergency heroics.',
          career:
            'Establishes clear, professional availability boundaries that command respect from peers and managers.',
          reflection:
            'The tree explicitly flags after-hours work and tight deadlines as primary reasons to decline or negotiate.',
        },
      },
      {
        id: 'delegate',
        label: 'Negotiate a trade-off',
        text:
          '“I can take this on next week, but my plate is fully committed. Which of our current deliverables should we move back to accommodate this new report?”',
        impact: {
          psychological:
            'Takes the stress off your shoulders and puts prioritization back where it belongs: on project management.',
          career:
            'Demonstrates zero-sum workload management and executive maturity by forcing explicit trade-offs.',
          reflection:
            'Directly matches question 15 in the decision tree: "Have you agreed on a trade-off? (e.g. I\'ll take this if we move Project X back)".',
        },
      },
    ],
  },

  {
    id: 4,
    category: 'Office housework',
    title: 'The Default Onboarding Mentor',
    context:
      'Your department hires three new employees at once. In a team standup, leadership announces new assignments.',
    request:
      '“You are so thorough with processes and patient with people, so you will be mentoring all three newcomers this quarter!” This will require 8–10 hours per week of onboarding sessions without adjusting your technical targets.',
    responses: [
      {
        id: 'accept',
        label: 'Accept the task',
        text:
          '“Of course, I\'m happy to help them get settled! I\'ll set up regular syncs with all three.”',
        impact: {
          psychological:
            'Mentorship can be rewarding, but taking on three mentees at once without workload adjustments will force you to work late or let your core deliverables slip.',
          career:
            'Invisible mentorship often goes unrewarded unless it is formally factored into performance evaluations and promotion criteria.',
          reflection:
            'The tree evaluates whether a task takes more time than you can realistically give without compromising your existing deliverables.',
        },
      },
      {
        id: 'decline',
        label: 'Decline because of capacity',
        text:
          '“Given my deliverables and technical deadlines this quarter, I won\'t be able to provide the depth of mentorship these three newcomers deserve.”',
        impact: {
          psychological:
            'Prevents immediate overwhelm and allows you to deliver high-quality work on your existing commitments.',
          career:
            'Shows that you prioritize quality and honest capacity over making promises you cannot sustainably keep.',
          reflection:
            'Acknowledges capacity limits and ensures newcomers receive proper support from someone with actual bandwidth.',
        },
      },
      {
        id: 'delegate',
        label: 'Cap mentorship and share the load',
        text:
          '“I\'d love to mentor one new team member so they receive dedicated guidance. Can we distribute the other two across the rest of the senior team?”',
        impact: {
          psychological:
            'Allows you to enjoy mentoring without burning out or feeling burdened by disproportionate responsibility.',
          career:
            'Secures leadership experience in a manageable scope while modeling healthy boundary setting for the entire team.',
          reflection:
            'Follows the tree\'s principle of checking if someone else can take part of the task while keeping the developmental benefits of saying yes to what you can handle.',
        },
      },
    ],
  },

  {
    id: 5,
    category: 'Workload & deadlines',
    title: 'The Benchmark Deadline',
    context:
      'You are a junior research engineer working on an ML systems project. A colleague asks you to run the team\'s full benchmark suite tonight and prepare plots for tomorrow morning\'s lab meeting.',
    request:
      'The task will take approximately 5–6 hours. You already have your own experiment due tomorrow afternoon, which requires about 4 hours of focused work. The colleague is not your manager, and the benchmark is useful but is not blocking anyone tonight.',
    responses: [
      {
        id: 'accept',
        label: 'Accept the task',
        text:
          '“Sure, I can take care of the benchmark tonight. I\'ll make sure the plots are ready for the meeting.”',
        impact: {
          psychological:
            'You may feel helpful and valued in the short term, but taking on a substantial extra task while under deadline pressure can increase stress and reduce the time available for your own work. If this happens repeatedly, it can contribute to feeling that you must always be available to prove yourself.',
          career:
            'Helping a colleague can strengthen relationships and demonstrate reliability. However, if your own deliverables suffer, the visibility you gain from helping may come at the expense of work that you are actually accountable for.',
          reflection:
            'The decision tree flags this situation early because you already have a tight deadline of your own. A useful question is whether accepting this request creates an explicit trade-off, rather than simply adding more work to your existing workload.',
        },
      },
      {
        id: 'decline',
        label: 'Decline because of time',
        text:
          '“I don\'t have enough capacity to complete the full benchmark tonight because I\'m working toward my own deadline. I can help you identify what needs to be run, but I can\'t take ownership of the full task.”',
        impact: {
          psychological:
            'You may initially feel uncomfortable or worry that you are being unhelpful. Setting the boundary can also reduce workload pressure and reinforce the idea that your existing commitments are legitimate priorities.',
          career:
            'A clear, professional explanation makes the decision about capacity rather than willingness. It can help establish realistic expectations about your availability and protect the quality of work you are already responsible for.',
          reflection:
            'This follows the tree\'s emphasis on an existing deadline. Declining does not necessarily mean rejecting the colleague; it means recognizing that accepting the request could compromise another commitment.',
        },
      },
      {
        id: 'delegate',
        label: 'Suggest someone else',
        text:
          '“I can\'t take the full benchmark tonight because of my current deadline. Could we ask someone who has more capacity? I can help them get the benchmark running if that would be useful.”',
        impact: {
          psychological:
            'You avoid taking on an unrealistic workload while still contributing to the team\'s problem. This can reduce the guilt that sometimes comes with saying no because you are offering an alternative rather than simply walking away.',
          career:
            'This demonstrates awareness of team resources and prioritization. It can also reinforce that you are willing to collaborate without assuming responsibility for every available task.',
          reflection:
            'The tree asks whether another person could take the task. When your own deadline is pressing, redirecting the work can preserve both your commitment and the team\'s objective.',
        },
      },
    ],
  },

  {
    id: 6,
    category: 'Growth & opportunities',
    title: 'The Research Opportunity',
    context:
      'Your research supervisor approaches you about reproducing results from an important baseline paper and extending the experiment to your team\'s dataset.',
    request:
      'The work is expected to take approximately two days. You do not currently have another urgent deadline. The experiment is directly related to your research area, and your supervisor says that successful results could lead to visible research credit on a future paper.',
    responses: [
      {
        id: 'accept',
        label: 'Accept the task',
        text:
          '“Yes, I\'d be happy to take this on. Could we clarify the expected scope and deadline before I start?”',
        impact: {
          psychological:
            'The task may provide a sense of ownership and professional growth because it is closely connected to your research interests. Clarifying expectations can also reduce uncertainty about what success looks like.',
          career:
            'This type of assignment can create opportunities to develop technical expertise, produce research results, and receive visible credit. It can also give you experience with work that may be useful when building your research portfolio.',
          reflection:
            'Several decision-tree signals point toward accepting: the request comes from someone overseeing your work, it contributes to the team\'s goals, it fits your role, and it may provide meaningful professional credit.',
        },
      },
      {
        id: 'decline',
        label: 'Decline because of workload',
        text:
          '“I\'d like to help, but I don\'t think I can take this on within the expected timeframe. Could we revisit the deadline or scope?”',
        impact: {
          psychological:
            'You may feel that you are turning down an important opportunity, particularly when the request comes from a supervisor. On the other hand, communicating capacity honestly can prevent avoidable stress and unrealistic commitments.',
          career:
            'Declining an opportunity can mean missing some potential exposure or research credit. However, asking to adjust the scope or deadline can preserve the opportunity while making the workload sustainable.',
          reflection:
            'The tree does not treat every request from a supervisor as automatically requiring unlimited capacity. The key question is whether the work can realistically be completed without compromising existing responsibilities.',
        },
      },
      {
        id: 'delegate',
        label: 'Suggest another researcher',
        text:
          '“I think another researcher may have more relevant experience with this dataset. Would it make sense for them to lead the experiment while I contribute to the analysis?”',
        impact: {
          psychological:
            'You may feel more comfortable if you can remain involved without owning the entire task. However, you could also miss some of the direct ownership and learning that comes from leading the experiment yourself.',
          career:
            'Delegating can be appropriate when another person has specialized expertise or capacity. But repeatedly redirecting opportunities that could build your own expertise may reduce your exposure to high-value work.',
          reflection:
            'The tree asks whether someone else could take the task, but that question has to be considered alongside whether the task would help you grow. In this situation, the developmental value of the assignment is particularly relevant.',
        },
      },
    ],
  },

  {
    id: 7,
    category: 'Office housework',
    title: 'The Weekly Office Housework',
    context:
      'You are a junior software researcher on a team of six people. A senior teammate asks you to organize the team\'s weekly research meeting again.',
    request:
      'You would need to collect everyone\'s slides, take notes during the meeting, update the project tracker, and send the summary afterward. You have already done this for the last four weeks. Two other researchers could reasonably handle the administrative work, and none of it is part of your core research responsibilities.',
    responses: [
      {
        id: 'accept',
        label: 'Accept the task',
        text:
          '“Sure, I\'ll organize the meeting again this week.”',
        impact: {
          psychological:
            'You may experience short-term social approval and feel that you are being cooperative. However, repeatedly accepting low-visibility administrative work can create frustration if you feel your research time is consistently being displaced.',
          career:
            'Being dependable can strengthen relationships, but repeatedly becoming the person who handles administrative work may affect how your time is allocated and what kinds of accomplishments become visible to others.',
          reflection:
            'The decision tree specifically identifies recurring "office housework" as something worth examining. The issue is not that meeting administration is inherently inappropriate; it is the repeated concentration of this work on the same person.',
        },
      },
      {
        id: 'decline',
        label: 'Decline because of workload',
        text:
          '“I\'ve handled the meeting administration for the last few weeks, and I\'d like to prioritize my research work this week. I won\'t be able to take it on again.”',
        impact: {
          psychological:
            'You may initially experience guilt or worry about appearing uncooperative. Setting the boundary can also create a stronger sense of control over your time and reduce resentment associated with repeatedly accepting unwanted work.',
          career:
            'A professional boundary can protect time for activities that contribute directly to your technical or research record. The main risk is that the requester\'s reaction may affect the working relationship, particularly if expectations have never been discussed openly.',
          reflection:
            'The tree reaches "decline" after identifying that the task is recurring office housework and that other people could take it. The important distinction is between refusing to help once and addressing an ongoing pattern.',
        },
      },
      {
        id: 'delegate',
        label: 'Suggest rotating the task',
        text:
          '“I\'ve handled the meeting admin for the last four weeks. Could we rotate this responsibility among the team so that everyone takes a turn?”',
        impact: {
          psychological:
            'This can reduce the pressure of having to personally reject the request while still addressing the underlying problem. It also gives the team an opportunity to establish a predictable system rather than renegotiating the task every week.',
          career:
            'A rotation can protect everyone\'s research time and prevent administrative responsibilities from becoming concentrated on one junior employee. It may also demonstrate that you are thinking about team processes rather than only your individual workload.',
          reflection:
            'This response directly addresses two questions in the tree: whether someone else could do the work and whether this is recurring office housework. Instead of simply refusing the task, you are proposing a structural solution.',
        },
      },
    ],
  },
];
