import featureRrBadge from '@/assets/feature-rr-badge.png'
import paypalIcon from '@/assets/paypal-icon.png'
import { CheckCircle } from '../CheckCircle/CheckCircle'

export function PremiumCardMockup() {
  const features: [string, number][] = [
    ['Up to 25 active job posts',        139],
    ['Premium Placement & Visibility',   179],
    ['Messaging anyone, unlimited',      219],
    ['Unlimited invites',                259],
    ['View all applicants',              294],
    ['Unlimited invites to jobseekers',  344],
  ]

  return (
    <div
      className="relative shrink-0 w-[451px] h-[480px]"
      aria-hidden="true"
    >
      <div
        className="absolute left-[67px] top-[3px] w-[355px] h-[500px] rounded-[34px] bg-white border border-[#f6f4ff] shadow-[14px_41px_100px_rgba(49,89,211,0.12)]"
      />

      <div
        className="absolute left-[29px] top-0 w-[22px] h-[22px] rounded-full bg-gradient-to-br from-[#52b4da] to-[#1e3e85]"
      />

      <div className="absolute left-[360px] top-[109px]">
        <img src={featureRrBadge} alt="" loading="lazy" className="block w-[91px] h-[91px]" />
      </div>

      <div
        className="absolute font-semibold left-[99px] top-[35px] text-[12px] leading-[18px] tracking-[1px] text-[#808191]"
      >
        Your Membership Tier
      </div>

      <div
        className="absolute font-semibold left-[99px] top-[63px] text-[20px] leading-[24px] tracking-[1.1px] bg-gradient-to-br from-[#52b4da] to-[#1e3e85] bg-clip-text text-transparent"
      >
        Premium
      </div>

      <div
        className="absolute font-bold uppercase left-[99px] top-[107px] text-[10px] leading-[18px] tracking-[1px] text-[#11142d]/50"
      >
        Features
      </div>

      {features.map(([label, top]) => (
        <div
          key={label}
          className="absolute flex items-center gap-3 left-[99px]"
          style={{ top: `${top}px` }}
        >
          <CheckCircle />
          <span className="font-medium text-[14px] leading-[24px] text-[#323445]/90">
            {label}
          </span>
        </div>
      ))}

      <div
        className="absolute flex items-center gap-3 left-0 top-[402px] w-[352px] h-[73px] rounded-[36.5px] bg-white border border-[#f6f4ff] px-4 shadow-[0_4px_20px_rgba(17,20,45,0.10),14px_10px_30px_0px_rgba(49,89,211,0.12)] drop-shadow-[14px_13px_20px_rgba(135,129,245,0.11)]"
      >
        <div
          className="shrink-0 flex items-center justify-center w-[61px] h-[61px] rounded-full bg-gradient-to-br from-[#ebedff7a] to-[#adb8ff7a] shadow-[14px_10px_30px_rgba(49,89,211,0.12)]"
        >
          <img decoding="async"
            src={paypalIcon}
            alt="PayPal"
            loading="lazy"
            className="w-[24px] h-[28px] block object-contain"
          />
        </div>
        <div>
          <div className="text-[12px] font-semibold leading-[21px] text-[#1e3e85]">
            Upcoming Payment In…
          </div>
          <div className="text-[17px] font-medium leading-[24px] text-[#11142d]">
            14 Days - $79.99
          </div>
        </div>
      </div>
    </div>
  )
}
