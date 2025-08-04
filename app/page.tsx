import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TrustSection } from "@/components/trust-section"
import { PricingSection } from "@/components/pricing-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TrustSection />
        <PricingSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
