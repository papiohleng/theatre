"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, FileText, GraduationCap, User, Briefcase } from "lucide-react"

const downloadFiles = [
  {
    icon: FileText,
    title: "Curriculum Vitae",
    description: "Complete professional CV with experience and skills",
    filename: "Mati_Duma_CV.pdf",
    size: "245 KB",
  },
  {
    icon: GraduationCap,
    title: "Academic Record",
    description: "Official academic transcripts and certifications",
    filename: "Academic_Record.pdf",
    size: "1.2 MB",
  },
  {
    icon: User,
    title: "Identity Document",
    description: "Official identification document",
    filename: "ID_Document.pdf",
    size: "156 KB",
  },
  {
    icon: Briefcase,
    title: "Portfolio PDF",
    description: "Complete portfolio in PDF format",
    filename: "Mati_Duma_Portfolio.pdf",
    size: "8.7 MB",
  },
]

export function DownloadsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("downloads")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const handleDownload = (filename: string) => {
    // In a real implementation, this would trigger the actual download
    console.log(`Downloading ${filename}`)
    // You would typically have these files in your public folder or served from a CDN
    const link = document.createElement("a")
    link.href = `/downloads/${filename}`
    link.download = filename
    link.click()
  }

  return (
    <section id="downloads" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? "fade-in-up" : "opacity-0"}`}>
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6 text-foreground">Downloads</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access my professional documents and portfolio materials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {downloadFiles.map((file, index) => (
            <div
              key={file.title}
              className={`bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                isVisible ? "slide-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <file.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">{file.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{file.description}</p>
                <p className="text-xs text-accent mb-4">{file.size}</p>
                <Button
                  onClick={() => handleDownload(file.filename)}
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
