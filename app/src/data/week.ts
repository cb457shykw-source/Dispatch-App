import type { Strings } from './translations';
import { JOBS } from './jobs';

export interface WeekDay {
  day: string;
  job: string;
  what: string;
  time: string;
  isPour: boolean;
}

/** The same five-day board used on the profile's "This week" list and the crew's "My week" screen. */
export function buildWeek(L: Strings): WeekDay[] {
  const jobsByDay = [JOBS[2].site, JOBS[0].site, JOBS[1].site, JOBS[0].site, JOBS[2].site];
  const times = ['6:30 AM', '7:30 AM', '6:30 AM', '8:00 AM', '6:30 AM'];
  return L.days.map((day, i) => ({
    day,
    job: jobsByDay[i],
    what: L.whats[i],
    time: times[i],
    isPour: i === 1 || i === 3,
  }));
}
