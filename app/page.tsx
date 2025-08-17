"use client"

import { useState, useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { DownloadsSection } from "@/components/downloads-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingSocialIcons } from "@/components/floating-social-icons"
import { NavigationMenu } from "@/components/navigation-menu"
import { Fireworks } from "@/components/fireworks"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl text-foreground font-semibold">Loading Portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      <Fireworks />
      <NavigationMenu />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <DownloadsSection />
      <ContactSection />
      <Footer />
      <FloatingSocialIcons />
    </main>
  )
}
