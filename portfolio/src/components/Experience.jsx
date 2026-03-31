function Experience() {

  const exp = [
    {
      company: 'Tata Consultancy Services',
      position: 'Frontend Developer',
      duration: '2023 — Present · Bangalore, India',
      responsibilities: [
        `Owned Pension Transfer In and Transfer Out, end-to-end pension journeys handling provider switching, multi-step retirement flows, and complex eligibility logic, growing from fresher to sole module owner within 12 months`,
        `Built the Contribution module from scratch, covering employer/employee percentage splits, recurring payments, and one-off contributions, replaced repetitive conditional payload logic with a dynamic Map-based builder, cutting related bugs by 60%`,
        `Diagnosed and resolved a critical member shell load bottleneck, parallelized Magnolia CMS calls with REST APIs, introduced lazy-loaded feature modules and OnPush change detection, reducing initial page load by 40%`,
        `Hardened REST API integrations across pension flows, introduced optional chaining, aligned FE/BE validation schemas, and added JWT-aware error boundaries, reducing integration defects reaching QA by 45%`,
        `Delivered the Breadcrumb component to the shared UI library, adopted across 4+ teams and iteratively enhanced 10+ components with accessibility fixes, responsive improvements, and extended functionality`,
      ]
    },
    {
      company: 'ESCI-HYDERABAD',
      position: 'Web Development using Mean Stack',
      duration: 'July 2021 — August 2021, India',
      responsibilities: [
        `Trained on the MEAN stack — built a small web application from scratch as part of the program, understanding how Angular, Node.js, Express, and MongoDB work together.`,
        `Developed frontend UI components in Angular and learned how to structure a component-based application.`,
        `Integrated REST APIs to fetch and display dynamic data — first hands-on experience with async JavaScript and HTTP requests.`,
        `Implemented CRUD operations and understood end-to-end data flow from UI to database for the first time.`,
]
    }
  ]

  return (
    <section className="pt-12 pb-16 px-10 bg-bg-primary" id="experience">
      <div className="max-w-5xl mx-auto">

        <p className="font-inter text-xs text-sage tracking-widest uppercase mb-3">
          Experience
        </p>
        <h2 className="font-playfair text-4xl font-normal mb-12">
          Where I <span className="italic text-sage-dark">have worked</span>
        </h2>

        {exp.map((item) => (
          <div key={item.company} className="card card-glow mb-6">

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
              <div className="flex flex-col gap-1">
                <p className="font-inter text-xs text-blue-muted tracking-widest uppercase">
                  {item.company}
                </p>
                <h3 className="font-playfair text-xl font-semibold text-text-primary">
                  {item.position}
                </h3>
                <p className="font-inter text-xs text-text-light mb-3">
                  {item.duration}
                </p>
                <ul className="flex flex-col gap-2">
                  {item.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-2 font-inter text-sm text-text-muted leading-relaxed">
                      <span className="text-gold mt-1 flex-shrink-0">·</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}

export default Experience