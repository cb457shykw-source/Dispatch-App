import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import type { Job, JobSub, Lang, Role, Screen } from '../types';
import { T, type Strings } from '../data/translations';
import { JOBS } from '../data/jobs';

export interface AppState {
  lang: Lang;
  role: Role;
  screen: Screen;
  jobId: number;
  sub: JobSub;
  sheet: boolean;
  sheetJob: number | null;
  toast: string;
  assigned: Record<number, string>;
  acks: Record<number, number>;
  accepted: boolean;
  stage: number;
  delayStep: number;
  reason: number | null;
  length: number | null;
  photos: number;
  person: number;
  personRole: number;
  canDispatchFlag: boolean;
}

const initialState: AppState = {
  lang: 'en',
  role: 'dispatcher',
  screen: 'board',
  jobId: 1,
  sub: 'overview',
  sheet: false,
  sheetJob: null,
  toast: '',
  assigned: {},
  acks: {},
  accepted: false,
  stage: 1,
  delayStep: 0,
  reason: null,
  length: null,
  photos: 2,
  person: 0,
  personRole: 2,
  canDispatchFlag: true,
};

interface AppContextValue {
  state: AppState;
  L: Strings;
  job: (id: number) => Job;
  crewOf: (job: Job) => string | null;
  ackOf: (job: Job) => number;
  sizeOf: (job: Job) => number;
  crewLabel: (name: string | null | undefined) => string;
  isDispatcher: boolean;
  canDispatch: boolean;
  actions: {
    setLang: (lang: Lang) => void;
    setRole: (role: Role) => void;
    go: (screen: Screen, extra?: Partial<AppState>) => void;
    back: () => void;
    setSub: (sub: JobSub) => void;
    openAssignSheet: (jobId: number) => void;
    closeSheet: () => void;
    pickCrew: (name: string) => void;
    setPersonRole: (i: number) => void;
    toggleDispatch: () => void;
    openProfile: (person: number, role: number) => void;
    accept: () => void;
    completeStage: (stageName: string) => void;
    pickReason: (i: number) => void;
    pickLength: (i: number) => void;
    submitDelay: () => void;
    goToday: () => void;
    goDelay: () => void;
    goPhotos: () => void;
    addPhoto: () => void;
    nudge: (name: string) => void;
    flash: (msg: string) => void;
    toastCall: () => void;
    toastDirections: () => void;
    toastSupplier: () => void;
    openFile: () => void;
    goJobFromCrew: () => void;
    goAcks: () => void;
  };
}

const AppContext = createContext<AppContextValue | null>(null);

const CREW_SIZE_LOOKUP: Record<string, number> = { Lehti: 9, Melvin: 6, Garcia: 7 };

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>(initialState);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const patch = useCallback((extra: Partial<AppState>) => {
    setState((s) => ({ ...s, ...extra }));
  }, []);

  const L = T[state.lang];

  const job = useCallback((id: number): Job => JOBS.find((j) => j.id === id) || JOBS[0], []);

  const crewOf = useCallback((j: Job) => (state.assigned[j.id] !== undefined ? state.assigned[j.id] : j.crew), [state.assigned]);

  const ackOf = useCallback((j: Job) => (state.acks[j.id] !== undefined ? state.acks[j.id] : j.acks), [state.acks]);

  const sizeOf = useCallback(
    (j: Job) => {
      const c = crewOf(j);
      if (!c) return 0;
      if (c === j.crew) return j.size;
      return CREW_SIZE_LOOKUP[c] || 5;
    },
    [crewOf],
  );

  const crewLabel = useCallback(
    (name: string | null | undefined) => {
      if (!name) return '';
      if (name === 'Pool') return L.t_poolCrew;
      return state.lang === 'en' ? name + "'s crew" : 'cuadrilla de ' + name;
    },
    [L, state.lang],
  );

  const flash = useCallback((msg: string) => {
    clearTimeout(toastTimer.current);
    patch({ toast: msg });
    toastTimer.current = setTimeout(() => patch({ toast: '' }), 1900);
  }, [patch]);

  const isDispatcher = state.role === 'dispatcher';
  const canDispatch = isDispatcher && state.canDispatchFlag;

  const actions: AppContextValue['actions'] = useMemo(
    () => ({
      setLang: (lang) => patch({ lang }),
      setRole: (role) =>
        patch(
          role === 'dispatcher'
            ? { role, screen: 'board', canDispatchFlag: true }
            : { role, screen: 'crewToday' },
        ),
      go: (screen, extra) => patch({ screen, ...extra }),
      back: () =>
        patch({
          screen: state.screen === 'delay' ? 'crewToday' : state.role === 'dispatcher' ? 'board' : 'crewToday',
          delayStep: 0,
        }),
      setSub: (sub) => patch({ sub }),
      openAssignSheet: (jobId) => patch({ sheet: true, sheetJob: jobId }),
      closeSheet: () => patch({ sheet: false }),
      pickCrew: (name) => {
        setState((s) => {
          const id = s.sheetJob;
          if (id == null) return s;
          const assigned = { ...s.assigned, [id]: name };
          const acks = { ...s.acks, [id]: 0 };
          return { ...s, assigned, acks, sheet: false };
        });
        flash(
          state.lang === 'en'
            ? crewLabel(name) + ' assigned · push sent'
            : crewLabel(name) + ' asignada · aviso enviado',
        );
      },
      setPersonRole: (i) => patch({ personRole: i, canDispatchFlag: i <= 1 }),
      toggleDispatch: () => patch({ canDispatchFlag: !state.canDispatchFlag }),
      openProfile: (person, role) => patch({ screen: 'profile', person, personRole: role, canDispatchFlag: role <= 1 }),
      accept: () => {
        patch({ accepted: true });
        flash(state.lang === 'en' ? 'Assignment accepted · dispatch notified' : 'Asignación aceptada · despacho notificado');
      },
      completeStage: (stageName) => {
        setState((s) => ({ ...s, stage: Math.min(s.stage + 1, T[s.lang].stages.length) }));
        flash(stageName + ' · ' + L.t_done);
      },
      pickReason: (i) => patch({ reason: i }),
      pickLength: (i) => patch({ length: i }),
      submitDelay: () => {
        if (state.reason === null) {
          flash(state.lang === 'en' ? 'Pick a reason first' : 'Seleccione un motivo');
          return;
        }
        patch({ delayStep: 1 });
      },
      goToday: () => patch({ screen: 'crewToday', delayStep: 0, reason: null, length: null }),
      goDelay: () => patch({ screen: 'delay', delayStep: 0 }),
      goPhotos: () => patch({ screen: 'photos' }),
      addPhoto: () => {
        setState((s) => ({ ...s, photos: Math.min(s.photos + 1, 8) }));
        flash(state.lang === 'en' ? 'Photo attached to the job' : 'Foto adjuntada a la obra');
      },
      nudge: (name) => flash(name + ' · ' + L.t_pushSent),
      flash,
      toastCall: () => flash(L.t_calling),
      toastDirections: () => flash(L.t_opening),
      toastSupplier: () => flash(L.t_callingSupplier),
      openFile: () => flash(L.t_opened),
      goJobFromCrew: () => patch({ screen: 'job', jobId: 1, sub: 'files' }),
      goAcks: () => patch({ screen: 'acks' }),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [patch, state, L, crewLabel, flash],
  );

  const value: AppContextValue = {
    state,
    L,
    job,
    crewOf,
    ackOf,
    sizeOf,
    crewLabel,
    isDispatcher,
    canDispatch,
    actions,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppStateProvider');
  return ctx;
}
