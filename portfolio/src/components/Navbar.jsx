function Navbar() {
  
  const navLinks = [
    {name: "Skills", href: "#skills"},
    {name: "Experience", href: "#experience"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"}     
  ];
    return (
    <nav className="flex justify-between items-center px-10 py-3 sticky top-0 z-50 border-b backdrop-blur-md bg-bg-primary/50">

      <div className="font-playfair font-semibold text-gold text-lg italic">
        Pranjali <span className="not-italic font-semibold text-sage-dark ">Sengar</span>
      </div>

      <div className="flex items-center gap-2">
        {navLinks.map((link)=>( 
          <a 
          key={link.name} 
          href={link.href} 
          className="font-inter text-text-muted text-sm px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:text-sage-dark hover:scale-110 hover:bg-sage-dark/10">{link.name}</a>  
        ))
        }
      </div>
      <button className="font-inter text-sm font-medium text-gold border border-gold px-6 py-2 rounded-full hover:bg-gold hover:text-white transition-all duration-300">Get in Touch</button>
    </nav>
  )
}

export default Navbar