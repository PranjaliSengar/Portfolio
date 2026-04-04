function Contact() {
  return (
    <section
      className="py-8 md:py-10 lg:py-10 px-6 md:px-10 bg-bg-primary"
      id="contact"
    >
      <div className="max-w-5xl mx-auto">
        <p className="font-inter text-xs text-sage tracking-widest uppercase mb-3">
          Contact
        </p>
        <h2 className="font-playfair text-4xl font-normal mb-12">
          Let's <span className="italic text-sage-dark">connect</span>
        </h2>

        <div className="card card-glow flex flex-col items-center gap-6 py-14 px-10 text-center">
          <h3 className="font-playfair text-2xl font-normal">
            Open to{" "}
            <span className="italic text-sage-dark font-semibold">
              new opportunities
            </span>
          </h3>

          <p className="font-inter text-sm text-text-muted leading-relaxed max-w-md">
            Looking for companies where I can build something meaningful. If
            that sounds like your team, let's connect.
          </p>

          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="mailto:pranjali@email.com"
              className="font-inter text-sm px-6 py-2 rounded-full bg-sage-dark text-white hover:bg-sage transition-all duration-300"
            >
              ✉ Email me
            </a>
            <a
              href="https://www.linkedin.com/in/pranjali-sengar11"
              target="_blank"
              rel="noreferrer"
              className="font-inter text-sm px-6 py-2 rounded-full border border-sage/30 text-sage-dark hover:bg-sage-dark hover:text-white transition-all duration-300"
            >
              in LinkedIn
            </a>
            <a
              href="https://github.com/PranjaliSengar"
              target="_blank"
              rel="noreferrer"
              className="font-inter text-sm px-6 py-2 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-white transition-all duration-300"
            >
              {} GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
