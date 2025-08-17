"use client"

import { useEffect, useState } from "react"

interface FireworkParticle {
  id: number
  x: number
  y: number
  color: string
  delay: number
}

export function Fireworks() {
  const [particles, setParticles] = useState<FireworkParticle[]>([])
  const [showFireworks, setShowFireworks] = useState(true)

  useEffect(() => {
    // Create firework particles
    const colors = ["#ff6b35", "#4ecdc4", "#ffd23f", "#ff4757", "#5f27cd"]
    const newParticles: FireworkParticle[] = []

    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2,
      })
    }

    setParticles(newParticles)

    // Hide fireworks after 3 seconds
    const timer = setTimeout(() => {
      setShowFireworks(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!showFireworks) return null

  return (
    <div className="fireworks-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="firework-particle firework"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            backgroundColor: particle.color,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Sparkles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute w-2 h-2 bg-accent rounded-full sparkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  )
}
