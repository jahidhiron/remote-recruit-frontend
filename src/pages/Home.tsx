import { lazy, Suspense } from 'react'
import { HeroSection } from '@/components/home/HeroSection'

// Below-fold sections are lazy-loaded so they don't block the initial paint
const FeatureSectionGlobal   = lazy(() => import('@/components/home/FeatureSectionGlobal').then(m => ({ default: m.FeatureSectionGlobal })))
const FeatureSectionFeesFree = lazy(() => import('@/components/home/FeatureSectionFeesFree').then(m => ({ default: m.FeatureSectionFeesFree })))
const FeatureSectionShowcase = lazy(() => import('@/components/home/FeatureSectionShowcase').then(m => ({ default: m.FeatureSectionShowcase })))
const FeatureSectionHelp     = lazy(() => import('@/components/home/FeatureSectionHelp').then(m => ({ default: m.FeatureSectionHelp })))
const FaqSection             = lazy(() => import('@/components/home/FaqSection').then(m => ({ default: m.FaqSection })))
const PricingSection         = lazy(() => import('@/components/home/PricingSection').then(m => ({ default: m.PricingSection })))

/**
 * Height-preserving placeholder for lazy sections.
 * minH must approximate the real section height to avoid CLS when the
 * real component swaps in. Values are rough estimates — close enough to
 * prevent a visible jump for any viewport that has already scrolled to them.
 */
function SectionFallback({ bg = 'bg-white', minH = 'min-h-[600px]' }: { bg?: string; minH?: string }) {
  return <div className={`${minH} ${bg}`} aria-hidden="true" />
}

export function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      {/* Hero is above-the-fold — loaded eagerly, no lazy boundary */}
      <HeroSection />

      <Suspense fallback={<SectionFallback minH="min-h-[640px]" />}>
        <FeatureSectionGlobal />
      </Suspense>

      <Suspense fallback={<SectionFallback bg="bg-gray-50/60" minH="min-h-[640px]" />}>
        <FeatureSectionFeesFree />
      </Suspense>

      <Suspense fallback={<SectionFallback minH="min-h-[600px]" />}>
        <FeatureSectionShowcase />
      </Suspense>

      <Suspense fallback={<SectionFallback bg="bg-brand-700" minH="min-h-[520px]" />}>
        <FeatureSectionHelp />
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
