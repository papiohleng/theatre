"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, User, Briefcase, Mail, Download } from "lucide-react"

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const menuItems = [
    { icon: Home, label: "Home", href: "#hero" },
    { icon: User, label: "About", href: "#about" },
    { icon: Briefcase, label: "Portfolio", href: "#portfolio" },
    { icon: Download, label: "Downloads", href: "#downloads" },
    { icon: Mail, label: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Menu Button */}
      <div className={`fixed top-6 left-6 z-50 menu-button ${isVisible ? "fade-in-scale" : "opacity-0"}`}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-3 shadow-lg"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 menu-overlay flex items-center justify-center">
          <nav className="text-center">
            <ul className="space-y-6">
              {menuItems.map((item, index) => (
                <li key={item.label} className={`slide-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center gap-4 text-2xl font-semibold text-foreground hover:text-primary transition-colors duration-300 group"
                  >
                    <item.icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}
