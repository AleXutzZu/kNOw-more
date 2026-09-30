import React from 'react';
import { ArrowRight, Compass, HeartHandshake, Sparkles, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LandingPage: React.FC = () => {
  return (
    <div className="w-full max-w-4xl space-y-10 animate-fade-in py-4">
      {/* Hero Section */}
      <section className="bg-card-bg backdrop-blur-xl border border-card-border rounded-3xl shadow-xl p-8 sm:p-12 relative overflow-hidden text-center transition-all duration-300">
        {/* Ambient Glows */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-sky/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-cyan/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
          {/* Logo Showcase */}
          <div className="inline-block p-2 rounded-2xl bg-surface-base border border-blue-sky/30 shadow-md">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shadow-inner bg-blue-sky mx-auto">
              <img
                src="/logo.jpeg"
                alt="kNOw MORE Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-tag-bg text-primary text-xs font-bold border border-tag-border">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Boundary &amp; Workload Assistant</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-text-main tracking-tight leading-tight">
              kNOw MORE
            </h1>
            <p className="text-base sm:text-lg text-text-muted font-medium leading-relaxed">
              Say goodbye to people-pleasing burnout and reclaim control of your work life.
            </p>
          </div>

          <p className="text-sm sm:text-base text-text-subtle leading-relaxed">
            Starting your career? Always finding yourself agreeing to extra tasks, organizing events, or taking on more work than you can handle? <strong>kNOw MORE</strong> gives you practical guidance and ready-to-use responses so you know when to say <strong>NO</strong> and how to build healthy, respected boundaries from day one.
          </p>

          {/* Navigation Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <Link
              to="/decision-tree"
              className="group p-5 rounded-2xl bg-linear-to-r from-primary to-primary-dark hover:from-primary/95 hover:to-primary-dark/95 text-white font-bold text-left shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-between"
            >
              <div className="space-y-1 pr-3">
                <div className="flex items-center space-x-2 text-xs font-semibold text-accent">
                  <Zap className="w-4 h-4" />
                  <span>Step-by-Step Guide</span>
                </div>
                <div className="text-lg font-bold">Decision Tree</div>
                <p className="text-xs text-white/80 line-clamp-1">
                  Evaluate incoming requests before you automatically say yes.
                </p>
              </div>
              <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              to="/scenarios"
              className="group p-5 rounded-2xl bg-surface-base hover:bg-surface-hover border border-surface-border hover:border-primary text-text-main font-bold text-left shadow-xs transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-between"
            >
              <div className="space-y-1 pr-3">
                <div className="flex items-center space-x-2 text-xs font-semibold text-primary">
                  <Users className="w-4 h-4" />
                  <span>Interactive Practice</span>
                </div>
                <div className="text-lg font-bold">Real-Life Scenarios</div>
                <p className="text-xs text-text-muted line-clamp-1">
                  Practice responding to notes, office chores, and weekend requests.
                </p>
              </div>
              <div className="w-9 h-9 rounded-xl bg-btn-neutral-badge text-btn-neutral-badge-text group-hover:bg-primary group-hover:text-white flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Target Audience / Value Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-card-bg border border-card-border rounded-2xl p-6 shadow-xs space-y-2.5">
          <div className="w-10 h-10 rounded-xl bg-tag-bg text-primary flex items-center justify-center font-bold">
            🚀
          </div>
          <h3 className="font-bold text-text-main text-base">Early-Career Starters</h3>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            Entering the workplace shouldn't mean taking on every unassigned chore. Establish strong professional boundaries early without burning out.
          </p>
        </div>

        <div className="bg-card-bg border border-card-border rounded-2xl p-6 shadow-xs space-y-2.5">
          <div className="w-10 h-10 rounded-xl bg-blue-sky/20 text-blue-sky flex items-center justify-center font-bold">
            🤝
          </div>
          <h3 className="font-bold text-text-main text-base">Recovering People-Pleasers</h3>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            Overcome the instinct to say yes out of guilt or fear of letting teammates down. Learn clear, calm language that preserves relationships.
          </p>
        </div>

        <div className="bg-card-bg border border-card-border rounded-2xl p-6 shadow-xs space-y-2.5">
          <div className="w-10 h-10 rounded-xl bg-blue-cyan/25 text-text-main flex items-center justify-center font-bold">
            🛑
          </div>
          <h3 className="font-bold text-text-main text-base">Overloaded with Work</h3>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            Constantly staying late or working weekends? Get direct actionable scripts to negotiate workload trade-offs and protect your personal time.
          </p>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-card-bg backdrop-blur-xl border border-card-border rounded-3xl shadow-xl p-8 sm:p-10 relative overflow-hidden transition-all duration-300">
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-tag-bg text-primary text-xs font-bold border border-tag-border">
              <Compass className="w-3.5 h-3.5" />
              <span>Behind the Initiative</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main tracking-tight">
              Our Team
            </h2>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              We are a team of <strong>6 recent graduates from Computer Science</strong>, inspired by <strong>womENcourage 2026 in Nice, France</strong>. Our goal is to leverage technology and interactive design to help young professionals and underrepresented groups overcome workplace pressures and build sustainable careers.
            </p>
          </div>

          {/* Sample Group Photo Image */}
          <div className="rounded-2xl overflow-hidden border border-surface-border shadow-md bg-surface-base">
            <img
              src="/team-placeholder.svg"
              alt="kNOw MORE Team - 6 Recent Computer Science Graduates inspired by womENcourage 2026, Nice, France"
              className="w-full h-auto object-cover max-h-96"
            />
          </div>

          <div className="text-center text-xs text-text-subtle italic flex items-center justify-center space-x-1.5">
            <HeartHandshake className="w-4 h-4 text-primary" />
            <span>Presented by 6 Computer Science Graduates • womENcourage 2026 • Nice, France</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
