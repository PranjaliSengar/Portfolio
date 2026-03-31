function Skills() {
  const skills = [
    { name: 'Frontend', subSkills: ['Angular', 'React', 'RxJS', 'NgRx', 'Redux', 'Context API', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3/SCSS'] },
    { name: 'Architecture', subSkills: ['Component-Driven Architecture', 'Lazy Loading', 'OnPush Change Detection', 'Feature-Based Modular Structure', 'Code Splitting', 'Performance Optimization'] },
    { name: 'API Integration', subSkills: ['RESTful APIs', 'Authentication & Authorization', 'Axios', 'Angular HttpClient', 'Reactive Forms', 'Schema Validation'] },
    { name: 'Tools & Platforms', subSkills: ['Git', 'GitHub', 'Jira', 'Webpack', 'Vite', 'NPM', 'AWS (S3, CloudFront)', 'Web Accessibility (WCAG)', 'Debugging'] },
  ]

  return (
    
    <section className="pt-12 pb-16 px-10 bg-bg-primary" id="skills">

      <div className="max-w-5xl mx-auto">
        <p className="font-inter text-xs text-sage tracking-widest uppercase mb-3">
          Skills
        </p>
        <h2 className="font-playfair text-4xl font-normal mb-12">
          What I <span className="italic text-sage-dark">work with</span>
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="card card-glow">
              <h3 className="font-inter text-xs text-gold tracking-widest uppercase mb-4">
                {skill.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.subSkills.map((subSkill) => (
                  <span
                    key={subSkill}
                    className="font-inter text-xs text-sage-dark bg-sage/10 border border-sage/20 px-3 py-1 rounded-full hover:bg-sage/20 transition-all duration-200 cursor-default"
                  >
                    {subSkill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Skills