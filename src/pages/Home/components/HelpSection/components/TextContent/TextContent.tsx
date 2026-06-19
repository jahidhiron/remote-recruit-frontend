export function TextContent() {
  return (
    <>
      <p className="font-semibold tracking-[1px] mb-[10px] text-[16px] leading-[30px] text-[#1e3e85]">
        Are you ready?
      </p>

      <h2
        id="help-heading"
        className="font-semibold text-[#11142d] mb-6 text-[clamp(28px,3.5vw,44px)] leading-[1.3]"
      >
        Help is only a few clicks away!
      </h2>

      <p className="font-normal mb-10 text-[clamp(15px,1.5vw,18px)] leading-[33px] text-[#767784]">
        Click Below to get set up super quickly and find help now!
      </p>

      <button
        className="flex items-center gap-2 pl-2 w-[180px] h-[61px] rounded-[40px] bg-[rgba(82,180,218,0.16)] border border-[rgba(82,180,218,0.28)] cursor-pointer transition-all duration-300 hover:bg-[rgba(82,180,218,0.25)] hover:border-[#52b4da] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#52b4da] focus-visible:ring-offset-2"
        aria-label="Get started with RemoteRecruit"
      >
        <span
          className="flex items-center justify-center shrink-0 w-[46px] h-[46px] rounded-full bg-[#52b4da]"
          aria-hidden="true"
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            <path d="M0 8.5h19.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M13 1.5l8 7-8 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="font-medium text-[16px] leading-[24px] text-[#1e3e85]">
          Get Started
        </span>
      </button>
    </>
  )
}
