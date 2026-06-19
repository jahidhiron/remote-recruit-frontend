import { cn } from '@/lib/utils'
import premiumIcon  from '@/assets/premium-icon.png'
import { FeatureLine } from '../FeatureLine/FeatureLine'

export function PremiumCard({ isVisible }: { isVisible: boolean }) {
  return (
    <article
      aria-label="Premium plan"
      className={cn(
        'bg-white flex flex-col relative transition-all duration-700 rounded-[28px] min-h-[343px] shadow-[-15px_50px_150px_rgba(49,89,211,0.12)]',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: '350ms' }}
    >
      <div className="flex flex-col md:flex-row flex-1 px-8 pt-8 gap-6">
        <div className="shrink-0 flex flex-col items-center justify-center relative w-full md:w-[160px] h-[180px] bg-[#ecf2ff] rounded-[16px]">
          <div
            className="absolute inline-flex items-center h-[44px] px-[14px] pl-[4px] rounded-[22px] bg-[#c2eeff] shadow-[0_4px_4px_rgba(67,145,193,0.208)] gap-2 z-10"
            style={{ top: '-22px', left: '7px' }}
          >
            <img decoding="async"
              src={premiumIcon}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="w-[36px] h-[36px] object-contain block"
            />
            <span className="font-semibold text-[16px] text-[#11142d] tracking-[0.4px]">
              Premium
            </span>
          </div>

          <span
            className="font-semibold text-center text-[32px] leading-[45px] bg-gradient-to-br from-[#52B4DA] to-[#1E3E85] bg-clip-text text-transparent"
          >
            $79.99
          </span>
          <span className="font-medium text-center text-[20px] leading-[35px] text-[#11142d]/40">
            Per Month
          </span>
        </div>

        <div className="flex flex-col justify-start md:justify-center flex-1 gap-5">
          <FeatureLine text="Unlimited Job Posts" enabled={true} />
          <FeatureLine text="Instant Job Post Approval" enabled={true} />
          <FeatureLine text="Premium List Placement" enabled={true} />
          <FeatureLine text="Unlimited Job Applicants" enabled={true} />
        </div>
      </div>

      <div className="p-8 pt-[27px]">
        <button
          className="w-full h-[72px] rounded-[24px] bg-gradient-to-br from-[#52B4DA] to-[#1E3E85] text-white font-semibold text-[20px] leading-[26px] shadow-[10px_0_50px_rgba(49,89,211,0.28)] transition-all duration-300 hover:opacity-80 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#52b4da] cursor-pointer border-none"
        >
          Get Started
        </button>
      </div>
    </article>
  )
}
