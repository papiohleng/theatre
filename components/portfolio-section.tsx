"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, Users } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Hamlet - Lighting Design",
    year: "2024",
    role: "Lead Lighting Designer",
    category: "Lighting",
    description: "Designed dynamic lighting to reflect the emotional arc of characters in this classic tragedy.",
    skills: ["ETC Ion Console", "LED Fixtures", "Color Theory", "Mood Design"],
    image: "/hamlet-stage-lighting.png",
  },
  {
    id: 2,
    title: "A Midsummer Night's Dream - Set Design",
    year: "2024",
    role: "Set Designer & Builder",
    category: "Set Design",
    description: "Created a minimalist forest set that transformed throughout the play using modular elements.",
    skills: ["CAD Design", "Carpentry", "Paint Techniques", "Modular Construction"],
    image: "/whimsical-forest-set.png",
  },
  {
    id: 3,
    title: "The Tempest - Sound Design",
    year: "2023",
    role: "Sound Designer",
    category: "Sound",
    description: "Developed original soundscapes and storm effects synchronized with live action.",
    skills: ["Pro Tools", "Field Recording", "Live Mixing", "Cue Programming"],
    image: "/placeholder-x63wv.png",
  },
  {
    id: 4,
    title: "Romeo & Juliet - Props & Costumes",
    year: "2023",
    role: "Props Master & Costume Assistant",
    category: "Props & Costumes",
    description: "Sourced period-appropriate props and assisted in creating historically accurate costumes.",
    skills: ["Historical Research", "Prop Making", "Fabric Selection", "Period Accuracy"],
    image: "/renaissance-romeo-juliet.png",
  },
  {
    id: 5,
    title: "Our Town - Technical Director",
    year: "2023",
    role: "Technical Director",
    category: "Technical Direction",
    description: "Coordinated all technical elements for this minimalist production focusing on lighting and sound.",
    skills: ["Project Management", "Team Coordination", "Budget Management", "Technical Integration"],
    image: "/our-town-stage.png",
  },
  {
    id: 6,
    title: "Macbeth - Collaborative Design",
    year: "2022",
    role: "Assistant Designer",
    category: "Collaboration",
    description: "Worked with design team to create cohesive aesthetic blending lighting, set, and sound.",
    skills: ["Team Collaboration", "Design Integration", "Creative Problem Solving", "Adaptability"],
    image: "/macbeth-stage-design.png",
  },
]

const categories = [
  "All",
  "Lighting",
  "Sound",
  "Set Design",
  "Props & Costumes",
  "Technical Direction",
  "Collaboration",
]

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif font-black text-4xl md:text-5xl mb-6 text-foreground">Selected Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A showcase of my technical theatre work across lighting, sound, set design, and collaborative projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                hoveredProject === project.id ? "ring-2 ring-accent" : ""
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">{project.category}</Badge>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {project.year}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    {project.role}
                  </div>
                </div>
                <CardTitle className="font-serif font-bold text-xl group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="leading-relaxed">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors bg-transparent"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
