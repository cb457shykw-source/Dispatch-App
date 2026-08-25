import React from 'react';

/** Carried over from the Claude Design handoff — context for anyone picking this up next. */
export function DesignNotes() {
  return (
    <aside className="notes-aside">
      <div className="notes-heading">Design notes</div>
      <div className="hr-strong" style={{ margin: '10px 0 16px' }} />
      <div className="notes-body">
        <p>
          <strong>One app, two modes.</strong> The switch above the phone is a prototype control, not a product
          feature — in the real app your role decides which shell you get. Dispatcher lands on tomorrow's board;
          crew lands on today's work.
        </p>
        <p>
          <strong>Pour time earns the red.</strong> Placement time is the only number set in accent red, and only
          on pour days. Form, strip and backfill days lead with the task list instead — so red always means
          "concrete is coming."
        </p>
        <p>
          <strong>Acknowledgement is a first-class object.</strong> Every job row carries a count (7/9). Zero acks
          pulses red. Tap through to per-person check marks with timestamps and a silent resend for anyone still
          pending.
        </p>
        <p>
          <strong>Roles gate dispatching.</strong> Owner → Dispatcher → Foreman → Crew, with a per-person override
          on the profile. In crew mode the assign controls are replaced by a plain explanation rather than disabled
          buttons.
        </p>
        <p>
          <strong>EN / ES everywhere.</strong> The header toggle switches every string live and the profile stores
          it per person. Job names, addresses and mix numbers stay as written — those are proper nouns.
        </p>
        <p style={{ marginBottom: 0, color: 'var(--color-neutral-600)' }}>
          <strong>Try:</strong> tap the unassigned job → assign Garcia's crew · open Shoultes Elementary → Crew tab
          → resend a push · switch to Crew member → accept the assignment → mark a stage complete → report a late
          truck.
        </p>
      </div>
      <div className="hr-soft" style={{ margin: '20px 0 14px' }} />
      <div className="notes-open-label">Open for your call</div>
      <div className="notes-open-body">
        Maps and plan sheets are placeholders — send real plans or a site map to mount them. Also unbuilt: job
        creation, time clock, and truck-ticket logging.
      </div>
    </aside>
  );
}
