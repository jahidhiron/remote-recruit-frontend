import { cn } from '@/lib/utils'
import { FeatureLine } from '../FeatureLine/FeatureLine'

export function BasicCard({ isVisible }: { isVisible: boolean }) {
  return (
    <article
      aria-label="Free Basic plan"
      className={cn(
        'bg-white flex flex-col transition-all duration-700 rounded-[28px] min-h-[343px] shadow-[-15px_50px_150px_rgba(49,89,211,0.12)]',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: '200ms' }}
    >
      <div className="flex flex-col md:flex-row flex-1 px-8 pt-8 gap-6">
        <div className="shrink-0 flex flex-col items-center justify-center w-full md:w-[160px] h-[180px] bg-[#ecf2ff] rounded-[16px]">
          <span className="font-semibold text-center text-[32px] leading-[45px] text-[#52b4da]">
            Free
          </span>
          <span className="font-medium text-center text-[20px] leading-[35px] text-[#11142d]/40">
            Basic
          </span>
        </div>

        <div className="flex flex-col justify-start md:justify-center flex-1 gap-5">
          <FeatureLine text="1 Active Job" enabled={true} />
          <FeatureLine text="Basic List Placement" enabled={true} />
          <FeatureLine text="Unlimited Job Applicants" enabled={false} />
          <FeatureLine text="Invite Anyone to Apply to Your Jobs" enabled={false} />
        </div>
      </div>

      <div className="p-8 pt-[27px]">
        <div className="p-[2px] rounded-[24px] bg-gradient-to-br from-[#52b4da] to-[#1e3e85]">
          <button
            className="w-full h-[68px] rounded-[22px] bg-white text-[#1e3e85] font-semibold text-[20px] leading-[26px] transition-all duration-300 hover:bg-[#f0f4ff] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#52b4da] cursor-pointer border-none"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Get Started
          </button>
        </div>
      </div>
    </article>
  )
}
