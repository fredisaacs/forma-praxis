import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How We Work | Forma Praxis',
  description: 'The engagement model: discover, analyze, design, build, optimize, and maintain.',
};

const process = [
  {
    number: '01',
    title: 'Discover',
    description: 'Start with the business context, constraints, bottlenecks, and the decision that actually matters. Gather available context before proposing changes.',
  },
  {
    number: '02',
    title: 'Analyze',
    description: 'Study the current system, evaluate how work flows, and identify the opportunities worth acting on. Document findings rather than assumptions.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Shape a clear proposal, an implementation path, and a practical definition of value. Make trade-offs and dependencies explicit.',
  },
  {
    number: '04',
    title: 'Build',
    description: 'Implement carefully, with clear decisions, documentation, and reliable technical execution. Handover includes knowledge transfer.',
  },
  {
    number: '05',
    title: 'Optimize',
    description: 'Measure what matters, refine the system, and make improvements based on evidence rather than guesswork. Create feedback loops.',
  },
  {
    number: '06',
    title: 'Maintain',
    description: 'Keep the work sustainable through thoughtful upkeep, documentation, and technical continuity. Prevent drift and technical debt.',
  },
];

const engagementTypes = [
  {
    title: 'Discovery Engagement',
    description: 'A defined assessment and written recommendations. Ideal for clarifying the real problem before committing to build.',
    timeline: '2–6 weeks',
  },
  {
    title: 'Project Engagement',
    description: 'Scoped design, development, infrastructure, or optimization work with agreed deliverables and milestones.',
    timeline: '6–16 weeks',
  },
  {
    title: 'Advisory Engagement',
    description: 'Scheduled consultations or technical reviews. Ideal for teams needing ongoing guidance.',
    timeline: 'Ongoing',
  },
  {
    title: 'Maintenance Engagement',
    description: 'A written set of recurring tasks and support boundaries. Keeps systems healthy and dependencies current.',
    timeline: 'Ongoing',
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      <Header />
      <main>
        <div className="page-header">
          <div className="container">
            <p className="eyebrow">Engagement Model</p>
            <h1>From diagnosis to delivery.</h1>
            <p className="lede">
              Every engagement follows a clear six-phase cycle: discover the context, analyze the system, design the solution, build it carefully, optimize based on evidence, and maintain long-term health.
            </p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="section-header narrow">
              <p className="eyebrow">The Process</p>
              <h2>Study the system. Improve the system.</h2>
            </div>

            <div className="process-grid">
              {process.map((step) => (
                <article key={step.number} className="process-card">
                  <span className="process-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container">
            <div className="section-header narrow">
              <p className="eyebrow">Engagement Types</p>
              <h2>Choose the model that fits your need.</h2>
            </div>

            <div className="card-grid">
              {engagementTypes.map((type) => (
                <div key={type.title} className="service-card">
                  <h3>{type.title}</h3>
                  <p>{type.description}</p>
                  <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--forma-border)' }}>
                    <p style={{ margin: 0, fontSize: '0.9rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(62, 70, 80, 0.7)' }}>
                      Typical timeline: {type.timeline}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header narrow">
              <p className="eyebrow">Working Principles</p>
              <h2>How we operate.</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
              <div>
                <h3 style={{ marginBottom: '1rem' }}>Before we start</h3>
                <ul style={{ color: 'rgba(62, 70, 80, 0.82)', lineHeight: 1.8 }}>
                  <li>Agree on objectives, scope, exclusions, and deliverables in writing.</li>
                  <li>Define client responsibilities and access needs.</li>
                  <li>Set clear fee, payment schedule, and engagement timeline.</li>
                  <li>Establish success criteria and how we measure progress.</li>
                </ul>
              </div>

              <div>
                <h3 style={{ marginBottom: '1rem' }}>During the work</h3>
                <ul style={{ color: 'rgba(62, 70, 80, 0.82)', lineHeight: 1.8 }}>
                  <li>Document findings rather than presenting assumptions as facts.</li>
                  <li>Make decisions and trade-offs explicit and inspectable.</li>
                  <li>Communicate regularly and keep scope surprises minimal.</li>
                  <li>Deliver useful documentation so you can act independently.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section">
          <div className="container contact-panel">
            <div>
              <p className="eyebrow">Next Step</p>
              <h2>Let's talk about your situation.</h2>
            </div>
            <div className="contact-actions">
              <a href="mailto:hello@formapraxis.co" className="button button-primary">
                hello@formapraxis.co
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
