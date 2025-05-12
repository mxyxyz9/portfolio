import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-dark-bg text-light-gray">
      <Navbar />
      <section className="py-24 px-4 md:px-6 bg-darker-bg">
        <div className="max-w-7xl mx-auto">
          <Link href="/projects" className="inline-flex items-center text-mint hover:text-mint/80 mb-8">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to all projects
          </Link>

          <h1 className="text-display text-4xl md:text-6xl mb-4">
            <span className="text-light-gray">{project.title}</span>
          </h1>

          <div className="flex flex-wrap gap-4 mb-12">
            <span className="bg-purple text-dark-bg px-3 py-1 rounded-full text-sm font-bold">{project.category}</span>
            {project.tags.map((tag) => (
              <span key={tag} className="bg-card-bg text-light-gray px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>

          <div className="bg-card-bg rounded-lg overflow-hidden mb-12">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full aspect-video object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-mint mb-4">Project Overview</h2>
              <p className="text-light-gray/80 mb-6">{project.description}</p>
              <p className="text-light-gray/80 mb-6">{project.overview}</p>
            </div>

            <div className="bg-card-bg rounded-lg p-6">
              <h2 className="text-xl font-bold text-mint mb-4">Project Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm text-light-gray/60">CLIENT</h3>
                  <p className="text-light-gray">{project.client}</p>
                </div>
                <div>
                  <h3 className="text-sm text-light-gray/60">TIMELINE</h3>
                  <p className="text-light-gray">{project.timeline}</p>
                </div>
                <div>
                  <h3 className="text-sm text-light-gray/60">ROLE</h3>
                  <p className="text-light-gray">{project.role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {project.sections.map((section, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 0 ? "order-1 md:order-1" : "order-1 md:order-2"}>
                  <h2 className="text-2xl font-bold text-purple mb-4">{section.title}</h2>
                  <p className="text-light-gray/80">{section.content}</p>
                </div>
                <div className={index % 2 === 0 ? "order-2 md:order-2" : "order-2 md:order-1"}>
                  <div className="bg-card-bg rounded-lg overflow-hidden">
                    <img
                      src={section.image || "/placeholder.svg"}
                      alt={section.title}
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-card-bg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-mint mb-4">Outcome & Results</h2>
            <p className="text-light-gray/80 mb-6">{project.outcome}</p>

            {project.results && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {project.results.map((result, index) => (
                  <div key={index} className="bg-darker-bg rounded-lg p-6">
                    <div className="text-3xl font-bold text-purple mb-2">{result.stat}</div>
                    <div className="text-light-gray">{result.description}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-16 flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-2xl font-bold text-mint mb-4 md:mb-0">Next Project</h2>
            <Link
              href={`/projects/${project.nextProject}`}
              className="bg-purple hover:bg-purple/90 text-white rounded-lg px-6 py-3 font-bold"
            >
              View Next Project
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
