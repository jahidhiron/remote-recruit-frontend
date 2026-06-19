import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'
import { BasicCard } from './components/BasicCard/BasicCard'
import { PremiumCard } from './components/PremiumCard/PremiumCard'

export function PricingSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="pb-0 relative z-10"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-[1040px] mx-auto px-6 xl:px-0">
        <h2
          id="pricing-heading"
          className={cn(
            'font-semibold text-[#11142d] text-center transition-all duration-700 mb-[50px] text-[clamp(26px,3.5vw,40px)] leading-[52px]',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          Help Is One Click Away
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 -mb-[219px]">
          <BasicCard isVisible={isVisible} />
          <PremiumCard isVisible={isVisible} />
        </div>
      </div>
    </section>
  )
}
