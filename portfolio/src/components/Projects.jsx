import { useRef } from 'react'
function Projects() {

  const carouselRef = useRef(null);
 const scroll = (direction) => {
  carouselRef.current.scrollBy({
    left: direction === 'left' ? -440 : 440,
    behavior: 'smooth'
  })
}
  const projects = [
    {
      name: 'EmpowerLocal',
      description: 'A platform connecting local skilled workers- electricians, plumbers, carpenters etc, with people who need them. Built to solve a real underserved market gap.',
      tech: ['Angular', 'RxJS', 'NgRx', 'OpenAI', 'SCSS'],
      github: 'https://github.com/your-username/empowerlocal',
      live: null,
      status: 'In Progress',
      image: '/public/empower.png',
    },
    {
      name: 'Portfolio Website',
      description: 'My personal portfolio, designed and built from scratch using React, Tailwind CSS and Framer Motion. Featuring a typewriter effect, cursor glow, floating bubbles and smooth animations.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      github: 'https://github.com/PranjaliSengar/Portfolio',
      live: 'https://pranjali-sengar.vercel.app',
      status: 'Live',
      image: '/public/portfolio.jpg',
    },
    {
      name: 'Many more coming soon!',
      description: '',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      github: 'https://github.com/your-username/portfolio',
      live: null,
      status: 'Soon',
      image: null,
    },
  ]

  return (
    <section className="py-8 md:py-10 lg:py-10 px-6 md:px-10 bg-bg-primary" id="projects">
      <div className="max-w-5xl mx-auto">

        <p className="font-inter text-xs text-sage tracking-widest uppercase mb-3">
          Projects
        </p>
        <h2 className="font-playfair text-3xl md:text-4xl font-normal mb-8 md:mb-12">
          Things I've <span className="italic text-sage-dark">built</span>
        </h2>

        <div className="relative">

          {/* left arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-sage/20 flex items-center justify-center text-sage-dark hover:bg-sage-dark hover:text-white transition-all duration-300"
          >
            ←
          </button>

          {/* carousel */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          >
            {projects.map((project) => (
              <div
                key={project.name}
                className="card card-glow snap-start flex-shrink-0 w-[280px] sm:w-[320px] md:w-[420px] flex flex-col"
              >
                {/* image area */}
                <div className="w-full h-48 rounded-xl mb-4 overflow-hidden bg-bg-secondary flex items-center justify-center relative">
                  {project.image ? (
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex flex-col items-center justify-center w-full h-full gap-2">
                      <span className="text-3xl opacity-40">🖼</span>
                      <span className="font-inter text-xs text-text-light">Screenshot coming soon</span>
                    </div>
                  )}
                  <span className="hidden md:block absolute top-3 right-3 font-inter text-xs px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20">
                    {project.status}
                  </span>
                </div>

                {/* content */}
                <div className="flex flex-col gap-3 flex-1">
                  <h3 className="font-playfair text-xl font-semibold text-text-primary">
                    {project.name}
                  </h3>
                  <p className="font-inter text-sm text-text-muted leading-relaxed">
                    {project.description}
                  </p>

                  {/* tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="font-inter text-xs px-3 py-1 rounded-full bg-sage/10 text-sage-dark border border-sage/20">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* links */}
                  <div className="flex gap-3 mt-auto pt-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer"
                        className="font-inter text-xs px-4 py-2 rounded-full border border-sage/30 text-sage-dark hover:bg-sage-dark hover:text-white transition-all duration-300">
                        { } GitHub
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer"
                        className="font-inter text-xs px-4 py-2 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-white transition-all duration-300">
                        ↗ Live
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* right arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-sage/20 flex items-center justify-center text-sage-dark hover:bg-sage-dark hover:text-white transition-all duration-300"
          >
            →
          </button>

        </div>
      </div>
    </section>
  )
}

export default Projects