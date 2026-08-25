import React from 'react';
import { useApp } from '../../state/AppState';
import { ROSTER, ini } from '../../data/members';

export function RosterScreen() {
  const { L, actions } = useApp();

  return (
    <div className="cd-screenpad">
      <div className="roster-title">{L.t_roster}</div>
      <div className="roster-summary">{L.rosterSummary}</div>
      <div className="hr-strong" style={{ margin: '12px 0 0' }} />
      {ROSTER.map((p, i) => (
        <div key={i} className="rosterrow" onClick={() => actions.openProfile(i, p.role)}>
          <div className="rosterrow-avatar">{ini(p.n)}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="rosterrow-name">{p.n}</div>
            <div className="rosterrow-sub">
              {L.roles[p.role]} · {L.trades[p.tr]}
            </div>
          </div>
          {p.st === 'avail' && <div className="tag-available">{L.t_available}</div>}
          {p.st === 'job' && <div className="tag-onjob">{p.job}</div>}
          {p.st === 'off' && <div className="tag-off">{L.t_off}</div>}
        </div>
      ))}
    </div>
  );
}
