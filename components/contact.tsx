"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Twitter, Linkedin, Mail, ArrowRight, MapPin, Phone } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formState)
    alert("Message sent! (This is a demo)")
  }

  return (
    <section id="contact" className="py-20 px-4 md:px-6 bg-darker-bg">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-display text-5xl md:text-6xl mb-12">
          <span className="text-light-gray">LET'S</span>
          <br />
          <span className="text-purple">CONNECT</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info - Now on the left */}
          <div className="space-y-6">
            <div className="bg-card-bg rounded-lg p-6 border-2 border-mint transform rotate-1">
              <h3 className="text-2xl font-bold text-mint mb-6">CONTACT INFO</h3>

              <div className="space-y-4">
                <p className="text-lg text-light-gray flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-purple" />
                  rushil.pala@gmail.com
                </p>

                <p className="text-lg text-light-gray flex items-center">
                  <MapPin className="mr-3 h-5 w-5 text-purple" />
                  Vizag,IN
                </p>
              </div>
            </div>

            <div className="bg-card-bg rounded-lg p-6 border-2 border-purple transform -rotate-1">
              <h3 className="text-2xl font-bold text-mint mb-6">FOLLOW ME</h3>

              <div className="flex space-x-4">
                <a href="#" className="bg-dark-bg p-3 rounded-lg hover:bg-purple hover:text-dark-bg transition-colors">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>

                <a href="#" className="bg-dark-bg p-3 rounded-lg hover:bg-purple hover:text-dark-bg transition-colors">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </a>

                <a href="#" className="bg-dark-bg p-3 rounded-lg hover:bg-purple hover:text-dark-bg transition-colors">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="bg-card-bg rounded-lg p-6 border-2 border-light-gray transform rotate-1">
              <div className="flex items-center justify-between">
                <p className="text-lg text-light-gray">83°17′52″ E17°42′15″ N</p>
                <div className="text-mint">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Now on the right */}
          <div>
            <form onSubmit={handleSubmit} className="bg-card-bg rounded-lg p-6 border-2 border-mint">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-bold text-light-gray mb-2">
                    NAME
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-bg border-0 text-light-gray placeholder:text-light-gray/50 p-4 text-lg rounded-lg focus:ring-2 focus:ring-mint"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-bold text-light-gray mb-2">
                    EMAIL
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-bg border-0 text-light-gray placeholder:text-light-gray/50 p-4 text-lg rounded-lg focus:ring-2 focus:ring-mint"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-bold text-light-gray mb-2">
                    MESSAGE
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-bg border-0 text-light-gray placeholder:text-light-gray/50 p-4 text-lg rounded-lg min-h-[150px] focus:ring-2 focus:ring-mint"
                    placeholder="Your message"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-mint hover:bg-mint/90 text-dark-bg rounded-lg px-6 py-3 font-bold text-lg transform transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(138,124,255,1)]"
                >
                  SEND MESSAGE
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
