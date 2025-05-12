import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-dark-bg text-light-gray flex items-center justify-center">
      <div className="max-w-md text-center px-4">
        <h1 className="text-display text-6xl mb-6">
          <span className="text-purple">404</span>
        </h1>
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <p className="text-light-gray/80 mb-8">The project you're looking for doesn't exist or has been moved.</p>
        <Link href="/projects">
          <Button className="bg-mint hover:bg-mint/90 text-dark-bg font-bold">View All Projects</Button>
        </Link>
      </div>
    </div>
  )
}
