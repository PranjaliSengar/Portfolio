function Experience() {
  const exp = [
    {
      company: "Tata Consultancy Services",
      position: "Frontend Developer",
      duration: "2023 — Present · Bangalore, India",
      responsibilities: [
        `Owned core modules and led design and delivery of end-to-end financial workflows, including provider switching, eligibility evaluation, and multi-step user journeys, growing from contributor to sole module owner.`,
        `Designed and built a scalable, config-driven forms engine from scratch supporting complex business logic; eliminated redundant conditional payload logic via a Map-based dynamic builder, reducing defects by 60%.`,
        `Improved application performance by 40% by parallelizing CMS and REST API calls and implementing lazy-loaded modules with OnPush change detection, significantly improving load times for low-bandwidth users.`,
        `Reduced integration defects by 45% by standardizing FE/BE validation contracts and implementing robust error handling with JWT-aware boundaries, improving API resilience across critical flows.`,
        `Contributed to a shared UI component library adopted by 4+ teams; enhanced 10+ components with accessibility compliance, responsive design, and reusable patterns.`,
      ],
    },
    {
      company: "ESCI-HYDERABAD",
      position: "Web Development using Mean Stack",
      duration: "July 2021 — August 2021, India",
      responsibilities: [
        `Trained on the MEAN stack — built a small web application from scratch as part of the program, understanding how Angular, Node.js, Express, and MongoDB work together.`,
        `Developed frontend UI components in Angular and learned how to structure a component-based application.`,
        `Integrated REST APIs to fetch and display dynamic data — first hands-on experience with async JavaScript and HTTP requests.`,
        `Implemented CRUD operations and understood end-to-end data flow from UI to database.`,
      ],
    },
  ];

  return (
    <section
      className="py-8 md:py-10 lg:py-10 px-6 md:px-10 bg-bg-primary"
      id="experience"
    >
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
                    <li
                      key={index}
                      className="flex items-start gap-2 font-inter text-sm text-text-muted leading-relaxed"
                    >
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
  );
}

export default Experience;
