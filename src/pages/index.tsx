import React from 'react';
import { ArrowRight, Compass, GitBranch, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LandingPage: React.FC = () => {
  return (
    <div className="w-full max-w-4xl space-y-12 animate-fade-in py-4">
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
              <span>Boundary Intelligence Engine</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-text-main tracking-tight leading-tight">
              kNOw MORE
            </h1>
            <p className="text-base sm:text-lg text-text-muted font-medium leading-relaxed">
              Strategic Work &amp; Boundary Blueprint for Women in the Modern Workplace
            </p>
          </div>

          <p className="text-sm sm:text-base text-text-subtle leading-relaxed">
            Protect your career trajectory, eliminate office housework, and master the art of strategic boundary defense. Know when to say <strong>NO</strong>, when to say <strong>YES</strong>, and how to command <strong>MORE</strong> recognition.
          </p>

          {/* Navigation Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <Link
              to="/decision-tree"
              className="group p-5 rounded-2xl bg-linear-to-r from-primary to-primary-dark hover:from-primary/95 hover:to-primary-dark/95 text-white font-bold text-left shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-between"
            >
              <div className="space-y-1 pr-3">
                <div className="flex items-center space-x-2 text-xs font-semibold text-accent">
                  <GitBranch className="w-4 h-4" />
                  <span>Interactive Engine</span>
                </div>
                <div className="text-lg font-bold">Decision Tree</div>
                <p className="text-xs text-white/80 line-clamp-1">
                  Evaluate incoming requests through 4 strategic filters.
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
                  <span>Real-World Practice</span>
                </div>
                <div className="text-lg font-bold">Scenario Role Play</div>
                <p className="text-xs text-text-muted line-clamp-1">
                  Test responses to note-taking, culture tasks, and scope creep.
                </p>
              </div>
              <div className="w-9 h-9 rounded-xl bg-btn-neutral-badge text-btn-neutral-badge-text group-hover:bg-primary group-hover:text-white flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-card-bg border border-card-border rounded-2xl p-6 shadow-xs space-y-2.5">
          <div className="w-10 h-10 rounded-xl bg-tag-bg text-primary flex items-center justify-center font-bold">
            🛡️
          </div>
          <h3 className="font-bold text-text-main text-base">Invisible Labor Audit</h3>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            Spot office housework, thankless coordination, and unpaid citizenship duties before they stall your growth.
          </p>
        </div>

        <div className="bg-card-bg border border-card-border rounded-2xl p-6 shadow-xs space-y-2.5">
          <div className="w-10 h-10 rounded-xl bg-blue-sky/20 text-blue-sky flex items-center justify-center font-bold">
            ⚡
          </div>
          <h3 className="font-bold text-text-main text-base">Strategic ROI Filters</h3>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            Tie extra responsibilities directly to promotion milestones, sponsorship, and compensated scope expansion.
          </p>
        </div>

        <div className="bg-card-bg border border-card-border rounded-2xl p-6 shadow-xs space-y-2.5">
          <div className="w-10 h-10 rounded-xl bg-blue-cyan/25 text-text-main flex items-center justify-center font-bold">
            💬
          </div>
          <h3 className="font-bold text-text-main text-base">Battle-Tested Scripts</h3>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            Deliver calm, confident, and professional boundary scripts without apology, awkwardness, or career risk.
          </p>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-card-bg backdrop-blur-xl border border-card-border rounded-3xl shadow-xl p-8 sm:p-10 relative overflow-hidden transition-all duration-300">
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-tag-bg text-primary text-xs font-bold border border-tag-border">
              <Compass className="w-3.5 h-3.5" />
              <span>Behind the Initiative</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main tracking-tight">
              Our Team
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">
              We are dedicated to building research-driven frameworks and digital tools that empower women to thrive sustainably at every stage of their careers.
            </p>
          </div>

          {/* Sample Group Photo Image */}
          <div className="rounded-2xl overflow-hidden border border-surface-border shadow-md bg-surface-base">
            <img
              src="/team-placeholder.svg"
              alt="kNOw MORE Team - Sample Group Photo"
              className="w-full h-auto object-cover max-h-96"
            />
          </div>

          <div className="text-center text-xs text-text-subtle italic">
            * Sample team photo placeholder (to be updated with team photography).
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
