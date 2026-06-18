import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

function FindWorkMockup() {
  return (
    <div className="relative w-full max-w-xs mx-auto pb-8">
      {/* Decorative dot */}
      <div className="absolute -top-3 -left-3 w-5 h-5 rounded-full bg-brand-500 z-10" />

      <div className="bg-white rounded-2xl shadow-2xl shadow-brand-100/80 overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="bg-brand-700 px-4 py-3 flex items-center justify-between">
          <span className="text-white font-bold text-sm">Let's Find Work</span>
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-white text-xs font-bold">R</span>
          </div>
        </div>

        {/* Search */}
        <div className="px-4 py-3 border-b border-gray-100">
          <div className="flex gap-2">
            <div className="flex-1 bg-gray-50 rounded-lg px-3 py-1.5 text-xs text-gray-400 border border-gray-200">
              Search jobs...
            </div>
            <div className="bg-brand-600 rounded-lg px-3 py-1.5 text-xs text-white font-semibold">
              Search
            </div>
          </div>
        </div>

        {/* Profiles */}
        <div className="p-4 space-y-3">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-brand-50 border border-brand-100">
            <div className="w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center shrink-0">
              <span className="text-brand-700 text-sm font-bold">FG</span>
            </div>
            <div>
              <div className="text-xs font-bold text-gray-800">Felicitious Gnu</div>
              <div className="text-xs text-brand-600 font-medium">Python Developer</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
              <span className="text-purple-700 text-sm font-bold">MM</span>
            </div>
            <div>
              <div className="text-xs font-bold text-gray-800">Mel Museliphem</div>
              <div className="text-xs text-gray-500 font-medium">Graphic Designer</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -bottom-3 right-4 bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2 border border-gray-100">
        <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center">
          <span className="text-white text-xs leading-none">✓</span>
        </div>
        <span className="text-xs font-semibold text-gray-700">Hired Today!</span>
      </div>
    </div>
  )
}

export function FeatureSectionGlobal() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left – Text */}
          <div
            className={cn(
              'transition-all duration-700',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            )}
          >
            <span className="inline-block bg-brand-50 text-brand-600 text-xs font-semibold px-3 py-1 rounded-full mb-5">
              Global Reach
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
              The First Fully Global Job Board, Anywhere, Ever
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              RemoteRecruit connects candidates with opportunities around the world. With today's
              remote-first workforce, you need to be able to find the best jobs and the best
              people for them, wherever they may be.
            </p>
          </div>

          {/* Right – Mockup */}
          <div
            className={cn(
              'flex justify-center lg:justify-end transition-all duration-700',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            )}
            style={{ transitionDelay: '150ms' }}
          >
            <FindWorkMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
