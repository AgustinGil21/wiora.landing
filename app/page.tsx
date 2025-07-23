import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
import Features from "@/components/sections/Features"
import HowItWorks from "@/components/sections/HowItWorks"
import Testimonials from "@/components/sections/Testimonials"
import WaitlistSection from "@/components/sections/WaitlistSection"
import Footer from "@/components/layout/Footer"

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 text-white overflow-hidden">
        <Navbar />
        <main className="space-y-32">
          <Hero />
          <Features />
          <HowItWorks />
          <Testimonials />
          <WaitlistSection />
          
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  )
}
