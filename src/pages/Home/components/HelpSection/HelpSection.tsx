import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'
import leftBg       from '@/assets/help-desktop-left.png'
import mobileLeftBg from '@/assets/help-mobile-left.png'
import rightBg      from '@/assets/help-desktop-right.png'
import topMobileBg  from '@/assets/help-mobile-top.png'

import { TextContent } from './components/TextContent/TextContent'

export function HelpSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      aria-labelledby="help-heading"
      className="bg-white overflow-hidden pt-10 pb-0 lg:pt-[100px] lg:pb-0"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-[1440px] mx-auto px-0">
        
        {/* DESKTOP VIEW (lg+) */}
        <div className="hidden lg:block relative w-full overflow-hidden rounded-[40px] bg-[#f9fafb]">
          {/* Left image provides the height of the section */}
          <img loading="lazy" decoding="async" 
            src={leftBg} 
            alt="" 
            className={cn(
              "w-[50%] h-auto block transition-all duration-700",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )} 
          />
          
          {/* Right side content container absolutely positioned */}
          <div className="absolute top-0 bottom-0 left-[50%] right-0 flex flex-col justify-center pl-[8%] pr-[5%]">
            <div className={cn(
              "max-w-[500px] transition-all duration-700",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}>
              <TextContent />
            </div>
          </div>
        </div>

        {/* MOBILE VIEW (<lg) */}
        <div className="block lg:hidden relative overflow-hidden rounded-[24px] bg-[#f9fafb] mx-4 pt-6 pb-20">
          {/* Top image */}
          <img loading="lazy" decoding="async" 
            src={topMobileBg} 
            alt="" 
            className={cn(
              "w-full max-w-[300px] mx-auto h-auto block mb-8 relative z-10 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            )} 
          />
          
          {/* Content */}
          <div className={cn(
            "relative z-20 px-6 flex flex-col items-center text-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <TextContent />
          </div>

          {/* Bottom left & right images */}
          <img loading="lazy" decoding="async" 
            src={mobileLeftBg} 
            alt="" 
            className="absolute bottom-0 left-0 w-[50%] h-auto z-[1]" 
          />
          <img loading="lazy" decoding="async" 
            src={rightBg} 
            alt="" 
            className="absolute bottom-0 right-0 w-[50%] h-auto z-[1]" 
          />
        </div>

      </div>
    </section>
  )
}
