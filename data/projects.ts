export interface Project {
  id: number
  title: string
  slug: string
  category: string
  tags: string[]
  description: string
  overview: string
  client: string
  timeline: string
  role: string
  image: string
  sections: {
    title: string
    content: string
    image: string
  }[]
  outcome: string
  results?: {
    stat: string
    description: string
  }[]
  nextProject: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "DIGITAL BRUTALISM",
    slug: "digital-brutalism",
    category: "WEB DESIGN",
    tags: ["E-commerce", "UI/UX", "Branding"],
    description:
      "A neo-brutalist e-commerce experience for a fashion brand that challenges conventional online shopping interfaces.",
    overview:
      "This project reimagines the online shopping experience through a neo-brutalist lens, creating a bold and memorable interface that stands out in the crowded e-commerce space. The design deliberately breaks conventional e-commerce patterns to create a unique and engaging user experience.",
    client: "AVANT Fashion",
    timeline: "8 weeks",
    role: "Lead Designer & Developer",
    image: "/placeholder.svg?height=600&width=800",
    sections: [
      {
        title: "The Challenge",
        content:
          "AVANT Fashion needed a digital presence that would reflect their avant-garde approach to fashion. They wanted to stand out from conventional e-commerce sites while maintaining usability and conversion rates. The challenge was to create a bold, memorable experience that would resonate with their target audience of fashion-forward millennials and Gen Z consumers.",
        image: "/placeholder.svg?height=500&width=700",
      },
      {
        title: "Design Approach",
        content:
          "I embraced neo-brutalist design principles, using bold typography, raw structural elements, and a high-contrast color palette. The interface deliberately exposes its structure, with chunky borders, asymmetrical layouts, and exaggerated interactive elements that make browsing products feel like exploring an art gallery rather than a traditional store.",
        image: "/placeholder.svg?height=500&width=700",
      },
      {
        title: "Technical Implementation",
        content:
          "The site was built using Next.js for performance and SEO benefits, with a headless CMS for content management. Custom animations were created using Framer Motion to enhance the brutalist aesthetic, with careful attention to maintaining performance across devices. The checkout process was streamlined to ensure conversion rates remained high despite the unconventional design.",
        image: "/placeholder.svg?height=500&width=700",
      },
    ],
    outcome:
      "The DIGITAL BRUTALISM project resulted in a 40% increase in average session duration and a 25% increase in conversion rates compared to the client's previous website. The distinctive design generated significant social media buzz, with users sharing screenshots of the shopping experience across platforms. The project has been featured in several web design publications as an example of effective e-commerce innovation.",
    results: [
      {
        stat: "+40%",
        description: "Increase in average session duration",
      },
      {
        stat: "+25%",
        description: "Increase in conversion rate",
      },
      {
        stat: "5K+",
        description: "Social media shares in first month",
      },
    ],
    nextProject: "concrete-digital",
  },
  {
    id: 2,
    title: "CONCRETE DIGITAL",
    slug: "concrete-digital",
    category: "BRANDING",
    tags: ["Brand Identity", "Print", "Digital"],
    description:
      "Brand identity system for an architecture firm that embraces raw digital aesthetics and bold typography.",
    overview:
      "CONCRETE DIGITAL is a comprehensive brand identity system for a forward-thinking architecture firm. The project included logo design, typography selection, color palette development, print materials, and digital assets, all unified by a neo-brutalist aesthetic that reflects the firm's innovative approach to architectural design.",
    client: "Monolith Architecture",
    timeline: "12 weeks",
    role: "Brand Designer",
    image: "/placeholder.svg?height=600&width=800",
    sections: [
      {
        title: "Brand Strategy",
        content:
          "Monolith Architecture wanted a brand identity that would position them as bold innovators in a field often dominated by minimalist, understated aesthetics. The strategy focused on creating a visual language that would communicate their approach to architecture: structural honesty, material authenticity, and spatial innovation.",
        image: "/placeholder.svg?height=500&width=700",
      },
      {
        title: "Visual Identity",
        content:
          "The visual identity centers around a modular logo system that can be deconstructed and reassembled across different applications. The typography combines ultra-bold display fonts with utilitarian sans-serifs, creating a strong contrast that mirrors the firm's approach to combining dramatic forms with functional spaces.",
        image: "/placeholder.svg?height=500&width=700",
      },
      {
        title: "Application System",
        content:
          "The brand was applied across business cards, letterheads, project proposals, digital presentations, and a responsive website. Each application maintained the core brutalist principles while adapting to the specific medium, creating a cohesive yet flexible identity system that works across all touchpoints.",
        image: "/placeholder.svg?height=500&width=700",
      },
    ],
    outcome:
      "The CONCRETE DIGITAL brand identity has helped Monolith Architecture establish a distinctive presence in a competitive market. The firm has reported increased inbound inquiries from clients specifically citing the bold brand identity as what initially caught their attention. The project has won two design awards for outstanding brand identity in the architecture sector.",
    results: [
      {
        stat: "+60%",
        description: "Increase in inbound client inquiries",
      },
      {
        stat: "2",
        description: "Design awards won",
      },
      {
        stat: "85%",
        description: "Client recognition in blind brand tests",
      },
    ],
    nextProject: "raw-interface",
  },
  {
    id: 3,
    title: "RAW INTERFACE",
    slug: "raw-interface",
    category: "UI/UX",
    tags: ["Mobile App", "User Experience", "Music"],
    description:
      "Experimental user interface design for a music streaming platform with intentionally exposed structural elements.",
    overview:
      "RAW INTERFACE reimagines the music streaming experience through a neo-brutalist lens, creating a distinctive app that stands out in a crowded market. The design emphasizes the structural elements of the interface, creating a raw, honest user experience that resonates with the authenticity valued by independent music fans.",
    client: "Disrupt Audio",
    timeline: "10 weeks",
    role: "UI/UX Designer",
    image: "/placeholder.svg?height=600&width=800",
    sections: [
      {
        title: "User Research",
        content:
          "Research revealed that target users (18-34 year old independent music fans) were experiencing 'design fatigue' from the sameness of streaming platforms. They valued authenticity and were willing to learn new interaction patterns if they felt more genuine and connected to the independent music ethos.",
        image: "/placeholder.svg?height=500&width=700",
      },
      {
        title: "Interface Design",
        content:
          "The interface design deliberately breaks from streaming conventions, using a grid-breaking layout, exposed UI elements, and unconventional navigation patterns. Music visualization is a key feature, with raw waveforms and deconstructed album artwork creating a visual experience that complements the audio.",
        image: "/placeholder.svg?height=500&width=700",
      },
      {
        title: "Usability Testing",
        content:
          "Despite its unconventional approach, the interface was iteratively tested and refined to ensure core functions remained intuitive. The final design balances experimental aesthetics with usable patterns, creating a learning curve that users found engaging rather than frustrating.",
        image: "/placeholder.svg?height=500&width=700",
      },
    ],
    outcome:
      "RAW INTERFACE launched to positive user reception, with particularly strong engagement metrics among the target demographic. The app has maintained a 4.7/5 rating on app stores, with reviews specifically praising the distinctive design. The client has reported higher-than-industry-average subscription conversion rates and strong user retention.",
    results: [
      {
        stat: "4.7/5",
        description: "Average app store rating",
      },
      {
        stat: "+35%",
        description: "Higher subscription conversion vs. industry average",
      },
      {
        stat: "88%",
        description: "30-day user retention rate",
      },
    ],
    nextProject: "brutalist-blog",
  },
  {
    id: 4,
    title: "BRUTALIST BLOG",
    slug: "brutalist-blog",
    category: "WEB DEVELOPMENT",
    tags: ["CMS", "Editorial", "Publishing"],
    description: "Custom CMS and frontend for a digital magazine that uses asymmetrical layouts and bold typography.",
    overview:
      "BRUTALIST BLOG is a custom publishing platform designed for a digital arts magazine. The project included both a custom CMS for editors and a distinctive frontend reading experience that challenges conventional blog layouts while maintaining excellent readability and content discovery.",
    client: "Artifact Magazine",
    timeline: "14 weeks",
    role: "Designer & Developer",
    image: "/placeholder.svg?height=600&width=800",
    sections: [
      {
        title: "Publishing Workflow",
        content:
          "The CMS was designed around the specific editorial workflow of Artifact Magazine, with custom content blocks that allow editors to create visually distinctive articles without requiring design skills. The system includes specialized tools for art direction, typography control, and layout experimentation.",
        image: "/placeholder.svg?height=500&width=700",
      },
      {
        title: "Reading Experience",
        content:
          "The frontend reading experience uses asymmetrical layouts, dynamic typography scaling, and intentional content hierarchy disruptions to create a distinctive visual rhythm. Articles feel more like curated art pieces than traditional blog posts, with careful attention to the relationship between text and negative space.",
        image: "/placeholder.svg?height=500&width=700",
      },
      {
        title: "Performance Optimization",
        content:
          "Despite its visual richness, the site was optimized for performance, using techniques like progressive image loading, content prioritization, and selective animations. The result is a visually impactful experience that still achieves excellent Core Web Vitals scores across devices.",
        image: "/placeholder.svg?height=500&width=700",
      },
    ],
    outcome:
      "BRUTALIST BLOG has transformed Artifact Magazine's digital presence, increasing average time on page by 65% and reducing bounce rates by 40%. The distinctive design has helped the publication attract new readers and contributors, with subscription rates increasing 30% year-over-year since launch.",
    results: [
      {
        stat: "+65%",
        description: "Increase in average time on page",
      },
      {
        stat: "-40%",
        description: "Reduction in bounce rate",
      },
      {
        stat: "+30%",
        description: "Year-over-year subscription growth",
      },
    ],
    nextProject: "digital-brutalism",
  },
  {
    id: 5,
    title: "NEURAL NETWORK",
    slug: "neural-network",
    category: "INTERACTIVE",
    tags: ["Data Visualization", "AI", "Installation"],
    description:
      "An interactive installation visualizing neural network processes through brutalist design principles.",
    overview:
      "NEURAL NETWORK is an interactive installation that makes artificial intelligence processes visible and tangible through a brutalist design approach. Created for a tech conference, the installation allows visitors to interact with a neural network in real-time, visualizing the computational processes in a physically engaging way.",
    client: "TechFuture Conference",
    timeline: "6 weeks",
    role: "Creative Technologist",
    image: "/placeholder.svg?height=600&width=800",
    sections: [
      {
        title: "Concept Development",
        content:
          "The installation concept aimed to demystify AI by making its processes visible and interactive. The brutalist approach was chosen to expose the 'raw machinery' of neural networks, using physical elements and digital projections to create a hybrid experience that reveals rather than conceals the technology's inner workings.",
        image: "/placeholder.svg?height=500&width=700",
      },
      {
        title: "Technical Architecture",
        content:
          "The installation used computer vision to track visitor movements, feeding this data into a custom neural network that generated visual and audio responses. The system architecture was deliberately exposed, with cables, processors, and cooling systems visible as part of the brutalist aesthetic.",
        image: "/placeholder.svg?height=500&width=700",
      },
      {
        title: "User Interaction",
        content:
          "Visitors could interact with the installation through movement, voice, and touch interfaces. Each interaction method revealed different aspects of the neural network's processing, creating a multi-layered educational experience that was both informative and aesthetically striking.",
        image: "/placeholder.svg?height=500&width=700",
      },
    ],
    outcome:
      "NEURAL NETWORK became the most-visited installation at the TechFuture Conference, with an average engagement time of 7.5 minutes per visitor. The project succeeded in its educational goals, with exit surveys showing a 45% increase in visitor understanding of neural network principles after experiencing the installation.",
    results: [
      {
        stat: "#1",
        description: "Most visited installation at the conference",
      },
      {
        stat: "7.5 min",
        description: "Average visitor engagement time",
      },
      {
        stat: "+45%",
        description: "Increase in understanding of neural networks",
      },
    ],
    nextProject: "concrete-digital",
  },
  {
    id: 6,
    title: "TYPOGRAPHIC CHAOS",
    slug: "typographic-chaos",
    category: "TYPOGRAPHY",
    tags: ["Type Design", "Print", "Exhibition"],
    description:
      "A typeface and exhibition exploring the tension between order and chaos through brutalist typography.",
    overview:
      "TYPOGRAPHIC CHAOS is both a custom typeface and an exhibition that explores the boundaries of legibility and expression. The project pushes brutalist typography principles to their limits, creating letterforms that exist at the edge of recognition while still functioning as communication tools.",
    client: "Type Directors Club",
    timeline: "16 weeks",
    role: "Type Designer & Exhibition Designer",
    image: "/placeholder.svg?height=600&width=800",
    sections: [
      {
        title: "Typeface Development",
        content:
          "The typeface was developed through an experimental process that began with conventional letterforms and progressively deconstructed them through algorithmic processes and manual interventions. The final family includes five weights that range from 'barely brutalist' to 'extreme chaos,' allowing for gradual progression into abstraction.",
        image: "/placeholder.svg?height=500&width=700",
      },
      {
        title: "Print Applications",
        content:
          "The typeface was applied to a series of posters, books, and ephemera that demonstrated its versatility and expressive range. Each application pushed the boundaries of conventional typography while maintaining a connection to brutalist design principles of honesty and structural exposure.",
        image: "/placeholder.svg?height=500&width=700",
      },
      {
        title: "Exhibition Design",
        content:
          "The exhibition space was designed as a physical manifestation of the typeface's principles, with visitors moving through increasingly chaotic typographic environments that challenged perception and reading habits. Interactive elements allowed visitors to create their own brutalist compositions using the custom typeface.",
        image: "/placeholder.svg?height=500&width=700",
      },
    ],
    outcome:
      "TYPOGRAPHIC CHAOS received critical acclaim in the design press and attracted over 5,000 visitors during its three-week exhibition run. The typeface has since been licensed by several brands looking to incorporate brutalist elements into their visual identity, and has been added to the permanent collection of a major design museum.",
    results: [
      {
        stat: "5,000+",
        description: "Exhibition visitors",
      },
      {
        stat: "12",
        description: "Commercial typeface licenses sold",
      },
      {
        stat: "1",
        description: "Museum permanent collection acquisition",
      },
    ],
    nextProject: "raw-interface",
  },
]
