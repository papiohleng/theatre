"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-40">
          <source src="/theatrical-background.mp4" type="video/mp4" />
          {/* Fallback gradient */}
          <div className="w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/40 to-background/60" />
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-6 max-w-4xl mx-auto ${isVisible ? "fade-in-up" : "opacity-0"}`}>
        <h1 className="font-serif font-black text-5xl md:text-7xl lg:text-8xl mb-6 text-foreground">Mati Duma</h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-secondary font-medium">Technical Theatre Artist</p>
        <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Crafting immersive experiences through lighting, sound, and set design
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="spotlight-effect font-semibold px-8 py-3 text-lg bg-primary hover:bg-primary/90"
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Portfolio
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="font-semibold px-8 py-3 text-lg border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent hover:text-primary transition-colors duration-300 float-animation"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  )
}
