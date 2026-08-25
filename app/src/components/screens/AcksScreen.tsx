import React from 'react';
import { useApp } from '../../state/AppState';
import { JOBS } from '../../data/jobs';

export function AcksScreen() {
  const { state, L, crewOf, ackOf, sizeOf, crewLabel, actions } = useApp();
  const ackJobs = JOBS.filter((j) => crewOf(j));
  const ackHeadline = state.lang === 'en' ? 'Who has accepted' : 'Quién ha aceptado';

  return (
    <div className="cd-screenpad">
      <div className="acks-eyebrow">{L.t_tomorrow}</div>
      <div className="acks-headline">{ackHeadline}</div>
      <div className="board-rule" style={{ marginTop: 12 }} />
      {ackJobs.map((j) => {
        const ack = ackOf(j);
        const size = sizeOf(j);
        const pct = size ? Math.round((ack / size) * 100) : 0;
        return (
          <div key={j.id} className="ackrow" onClick={() => actions.go('job', { jobId: j.id, sub: 'overview' })}>
            <div className="ackrow-top">
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="ackrow-site">{j.site}</div>
                <div className="ackrow-crew">{crewLabel(crewOf(j))}</div>
              </div>
              <div className="ackrow-count">
                {ack}/{size}
              </div>
            </div>
            <div className="ackrow-bar">
              <div style={{ width: pct + '%' }} />
            </div>
          </div>
        );
      })}
      <div className="acks-hint">{L.t_ackHint}</div>
    </div>
  );
}
