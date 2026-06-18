import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { useTypedSelector } from '@/store/typedSelector'
import { faqList } from '@/store/actions/faq.actions.type'
import { AppDispatch } from '@/store'
import { cn } from '@/lib/utils'

function FaqSkeleton() {
  return (
    <div className="space-y-0 divide-y divide-gray-100 animate-pulse">
      {[1, 2, 3].map((i) => (
        <div key={i} className="py-5">
          <div className="h-4 bg-gray-100 rounded w-3/4" />
        </div>
      ))}
    </div>
  )
}

export function FaqSection() {
  const { ref, isVisible } = useScrollAnimation()
  const dispatch = useDispatch<AppDispatch>()
  const { faqItems, isLoaded } = useTypedSelector((state) => state.faq)
  const [openId, setOpenId] = useState<string | null>(null)

  useEffect(() => {
    if (!isLoaded) {
      dispatch(faqList())
    }
  }, [dispatch, isLoaded])

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <h2
          className={cn(
            'text-2xl sm:text-3xl font-extrabold text-gray-900 mb-10 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          Common Questions
        </h2>

        {/* Loading skeleton */}
        {!isLoaded && <FaqSkeleton />}

        {/* FAQ list */}
        {isLoaded && (
          <div className="space-y-0 divide-y divide-gray-100">
            {faqItems.map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  'transition-all duration-700',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                )}
                style={{ transitionDelay: `${index * 100 + 100}ms` }}
              >
                <button
                  className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                  onClick={() => toggle(item.id)}
                  aria-expanded={openId === item.id}
                >
                  <span className="text-sm font-semibold text-gray-800 group-hover:text-brand-600 transition-colors">
                    {item.question}
                  </span>
                </button>

                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300 text-sm text-gray-500 leading-relaxed',
                    openId === item.id ? 'max-h-48 pb-5' : 'max-h-0'
                  )}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* More Questions button */}
        <div
          className={cn(
            'mt-10 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
          style={{ transitionDelay: '400ms' }}
        >
          <button className="border border-gray-300 text-gray-700 hover:border-brand-500 hover:text-brand-600 text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200">
            More Questions
          </button>
        </div>
      </div>
    </section>
  )
}
