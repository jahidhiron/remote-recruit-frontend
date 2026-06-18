import { HeroSection } from '@/components/home/HeroSection'
import { FeatureSectionGlobal } from '@/components/home/FeatureSectionGlobal'
import { FeatureSectionFeesFree } from '@/components/home/FeatureSectionFeesFree'
import { FeatureSectionShowcase } from '@/components/home/FeatureSectionShowcase'
import { FeatureSectionHelp } from '@/components/home/FeatureSectionHelp'
import { FaqSection } from '@/components/home/FaqSection'
import { PricingSection } from '@/components/home/PricingSection'

export function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureSectionGlobal />
      <FeatureSectionFeesFree />
      <FeatureSectionShowcase />
      <FeatureSectionHelp />
      <FaqSection />
      <PricingSection />
    </main>
  )
}
