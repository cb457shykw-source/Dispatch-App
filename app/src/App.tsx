import React from 'react';
import { AppStateProvider } from './state/AppState';
import { ModeSwitcher } from './components/ModeSwitcher';
import { PhoneApp } from './components/PhoneApp';
import { DesignNotes } from './components/DesignNotes';

export default function App() {
  return (
    <AppStateProvider>
      <div className="cd-page">
        <div className="cd-topbar">
          <div className="cd-brand">P&amp;A CIVIL, LLC</div>
          <div className="cd-kicker">Crew Dispatch</div>
          <div className="cd-version">v1</div>
        </div>

        <div className="cd-layout">
          <div className="cd-left">
            <ModeSwitcher />
            <PhoneApp />
          </div>
          <DesignNotes />
        </div>
      </div>
    </AppStateProvider>
  );
}
