import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
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
      <footer className="text-center py-6 font-inter text-xs text-text-light border-t border-sage/10">
        Crafted with Ambition by Pranjali Sengar · 2026
      </footer>
    </div>
  );
}

export default App;
