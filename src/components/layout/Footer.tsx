import { Facebook, Instagram, Twitter, Linkedin, Youtube, MessageCircle } from 'lucide-react'

const socialLinks = [
  { Icon: Facebook, label: 'Facebook', href: '#' },
  { Icon: Instagram, label: 'Instagram', href: '#' },
  { Icon: Youtube, label: 'YouTube', href: '#' },
  { Icon: Twitter, label: 'Twitter', href: '#' },
  { Icon: Linkedin, label: 'LinkedIn', href: '#' },
  { Icon: MessageCircle, label: 'Discord', href: '#' },
]

export function Footer() {
  return (
    <footer style={{ background: '#0f1829' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" aria-label="RemoteRecruit">
            <div className="flex flex-col leading-none">
              <span className="text-xs font-medium text-white/60 tracking-widest uppercase">Remote</span>
              <span className="text-base font-extrabold text-white tracking-tight -mt-0.5">Recruit</span>
            </div>
          </a>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all duration-200"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom stripe with scroll indicator */}
      <div className="border-t border-white/5 py-4 flex justify-center">
        <div className="flex flex-col items-center gap-1 text-white/20">
          <div className="w-px h-6 bg-white/10" />
          <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
          </div>
        </div>
      </div>
    </footer>
  )
}
