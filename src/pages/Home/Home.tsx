import { lazy, Suspense } from 'react'
import { HeroSection } from '@/pages/Home/components/HeroSection/HeroSection'

const GlobalReachSection = lazy(() => import('@/pages/Home/components/GlobalReachSection/GlobalReachSection').then(m => ({ default: m.GlobalReachSection })))
const FeeFreeSection     = lazy(() => import('@/pages/Home/components/FeeFreeSection/FeeFreeSection').then(m => ({ default: m.FeeFreeSection })))
const ShowcaseSection    = lazy(() => import('@/pages/Home/components/ShowcaseSection/ShowcaseSection').then(m => ({ default: m.ShowcaseSection })))
const HelpSection        = lazy(() => import('@/pages/Home/components/HelpSection/HelpSection').then(m => ({ default: m.HelpSection })))
const FaqSection         = lazy(() => import('@/pages/Home/components/FaqSection/FaqSection').then(m => ({ default: m.FaqSection })))
const PricingSection     = lazy(() => import('@/pages/Home/components/PricingSection/PricingSection').then(m => ({ default: m.PricingSection })))

function SectionFallback({ bg = 'bg-white', minH = 'min-h-[600px]' }: { bg?: string; minH?: string }) {
  return <div className={`${minH} ${bg}`} aria-hidden="true" />
}

export function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <HeroSection />

      <Suspense fallback={<SectionFallback minH="min-h-[640px]" />}>
        <GlobalReachSection />
      </Suspense>

      <Suspense fallback={<SectionFallback bg="bg-gray-50/60" minH="min-h-[640px]" />}>
        <FeeFreeSection />
      </Suspense>

      <Suspense fallback={<SectionFallback minH="min-h-[600px]" />}>
        <ShowcaseSection />
      </Suspense>

      <Suspense fallback={<SectionFallback bg="bg-brand-700" minH="min-h-[520px]" />}>
        <HelpSection />
      </Suspense>

      <Suspense fallback={<SectionFallback minH="min-h-[480px]" />}>
        <FaqSection />
      </Suspense>

      <Suspense fallback={<SectionFallback bg="bg-gray-50" minH="min-h-[500px]" />}>
        <PricingSection />
      </Suspense>
    </main>
  )
}
