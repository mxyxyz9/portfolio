import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectCard from "@/components/project-card"
import { projects } from "@/data/projects"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-dark-bg text-light-gray">
      <Navbar />
      <section className="pt-32 pb-20 px-4 md:px-6 bg-darker-bg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-display text-5xl md:text-7xl mb-4">
            <span className="text-light-gray">ALL</span>
            <br />
            <span className="text-purple">PROJECTS</span>
          </h1>

          <p className="text-light-gray/80 text-lg mb-12 max-w-2xl">
            Explore my portfolio of neo-brutalist design work across web design, branding, UI/UX, and more. Each project
            represents my commitment to bold, distinctive digital experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
