import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    {name: "Skills", href: "#skills"},
    {name: "Experience", href: "#experience"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"}     
  ];
    return (
    <nav className="flex justify-between items-center px-10 py-3 sticky top-0 z-50 border-b backdrop-blur-md bg-bg-primary/50">

      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="font-playfair font-semibold text-gold text-lg italic hover:cursor-pointer" id="hero">
        Pranjali <span className="not-italic font-semibold text-sage-dark ">Sengar</span>
      </div>

      <div className="hidden md:flex items-center gap-2">
        {navLinks.map((link)=>( 
          <a 
          key={link.name} 
          href={link.href} 
          className="font-inter text-text-muted text-sm px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:text-sage-dark hover:scale-110 hover:bg-sage-dark/10">{link.name}</a>  
        ))
        }
      </div>
      <button 
        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        className="hidden md:block font-inter text-sm font-medium text-gold border border-gold px-6 py-2 rounded-full hover:bg-gold hover:text-white transition-all duration-300">
        Get in Touch
      </button>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-gold text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-bg-primary backdrop-blur-md flex flex-col items-center gap-4 py-6 md:hidden">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-text-muted text-base"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={() => {
              document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
              setIsOpen(false);
            }}
            className="text-gold border border-gold px-5 py-2 rounded-full"
          >
            Get in Touch
          </button>
        </div>
      )}    
    </nav>
  )
}

export default Navbar