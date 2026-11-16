// Lucide-style line icons, kept local to avoid an icon-font dependency.
const paths = {
  arrow: <><path d="M7 17 17 7M7 7h10v10" /></>,
  right: <><path d="M4 12h16m-6-6 6 6-6 6" /></>,
  pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
  check: <path d="m5 12 4 4L19 6" />,
};
export default function Icon({ name = 'arrow', className = '' }) {
  return <svg className={`mc-icon ${className}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
