import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.01 })

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1e52d8 0%, #1f6bef 60%, #2575f5 100%)' }}
      ref={ref}
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 pt-32 pb-28 text-center">
        <h1
          className={cn(
            'text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          RemoteRecruit's Difference
        </h1>
        <p
          className={cn(
            'text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
          style={{ transitionDelay: '150ms' }}
        >
          RemoteRecruit is connecting the world with an easy-to-use platform that lets full-time,
          part-time, and freelance workers showcase their talents to businesses that need them.
          With no paywalls, no fees, and no barriers, there's nothing but you, your talents,
          and the next step in your career.
        </p>
      </div>

      {/* Wave bottom */}
      <div className="relative h-16 sm:h-20" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path d="M0,80 L0,40 Q360,0 720,30 Q1080,60 1440,20 L1440,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
