import React from 'react';
import { useApp } from '../state/AppState';
import { StatusBar, AppHeader, TabBar, Toast, AssignSheet } from './PhoneChrome';
import { BoardScreen } from './screens/BoardScreen';
import { JobScreen } from './screens/JobScreen';
import { AcksScreen } from './screens/AcksScreen';
import { RosterScreen } from './screens/RosterScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { CrewTodayScreen } from './screens/CrewTodayScreen';
import { DelayScreen } from './screens/DelayScreen';
import { PhotosScreen } from './screens/PhotosScreen';
import { SchedScreen } from './screens/SchedScreen';

function ActiveScreen() {
  const { state } = useApp();
  switch (state.screen) {
    case 'board':
      return <BoardScreen />;
    case 'job':
      return <JobScreen />;
    case 'acks':
      return <AcksScreen />;
    case 'roster':
      return <RosterScreen />;
    case 'profile':
      return <ProfileScreen />;
    case 'crewToday':
      return <CrewTodayScreen />;
    case 'delay':
      return <DelayScreen />;
    case 'photos':
      return <PhotosScreen />;
    case 'sched':
      return <SchedScreen />;
    default:
      return null;
  }
}

export function PhoneApp() {
  const { state } = useApp();
  // Remount the content pane on every navigation so the slide-in transition replays,
  // mirroring the prototype's key={screenKey} on the scroll container.
  const screenKey = state.screen + state.sub + state.lang + state.role;

  return (
    <div className="cd-phone">
      <div className="cd-device">
        <StatusBar />
        <AppHeader />
        <div className="cd-content" key={screenKey}>
          <ActiveScreen />
        </div>
        <TabBar />
        <AssignSheet />
        <Toast />
      </div>
    </div>
  );
}
