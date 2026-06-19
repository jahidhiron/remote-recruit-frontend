
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'
import { ShowcaseMockup } from './components/ShowcaseMockup/ShowcaseMockup'

// ── Section ──────────────────────────────────────────────────────────────────
export function ShowcaseSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      aria-labelledby="showcase-heading"
      className="bg-white overflow-hidden pt-8 pb-10 lg:pt-[100px] lg:pb-[148px]"
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
                Custom Profile
              </span>
            </div>

            <h2 className="font-medium text-[#11142d] mb-6 text-[clamp(28px,3.5vw,40px)] leading-[1.3]">
              Showcase Your Talents
            </h2>
          </div>

          <div
            className={cn(
              'order-3 md:order-2 lg:order-1 transition-all duration-700',
              isVisible ? 'opacity-100 lg:translate-x-0' : 'opacity-0 lg:-translate-x-7'
            )}
          >
            <div className="hidden md:block">
              <div className="inline-flex items-center px-5 mb-6 h-[36px] rounded-full bg-[#c2eeff]">
                <span className="font-semibold tracking-[0.4px] text-[12px] leading-[15px] text-[#11142d]">
                  Custom Profile
                </span>
              </div>

              <h2
                id="showcase-heading"
                className="font-medium text-[#11142d] mb-6 text-[clamp(28px,3.5vw,40px)] leading-[1.3]"
              >
                Showcase Your Talents
              </h2>
            </div>

            <p className="font-normal text-[clamp(16px,1.6vw,19px)] leading-[35px] text-[#11142d]/64">
              Personalize your profile with everything that makes you unique. Add an introductory
              video and other media for a personal touch that stands out to employers and candidates.
            </p>
          </div>

          <div
            className={cn(
              'order-2 lg:order-2 flex justify-center lg:justify-end transition-all duration-700',
              isVisible ? 'opacity-100 lg:translate-x-0' : 'opacity-0 lg:translate-x-7'
            )}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="shrink-0 scale-[0.72] origin-top -mb-[127px] md:scale-90 md:-mb-[45px] lg:scale-100 lg:mb-0">
              <ShowcaseMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
