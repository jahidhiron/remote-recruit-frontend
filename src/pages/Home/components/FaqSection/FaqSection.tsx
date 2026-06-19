
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { faqItems, FaqItem } from '@/data/mock-data'
import { cn } from '@/lib/utils'

export function FaqSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-white pt-[80px] pb-[40px] lg:pt-[148px] lg:pb-[80px]"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-[1040px] mx-auto px-6 xl:px-0">
        <h2
          id="faq-heading"
          className={cn(
            'font-medium text-[#11142d] transition-all duration-700 mb-[60px] text-[clamp(26px,3.5vw,40px)] leading-[52px]',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          Common Questions
        </h2>

        <dl className="space-y-10">
          {faqItems.map((item: FaqItem, index: number) => (
            <div
              key={item.id}
              className={cn(
                'transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
              style={{ transitionDelay: `${index * 100 + 100}ms` }}
            >
              <dt className="font-medium text-[#11142d] mb-3 text-[clamp(16px,1.6vw,19px)] leading-[35px]">
                {item.question}
              </dt>

              <dd className="font-normal text-[#6d6e7a] text-[clamp(15px,1.5vw,19px)] leading-[35px]">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>

        <div
          className={cn(
            'transition-all duration-700 mt-[60px]',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
          style={{ transitionDelay: '400ms' }}
        >
          <button
            className="w-[185px] h-[67px] rounded-[16px] border-2 border-[rgba(83,180,218,0.69)] text-[#1e3e85] text-[16px] leading-[21px] font-semibold bg-transparent cursor-pointer transition-all duration-300 hover:bg-[rgba(83,180,218,0.1)] hover:border-[#52b4da] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#52b4da]"
          >
            More Questions
          </button>
        </div>
      </div>
    </section>
  )
}
