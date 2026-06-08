import { Navbar } from "@/components/site/navbar"
import { Hero } from "@/components/site/hero"
import { LogoMarquee } from "@/components/site/logo-marquee"
import { Features } from "@/components/site/features"
import { Products } from "@/components/site/products"
import { About } from "@/components/site/about"
import { Process } from "@/components/site/process"
import { Stats } from "@/components/site/stats"
import { Testimonials } from "@/components/site/testimonials"
import { Pricing } from "@/components/site/pricing"
import { Faq } from "@/components/site/faq"
import { CtaBanner } from "@/components/site/cta-banner"
import { Footer } from "@/components/site/footer"

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Features />
        <Products />
        <About />
        <Process />
        <Stats />
        <Testimonials />
        <Pricing />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}

export default App
