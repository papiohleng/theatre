"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Volume2, Hammer, Users } from "lucide-react"

const skills = [
  {
    icon: Lightbulb,
    title: "Lighting Design",
    description: "Creating dynamic moods and atmospheres through innovative lighting techniques and console operation.",
  },
  {
    icon: Volume2,
    title: "Sound Design",
    description: "Developing original soundscapes and managing live audio to enhance theatrical storytelling.",
  },
  {
    icon: Hammer,
    title: "Set Design & Construction",
    description:
      "Building immersive environments from concept sketches to finished sets using traditional and modern techniques.",
  },
  {
    icon: Users,
    title: "Collaborative Leadership",
    description: "Working effectively with directors, actors, and technical teams to achieve unified artistic visions.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-serif font-black text-4xl md:text-5xl mb-6 text-foreground">About Mati</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I have always been fascinated by the way lighting, sound, and set design come together to create the
                magic of theatre. After working on numerous school productions and collaborating with local theatre
                groups, I realized that my true calling is behind the scenes.
              </p>
              <p>
                As a technical theatre professional, I believe in the power of storytelling through design. Whether it's
                creating an atmosphere through lighting, enhancing the emotional impact of a scene with sound, or
                building a set that becomes a character in itself, I strive to create immersive environments that
                complement and elevate the performances of actors.
              </p>
              <p>
                My goal is to continue learning, refining my skills, and contributing to productions that inspire
                audiences. I am excited to take the next step in my creative journey and pursue a career in Technical
                Theatre.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/young-theatre-artist-lighting.png"
              alt="Mati Duma working in theatre"
              className="w-full rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-lg">
              <Lightbulb className="w-12 h-12 text-accent-foreground" />
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.title}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <skill.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-3 text-foreground">{skill.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
