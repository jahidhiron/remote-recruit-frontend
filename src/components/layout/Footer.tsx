import { Facebook, Instagram, Twitter, Linkedin, Youtube, MessageCircle } from 'lucide-react'

const socialLinks = [
  { Icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
  { Icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { Icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
  { Icon: Twitter, label: 'Twitter / X', href: 'https://twitter.com' },
  { Icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { Icon: MessageCircle, label: 'Discord', href: 'https://discord.com' },
]

export function Footer() {
  return (
    <footer style={{ background: '#0f1829' }} aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" aria-label="RemoteRecruit home">
            <div className="flex flex-col leading-none">
              <span className="text-xs font-medium text-white/80 tracking-widest uppercase">Remote</span>
              <span className="text-base font-extrabold text-white tracking-tight -mt-0.5">Recruit</span>
            </div>
          </a>

          {/* Social icons */}
          <nav aria-label="Social media links">
            <ul className="flex items-center gap-3 list-none">
              {socialLinks.map(({ Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all duration-200"
                  >
                    <Icon size={14} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom scroll indicator — decorative */}
      <div className="border-t border-white/5 py-4 flex justify-center" aria-hidden="true">
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
