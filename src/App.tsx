import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootLayout from './pages/layout';
import LandingPage from './pages/index';
import DecisionTreeLayout from './pages/decision-tree/layout';
import DecisionTreePage from './pages/decision-tree/index';
import ScenariosLayout from './pages/scenarios/layout';
import ScenariosPage from './pages/scenarios/index';
import NotFoundPage from './pages/404';

export default function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<LandingPage />} />

          <Route path="decision-tree" element={<DecisionTreeLayout />}>
            <Route index element={<DecisionTreePage />} />
          </Route>

          <Route path="scenarios" element={<ScenariosLayout />}>
            <Route index element={<ScenariosPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
