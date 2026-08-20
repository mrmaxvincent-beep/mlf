/** Literal "giọt nước rơi → vòng lan" motif — the geometry chapter of MLF's design philosophy, made real
 * instead of a generic fade-in. Sits between the video and the "để nước được lắng" line on the homepage. */
export function DropRipple() {
  return (
    <svg className="drop-ripple" width="120" height="72" viewBox="0 0 120 72" aria-hidden>
      <line x1="0" y1="54" x2="120" y2="54" stroke="var(--color-mist)" strokeWidth="1" />
      <circle className="drop-ripple__ring" cx="60" cy="54" r="4" fill="none" stroke="var(--color-cham)" strokeWidth="1" />
      <circle className="drop-ripple__ring drop-ripple__ring--2" cx="60" cy="54" r="4" fill="none" stroke="var(--color-cham)" strokeWidth="1" />
      <circle className="drop-ripple__ring drop-ripple__ring--3" cx="60" cy="54" r="4" fill="none" stroke="var(--color-cham)" strokeWidth="1" />
      <circle className="drop-ripple__drop" cx="60" cy="6" r="2.5" fill="var(--color-cham)" />
    </svg>
  );
}
