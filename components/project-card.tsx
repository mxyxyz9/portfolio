import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-card-bg rounded-lg overflow-hidden border-2 border-mint transform hover:translate-x-1 hover:-translate-y-1 transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(138,124,255,1)]">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-0 right-0 bg-purple text-dark-bg px-3 py-1 text-sm font-bold">
          {project.category}
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-xl font-bold text-mint mb-3">{project.title}</h3>
        <p className="text-light-gray/80 mb-4 line-clamp-2 text-sm sm:text-base">{project.description}</p>
        <Link href={`/projects/${project.slug}`} className="inline-flex items-center text-purple hover:text-purple/80">
          View Case Study
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
