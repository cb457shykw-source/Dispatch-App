import React from 'react';
import { useApp } from '../../state/AppState';
import { IconCheckAccent } from '../icons';

export function DelayScreen() {
  const { state, L, actions } = useApp();

  if (state.delayStep === 1) {
    const delaySentBody =
      state.reason === null
        ? ''
        : state.lang === 'en'
        ? L.reasons[state.reason] + ' · ' + (state.length === null ? 'unknown length' : L.lengths[state.length]) + '. Cadman dispatch was asked to hold the trucks.'
        : L.reasons[state.reason] + ' · ' + (state.length === null ? 'duración desconocida' : L.lengths[state.length]) + '. Se pidió a Cadman detener los camiones.';

    return (
      <div className="cd-screenpad">
        <div style={{ animation: 'fadeIn .3s' }}>
          <div className="delaysent-card">
            <IconCheckAccent />
            <div className="delaysent-title">{L.t_delaySentTitle}</div>
            <div className="delaysent-body">{delaySentBody}</div>
          </div>
          <div className="delaysent-notified">
            <div className="k">{L.t_notified}</div>
            <div className="v">{L.t_notifiedWho}</div>
          </div>
          <button className="btn-back-today" onClick={actions.goToday}>
            {L.t_backToToday}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cd-screenpad">
      <div className="delay-title">{L.t_whatHappened}</div>
      <div className="delay-sub">{L.delaySub}</div>
      <div className="hr-strong" style={{ margin: '14px 0 0' }} />
      {L.reasons.map((label, i) => (
        <button
          key={label}
          className="reasonrow"
          style={{ background: state.reason === i ? 'var(--color-accent-100)' : 'none' }}
          onClick={() => actions.pickReason(i)}
        >
          <div className="reasonrow-dot" style={{ background: state.reason === i ? 'var(--color-accent)' : 'none' }} />
          <div className="reasonrow-label">{label}</div>
        </button>
      ))}
      <div style={{ marginTop: 16 }}>
        <div className="howlong-label">{L.t_howLong}</div>
        <div className="length-picker">
          {L.lengths.map((label, i) => (
            <button
              key={label}
              style={{
                background: state.length === i ? 'var(--color-text)' : 'none',
                color: state.length === i ? 'var(--color-bg)' : 'var(--color-text)',
              }}
              onClick={() => actions.pickLength(i)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <button
        className="btn-send"
        style={{
          background: state.reason === null ? 'var(--color-neutral-300)' : 'var(--color-accent)',
          color: state.reason === null ? 'var(--color-neutral-600)' : '#fff',
        }}
        onClick={actions.submitDelay}
      >
        {L.t_sendToDispatch}
      </button>
      <div className="delay-note">{L.t_delayNote}</div>
    </div>
  );
}
