import React from 'react';
import { useApp } from '../../state/AppState';
import { MEMBERS } from '../../data/members';
import { IconPin, IconPhone, IconFile, IconChevronRight, IconCheckGray } from '../icons';

export function JobScreen() {
  const { state, L, job, crewOf, ackOf, sizeOf, crewLabel, canDispatch, actions } = useApp();
  const j = job(state.jobId);

  return (
    <div>
      <div className="jobtabs">
        <button
          className={state.sub === 'overview' ? 'cd-seg-on' : 'cd-seg-off'}
          onClick={() => actions.setSub('overview')}
        >
          {L.t_overview}
        </button>
        <button
          className={state.sub === 'files' ? 'cd-seg-on' : 'cd-seg-off'}
          onClick={() => actions.setSub('files')}
        >
          {L.t_filesShort}
        </button>
        <button
          className={state.sub === 'crew' ? 'cd-seg-on' : 'cd-seg-off'}
          onClick={() => actions.setSub('crew')}
        >
          {L.t_crew}
        </button>
      </div>

      {state.sub === 'overview' && <JobOverview />}
      {state.sub === 'files' && <JobFiles />}
      {state.sub === 'crew' && <JobCrew />}
    </div>
  );

  function JobOverview() {
    return (
      <div className="cd-screenpad">
        <div className="job-title">{j.site}</div>
        <div className="job-addr">{j.addr}</div>
        <div className="job-actions">
          <button className="btn-outline" onClick={actions.toastDirections}>
            <IconPin />
            {L.t_directions}
          </button>
          <button className="btn-outline" onClick={actions.toastCall}>
            <IconPhone />
            {L.t_call}
          </button>
        </div>

        <div className="hr-strong" />

        {j.day === 'pour' ? (
          <>
            <div className="pour-hero">
              <div className="k">{L.t_pourTime}</div>
              <div className="v">{j.pour}</div>
              <div className="sub">
                {L.t_reportTime} {j.report} · {j.qty}
              </div>
            </div>
            <div className="supplier-block">
              <div className="supplier-kicker">{L.t_supplier}</div>
              <div className="supplier-grid">
                <div>
                  <div className="field-k">{L.t_supplierName}</div>
                  <div className="field-v">{j.supplier || '—'}</div>
                </div>
                <div>
                  <div className="field-k">{L.t_plant}</div>
                  <div className="field-v">{j.plant || '—'}</div>
                </div>
                <div>
                  <div className="field-k">{L.t_dispatchPhone}</div>
                  <div className="field-v">{j.phone || '—'}</div>
                </div>
                <div>
                  <div className="field-k">{L.t_interval}</div>
                  <div className="field-v">
                    {j.intervalMin ? (state.lang === 'en' ? 'every ' + j.intervalMin + ' min' : 'cada ' + j.intervalMin + ' min') : '—'}
                  </div>
                </div>
                <div>
                  <div className="field-k">{L.t_mix}</div>
                  <div className="field-v">{j.mix || '—'}</div>
                </div>
                <div>
                  <div className="field-k">{L.t_order}</div>
                  <div className="field-v">{j.order || '—'}</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="report-hero">
            <div className="k">{L.t_reportTime}</div>
            <div className="v">{j.report}</div>
            <div className="sub">
              {L.workLabels[j.work]} · {j.qty} · {L.t_noPour}
            </div>
          </div>
        )}

        <div className="job-facts">
          <div>
            <div className="field-k">{L.t_weather}</div>
            <div className="field-v">{state.lang === 'en' ? j.weatherEn : j.weatherEs}</div>
          </div>
          <div>
            <div className="field-k">{L.t_slump}</div>
            <div className="field-v">{j.slump}</div>
          </div>
        </div>
        <div className="job-notes">
          <div className="job-notes-label">{L.t_notes}</div>
          <div className="job-notes-body">{state.lang === 'en' ? j.notesEn : j.notesEs}</div>
        </div>
        {canDispatch && (
          <button className="btn-block-dark" onClick={actions.goAcks}>
            {L.t_seeAcks}
          </button>
        )}
      </div>
    );
  }

  function JobFiles() {
    const fileList =
      state.lang === 'en'
        ? [
            ['Plan sheets — C4 through C9', 'PDF · 12 pages · rev 3'],
            ['Traffic control plan', 'PDF · 2 pages'],
            ['Mix design 4000-A', 'Submittal · approved'],
            ['Site map', 'Image · placeholder'],
          ]
        : [
            ['Planos — C4 a C9', 'PDF · 12 páginas · rev 3'],
            ['Plan de control de tráfico', 'PDF · 2 páginas'],
            ['Diseño de mezcla 4000-A', 'Presentación · aprobada'],
            ['Mapa del sitio', 'Imagen · provisional'],
          ];
    return (
      <div className="cd-screenpad">
        <div className="files-kicker">{L.t_files}</div>
        <div className="files-map">
          <span>
            {L.t_siteMap} — {L.t_placeholder}
          </span>
        </div>
        {fileList.map(([name, meta]) => (
          <div key={name} className="filerow" onClick={actions.openFile}>
            <IconFile />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="filerow-name">{name}</div>
              <div className="filerow-meta">{meta}</div>
            </div>
            <IconChevronRight />
          </div>
        ))}
        <div className="files-photos">
          <div>{L.t_sitePhoto} 01</div>
          <div>{L.t_sitePhoto} 02</div>
        </div>
      </div>
    );
  }

  function JobCrew() {
    const size = sizeOf(j) || 9;
    const ack = ackOf(j);
    const members = MEMBERS.slice(0, size).map((m, i) => ({
      ...m,
      acked: i < ack,
    }));
    return (
      <div className="cd-screenpad">
        <div className="crewtab-head">
          <h2>{crewLabel(crewOf(j))}</h2>
          <div className="ack">
            {ack}/{size}
          </div>
        </div>
        <div className="hr-strong" style={{ margin: '10px 0 0' }} />
        {members.map((m, i) => (
          <div key={i} className="memberrow">
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="memberrow-name">{m.n}</div>
              <div className="memberrow-trade">{L.trades[m.tr]}</div>
            </div>
            {m.acked ? (
              <div className="memberrow-ok">
                <IconCheckGray />
                {m.at || '8:02 PM'}
              </div>
            ) : (
              <div className="memberrow-pending">
                <div className="memberrow-pending-label">{L.t_pending}</div>
                {canDispatch && (
                  <button className="btn-nudge" onClick={() => actions.nudge(m.n)}>
                    {L.t_nudge}
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
        {canDispatch && (
          <button className="btn-block-outline" onClick={() => actions.openAssignSheet(j.id)}>
            {L.t_swap}
          </button>
        )}
        {!canDispatch && <div className="gated-note">{L.t_gated}</div>}
      </div>
    );
  }
}
