import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'
import { PremiumCardMockup } from './components/PremiumCardMockup/PremiumCardMockup'

export function FeeFreeSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      aria-labelledby="fees-heading"
      className="bg-white overflow-hidden pt-16 pb-10 lg:pt-[100px] lg:pb-[140px]"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-[1040px] mx-auto px-6 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div
            className={cn(
              'md:hidden order-1 transition-all duration-700',
              isVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'
            )}
          >
            <div className="inline-flex items-center px-5 mb-6 h-[36px] rounded-full bg-[#c2eeff]">
              <span className="font-semibold tracking-[0.4px] text-[12px] leading-[15px] text-[#11142d]">
                Actually Fee Free
              </span>
            </div>

            <h2 className="font-medium text-[#11142d] mb-6 text-[clamp(28px,3.5vw,40px)] leading-[1.3]">
              Fee-Free Forever
            </h2>
          </div>

          <div
            className={cn(
              'order-2 md:order-1 flex justify-center lg:justify-start transition-all duration-700',
              isVisible ? 'opacity-100 lg:translate-x-0' : 'opacity-0 lg:-translate-x-7'
            )}
          >
            <div className="shrink-0 scale-[0.72] origin-top -mb-[134px] md:scale-90 md:-mb-[48px] lg:scale-100 lg:mb-0">
              <PremiumCardMockup />
            </div>
          </div>

          <div
            className={cn(
              'order-3 md:order-2 transition-all duration-700',
              isVisible ? 'opacity-100 lg:translate-x-0' : 'opacity-0 lg:translate-x-7'
            )}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="hidden md:block">
              <div className="inline-flex items-center px-5 mb-6 h-[36px] rounded-full bg-[#c2eeff]">
                <span className="font-semibold tracking-[0.4px] text-[12px] leading-[15px] text-[#11142d]">
                  Actually Fee Free
                </span>
              </div>

              <h2
                id="fees-heading"
                className="font-medium text-[#11142d] mb-6 text-[clamp(28px,3.5vw,40px)] leading-[1.3]"
              >
                Fee-Free Forever
              </h2>
            </div>

            <p className="font-normal text-[clamp(16px,1.6vw,19px)] leading-[35px] text-[#11142d]/60">
              We don't charge you fees and we don't put up paywalls. We're the bridge that
              connects job opportunities with the best candidates, with no middleman involved.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
