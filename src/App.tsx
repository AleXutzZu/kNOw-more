import React, { useState } from 'react';
import { TabNavigation } from './components/common/TabNavigation';
import { DecisionTreeModule } from './components/decision-tree/DecisionTreeModule';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { ScenarioRolePlayModule } from './components/scenarios/ScenarioRolePlayModule';
import type { ActiveTab } from './types/navigation';

export default function App(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<ActiveTab>('tree');

  return (
    <div className="min-h-screen bg-linear-to-br from-dark-deep via-dark to-dark-surface text-white flex flex-col justify-between antialiased selection:bg-primary selection:text-white">
      {/* Header with App Name */}
      <Header />

      {/* Main Content Area */}
      <main className="grow flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-3xl bg-dark/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-10 relative overflow-hidden transition-all duration-300">
          {/* Ambient Glow Effects */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

          {/* Navigation Tabs */}
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Render Active View */}
          {activeTab === 'tree' ? (
            <DecisionTreeModule />
          ) : (
            <ScenarioRolePlayModule />
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
