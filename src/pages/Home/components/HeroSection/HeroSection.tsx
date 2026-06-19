export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden flex flex-col min-h-[100dvh] -mb-px md:mb-0 md:block md:min-h-[704px] bg-white"
    >
      <svg
        aria-hidden="true"
        className="absolute top-0 left-0 h-[200dvh] w-[200%] pointer-events-none md:inset-0 md:h-full md:w-full"
        viewBox="0 0 1439 704"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="hero-sky"
            x1="-666.432" y1="437.828"
            x2="-52.7159" y2="1589.72"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#52B4DA" />
            <stop offset="1" stopColor="#1E3E85" />
          </linearGradient>
        </defs>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1289.54 446.5C1324.03 446.5 1405.79 445.053 1439 446.5V0H0V700.621C42.0688 702.804 85.7979 704 131.121 704C651.054 704 840.511 446.5 1289.54 446.5Z"
          fill="url(#hero-sky)"
        />
      </svg>

      <svg
        aria-hidden="true"
        className="absolute top-0 left-0 h-[200dvh] w-[200%] pointer-events-none md:inset-0 md:h-full md:w-full"
        viewBox="0 0 1440 704"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="hero-navy"
            x1="-644.712" y1="457.365"
            x2="-18.1383" y2="1596.48"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1E3E85" />
            <stop offset="1" stopColor="#336DA6" />
          </linearGradient>
        </defs>
        <path
          d="M1440 0V652.537C1440 652.537 1262 519.631 1034 519.631C806 519.631 685.5 704 421.5 704C157.5 704 0 546.612 0 546.612V0H1440Z"
          fill="url(#hero-navy)"
        />
      </svg>

      <div
        aria-hidden="true"
        className="absolute rounded-full pointer-events-none w-[524px] h-[524px] -top-[367px] -left-[6px] bg-white/[0.045]"
      />
      <div
        aria-hidden="true"
        className="absolute rounded-full pointer-events-none w-[524px] h-[524px] top-[372px] left-[632px] bg-white/[0.045]"
      />

      <div className="relative flex-1 flex flex-col justify-center items-center w-full max-w-[1040px] mx-auto px-6 xl:px-0 text-center pt-[72px] pb-10 md:block md:pt-[225px] md:pb-[100px]">
        <h1
          id="hero-heading"
          className="font-bold text-white mb-6 leading-[1.28] text-[clamp(32px,5vw,53px)]"
        >
          RemoteRecruit's Difference
        </h1>

        <p
          className="mx-auto text-white/80 animate-fade-up font-medium max-w-[800px] leading-8 text-[clamp(16px,2vw,20px)]"
        >
          RemoteRecruit is connecting the world with an easy-to-use platform that lets full-time,
          part-time, and freelance workers showcase their talents to businesses that need them.
          With no paywalls, no fees, and no barriers, there's nothing but you, your talents, and
          the next step in your career.
        </p>
      </div>
    </section>
  )
}
