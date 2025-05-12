"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { projects } from "@/data/projects"

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(projects[0])
  const featuredProjects = projects.slice(0, 4)

  return (
    <section id="portfolio" className="py-20 px-4 md:px-6 bg-darker-bg">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-display text-5xl md:text-6xl mb-12">
          <span className="text-light-gray">SELECTED</span>
          <br />
          <span className="text-purple">PROJECTS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card-bg rounded-lg overflow-hidden">
            <img
              src={activeProject.image || "/placeholder.svg"}
              alt={activeProject.title}
              className="w-full aspect-video object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-mint">{activeProject.title}</h3>
                <span className="text-purple">{activeProject.category}</span>
              </div>
              <p className="text-light-gray/80 mb-4">{activeProject.description}</p>
              <Link
                href={`/projects/${activeProject.slug}`}
                className="inline-flex items-center text-purple hover:text-purple/80"
              >
                View Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {featuredProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`w-full text-left p-4 rounded-lg transition-all ${
                  activeProject.id === project.id
                    ? "bg-mint text-dark-bg"
                    : "bg-card-bg text-light-gray hover:bg-card-bg/80"
                }`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <ArrowRight className={activeProject.id === project.id ? "text-dark-bg" : "text-mint"} />
                </div>
                <p className={activeProject.id === project.id ? "text-dark-bg/80" : "text-light-gray/60"}>
                  {project.category}
                </p>
              </button>
            ))}

            <Link href="/projects">
              <Button className="mt-8 bg-purple hover:bg-purple/90 text-white rounded-lg px-6 py-3 font-bold w-full">
                VIEW ALL PROJECTS
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
