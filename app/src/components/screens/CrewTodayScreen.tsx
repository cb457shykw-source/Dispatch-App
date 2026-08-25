import React from 'react';
import { useApp } from '../../state/AppState';
import { IconCheckGray, IconCheckWhite } from '../icons';

export function CrewTodayScreen() {
  const { state, L, job, crewLabel, actions } = useApp();
  const myJob = job(1);

  const acceptPrompt =
    state.lang === 'en'
      ? 'Shoultes Elementary — placement 7:30 AM tomorrow. Report to the site at 6:15 AM.'
      : 'Shoultes Elementary — colocación mañana 7:30 AM. Presentarse en obra a las 6:15 AM.';
  const acceptedAt = state.lang === 'en' ? 'Accepted yesterday, 5:14 PM' : 'Aceptada ayer, 5:14 PM';
  const myTasks = (state.lang === 'en' ? myJob.tasksEn : myJob.tasksEs) || [];

  return (
    <div>
      {!state.accepted && (
        <div className="accept-banner">
          <div className="k">{L.t_newAssignment}</div>
          <div className="prompt">{acceptPrompt}</div>
          <button className="btn-accept" onClick={actions.accept}>
            {L.t_accept}
          </button>
        </div>
      )}
      {state.accepted && (
        <div className="accepted-strip">
          <IconCheckGray />
          {acceptedAt}
        </div>
      )}

      <div className="cd-screenpad">
        <div className="today-eyebrow">
          {L.t_today} · {crewLabel('Lehti')}
        </div>
        <div className="today-site">{myJob.site}</div>
        <div className="today-addr">{myJob.addr}</div>

        {myJob.day === 'pour' ? (
          <>
            <div className="pour-hero-lg">
              <div className="k">{L.t_pourTime}</div>
              <div className="v">{myJob.pour}</div>
              <div className="sub">
                {L.t_reportTime} {myJob.report} · {myJob.qty}
              </div>
            </div>
            <div className="supplier-block">
              <div className="supplier-kicker">{L.t_supplier}</div>
              <div className="supplier-grid">
                <div>
                  <div className="field-k">{L.t_supplierName}</div>
                  <div className="field-v">{myJob.supplier}</div>
                </div>
                <div>
                  <div className="field-k">{L.t_plant}</div>
                  <div className="field-v">{myJob.plant}</div>
                </div>
                <div>
                  <div className="field-k">{L.t_interval}</div>
                  <div className="field-v">{state.lang === 'en' ? 'every 20 min' : 'cada 20 min'}</div>
                </div>
                <div>
                  <div className="field-k">{L.t_mix}</div>
                  <div className="field-v">{myJob.mix}</div>
                </div>
              </div>
              <button className="btn-call-supplier" onClick={actions.toastSupplier}>
                {L.t_callSupplier}
              </button>
            </div>
          </>
        ) : (
          <div className="tasks-block">
            <div className="tasks-kicker">{L.t_tasks}</div>
            {myTasks.map((text) => (
              <div key={text} className="taskrow">
                <div className="taskrow-box" />
                <div className="taskrow-text">{text}</div>
              </div>
            ))}
            <div className="tasks-report">
              {L.t_reportTime} {myJob.report} · {myJob.qty}
            </div>
          </div>
        )}

        <div className="today-actions">
          <button className="btn-outline" onClick={actions.toastDirections}>
            {L.t_directions}
          </button>
          <button className="btn-outline" onClick={actions.toastCall}>
            {L.t_call}
          </button>
        </div>

        <div className="hr-strong" style={{ margin: '18px 0 0' }} />
        <div className="stages-block">
          <div className="stages-kicker">{L.t_stages}</div>
          {L.stages.map((name, i) => {
            if (i < state.stage) {
              return (
                <div key={name} className="stagerow">
                  <div className="stage-check">
                    <IconCheckWhite />
                  </div>
                  <div className="stage-name-done">{name}</div>
                  <div className="stage-at">{i === 0 ? 'Aug 21' : 'Aug 22'}</div>
                </div>
              );
            }
            if (i === state.stage) {
              return (
                <div key={name} className="stagerow">
                  <div className="stage-current-box" />
                  <div className="stage-name-current">{name}</div>
                  <button className="btn-stage-done" onClick={() => actions.completeStage(name)}>
                    {L.t_done}
                  </button>
                </div>
              );
            }
            return (
              <div key={name} className="stagerow">
                <div className="stage-todo-box" />
                <div className="stage-name-todo">{name}</div>
              </div>
            );
          })}
        </div>

        <div className="today-footer-actions">
          <button className="btn-photo" onClick={actions.goPhotos}>
            {L.t_addPhoto}
          </button>
          <button className="btn-delay" onClick={actions.goDelay}>
            {L.t_reportDelay}
          </button>
        </div>
        <button className="btn-files-footer" onClick={actions.goJobFromCrew}>
          {L.t_files}
        </button>
      </div>
    </div>
  );
}
