import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

function AppInterfaceMockup() {
  return (
    <div className="relative w-full max-w-sm mx-auto" aria-hidden="true">
      {/* Decorative dots */}
      <div className="absolute -top-3 right-8 w-4 h-4 rounded-full bg-yellow-400 z-10" />
      <div className="absolute top-1/2 -right-3 w-4 h-4 rounded-full bg-brand-400 z-10" />

      <div className="bg-white rounded-2xl shadow-2xl shadow-black/20 overflow-hidden border border-white/20">
        {/* Top nav strip */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-100 border-b border-gray-200">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <div className="flex-1 mx-4 bg-white rounded px-3 py-0.5 text-xs text-gray-500 border border-gray-200">
            app.remoterecruit.com
          </div>
        </div>

        {/* App layout: sidebar + content */}
        <div className="flex h-44">
          {/* Sidebar */}
          <div className="w-10 bg-brand-800 flex flex-col items-center py-3 gap-3 shrink-0">
            {['H', 'J', 'P', 'M'].map((icon) => (
              <div
                key={icon}
                className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center text-white text-xs font-bold"
              >
                {icon}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 bg-gray-50 p-3 space-y-2 overflow-hidden">
            <div className="text-xs font-bold text-gray-700">Let's Find Work</div>
            <div className="bg-white rounded-lg p-2 border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-brand-200 flex items-center justify-center text-xs font-bold text-brand-800">
                  A
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-700">Frontend Developer</div>
                  <div className="text-xs text-gray-600">Stripe · Remote</div>
                </div>
                <div className="ml-auto text-xs text-brand-700 font-semibold">Apply</div>
              </div>
            </div>
            <div className="bg-brand-600 rounded-lg p-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold text-white">
                  B
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">UX Designer</div>
                  <div className="text-xs text-white/80">Notion · Remote</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-2 border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-xs font-bold text-purple-700">
                  C
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-700">Data Scientist</div>
                  <div className="text-xs text-gray-600">Figma · Remote</div>
                </div>
                <div className="ml-auto text-xs text-brand-700 font-semibold">Apply</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FeatureSectionHelp() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      aria-labelledby="help-heading"
      className="py-20 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1a4dd4 0%, #1f6bef 100%)' }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left – App Mockup (decorative) */}
          <div
            className={cn(
              'flex justify-center lg:justify-start order-2 lg:order-1 transition-all duration-700',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            )}
          >
            <AppInterfaceMockup />
          </div>

          {/* Right – Text + CTA */}
          <div
            className={cn(
              'order-1 lg:order-2 transition-all duration-700',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            )}
            style={{ transitionDelay: '150ms' }}
          >
            <p className="text-white/90 text-sm font-medium mb-3">Are you ready?</p>
            <h2 id="help-heading" className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              Help is only a few clicks away!
            </h2>
            <p className="text-white/90 leading-relaxed text-sm sm:text-base mb-8">
              Click Below to get set up super quickly and find help now!
            </p>

            {/* CTA Button */}
            <button
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/40 rounded-full px-6 py-3 text-white font-semibold text-sm transition-all duration-200 group"
              aria-label="Get started with RemoteRecruit"
            >
              <span className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center group-hover:bg-brand-400 transition-colors" aria-hidden="true">
                <ArrowRight size={14} className="text-white" />
              </span>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
