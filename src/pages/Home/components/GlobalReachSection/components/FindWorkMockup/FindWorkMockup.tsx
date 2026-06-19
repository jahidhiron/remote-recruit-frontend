import featureFindWork from '@/assets/feature-find-work-full.png'
import featureAvatarGru from '@/assets/feature-avatar-gru.png'
import featureAvatarMel from '@/assets/feature-avatar-mel.png'
import featureRrBadge from '@/assets/feature-rr-badge.png'

export function FindWorkMockup() {
  return (
    <div
      className="relative shrink-0 w-[451px] h-[454px]"
      aria-hidden="true"
    >
      <div
        className="absolute left-[29px] top-0 w-[22px] h-[22px] rounded-full bg-gradient-to-br from-[#52b4da] to-[#1e3e85]"
      />

      <div
        className="absolute left-[67px] top-[3px] w-[355px] h-[451px] rounded-[34px] bg-white border border-[#f6f4ff] overflow-hidden shadow-[14px_41px_100px_rgba(49,89,211,0.12)]"
      >
        <div
          className="absolute left-[20px] top-[20px] w-[315px] h-[176px] rounded-[16px] overflow-hidden"
        >
          <img decoding="async"
            src={featureFindWork}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover block"
          />
        </div>
      </div>

      <div
        className="absolute flex items-center gap-3 left-0 top-[235px] w-[352px] h-[73px] rounded-[36.5px] bg-white border border-[#f6f4ff] px-4 shadow-[0_4px_20px_rgba(17,20,45,0.10),14px_10px_30px_0px_rgba(49,89,211,0.12)] drop-shadow-[14px_13px_20px_rgba(135,129,245,0.11)]"
      >
        <div
          className="shrink-0 w-[61px] h-[61px] rounded-full border-[4px] border-[#ffaa45] overflow-hidden"
        >
          <img src={featureAvatarGru} alt="" loading="lazy" className="w-full h-full object-cover block" />
        </div>
        <div>
          <div className="text-[12px] font-semibold leading-[21px] text-[#1e3e85]">Python Developer</div>
          <div className="text-[17px] font-medium leading-[24px] text-[#11142d]">Felonious Gru</div>
        </div>
      </div>

      <div
        className="absolute flex items-center gap-3 left-[86px] top-[344px] w-[352px] h-[73px] rounded-[36.5px] bg-white border border-[#f6f4ff] px-4 shadow-[0_4px_20px_rgba(17,20,45,0.10),14px_10px_30px_0px_rgba(49,89,211,0.12)] drop-shadow-[14px_13px_20px_rgba(135,129,245,0.11)]"
      >
        <div
          className="shrink-0 w-[61px] h-[61px] rounded-full border-[4px] border-[#ffaa45] overflow-hidden"
        >
          <img src={featureAvatarMel} alt="" loading="lazy" className="w-full h-full object-cover block" />
        </div>
        <div>
          <div className="text-[12px] font-semibold leading-[21px] text-[#52b4da]">Front End Wizard</div>
          <div className="text-[17px] font-medium leading-[24px] text-[#11142d]">Mel Muselphiem</div>
        </div>
      </div>

      <div className="absolute left-[365px] top-[155px]">
        <img src={featureRrBadge} alt="" width={91} height={91} loading="lazy" className="block" />
      </div>
    </div>
  )
}
