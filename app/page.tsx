"use client"

import { useState, useEffect } from "react"
import Hero from "@/components/hero"
import Portfolio from "@/components/portfolio"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Loading from "@/components/loading"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-dark-bg text-light-gray overflow-hidden">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Portfolio />
          <Skills />
          <Contact />
          <Footer />
        </>
      )}
    </main>
  )
}
