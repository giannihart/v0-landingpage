import { DevFeatures } from "@/components/dev-features"
import { FeaturesGrid } from "@/components/features-grid"
import { CustomerFeatures } from "@/components/customer-features"
import { Integrations } from "@/components/integrations"
import { UseCases } from "@/components/use-cases"
import { LearnMore } from "@/components/learn-more"
import { HeroSectionDemoNew } from "@/components/hero-section-demo-new"
import HeroSection from "@/components/hero-section"
import { Demo } from "@/components/demo"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#111111]">
      <HeroSection isNavOnly={true} />
      <HeroSectionDemoNew />
      <Demo />
      <DevFeatures />
      <FeaturesGrid />
      <CustomerFeatures />
      <Integrations />
      <UseCases />
      <LearnMore />
    </main>
  )
}
