"use client"

import { useState, useEffect } from "react"
import { Instagram, Linkedin, Youtube, Facebook, Twitter, Globe, Phone, Mail } from "lucide-react"

const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com/matiduma",
    label: "Instagram",
    color: "#E4405F",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/mati-duma",
    label: "LinkedIn",
    color: "#0077B5",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/@matiduma",
    label: "YouTube",
    color: "#FF0000",
  },
  {
    icon: Facebook,
    href: "https://facebook.com/matiduma",
    label: "Facebook",
    color: "#1877F2",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/matiduma",
    label: "X (Twitter)",
    color: "#000000",
  },
  {
    icon: Globe,
    href: "https://www.matiduma.com",
    label: "Website",
    color: "#4ecdc4",
  },
  {
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
      </svg>
    ),
    href: "https://wa.me/1234567890",
    label: "WhatsApp",
    color: "#25D366",
  },
  {
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
    href: "https://t.me/matiduma",
    label: "Telegram",
    color: "#0088CC",
  },
  {
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
      </svg>
    ),
    href: "https://reddit.com/u/matiduma",
    label: "Reddit",
    color: "#FF4500",
  },
  {
    icon: Phone,
    href: "tel:+1234567890",
    label: "Call",
    color: "#34D399",
  },
  {
    icon: Mail,
    href: "mailto:mati@example.com",
    label: "Email",
    color: "#EF4444",
  },
  {
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.571 4.714h.857v1.143h-.857V4.714zm2.286 0h.857v1.143h-.857V4.714zM8 0L6.857 1.143h10.286L16 0H8zM3.429 5.714C1.714 5.714 0 7.429 0 9.143s1.714 3.429 3.429 3.429c1.714 0 3.428-1.715 3.428-3.429S5.143 5.714 3.429 5.714zm17.142 0C18.857 5.714 17.143 7.429 17.143 9.143s1.714 3.429 3.428 3.429C22.286 12.571 24 10.857 24 9.143S22.286 5.714 20.571 5.714zM1.714 14.857v6.857C1.714 23.143 3.429 24 5.143 24h13.714c1.714 0 3.429-.857 3.429-2.286v-6.857H1.714z" />
      </svg>
    ),
    href: "https://twitch.tv/matiduma",
    label: "Twitch",
    color: "#9146FF",
  },
]

export function FloatingSocialIcons() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {socialLinks.map((social, index) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 float-animation"
          style={{
            animationDelay: `${index * 0.1}s`,
            backgroundColor: social.color,
            color: social.color === "#000000" || social.color === "#0077B5" ? "#ffffff" : "#ffffff",
          }}
          aria-label={social.label}
        >
          {typeof social.icon === "function" ? <social.icon /> : <social.icon className="w-5 h-5" />}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {social.label}
          </span>
        </a>
      ))}
    </div>
  )
}
