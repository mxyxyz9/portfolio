import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-8 px-4 md:px-6 bg-dark-bg border-t border-card-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-mint font-bold text-xl mb-2 block">
              Rushil
            </Link>
            <p className="text-light-gray/60 text-sm">© {new Date().getFullYear()} ALL RIGHTS RESERVED.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/projects" className="text-light-gray hover:text-mint text-sm">
              PROJECTS
            </Link>
            <Link href="/#about" className="text-light-gray hover:text-mint text-sm">
              ABOUT
            </Link>
            <Link href="/#skills" className="text-light-gray hover:text-mint text-sm">
              SKILLS
            </Link>
            <Link href="/#contact" className="text-light-gray hover:text-mint text-sm">
              CONTACT
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-card-bg flex flex-col sm:flex-row justify-between items-center">
          <p className="text-light-gray/40 text-xs mb-4 sm:mb-0">
            DESIGNED AND DEVELOPED WITH A NEO-BRUTALIST APPROACH
          </p>

          <div className="flex items-center space-x-4">
            <a href="#" className="text-light-gray/60 hover:text-mint text-sm">
              PRIVACY POLICY
            </a>
            <a href="#" className="text-light-gray/60 hover:text-mint text-sm">
              TERMS OF SERVICE
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
