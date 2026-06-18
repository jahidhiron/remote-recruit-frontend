import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Check } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { useTypedSelector } from '@/store/typedSelector'
import { pricingList } from '@/store/actions/pricing.actions.type'
import { AppDispatch } from '@/store'
import { cn } from '@/lib/utils'

function PricingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-pulse" aria-hidden="true">
      {[1, 2].map((i) => (
        <div key={i} className="rounded-2xl bg-gray-100 h-64" />
      ))}
    </div>
  )
}

export function PricingSection() {
  const { ref, isVisible } = useScrollAnimation()
  const dispatch = useDispatch<AppDispatch>()
  const { pricingPlans, isLoaded } = useTypedSelector((state) => state.pricing)

  useEffect(() => {
    if (!isLoaded) {
      dispatch(pricingList())
    }
  }, [dispatch, isLoaded])

  return (
    <section aria-labelledby="pricing-heading" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h2
          id="pricing-heading"
          className={cn(
            'text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-10 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          Help Is One Click Away
        </h2>

        {/* Loading skeleton */}
        {!isLoaded && <PricingSkeleton />}

        {/* Pricing cards */}
        {isLoaded && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pricingPlans.map((plan, index) => (
              <article
                key={plan.id}
                aria-label={`${plan.name} plan`}
                className={cn(
                  'rounded-2xl p-7 flex flex-col transition-all duration-700',
                  plan.highlighted
                    ? 'text-white shadow-xl shadow-brand-800/30'
                    : 'bg-brand-50/80 border border-brand-100',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{
                  transitionDelay: `${index * 150 + 200}ms`,
                  background: plan.highlighted
                    ? 'linear-gradient(145deg, #1535c8, #1a4fd8)'
                    : undefined,
                }}
              >
                {/* Plan name / price */}
                <div className="mb-6">
                  {plan.highlighted ? (
                    <>
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-4" aria-hidden="true">
                        <span className="text-xl">💎</span>
                      </div>
                      <div className="text-xs font-semibold text-white/90 mb-0.5 uppercase tracking-wide">
                        {plan.name}
                      </div>
                      <div className="text-3xl font-extrabold text-white">{plan.price}</div>
                      <div className="text-xs text-white/80">{plan.period}</div>
                    </>
                  ) : (
                    <>
                      <div className="text-xl font-extrabold text-gray-800 mb-1">{plan.name}</div>
                      <div className="text-sm text-gray-600">No credit card required</div>
                    </>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-7" aria-label={`${plan.name} features`}>
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-3">
                      <div
                        className={cn(
                          'w-4 h-4 rounded-full flex items-center justify-center shrink-0',
                          plan.highlighted ? 'bg-white/20' : 'bg-brand-100'
                        )}
                        aria-hidden="true"
                      >
                        <Check
                          size={9}
                          strokeWidth={3}
                          className={plan.highlighted ? 'text-white' : 'text-brand-700'}
                        />
                      </div>
                      <span
                        className={cn(
                          'text-sm',
                          plan.highlighted ? 'text-white/90' : 'text-gray-700'
                        )}
                      >
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={cn(
                    'w-full py-3 rounded-xl text-sm font-bold transition-all duration-200',
                    plan.highlighted
                      ? 'bg-white text-brand-700 hover:bg-brand-50'
                      : 'bg-brand-600 text-white hover:bg-brand-700 shadow-sm'
                  )}
                  aria-label={`${plan.ctaLabel} — ${plan.name} plan`}
                >
                  {plan.ctaLabel}
                </button>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
