import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/common/ScrollToTop'
import { NotificationProvider } from '@/components/helper/notification'
import { Home } from '@/pages/Home'

function App() {
  return (
    <>
      {/* Skip navigation — visually hidden until focused via keyboard */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-brand-700 focus:font-semibold focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <Navbar />
      <Home />
      <Footer />
      <ScrollToTop />
      <NotificationProvider />
    </>
  )
}

export default App
