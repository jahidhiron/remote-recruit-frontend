import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/common/ScrollToTop'
import { NotificationProvider } from '@/components/helper/notification'
import { Home } from '@/pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      <ScrollToTop />
      {/* Toast notification container — renders all success/error/warning/info toasts */}
      <NotificationProvider />
    </>
  )
}

export default App
