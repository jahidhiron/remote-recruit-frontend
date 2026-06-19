
import { useScrollToTop } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

export function ScrollToTop() {
  const { visible, scrollToTop } = useScrollToTop()

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={cn(
        'fixed bottom-6 right-8 md:right-12 z-50 flex items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 hover:opacity-90 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#52b4da] focus-visible:ring-offset-2',
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      )}
      style={{
        width: '48px',
        height: '48px',
        background: 'linear-gradient(135deg, #52B4DA 0%, #1E3E85 100%)',
        boxShadow: '0 4px 20px rgba(82,180,218,0.4)',
      }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 15V5M4 10l6-6 6 6" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
