# Crew Dispatch

A React + TypeScript implementation of the `Crew Dispatch.dc.html` design from the Claude Design
handoff in `../project/`. Built to the **Modernist** design system (`../project/_ds/modernist-…/`) —
its `styles.css` tokens are copied verbatim into `src/styles/modernist.css` and every color, font
and spacing value in this app's own stylesheet (`src/styles/app.css`) reads from those CSS
variables.

## What's here

Front-end only, matching the scope of the design chat: the same mock data (`JOBS`, `MEMBERS`,
`ROSTER`) and in-memory state as the prototype, no backend, no auth, no persistence.

- **Dispatcher mode** — tomorrow's board (acceptance counts, zero-ack jobs pulse red), assign-crew
  sheet, job detail (Overview / Files / Crew tabs, supplier block, pour time in red only on pour
  days), acknowledgements screen, crew roster.
- **Crew member mode** — accept a new assignment, today's job (pour hero or task list), stage
  tracker (Grade → Strip), delay report, photos, weekly schedule.
- **Shared** — profile screen with the Owner → Dispatcher → Foreman → Crew role gate (a
  per-person override on top of the mode), and a live EN/ES toggle on every string.

The mode switch above the phone is a prototype/demo control carried over from the design, not a
real product feature — see the in-app design notes panel (and its "Try:" walkthrough) for the
intended real-app behavior.

## Run it

```sh
npm install
npm run dev       # start the dev server
npm run build     # type-check and produce a production build in dist/
npm run preview   # serve the production build locally
```

## Structure

```
src/
  data/            Mock data: translations, jobs, members/roster, tab icons, week schedule
  state/AppState.tsx   All app state + actions, exposed via a React context (useApp())
  components/
    icons.tsx          Inline Lucide-style SVG icons
    PhoneChrome.tsx     Status bar, header, tab bar, toast, assign-crew sheet
    ModeSwitcher.tsx    Prototype-only dispatcher/crew toggle
    DesignNotes.tsx     The design rationale sidebar
    PhoneApp.tsx        Phone frame + screen router
    screens/            One component per screen
  styles/
    modernist.css        Design system tokens (copied from the _ds bundle)
    app.css              This app's component styles, built on those tokens
```

## Known gaps (carried over from the design)

Maps and plan sheets are placeholders. Job creation, time clock, and truck-ticket logging are
out of scope — the design chat explicitly left these for later.
