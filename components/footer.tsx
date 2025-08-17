import { Instagram, Linkedin, Youtube, Facebook, Twitter, Globe } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/matiduma", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/in/mati-duma", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/@matiduma", label: "YouTube" },
  { icon: Facebook, href: "https://facebook.com/matiduma", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/matiduma", label: "X (Twitter)" },
  { icon: Globe, href: "https://www.matiduma.com", label: "Website" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif font-bold text-2xl mb-4">Mati Duma</h3>
            <p className="text-background/80 leading-relaxed">
              Technical Theatre Artist specializing in lighting, sound, and set design. Creating immersive experiences
              that elevate live performance.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-accent transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://www.matiduma.com" className="hover:text-accent transition-colors">
                  Full Website
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; 2024 Mati Duma. All rights reserved. Portfolio for Technical Theatre Program Admission.</p>
        </div>
      </div>
    </footer>
  )
}
