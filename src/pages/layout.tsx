import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';

export const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-canvas-from via-canvas-via to-canvas-to text-text-main flex flex-col justify-between antialiased selection:bg-primary selection:text-white transition-colors duration-300">
      {/* Header with Navigation & Theme Toggle */}
      <Header />

      {/* Main Body */}
      <main className="grow flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RootLayout;
