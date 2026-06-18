import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav aria-label="Main navigation" className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" aria-label="RemoteRecruit home">
            <div className="flex flex-col leading-none">
              <span className="text-xs font-medium text-white tracking-widest uppercase">Remote</span>
              <span className="text-base font-extrabold text-white tracking-tight -mt-0.5">Recruit</span>
            </div>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="text-sm font-medium text-white px-3 py-1.5 transition-colors hover:text-white/80"
            >
              Sign In
            </a>
            <Button
              size="sm"
              className="bg-brand-600 hover:bg-brand-500 text-white rounded-md px-5 py-2 text-sm font-semibold"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={menuOpen ? 'md:hidden bg-white/10 backdrop-blur-sm rounded-xl mt-2 p-4 space-y-2' : 'hidden'}
          aria-hidden={!menuOpen}
        >
          <a
            href="#"
            className="block text-sm font-medium text-white px-3 py-2 rounded-lg hover:bg-white/10"
            onClick={() => setMenuOpen(false)}
          >
            Sign In
          </a>
          <Button size="sm" className="w-full">Sign Up</Button>
        </div>
      </nav>
    </header>
  )
}
