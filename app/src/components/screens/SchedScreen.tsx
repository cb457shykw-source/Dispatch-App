import React from 'react';
import { useApp } from '../../state/AppState';
import { buildWeek } from '../../data/week';

export function SchedScreen() {
  const { L } = useApp();
  const week = buildWeek(L);

  return (
    <div className="cd-screenpad">
      <div className="week-title">{L.t_myWeek}</div>
      <div className="hr-strong" style={{ margin: '12px 0 0' }} />
      {week.map((d) => (
        <div key={d.day} className="weekcard">
          <div className="weekcard-top">
            <div className="weekcard-day">{d.day}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="weekcard-job">{d.job}</div>
              <div className="weekcard-what">{d.what}</div>
            </div>
            {d.isPour ? (
              <div className="weekcard-time-pour">{d.time}</div>
            ) : (
              <div className="weekcard-time-plain">{d.time}</div>
            )}
          </div>
        </div>
      ))}
      <div className="week-hint">{L.t_weekHint}</div>
    </div>
  );
}
