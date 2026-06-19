import { cn } from '@/lib/utils'
import checkActive  from '@/assets/check-active.svg'
import checkInactive from '@/assets/check-inactive.svg'

export function FeatureLine({ text, enabled = true }: { text: string; enabled?: boolean }) {
  return (
    <div className="flex items-start gap-2">
      <img decoding="async"
        src={enabled ? checkActive : checkInactive}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={20}
        height={20}
        className="block w-[20px] h-[20px] shrink-0 mt-[2px]"
      />
      <span className={cn("font-medium text-[16px] leading-[24px]", enabled ? "text-[#323445]" : "text-[#808191]")}>
        {text}
      </span>
    </div>
  )
}
