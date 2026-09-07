const paths = {
  ArrowUpRight: () => (
    <>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </>
  ),

  ArrowDown: () => (
    <>
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </>
  ),

  ArrowLeft: () => (
    <>
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </>
  ),

  Check: () => <path d="m5 12 4 4L19 6" />,

  Minus: () => <path d="M5 12h14" />,

  Plus: () => (
    <>
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </>
  ),

  ChevronLeft: () => (
    <path d="m15 18-6-6 6-6" />
  ),

  ChevronRight: () => (
    <path d="m9 18 6-6-6-6" />
  ),

  Maximize2: () => (
    <>
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M16 3h3a2 2 0 0 1 2 2v3" />
      <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </>
  ),

  X: () => (
    <>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </>
  ),

  Menu: () => (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),

  Search: () => (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),

  MapPin: () => (
    <>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),

  ShoppingBag: () => (
    <>
      <path d="M6 8h12l1 13H5L6 8Z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </>
  ),

  Instagram: () => (
    <>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
      />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </>
  ),
};

export default function Icon({
  name,
  size = 18,
  strokeWidth = 1.7,
  ...props
}) {
  const IconPath = paths[name];

  if (!IconPath) {
    console.warn(`Icon "${name}" tidak ditemukan.`);
    return null;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <IconPath />
    </svg>
  );
}