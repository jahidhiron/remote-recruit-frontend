import showcaseAppScreenshot from '@/assets/showcase-app-screenshot.png'
import showcaseBadgeGru    from '@/assets/showcase-badge-gru.png'
import showcaseAvatarFeedback from '@/assets/showcase-avatar-feedback.png'

const TAGS = [
  // row 1
  { label: 'Python Dev',      left: 87,  top: 344, w: 93,  r: 8  },
  { label: 'Javascript',      left: 196, top: 344, w: 88,  r: 8  },
  { label: 'Front End',       left: 300, top: 344, w: 81,  r: 8  },
  // row 2
  { label: 'Back End',        left: 87,  top: 392, w: 79,  r: 8  },
  { label: 'IOS Development', left: 182, top: 392, w: 129, r: 8  },
  { label: '+12',             left: 327, top: 392, w: 42,  r: 16 },
] as const

export function ShowcaseMockup() {
  return (
    <div
      className="relative shrink-0 w-[451px] h-[454px]"
      aria-hidden="true"
    >
      <div
        className="absolute left-[29px] top-0 w-[22px] h-[22px] rounded-full bg-gradient-to-br from-[#52b4da] to-[#1e3e85]"
      />

      <div
        className="absolute left-[67px] top-[3px] w-[355px] h-[451px] rounded-[34px] bg-white border border-[#f6f4ff] shadow-[14px_41px_100px_rgba(49,89,211,0.12)] drop-shadow-[14px_13px_20px_rgba(135,129,245,0.11)]"
      >
        <div
          className="absolute left-[20px] top-[20px] w-[315px] h-[176px] rounded-[16px] overflow-hidden"
        >
          <img decoding="async"
            src={showcaseAppScreenshot}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover block"
          />
        </div>

        <div
          className="absolute flex items-center justify-center cursor-pointer hover:opacity-80 active:scale-95 transition-all duration-200 left-[149px] top-[80px] w-[57px] h-[57px] rounded-full bg-[rgba(82,180,218,0.49)] backdrop-blur-[2.7px]"
        >
          <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.75 7.90309C21.4167 9.44269 21.4167 13.2917 18.75 14.8313L6 22.1925C3.33333 23.7321 1.1776e-06 21.8076 1.04301e-06 18.7284L3.99469e-07 4.00597C2.64873e-07 0.926767 3.33333 -0.99773 6 0.54187L18.75 7.90309Z" fill="#1E3E85"/>
          </svg>
        </div>

        {TAGS.map((tag) => (
          <div
            key={tag.label}
            className="absolute flex items-center h-[32px] px-3 bg-gradient-to-br from-[rgba(87,153,235,0.1)] to-[rgba(159,116,251,0.1)]"
            style={{
              left: `${tag.left - 67}px`,
              top:  `${tag.top  -  3}px`,
              width: `${tag.w}px`,
              borderRadius: `${tag.r}px`,
            }}
          >
            <span
              className="whitespace-nowrap font-medium text-[12px] leading-[21px] bg-gradient-to-br from-[#336DA6] to-[#1E3E85] bg-clip-text text-transparent"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {tag.label}
            </span>
          </div>
        ))}
      </div>

      <div
        className="absolute flex items-center gap-3 left-0 top-[235px] w-[352px] h-[73px] rounded-[36.5px] bg-white border border-[#f6f4ff] px-4 shadow-[0_4px_20px_rgba(17,20,45,0.10),14px_10px_30px_0px_rgba(49,89,211,0.12)] drop-shadow-[14px_13px_20px_rgba(135,129,245,0.11)]"
      >
        <div
          className="shrink-0 overflow-hidden w-[61px] h-[61px] rounded-full border-[4px] border-[#ffaa45]"
        >
          <img decoding="async"
            src={showcaseAvatarFeedback}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover block"
          />
        </div>
        <div>
          <div className="font-semibold text-[12px] leading-[21px] text-[#1e3e85]">
            Past Client Feedback
          </div>
          <div className="font-medium text-[17px] leading-[24px] text-[#11142d]">
            Best Developer Ever!
          </div>
        </div>
      </div>

      <div className="absolute left-[360px] top-[153px]">
        <img decoding="async"
          src={showcaseBadgeGru}
          alt=""
          loading="lazy"
          width={91}
          height={91}
          className="block"
        />
      </div>
    </div>
  )
}
