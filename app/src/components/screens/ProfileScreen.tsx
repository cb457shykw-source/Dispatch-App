import React from 'react';
import { useApp } from '../../state/AppState';
import { ROSTER, ini } from '../../data/members';
import { buildWeek } from '../../data/week';

export function ProfileScreen() {
  const { state, L, isDispatcher, actions } = useApp();
  const person = ROSTER[state.person] || ROSTER[0];
  const name = isDispatcher ? person.n : 'M. Alvarez';
  const trade = L.trades[isDispatcher ? person.tr : 'finisher'];
  const phone = '(425) 555-0' + (140 + state.person);
  const week = buildWeek(L);

  const roleNote =
    state.personRole <= 1
      ? state.lang === 'en'
        ? 'Can create jobs, assign crews and edit the board.'
        : 'Puede crear obras, asignar cuadrillas y editar el tablero.'
      : state.lang === 'en'
      ? 'Sees only their own assignments. Foremen can request a swap.'
      : 'Solo ve sus asignaciones. Los capataces pueden pedir un cambio.';

  return (
    <div className="cd-screenpad">
      <div className="profile-head">
        <div className="profile-avatar">{ini(name)}</div>
        <div>
          <div className="profile-name">{name}</div>
          <div className="profile-sub">
            {trade} · {phone}
          </div>
        </div>
      </div>
      <div className="hr-strong" style={{ margin: '14px 0 0' }} />

      <div className="profile-section">
        <div className="profile-section-label">{L.t_role}</div>
        <div className="role-picker">
          {L.roles.map((label, i) => (
            <button
              key={label}
              style={{
                background: state.personRole === i ? 'var(--color-text)' : 'none',
                color: state.personRole === i ? 'var(--color-bg)' : 'var(--color-text)',
              }}
              onClick={() => actions.setPersonRole(i)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="profile-note">{roleNote}</div>
      </div>

      <div className="toggle-row">
        <div style={{ flex: 1 }}>
          <div className="toggle-row-title">{L.t_canDispatch}</div>
          <div className="toggle-row-note">{L.t_canDispatchNote}</div>
        </div>
        <div
          className="toggle-switch"
          style={{
            background: state.canDispatchFlag ? 'var(--color-accent)' : 'none',
            justifyContent: state.canDispatchFlag ? 'flex-end' : 'flex-start',
          }}
          onClick={actions.toggleDispatch}
        >
          <div className="knob" style={{ background: state.canDispatchFlag ? '#fff' : 'var(--color-text)' }} />
        </div>
      </div>

      <div className="profile-section">
        <div className="profile-section-label">{L.t_language}</div>
        <div className="lang-picker">
          <button
            className={state.lang === 'en' ? 'cd-seg-on' : 'cd-seg-off'}
            onClick={() => actions.setLang('en')}
          >
            English
          </button>
          <button
            className={state.lang === 'es' ? 'cd-seg-on' : 'cd-seg-off'}
            onClick={() => actions.setLang('es')}
          >
            Español
          </button>
        </div>
        <div className="profile-note">{L.t_langNote}</div>
      </div>

      <div style={{ padding: '14px 0' }}>
        <div className="profile-section-label" style={{ marginBottom: 6 }}>
          {L.t_thisWeek}
        </div>
        {week.map((d) => (
          <div key={d.day} className="weekrow">
            <div className="weekrow-day">{d.day}</div>
            <div className="weekrow-job">{d.job}</div>
            <div className="weekrow-time">{d.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
