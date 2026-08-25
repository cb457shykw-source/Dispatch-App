import React from 'react';
import { useApp } from '../state/AppState';

/**
 * Demo-only control. In the shipped app your role decides which shell you get —
 * this switch stands in for that until real auth/roles are wired up.
 */
export function ModeSwitcher() {
  const { isDispatcher, actions } = useApp();

  const modeNote = isDispatcher
    ? 'Dispatcher · S. Reyes, office. Sees every job, assigns crews, tracks acceptances.'
    : "Crew · M. Alvarez, finisher on Lehti's crew. Sees only today, tomorrow and their own week.";

  return (
    <>
      <div className="cd-modeswitch">
        <button className={isDispatcher ? 'cd-seg-on' : 'cd-seg-off'} onClick={() => actions.setRole('dispatcher')}>
          Dispatcher
        </button>
        <button className={!isDispatcher ? 'cd-seg-on' : 'cd-seg-off'} onClick={() => actions.setRole('crew')}>
          Crew member
        </button>
      </div>
      <div className="cd-modenote">{modeNote}</div>
    </>
  );
}
