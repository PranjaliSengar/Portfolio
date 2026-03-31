import {useState, useEffect } from 'react'

function Hero() {
  const bubbles = [
    { size: '60px',  top: '8%',  left: '5%',  color: 'bg-sage-light/20', animation: 'bubble-slow' },
    { size: '40px',  top: '75%', left: '30%', color: 'bg-blue-muted/20',  animation: 'bubble-fast' },
    { size: '80px',  top: '15%', left: '75%', color: 'bg-gold/20',        animation: 'bubble-medium' },
    { size: '94px',  top: '30%', left: '10%', color: 'bg-blue-muted/20',  animation: 'bubble-fast' },
    { size: '90px',  top: '50%', left: '80%', color: 'bg-sage/20',        animation: 'bubble-slow' },
    { size: '125px', top: '72%', left: '5%',  color: 'bg-gold-light/20',  animation: 'bubble-medium' },
    { size: '60px',  top: '75%', left: '60%', color: 'bg-sage-dark/15',   animation: 'bubble-fast' },
    { size: '65px',  top: '6%',  left: '40%', color: 'bg-gold/15',        animation: 'bubble-slow' },
  ]
  const[displayText, setDisplayText] = useState('')
  const[wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const words = [
    'Frontend with depth, not just visuals.',
    'Handling state, APIs, and complex flows.',
    'Clean interfaces, strong foundations.',
    'Built for scale, performance, and clarity.',
  ]
  useEffect(() => {
    const glow = document.getElementById('cursor-glow')
    const move = (e) => {
      glow.style.left = e.clientX + 'px'
      glow.style.top = e.clientY + 'px'
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, []);

  useEffect(() => {
    const currentWord = words[wordIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.slice(0, displayText.length + 1))

        if (displayText.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1000)
        }
      } else {
        setDisplayText(currentWord.slice(0, displayText.length - 1))

        if (displayText.length === 0) {
          setIsDeleting(false)
           setDisplayText('')
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, wordIndex])
  return (
    <>
      <div id="cursor-glow" className="cursor-glow" />
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[75vh] md:min-h-[90vh] lg:min-h-screen">
        <div className="flex flex-col py-8 md:py-12 lg:py-16 px-6 md:px-14 gap-4 bg-bg-primary">
          <p className="font-inter text-[10px] md:text-xs text-sage tracking-widest uppercase">
            — Based in Bangalore, India —
          </p>

          <h1 className="font-playfair text-3xl md:text-5xl  text-text-primary leading-snug font-normal">
            Hi, I'm <br/>
            <span className="italic text-sage-darktext-4xl md:text-6xl">Pranjali Sengar</span>
          </h1>

          <div className="flex items-center gap-3 font-inter text-xs md:text-sm text-text-muted">
            <span>Frontend Developer</span>
            <span className="w-1 h-1 rounded-full bg-gold"/>
            <span>Angular Specialist</span>
            <span className="w-1 h-1 rounded-full bg-gold"/>
            <span>React Developer</span>
          </div>
          <p className="font-playfair italic text-gold font-semibold text-xs md:text-sm min-h-[10px]">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
          <p className="font-inter text-xs md:text-sm text-text-muted leading-relaxed max-w-md">
          Frontend developer with 2+ years of experience crafting clean, scalable interfaces in Banking & FinTech at TCS. I care about the craft, not just making things work, but making them feel right. Looking to contribute to impactful, user-focused products.</p>

          <div className="flex items-center gap-2 w-fit px-3 py-1.5 md:px-4 md:py-2  rounded-full border border-sage/30 bg-sage/10 font-inter text-xs text-sage-dark">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/>
            Open to Work
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="bg-sage-dark text-white font-inter text-sm px-6 py-2 rounded-full hover:bg-sage transition-all duration-300" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              See Projects
            </button>
            <a
              href="/resume.pdf" 
              download="resume.pdf" 
              className="border border-gold text-center text-gold font-inter text-sm px-6 py-2 rounded-full hover:bg-gold hover:text-white transition-all duration-300">
              Download Resume
            </a>
          </div>
        </div>

       <div className="hidden md:flex relative items-center justify-center bg-bg-secondary">
          {bubbles.map((bubble, index) => (
            <div
              key={index}
              className={`absolute rounded-full ${bubble.color} ${bubble.animation}`}
              style={{
                width: bubble.size,
                height: bubble.size,
                top: bubble.top,
                left: bubble.left,
              }}
            />
          ))}

          <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-sage-dark/50 z-10">
            <img
              src="/logo-pic.jpg"
              alt="Pranjali Sengar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </section>
    </>
  )
}

export default Hero