"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [hoverState, setHoverState] = useState<string | null>(null)

  return (
    <section className="pt-32 pb-16 px-4 md:px-6 bg-darker-bg min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 grid-rows-6 opacity-10 pointer-events-none">
        {Array(48)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="border border-purple/30"></div>
          ))}
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Main headline */}
        <div className="mb-12">
          <div className="inline-block bg-purple px-4 py-2 mb-6 rotate-1">
            <h2 className="text-dark-bg font-bold text-xl md:text-2xl">Rushil — UI DESIGNER</h2>
          </div>

          <h1 className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 tracking-tighter leading-none">
            <span className="block text-light-gray">CRAFTING</span>
            <span className="block text-purple">DIGITAL</span>
            <span className="block text-mint">EXPERIENCES</span>
          </h1>

          <div className="max-w-2xl">
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-light-gray/80">
              I create bold, distinctive digital experiences that challenge conventions while delivering exceptional
              user experiences.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-16">
          <Link href="/projects" className="w-full sm:w-auto">
            <Button
              className={`
                w-full sm:w-auto text-base sm:text-xl py-6 sm:py-8 px-6 sm:px-8 bg-mint text-dark-bg hover:bg-mint/90 
                border-4 border-black rounded-none transform transition-all duration-300
                ${hoverState === "projects" ? "translate-x-1 -translate-y-1 shadow-[8px_8px_0px_0px_rgba(138,124,255,1)]" : "shadow-[4px_4px_0px_0px_rgba(138,124,255,1)]"}
              `}
              onMouseEnter={() => setHoverState("projects")}
              onMouseLeave={() => setHoverState(null)}
            >
              VIEW MY PROJECTS
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </Link>

          <Button
            onClick={() => window.open("/api/resume", "_blank")}
            className={`
              w-full sm:w-auto text-base sm:text-xl py-6 sm:py-8 px-6 sm:px-8 bg-dark-bg text-light-gray hover:bg-card-bg
              border-4 border-mint rounded-none transform transition-all duration-300
              ${hoverState === "resume" ? "translate-x-1 -translate-y-1 shadow-[8px_8px_0px_0px_rgba(78,235,192,0.5)]" : "shadow-[4px_4px_0px_0px_rgba(78,235,192,0.5)]"}
            `}
            onMouseEnter={() => setHoverState("resume")}
            onMouseLeave={() => setHoverState(null)}
          >
            DOWNLOAD RESUME
            <Download className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </div>

        {/* Stats and experience */}
        

        {/* Scroll indicator - only visible on larger screens */}
        <div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce hidden md:flex cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
        >
          <p className="text-light-gray/50 mb-2 text-sm">SCROLL DOWN</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-mint"
            />
          </svg>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-16 h-16 sm:w-20 sm:h-20 bg-purple rounded-full opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-20 left-10 w-24 h-24 sm:w-32 sm:h-32 bg-mint rounded-full opacity-10 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </section>
  )
}
