import logoNavbar from '@/assets/logo-navbar.svg'

// ── Logo — exact Figma export (logo-navbar.svg, 124×50px) ───────────────────
function RRLogo() {
  return (
    <img
      src={logoNavbar}
      alt="RemoteRecruit"
      width={124}
      height={50}
      style={{ display: 'block' }}
      draggable={false}
      fetchPriority="high"
    />
  )
}

// ── Navbar ───────────────────────────────────────────────────────────────────
export function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <nav aria-label="Main navigation" className="w-full max-w-[1440px] mx-auto">

        {/* ── Desktop ≥ md ───────────────────────────────────────────── */}
        <div className="hidden md:flex items-center h-[108px] px-[51px]">

          {/* Logo — left edge */}
          <a href="#" aria-label="RemoteRecruit home" className="shrink-0 mr-auto hover:opacity-80 transition-opacity duration-200">
            <RRLogo />
          </a>

          {/* Auth — right edge */}
          <div className="flex items-center gap-3">
            {/* Sign In: 14px SemiBold, #f5f7fe, letter-spacing 0.4px */}
            <a
              href="#"
              className="text-[14px] font-semibold leading-[18px] tracking-[0.4px] text-[#f5f7fe] hover:text-white transition-colors"
            >
              Sign In
            </a>

            {/* Sign Up: 92×44 px, bg rgba(77,168,204,0.9), border #52b4da, rounded-[16px] */}
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-[16px] border border-[#52b4da] text-[14px] font-semibold leading-[18px] tracking-[0.4px] text-[#f5f7fe] transition-all duration-200 hover:opacity-90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#52b4da]"
              style={{ width: '92px', height: '44px', backgroundColor: 'rgba(77,168,204,0.9)' }}
            >
              Sign Up
            </a>
          </div>
        </div>

        {/* ── Mobile < md ────────────────────────────────────────────── */}
        <div className="md:hidden flex items-center justify-between h-[72px] px-5">
          <a href="#" aria-label="RemoteRecruit home" className="hover:opacity-80 transition-opacity duration-200">
            <RRLogo />
          </a>
          <div className="flex items-center gap-3">
            <a href="#" className="text-[14px] font-semibold text-[#f5f7fe] hover:text-white active:opacity-70 transition-colors">
              Sign In
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-[16px] border border-[#52b4da] text-[14px] font-semibold text-[#f5f7fe] hover:opacity-90 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#52b4da]"
              style={{ width: '84px', height: '38px', backgroundColor: 'rgba(77,168,204,0.9)' }}
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
