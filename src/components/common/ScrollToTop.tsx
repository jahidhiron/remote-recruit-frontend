import { ChevronUp } from 'lucide-react'
import { useScrollToTop } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

export function ScrollToTop() {
  const { visible, scrollToTop } = useScrollToTop()

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={cn(
        'fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-primary-600 text-white shadow-lg shadow-primary-500/30 flex items-center justify-center hover:bg-primary-700 hover:scale-110 active:scale-95 transition-all duration-300',
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      )}
    >
      <ChevronUp size={20} strokeWidth={2.5} />
    </button>
  )
}
