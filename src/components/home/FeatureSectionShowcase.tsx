import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

const skillTags = [
  { label: 'Python Dev', color: 'bg-purple-100 text-purple-800' },
  { label: 'JavaScript', color: 'bg-yellow-100 text-yellow-800' },
  { label: 'Vue3rd', color: 'bg-green-100 text-green-800' },
  { label: 'Redux Grid', color: 'bg-blue-100 text-blue-800' },
  { label: 'iOS Development', color: 'bg-gray-100 text-gray-700' },
  { label: '+2', color: 'bg-gray-100 text-gray-600' },
]

function ProfileMockup() {
  return (
    <div className="relative w-full max-w-xs mx-auto" aria-hidden="true">
      <div className="bg-white rounded-2xl shadow-2xl shadow-brand-100/80 overflow-hidden border border-gray-100">
        {/* Profile header with gradient */}
        <div
          className="relative px-5 pt-5 pb-14"
          style={{ background: 'linear-gradient(135deg, #6d28d9, #7c3aed, #4f46e5)' }}
        >
          <div className="text-white font-bold text-sm mb-1">My Profile</div>
          {/* Avatar */}
          <div className="absolute -bottom-6 left-5">
            <div className="w-12 h-12 rounded-full bg-white border-2 border-white shadow-md flex items-center justify-center">
              <span className="text-brand-700 font-extrabold text-lg">JD</span>
            </div>
          </div>
        </div>

        {/* Profile content */}
        <div className="px-5 pt-8 pb-5">
          {/* Headline badge */}
          <div className="inline-block bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            Best Developer Ever!
          </div>

          <div className="text-sm font-bold text-gray-800 mb-0.5">John Developer</div>
          <div className="text-xs text-gray-600 mb-4">Full Stack Engineer · Remote</div>

          {/* Skills */}
          <div className="text-xs text-gray-600 font-medium mb-2">Skills</div>
          <div className="flex flex-wrap gap-1.5">
            {skillTags.map((tag) => (
              <span
                key={tag.label}
                className={cn('text-xs font-medium px-2 py-0.5 rounded-full', tag.color)}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative dot */}
      <div className="absolute -bottom-3 -right-3 w-5 h-5 rounded-full bg-brand-400" />
    </div>
  )
}

export function FeatureSectionShowcase() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section aria-labelledby="showcase-heading" className="py-20 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left – Text */}
          <div
            className={cn(
              'transition-all duration-700',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            )}
          >
            <span className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
              Custom Profile
            </span>
            <h2 id="showcase-heading" className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
              Showcase Your Talents
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Personalize your profile with everything that makes you unique. Add an introductory
              video and other media for a personal touch that stands out to employers and candidates.
            </p>
          </div>

          {/* Right – Mockup (decorative) */}
          <div
            className={cn(
              'flex justify-center lg:justify-end transition-all duration-700',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            )}
            style={{ transitionDelay: '150ms' }}
          >
            <ProfileMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
