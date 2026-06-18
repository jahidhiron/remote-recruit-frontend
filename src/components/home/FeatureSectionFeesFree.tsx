import { Check } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

const premiumFeatures = [
  'Up to 20 active job posts',
  'Premium Placement & Visibility',
  'Messaging anyone, unlimited',
  'Unlimited Invites',
  'View all applicants',
  'Unlimited to Freelancers',
]

function PremiumCardMockup() {
  return (
    <div className="relative w-full max-w-xs mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl shadow-brand-100/80 overflow-hidden border border-gray-100">
        {/* Card header */}
        <div className="px-5 pt-5 pb-4 border-b border-gray-100">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-400 font-medium">Your Membership Plan</span>
            {/* R icon circle */}
            <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center shadow-md">
              <span className="text-white text-xs font-extrabold">R</span>
            </div>
          </div>
          <div className="text-brand-600 font-extrabold text-xl">Premium</div>
        </div>

        {/* Features list */}
        <div className="px-5 py-4 space-y-2.5">
          {premiumFeatures.map((f) => (
            <div key={f} className="flex items-center gap-2.5">
              <div className="w-4 h-4 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                <Check size={9} className="text-brand-600" strokeWidth={3} />
              </div>
              <span className="text-xs text-gray-600">{f}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
          <div className="text-xs text-gray-400 mb-0.5">Upcoming Payment In...</div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-700">14 Days</span>
            <span className="text-xs font-bold text-brand-600">$79.95</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FeatureSectionFeesFree() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 bg-gray-50/60 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left – Mockup */}
          <div
            className={cn(
              'flex justify-center lg:justify-start order-2 lg:order-1 transition-all duration-700',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            )}
          >
            <PremiumCardMockup />
          </div>

          {/* Right – Text */}
          <div
            className={cn(
              'order-1 lg:order-2 transition-all duration-700',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            )}
            style={{ transitionDelay: '150ms' }}
          >
            <span className="inline-block bg-brand-50 text-brand-600 text-xs font-semibold px-3 py-1 rounded-full mb-5">
              Actually Free Hire
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
              Fee-Free Forever
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              We don't charge you fees and we don't put up paywalls. We're the bridge that
              connects job opportunities with the best candidates, with no middleman involved.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
