export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-6 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-display text-5xl md:text-6xl mb-8">
              <span className="text-light-gray">ABOUT</span>
              <br />
              <span className="text-mint">MY WORK</span>
            </h2>

            <div className="bg-card-bg rounded-lg p-6 mb-8">
              <p className="text-lg text-light-gray/80 mb-6">
                I'm a creative developer and designer with over 10 years of experience crafting digital experiences that
                challenge conventional design norms.
              </p>

              <p className="text-lg text-light-gray/80 mb-6">
                My approach combines technical expertise with bold aesthetic choices, creating memorable and functional
                digital products that stand out in today's crowded landscape.
              </p>

              <p className="text-lg text-light-gray/80">
                I believe in pushing boundaries while maintaining usability, finding the perfect balance between
                experimental design and intuitive user experience.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-card-bg rounded-lg overflow-hidden">
              <div className="aspect-square relative">
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-light-gray/50">
                  YOUR PHOTO HERE
                </div>
              </div>
            </div>

            <div className="mt-8 bg-card-bg rounded-lg p-6">
              <h3 className="text-2xl font-bold text-mint mb-4">MY PHILOSOPHY</h3>
              <p className="text-lg text-light-gray/80">
                "Good design should provoke emotion and challenge perceptions while remaining fundamentally useful."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
