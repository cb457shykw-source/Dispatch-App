import type { Member, RosterPerson } from '../types';

export const MEMBERS: Member[] = [
  { n: 'R. Lehti', tr: 'foreman', at: '5:12 PM' },
  { n: 'M. Alvarez', tr: 'finisher', at: '5:14 PM' },
  { n: 'T. Okafor', tr: 'laborer', at: '5:19 PM' },
  { n: 'D. Whitcomb', tr: 'operator', at: '5:31 PM' },
  { n: 'J. Salazar', tr: 'formsetter', at: '6:02 PM' },
  { n: 'K. Boyd', tr: 'laborer', at: '6:20 PM' },
  { n: 'E. Cruz', tr: 'finisher', at: '7:44 PM' },
  { n: 'P. Nakamura', tr: 'laborer', at: null },
  { n: 'L. Vance', tr: 'laborer', at: null },
];

export const ROSTER: RosterPerson[] = [
  { n: 'R. Lehti', tr: 'foreman', role: 2, st: 'job', job: 'Shoultes' },
  { n: 'S. Melvin', tr: 'foreman', role: 2, st: 'job', job: 'North Bend' },
  { n: 'A. Garcia', tr: 'foreman', role: 2, st: 'job', job: '124th Ave' },
  { n: 'M. Alvarez', tr: 'finisher', role: 3, st: 'job', job: 'Shoultes' },
  { n: 'P. Nakamura', tr: 'laborer', role: 3, st: 'avail' },
  { n: 'L. Vance', tr: 'laborer', role: 3, st: 'avail' },
  { n: 'D. Whitcomb', tr: 'operator', role: 3, st: 'job', job: 'Shoultes' },
  { n: 'E. Cruz', tr: 'finisher', role: 3, st: 'off' },
  { n: 'J. Salazar', tr: 'formsetter', role: 3, st: 'avail' },
];

export const ini = (n: string): string =>
  n
    .replace(/[^A-Za-z. ]/g, '')
    .split(' ')
    .map((s) => s[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
