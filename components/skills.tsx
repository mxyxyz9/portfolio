"use client"

import { useState } from "react"

type Skill = {
  category: string
  items: string[]
}

const skills: Skill[] = [
  {
    category: "DESIGN",
    items: ["UI/UX Design", "Brand Identity", "Typography", "Motion Design", "Prototyping"],
  },
  {
    category: "DEVELOPMENT",
    items: ["HTML/CSS", "JavaScript", "React", "Next.js", "Three.js"],
  },
  {
    category: "TOOLS",
    items: ["Figma", "Adobe Suite", "VS Code", "Git", "Vercel"],
  },
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="skills" className="py-20 px-4 md:px-6 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-display text-5xl md:text-6xl mb-12">
          <span className="text-light-gray">SKILLS &</span>
          <br />
          <span className="text-mint">CAPABILITIES</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className={`rounded-lg p-6 cursor-pointer transition-all ${
                activeTab === index ? "bg-mint text-dark-bg" : "bg-card-bg text-light-gray hover:bg-card-bg/80"
              }`}
              onClick={() => setActiveTab(index)}
            >
              <h3 className="text-2xl font-bold mb-6">{skill.category}</h3>

              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <div
                      className={`w-2 h-2 ${activeTab === index ? "bg-dark-bg" : "bg-purple"} rounded-full mr-3`}
                    ></div>
                    <span className={activeTab === index ? "text-dark-bg" : "text-light-gray/80"}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card-bg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-purple mb-6">EDUCATION</h3>
            <div className="space-y-6">
              <div>
                <p className="text-xl font-bold text-light-gray">Vignan Institute Of Information Technology</p>
                <p className="text-light-gray/60">Artificial Intelligence And data Science, 2022-Present</p>
              </div>
            </div>
          </div>

          <div className="bg-card-bg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-purple mb-6">EXPERIENCE</h3>
            <div className="space-y-6">
              <div>
                <p className="text-xl font-bold text-light-gray">SOFTWARE DEVELOPMENT INTERN</p>
                <p className="text-light-gray/60">SYMBIOSYS Inc., 2024(MAY)-2024-(JUNE)</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
