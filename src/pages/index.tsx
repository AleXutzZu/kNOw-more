import React from 'react';
import {
  ArrowRight,
  Bot,
  Clock,
  Users,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const LandingPage: React.FC = () => {
  return (
    <div className="w-full max-w-5xl space-y-10 animate-fade-in py-4">
      {/* Hero section */}
      <section className="bg-card-bg backdrop-blur-xl border border-card-border rounded-3xl shadow-xl p-8 sm:p-12 relative overflow-hidden text-center transition-all duration-300">
        {/* Ambient glows */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-sky/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-cyan/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
          {/* Logo showcase */}
          <div className="inline-block p-2 rounded-2xl bg-surface-base border border-blue-sky/30 shadow-md">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shadow-inner bg-blue-sky mx-auto">
              <img
                src="/logo.jpeg"
                alt="kNOw MORE logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl font-black text-text-main tracking-tight leading-tight">
              kNOw MORE
            </h1>
            <p className="text-base sm:text-lg text-text-muted font-medium leading-relaxed">
              Say goodbye to people-pleasing burnout and reclaim control of your work life.
            </p>
          </div>

          <p className="text-sm sm:text-base text-text-subtle leading-relaxed max-w-2xl mx-auto">
            Starting your career? Always finding yourself agreeing to extra tasks, organizing events, or taking on more work than you can handle? <strong>kNOw MORE</strong> gives you practical guidance and ready-to-use responses so you know when to say <strong>no</strong> and how to build healthy, respected boundaries from day one.
          </p>

          {/* Navigation action buttons */}
          <div className="w-full max-w-4xl mx-auto pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Button 1: Decision tree */}
              <Link
                to="/decision-tree"
                className="group p-5 rounded-2xl bg-linear-to-r from-primary to-primary-dark hover:from-primary/95 hover:to-primary-dark/95 text-white font-bold text-left shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-accent">
                    <Zap className="w-4 h-4 shrink-0" />
                    <span>Questions to ask</span>
                  </div>
                  <div className="text-lg font-bold leading-tight">Decision tree</div>
                  <p className="text-xs text-white/85 leading-snug">
                    Evaluate incoming requests step-by-step when in doubt.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-xs text-accent font-semibold">
                  <span>Start guide</span>
                  <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </Link>

              {/* Button 2: Scenarios */}
              <Link
                to="/scenarios"
                className="group p-5 rounded-2xl bg-surface-base hover:bg-surface-hover border border-surface-border hover:border-primary text-text-main font-bold text-left shadow-xs transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-primary">
                    <Users className="w-4 h-4 shrink-0" />
                    <span>Interactive practice</span>
                  </div>
                  <div className="text-lg font-bold leading-tight">Real-life scenarios</div>
                  <p className="text-xs text-text-muted leading-snug">
                    Practice responding to note-taking, extra chores, and weekend requests.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-xs text-primary font-semibold">
                  <span>Explore cases</span>
                  <div className="w-8 h-8 rounded-xl bg-btn-neutral-badge text-btn-neutral-badge-text group-hover:bg-primary group-hover:text-white flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              {/* Button 3: Role-based simulation (in development / inactive) */}
              <div
                aria-disabled="true"
                className="p-5 rounded-2xl bg-surface-base/60 border border-dashed border-surface-border text-text-muted text-left shadow-xs opacity-75 cursor-not-allowed flex flex-col justify-between select-none relative"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-text-subtle">
                    <Bot className="w-4 h-4 shrink-0" />
                    <span>AI simulation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-text-main leading-tight">
                      Role-based simulation
                    </span>
                  </div>
                  <p className="text-xs text-text-muted leading-snug">
                    Simulate real-time conversations with managers, peers, and stakeholders.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between">
                  <span className="inline-flex items-center space-x-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-tag-bg text-primary border border-tag-border">
                    <Clock className="w-3 h-3" />
                    <span>In development</span>
                  </span>
                  <span className="text-xs text-text-subtle italic">Coming soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target audience / value cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-card-bg border border-card-border rounded-2xl p-6 shadow-xs space-y-2.5">
          <div className="w-10 h-10 rounded-xl bg-tag-bg text-primary flex items-center justify-center font-bold">
            🚀
          </div>
          <h3 className="font-bold text-text-main text-base">Early-career starters</h3>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            Entering the workplace shouldn't mean taking on every unassigned chore. Establish strong professional boundaries early without burning out.
          </p>
        </div>

        <div className="bg-card-bg border border-card-border rounded-2xl p-6 shadow-xs space-y-2.5">
          <div className="w-10 h-10 rounded-xl bg-blue-sky/20 text-blue-sky flex items-center justify-center font-bold">
            🤝
          </div>
          <h3 className="font-bold text-text-main text-base">Recovering people-pleasers</h3>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            Overcome the instinct to say yes out of guilt or fear of letting teammates down. Learn clear, calm language that preserves relationships.
          </p>
        </div>

        <div className="bg-card-bg border border-card-border rounded-2xl p-6 shadow-xs space-y-2.5">
          <div className="w-10 h-10 rounded-xl bg-blue-cyan/25 text-text-main flex items-center justify-center font-bold">
            🛑
          </div>
          <h3 className="font-bold text-text-main text-base">Overloaded with work</h3>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            Constantly staying late or working weekends? Get direct actionable scripts to negotiate workload trade-offs and protect your personal time.
          </p>
        </div>
      </section>

      {/* Our team section */}
      <section className="bg-card-bg backdrop-blur-xl border border-card-border rounded-3xl shadow-xl p-8 sm:p-10 relative overflow-hidden transition-all duration-300">
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main tracking-tight">
              Our team
            </h2>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              We are a team of <strong>6 recent graduates in the field of computer science</strong>, from <strong>3 different countries</strong>.
              <br /> Our goal is to leverage technology and interactive design to help young professionals overcome workplace pressures and build sustainable careers.
              <br /> Inspired by <strong>womENcourage 2026 in Nice, France</strong>.
            </p>
          </div>

          {/* Sample group photo image */}
          <div className="rounded-2xl overflow-hidden border border-surface-border shadow-md bg-surface-base">
            <img
              src="/team-placeholder.svg"
              alt="kNOw MORE team - 6 recent computer science graduates inspired by womENcourage 2026, Nice, France"
              className="w-full h-auto object-cover max-h-96"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
