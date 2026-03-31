import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";   
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return(
    <div>
      <Navbar />
       <div className="section-divider" />
      <Hero />
       <div className="section-divider" />
      <Skills />
       <div className="section-divider" />
      <Experience />
       <div className="section-divider" />
      <Projects />
       <div className="section-divider" />
      <Contact />
    </div>
  )
}

export default App;