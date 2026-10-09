const services = [
  {
    title: 'Discovery & systems assessment',
    description:
      'Clarify the real problem, understand the current state, and identify the next best move before committing to build.',
    tags: ['Audit', 'Research', 'Roadmap'],
  },
  {
    title: 'Business operations & process design',
    description:
      'Map friction, reduce unnecessary effort, and make day-to-day work more understandable, repeatable, and useful.',
    tags: ['Workflow', 'Ops', 'Efficiency'],
  },
  {
    title: 'Product strategy & MVP planning',
    description:
      'Turn an idea into a realistic scope, clear priorities, and a practical sequence for delivery.',
    tags: ['Strategy', 'Planning', 'Priorities'],
  },
  {
    title: 'Web apps, APIs & integrations',
    description:
      'Build digital capabilities around real needs with thoughtful architecture, implementation, and documentation.',
    tags: ['Next.js', 'Laravel', 'API'],
  },
  {
    title: 'Cloud infrastructure & reliability',
    description:
      'Make deployment, operations, and technical risk easier to reason about and improve.',
    tags: ['Docker', 'AWS', 'Linux'],
  },
  {
    title: 'Brand, web & creative direction',
    description:
      'Create a clearer visual and digital expression of who the business is and what it needs to communicate.',
    tags: ['Brand', 'UX', 'Design'],
  },
];

const process = [
  {
    number: '01',
    title: 'Discover',
    body: 'Start with the business context, constraints, bottlenecks, and the decision that actually matters.',
  },
  {
    number: '02',
    title: 'Analyze',
    body: 'Study the current system, evaluate how work flows, and identify the opportunities worth acting on.',
  },
  {
    number: '03',
    title: 'Design',
    body: 'Shape a clear proposal, an implementation path, and a practical definition of value.',
  },
  {
    number: '04',
    title: 'Build',
    body: 'Implement carefully, with clear decisions, documentation, and reliable technical execution.',
  },
  {
    number: '05',
    title: 'Optimize',
    body: 'Measure what matters, refine the system, and make improvements based on evidence rather than guesswork.',
  },
  {
    number: '06',
    title: 'Maintain',
    body: 'Keep the work sustainable through thoughtful upkeep, documentation, and technical continuity.',
  },
];

const stack = [
  'WordPress',
  'Laravel',
  'Next.js',
  'REST APIs',
  'GraphQL',
  'Docker',
  'AWS',
  'Linux / Unix',
  'Analytics',
  'UX review',
];

export default function HomePage() {
  return (
    <>
      <header className="topbar">
        <div className="container nav-wrap">
          <a href="#home" className="brand" aria-label="Forma Praxis home">
            <span className="brand-mark">FP</span>
            <span className="brand-text">Forma Praxis</span>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#process">How we work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="button button-primary">
            Start a conversation
          </a>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Independent design-engineering practice</p>
              <h1>
                Where imagination becomes <span>infrastructure.</span>
              </h1>
              <p className="lede">
                Forma Praxis helps businesses understand how their systems work, identify
                practical opportunities for improvement, and turn analysis into useful,
                well-executed design and implementation.
              </p>

              <div className="cta-row">
                <a href="#contact" className="button button-primary">
                  Book a discovery call
                </a>
                <a href="#services" className="button button-secondary">
                  View services
                </a>
              </div>

              <div className="mini-stats" aria-label="Company summary">
                <div>
                  <strong>Discovery-first</strong>
                  <span>Study the system before changing it.</span>
                </div>
                <div>
                  <strong>Hands-on</strong>
                  <span>Direct collaboration, practical execution.</span>
                </div>
              </div>
            </div>

            <div className="hero-panel" aria-label="Brand summary">
              <div className="panel-topline">Pastel Industrial / Creative Engineer</div>
              <div className="panel-card panel-card-primary">
                <span className="panel-label">Core idea</span>
                <p>Engineering precision × artistic imagination × practical execution.</p>
              </div>
              <div className="panel-card panel-card-alt">
                <span className="panel-label">Focus</span>
                <ul>
                  <li>Operations & systems</li>
                  <li>Product thinking</li>
                  <li>Brand & digital presence</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">Services</p>
              <h2>Practical support for systems, strategy, and digital work.</h2>
            </div>

            <div className="card-grid">
              {services.map((service) => (
                <article key={service.title} className="service-card">
                  <div className="service-index">Service</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="tag-list" aria-label={`${service.title} categories`}>
                    {service.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section section-muted">
          <div className="container">
            <div className="section-header narrow">
              <p className="eyebrow">How we work</p>
              <h2>From diagnosis to delivery, without losing clarity.</h2>
            </div>

            <div className="process-grid">
              {process.map((step) => (
                <article key={step.number} className="process-card">
                  <span className="process-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">About</p>
              <h2>Independent, direct, and built to make real work easier.</h2>
              <p>
                Forma Praxis is a designer and engineer working across operations,
                systems, and digital experience. The goal is not just aesthetics or code.
                It is to understand what is happening, reduce friction, and create clearer,
                more useful paths forward.
              </p>
              <p>
                The practice blends technical depth with strategic clarity, so clients can
                make sound decisions before they commit to large scope, complex systems, or
                expensive change.
              </p>
            </div>

            <aside className="quote-box">
              <p>
                “The best systems are not the most impressive—they are the ones people can
                understand, trust, and improve.”
              </p>
            </aside>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container">
            <div className="section-header narrow">
              <p className="eyebrow">Technology</p>
              <h2>Tools and systems chosen for practical capability.</h2>
            </div>

            <ul className="tech-list" aria-label="Technology stack">
              {stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-panel">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Start with the problem, not the guess.</h2>
            </div>

            <div className="contact-actions">
              <a href="mailto:hello@formapraxis.co" className="button button-primary">
                hello@formapraxis.co
              </a>
              <a href="#home" className="button button-secondary">
                Back to top
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
