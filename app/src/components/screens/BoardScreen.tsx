import React from 'react';
import { useApp } from '../../state/AppState';
import { JOBS } from '../../data/jobs';
import { IconCrew, IconCheckGray, IconAlert } from '../icons';

export function BoardScreen() {
  const { state, L, crewOf, ackOf, sizeOf, crewLabel, actions } = useApp();

  const assignedCount = JOBS.filter((x) => crewOf(x)).length;
  const unassignedCount = JOBS.filter((x) => !crewOf(x)).length;
  const boardSummary =
    (state.lang === 'en' ? assignedCount + ' crews out · 1 placement · ' : assignedCount + ' cuadrillas · 1 colocación · ') +
    (unassignedCount ? L.t_unassigned.toLowerCase() : state.lang === 'en' ? 'all assigned' : 'todo asignado');

  return (
    <div className="cd-screenpad">
      <div className="board-heading">
        <h1>{L.t_tomorrow}</h1>
      </div>
      <div className="board-summary">{boardSummary}</div>
      <div className="board-rule" />
      {JOBS.map((job) => {
        const crew = crewOf(job);
        const ack = ackOf(job);
        const size = sizeOf(job);
        return (
          <div
            key={job.id}
            className="jobrow"
            onClick={() => actions.go('job', { jobId: job.id, sub: 'overview' })}
          >
            <div className="jobrow-top">
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="jobrow-site">{job.site}</div>
                <div className="jobrow-meta">
                  {L.workLabels[job.work]} · {job.qty}
                </div>
              </div>
              {job.day === 'pour' ? (
                <div className="badge-pour">
                  <div className="k">{L.t_pourShort}</div>
                  <div className="v">{job.pour}</div>
                </div>
              ) : (
                <div className="badge-report">
                  <div className="k">{L.t_reportShort}</div>
                  <div className="v">{job.report}</div>
                </div>
              )}
            </div>
            <div className="jobrow-bottom">
              {crew ? (
                <>
                  <div className="jobrow-crew">
                    <IconCrew />
                    {crewLabel(crew)}
                  </div>
                  {ack === size && (
                    <div className="ack-full">
                      <IconCheckGray size={14} />
                      {ack}/{size}
                    </div>
                  )}
                  {ack > 0 && ack < size && <div className="ack-partial">{ack}/{size}</div>}
                  {ack === 0 && (
                    <div className="ack-none">
                      <IconAlert />
                      {ack}/{size}
                    </div>
                  )}
                </>
              ) : (
                <div className="jobrow-unassigned">
                  <div className="jobrow-unassigned-label">{L.t_unassigned}</div>
                  <button
                    className="btn-assign"
                    onClick={(e) => {
                      e.stopPropagation();
                      actions.openAssignSheet(job.id);
                    }}
                  >
                    {L.t_assignCrew}
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
      <div className="board-hint">{L.boardHint}</div>
    </div>
  );
}
