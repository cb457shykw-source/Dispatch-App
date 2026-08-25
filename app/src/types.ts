export type Lang = 'en' | 'es';
export type Role = 'dispatcher' | 'crew';

export type WorkType = 'cg' | 'sw';
export type JobDay = 'pour' | 'form' | 'strip';

export type Screen =
  | 'board'
  | 'job'
  | 'acks'
  | 'roster'
  | 'profile'
  | 'crewToday'
  | 'sched'
  | 'photos'
  | 'delay';

export type JobSub = 'overview' | 'files' | 'crew';

export interface Job {
  id: number;
  site: string;
  addr: string;
  work: WorkType;
  day: JobDay;
  pour?: string;
  report: string;
  qty: string;
  crew: string | null;
  size: number;
  acks: number;
  supplier?: string;
  plant?: string;
  phone?: string;
  intervalMin?: number;
  mix?: string;
  order?: string;
  slump: string;
  weatherEn: string;
  weatherEs: string;
  notesEn: string;
  notesEs: string;
  tasksEn?: string[];
  tasksEs?: string[];
}

export interface Member {
  n: string;
  tr: keyof Trades;
  at: string | null;
}

export type RosterStatus = 'job' | 'avail' | 'off';

export interface RosterPerson {
  n: string;
  tr: keyof Trades;
  role: number;
  st: RosterStatus;
  job?: string;
}

export interface Trades {
  foreman: string;
  finisher: string;
  laborer: string;
  operator: string;
  formsetter: string;
}
