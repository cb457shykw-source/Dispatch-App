import React from 'react';
import { useApp } from '../state/AppState';
import { IconBack } from './icons';
import { TAB_ICONS } from '../data/icons';
import type { Screen } from '../types';

export function StatusBar() {
  return (
    <div className="cd-statusbar">
      <span>9:41</span>
      <span className="cd-signal">LTE ▮▮▮ 86%</span>
    </div>
  );
}

export function AppHeader() {
  const { state, L, job, crewLabel, actions, isDispatcher } = useApp();
  const j = job(state.jobId);
  const canBack = state.screen === 'job' || state.screen === 'delay';

  const headerKicker = state.screen === 'job' ? L.workLabels[j.work] : isDispatcher ? 'P&A Civil · Dispatch' : 'P&A Civil · ' + crewLabel('Lehti');

  let headerTitle = '';
  if (state.screen === 'job') {
    headerTitle = j.site;
  } else if (isDispatcher) {
    const titles: Partial<Record<Screen, string>> = {
      board: L.t_tomorrow,
      acks: L.t_seeAcks,
      roster: L.t_roster,
    };
    headerTitle = state.screen === 'profile' ? '' : titles[state.screen] || '';
  } else {
    const titles: Partial<Record<Screen, string>> = {
      crewToday: L.t_today,
      sched: L.t_myWeek,
      photos: L.t_photos,
      delay: L.t_reportDelay,
    };
    headerTitle = state.screen === 'profile' ? 'M. Alvarez' : titles[state.screen] || '';
  }

  return (
    <div className="cd-header">
      {canBack && (
        <button className="cd-header-back" onClick={actions.back} aria-label="Back">
          <IconBack />
        </button>
      )}
      <div className="cd-header-titles">
        <div className="cd-header-kicker">{headerKicker}</div>
        <div className="cd-header-title">{headerTitle}</div>
      </div>
      <div className="cd-lang-toggle">
        <button
          className={state.lang === 'en' ? 'cd-seg-on' : 'cd-seg-off'}
          onClick={() => actions.setLang('en')}
        >
          EN
        </button>
        <button
          className={state.lang === 'es' ? 'cd-seg-on' : 'cd-seg-off'}
          onClick={() => actions.setLang('es')}
        >
          ES
        </button>
      </div>
    </div>
  );
}

export function TabBar() {
  const { state, L, isDispatcher, actions } = useApp();

  const tabDefs: Array<[Screen, string, string]> = isDispatcher
    ? [
        ['board', L.t_tabBoard, 'board'],
        ['acks', L.t_tabAcks, 'acks'],
        ['roster', L.t_tabRoster, 'roster'],
        ['profile', L.t_tabMe, 'me'],
      ]
    : [
        ['crewToday', L.t_tabToday, 'today'],
        ['sched', L.t_tabWeek, 'sched'],
        ['photos', L.t_tabPhotos, 'photos'],
        ['profile', L.t_tabMe, 'me'],
      ];

  const activeTab: Screen = state.screen === 'job' ? (isDispatcher ? 'board' : 'crewToday') : state.screen === 'delay' ? 'crewToday' : state.screen;

  return (
    <div className="cd-tabbar">
      {tabDefs.map(([key, label, icon]) => {
        const active = activeTab === key;
        return (
          <button
            key={key}
            className="cd-tab"
            style={{ background: active ? 'var(--color-text)' : 'none', color: active ? 'var(--color-bg)' : 'var(--color-neutral-600)' }}
            onClick={() => actions.go(key === 'profile' ? 'profile' : key, key === 'profile' ? { person: isDispatcher ? 0 : 4 } : undefined)}
          >
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d={TAB_ICONS[icon]} />
            </svg>
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
}

export function Toast() {
  const { state } = useApp();
  if (!state.toast) return null;
  return (
    <div className="toast">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff9783" strokeWidth={2.6}>
        <path d="M20 6L9 17l-5-5" />
      </svg>
      {state.toast}
    </div>
  );
}

export function AssignSheet() {
  const { state, L, job, crewLabel, actions } = useApp();
  if (!state.sheet) return null;
  const j = state.sheetJob != null ? job(state.sheetJob) : null;

  const options = [
    { name: crewLabel('Garcia'), initials: 'AG', meta: L.trades.foreman + ' A. Garcia · 7', busy: true, busyLabel: '124th Ave', pick: () => actions.pickCrew('Garcia') },
    { name: crewLabel('Melvin'), initials: 'SM', meta: L.trades.foreman + ' S. Melvin · 6', busy: true, busyLabel: 'North Bend', pick: () => actions.pickCrew('Melvin') },
    { name: state.lang === 'en' ? 'Available pool · 5' : 'Personal disponible · 5', initials: 'AP', meta: 'Nakamura, Vance, Salazar +2', busy: false, busyLabel: '', pick: () => actions.pickCrew('Pool') },
  ];

  return (
    <div className="sheet-backdrop" onClick={actions.closeSheet}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-kicker">{j ? j.site : ''}</div>
        <div className="sheet-title">{L.t_selectCrew}</div>
        <div className="hr-strong" style={{ margin: '12px 0 0' }} />
        {options.map((c) => (
          <button key={c.initials} className="crewoption" onClick={c.pick}>
            <div className="crewoption-avatar">{c.initials}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="crewoption-name">{c.name}</div>
              <div className="crewoption-meta">{c.meta}</div>
            </div>
            {c.busy ? (
              <div className="tag-onjob">{c.busyLabel}</div>
            ) : (
              <div className="tag-available">{L.t_available}</div>
            )}
          </button>
        ))}
        <button className="btn-cancel-sheet" onClick={actions.closeSheet}>
          {L.t_cancel}
        </button>
      </div>
    </div>
  );
}
