import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootLayout from './pages/layout';
import LandingPage from './pages/index';
import DecisionTreeLayout from './pages/decision-tree/layout';
import DecisionTreePage from './pages/decision-tree/index';
import ScenariosLayout from './pages/scenarios/layout';
import ScenariosPage from './pages/scenarios/index';
import RoadmapLayout from './pages/roadmap/layout';
import RoadmapPage from './pages/roadmap/index';
import NotFoundPage from './pages/not_found.tsx';

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

          <Route path="roadmap" element={<RoadmapLayout />}>
            <Route index element={<RoadmapPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
